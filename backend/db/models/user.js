'use strict';
const { Validator } = require('sequelize');
const bcrypt = require('bcryptjs');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true, 
        len: [3, 256]
      },
    },
    hashedPassword: {
      type: DataTypes.STRING.BINARY,
      allowNull: false,
      validate: {
        len: [60, 60]
      },
    },
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    reviewCount: DataTypes.INTEGER,
    kelpingSince: DataTypes.DATE,
    profileImg: DataTypes.STRING
  },   
  {
    defaultScope: {
      attributes: {
        exclude: ['hashedPassword', 'email', 'createdAt', 'updatedAt'],
      },
    },
    scopes: {
      currentUser: {
        attributes: { exclude: ['hashedPassword'] },
      },
      loginUser: {
        attributes: {},
      },
    },
  });

  User.associate = function(models) {
    // associations can be defined here
  };

  User.prototype.toSafeObject = function() { // remember, this cannot be an arrow function
  const { id, email } = this; // context will be the User instance
  return { id, email };
  };

  User.prototype.validatePassword = function (password) {
  return bcrypt.compareSync(password, this.hashedPassword.toString());
  };

 User.getCurrentUserById = async function (id) {
 return await User.scope('currentUser').findByPk(id);
 };

 User.login = async function ({ email, password }) {
  const { Op } = require('sequelize');
  const user = await User.scope('loginUser').findOne({
    where: {
        email: email
    },
  });
  if (user && user.validatePassword(password)) {
    return await User.scope('currentUser').findByPk(user.id);
  }
};

User.signup = async function ({ email, password }) {
  const hashedPassword = bcrypt.hashSync(password);
  const user = await User.create({
    email,
    hashedPassword,
  });
  return await User.scope('currentUser').findByPk(user.id);
};


  return User;
};
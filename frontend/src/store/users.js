const LOAD_USERS = 'users/loadUsers';

const loadUsers = (users) => ({
  type: LOAD_USERS,
  users,
});

export const getUsers = () => async (dispatch) => {
  const response = await fetch('/users');
  const users = await response.json();
  dispatch(loadUsers(users));
};

const initialState = {};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_USERS:
      const newState = { ...state };
      action.users.forEach(user => {
        newState[user.id] = user;
      });
      return newState;
    default:
      return state;
  }
};

export default usersReducer;
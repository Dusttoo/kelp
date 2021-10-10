import {  useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addBusiness } from '../../store/businesses';
import './EditBusiness.css'


const EditBusiness = () => {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  
  return (
      <h1>Edit Business Page</h1>
  )

 
};

export default EditBusiness;
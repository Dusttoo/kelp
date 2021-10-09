import {  useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addBusiness } from '../../store/businesses';
import LoginForm from '../LoginFormModal';
import './AddBusiness.css'


const AddBusiness = () => {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [stars, setStars] = useState("");
  const [category, setCategory] = useState("");
  const [isOpen, setIsOpen] = useState('true');
  const [longitude, setLongitude] = useState('');
  const [latitude, setLatitude] = useState('');
  console.log(sessionUser)
  
  if(!sessionUser) {
      <LoginForm/>
  } else {
    

  const reset = () => {
    setName("");
    setAddress("");
    setStars("");
    setCategory("");
    setIsOpen('true')
    setLongitude("");
    setLatitude("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBusiness = {
      name,
      address,
      stars,
      category,
      isOpen,
      longitude,
      latitude
    };

    // 8. Dispatch the return value of the thunk creator instead (the thunk)
    dispatch(addBusiness(newBusiness));
    reset();
  };
  }

  

    return (
        <h1>This is the add business page</h1>
    );

 
};

export default AddBusiness;
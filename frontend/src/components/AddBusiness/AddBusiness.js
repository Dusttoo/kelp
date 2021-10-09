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
  const stars = 0;
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

    dispatch(addBusiness(newBusiness));
    reset();
  };
  }

  

    return (
            <>
            <div>
                <form className="add-biz-form">
                  <ul>
                  </ul>  
                    <label>
                      Business Name
                      <input
                      type='text'
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required/>
                    </label>
                  <label>
                    category
                    <select/>
                  </label>
                  <label>
                    longitude
                    <input
                      type='text'
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required/>
                  </label>
                  <label>
                    latitude
                    <input/>
                  </label>
                  <div>
                    <button type="submit">Sign Up</button>
                  </div>
                </form>
            </div>
      
    </> 
    );

 
};

export default AddBusiness;
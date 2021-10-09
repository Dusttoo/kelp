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
  const [categoryId, setCategory] = useState(1);
  const [longitude, setLongitude] = useState('');
  const [latitude, setLatitude] = useState('');
  const [description, setDescription] = useState('');
  const userId = sessionUser.id;
  // console.log(userId)
  

  const reset = () => {
    setName("");
    setAddress("");
    setCategory(1);
    setLongitude("");
    setLatitude("");
    setDescription('')
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newBusiness = {
      name,
      address,
      categoryId,
      description,
      longitude,
      userId,
      latitude
    };

    console.log(newBusiness)

    dispatch(addBusiness(newBusiness));
    reset();
  };
  

  

    return (
            <>
            <div>
                <form onSubmit={handleSubmit} className="add-biz-form">
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
                      Address
                      <input
                      type='text'
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      required/>
                    </label>
                  <label>
                      Description
                      <input
                      type='text'
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      required/>
                    </label>
                  <label>
                    Category
                    <select
                    value={categoryId}
                    onChange={(e) => setCategory(e.target.value)}
                    required>
                      <option value="">--Please choose a category--</option>
                      <option value={1}>Fast Food</option>
                      <option value={2}>Bar</option>
                      <option value={3}>Education</option>
                      <option value={4}>Gift Shop</option>
                    </select>
                  </label>
                  <label>
                    Longitude
                    <input
                      type='number'
                      step='0.00001'
                      value={longitude}
                      onChange={(e) => setLongitude(e.target.value)}
                      required/>
                  </label>
                  <label>
                    Latitude
                    <input
                      type='number'
                      step='0.00001'
                      value={latitude}
                      onChange={(e) => setLatitude(e.target.value)}
                      required/>
                  </label>
                  <div>
                    <button type="submit">Add your business</button>
                  </div>
                </form>
            </div>
      
    </> 
    );

 
};

export default AddBusiness;
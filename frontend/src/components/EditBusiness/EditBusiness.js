import {  useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateBusiness, getBusinesses } from '../../store/businesses';
import { useParams, Redirect } from 'react-router-dom';

import './EditBusiness.css'


const EditBusiness = () => {
  const dispatch = useDispatch();
  const {id} = useParams();
  const businesses = useSelector(state => state.business)
  const eachBusiness = []
  Object.values(businesses).map((business) => (eachBusiness.push(business)))
  const business = eachBusiness.find(oneBusiness => +id === oneBusiness.id);
  const [name, setName] = useState(business.name);
  const [address, setAddress] = useState(business.address);
  const [categoryId, setCategory] = useState(business.category);
  const [longitude, setLongitude] = useState(business.longitude);
  const [latitude, setLatitude] = useState(business.latitude);
  const [description, setDescription] = useState(business.description);
  const userId = business.userId;

  const updateName = (e) => setName(e.target.value);
  const updateAddress = (e) => setAddress(e.target.value);
  const updateCategory = (e) => setCategory(e.target.value);
  const updateLongitude = (e) => setLongitude(e.target.value);
  const updateLatitude = (e) => setLatitude(e.target.value);
  const updateDescription = (e) => setDescription(e.target.value);


    useEffect(() => {
        dispatch(getBusinesses())
    }, [dispatch, id])

      const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      name,
      address,
      categoryId,
      longitude,
      latitude,
      description,
      userId

    };


    dispatch(updateBusiness(id, payload));
    <Redirect to={`/businesses/${id}`} />

  };


  
  return (
                  <>
            <div className="add-biz-container">
                <h1 className="biz-header">Edit Your Business</h1>
                <form onSubmit={handleSubmit} className="add-biz-form">
                  <ul>
                  </ul>  
                    <label className="biz-label">
                      Business Name:
                      <input
                      className="biz-input"
                      type='text'
                      value={name}
                      onChange={updateName}
                      required/>
                    </label>
                    <label className="biz-label">
                      Address:
                      <input
                      className="biz-input"
                      type='text'
                      value={address}
                      onChange={updateAddress}
                      required/>
                    </label>
                  <label className="biz-label">
                      Description:
                      <input
                      className="biz-input"
                      type='text'
                      value={description}
                      onChange={updateDescription}
                      required/>
                    </label>
                  <label className="biz-label">
                    Category:
                    <select
                    className="biz-label biz-input"
                    value={categoryId}
                    onChange={updateCategory}
                    required>
                      <option value="">--Please choose a category--</option>
                      <option value={1}>Fast Food</option>
                      <option value={2}>Bar</option>
                      <option value={3}>Education</option>
                      <option value={4}>Gift Shop</option>
                    </select>
                  </label>
                  <label className="biz-label">
                    Longitude:
                    <input
                    className="biz-input"
                      type='number'
                      step='0.00001'
                      value={longitude}
                      onChange={updateLongitude}
                      required/>
                  </label>
                  <label className="biz-label">
                    Latitude:
                    <input
                    className="biz-input"
                      type='number'
                      step='0.00001'
                      value={latitude}
                      onChange={updateLatitude}
                      required/>
                  </label>
                  <div>
                    <button type="submit">Edit your business</button>
                  </div>
                </form>
            </div>
            <div className="spacer"></div>
      
    </> 
  )

 
};

export default EditBusiness;
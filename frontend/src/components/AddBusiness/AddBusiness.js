import {  useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addBusiness } from '../../store/businesses';
import { useHistory } from 'react-router';
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
  const [image, setImage] = useState('');
  const [validationErrors, setValidationErrors] = useState([]);


  const history = useHistory();
  const userId = sessionUser.id;

  const validate = () => {
        const validationErrors = [];

        if(name.length < 6) validationErrors.push('Business name must be at least 6 characters');
        if(description.length < 15) validationErrors.push('Description must be at least 15 characters');

        return validationErrors;
    }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newBusiness = {
      name,
      address,
      categoryId,
      description,
      longitude,
      userId,
      latitude,
      image
    };

    const errors = validate();
        if (errors.length > 0) {
            setValidationErrors(errors);
        } else {
            setValidationErrors([]);
            const added = await dispatch(addBusiness(newBusiness));
            if (added) {
              history.push(`/`) 
            }
        }

    
  };
  

  

    return (
            <>
            {validationErrors.length > 0 && (
                <div className="error-container">
                    <p className="error-title"> The following errors were found: </p>
                    <ul className="error-list">
                        {validationErrors.map(error => <li className="error" key={error}>{error}</li>)}
                    </ul>
                </div>
                )} 
            <div className="add-biz-container">
                <h1 className="biz-header">Add A Business</h1>
                
                <form onSubmit={handleSubmit} className="add-biz-form">
                    <label className="biz-label">
                      Business Name:
                      <input
                      className="biz-input"
                      type='text'
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required/>
                    </label>
                    <label className="biz-label">
                      Address:
                      <input
                      className="biz-input"
                      type='text'
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      required/>
                    </label>
                  <label className="biz-label">
                      Description:
                      <input
                      className="biz-input"
                      type='text'
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      required/>
                    </label>
                    <label className="biz-label">
                      Image:
                      <input
                      className="biz-input"
                      type='text'
                      value={image}
                      onChange={(e) => setImage(e.target.value)}
                      required/>
                    </label>
                  <label className="biz-label">
                    Category:
                    <select
                    
                    className="biz-label biz-input"
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
                  <label className="biz-label">
                    Longitude:
                    <input
                    className="biz-input"
                      type='number'
                      step='0.00001'
                      value={longitude}
                      onChange={(e) => setLongitude(e.target.value)}
                      required/>
                  </label>
                  <label className="biz-label">
                    Latitude:
                    <input
                    className="biz-input"
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
            <div className="spacer"></div>
      
    </> 
    );

 
};

export default AddBusiness;
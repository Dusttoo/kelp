import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getBusinesses, getPhotos, removeBusiness } from '../../store/businesses';
import { useParams } from 'react-router';
import { Link, Redirect } from 'react-router-dom';
import './Businesses.css'


const Businesses = () => {
  const {id} = useParams();
  const dispatch = useDispatch();
  const businesses = useSelector((state) => state.business)
  const sessionUser = useSelector(state => state.session.user);

  // const photos = useSelector((state) => state.photo) 
  const eachBusiness = []
  // const eachPhoto = []
  Object.values(businesses).map((business) => (eachBusiness.push(business)))
  // Object.values(photos).map((photo) => eachPhoto.push(photo))
  const business = eachBusiness.find(oneBusiness => +id === oneBusiness.id);
    console.log("Session user: ", sessionUser.id)
  console.log("business id", business.userId)
  
  

  useEffect(() => {
        dispatch(getBusinesses())
        // dispatch(getPhotos())
    }, [dispatch])

    const deleteBusiness = async (e) => {
      e.preventDefault();

      dispatch(removeBusiness(id));
      <Redirect to={`/`} />

    }


    const confirmDelete = async (e) => {
      // e.preventDefault();
      console.log('delete')

      return (
        <>
          <div className="confirmation-box">
            <h3>Are you sure you want to delete?</h3>
            <div>
              <button onClick={(e) => deleteBusiness()}>Yes</button>
              <button>No</button>
            </div>    
          </div>
        </>
      )
    }

 
  


    //trying to get data from getOneBusiness to
  //display on business page

  return (
    <div>
        <div className="biz-info" style={{backgroundImage: 'url(' + business.image + ')'}}>
          <div className="header-left">
              <h1 className="biz-title">{business.name}</h1>
              <div className="header-subinfo">
                <p className="stars">Reviews info</p>
                <p className="category-header">Category</p>
                <p className="hours-header">Hours</p>
              </div>
          </div>
          <div className="header-right">
            <p className="view-photo">See Photos</p>
          </div>
        </div>
        <div className="main">
          <div className="add-buttons">
            <button className="write-review">Write Review</button>
            {sessionUser.id === business.userId ? 
            <div className="your-business">
              <Link to={`/businesses/${id}`} className="edit-business">Edit your Business:</Link> 
              <button onClick={(e) => {confirmDelete();}} 
                className="delete-business">Delete your Business:</button> 
              
            </div> : <span></span>} 
            
          </div>
          <div className="menu-section">
            <h2 className="section-header">Menu</h2>
            <span>Menu stuff</span>
          </div>
          <div className="location-section">
            <div className="location-left-side">
              <h2 className="section-header">Location</h2>
              <div>Map</div>
              <p>{business.address}</p>
            </div>
            <div className="location-right-side">
              <ul>
                <li>Mon:</li>
                <li>Tue:</li>
                <li>Wed:</li>
                <li>Thu:</li>
                <li>Fri:</li>
                <li>Sat:</li>
                <li>Sun</li>
              </ul>
              <button>edit hours</button>
            </div>
          </div>
          <div className="about-section">
              <h2 className="section-header">About the Business</h2>
              <div className="owner">
                <img className="owner-img" src='https://i.imgur.com/qBuSu03.png' alt='spongebob'></img>
                <div className="owner-details">
                  <h4 className="owner-name">Name</h4>
                  <h4 className="owner-title">Business Owner</h4>
                </div>
              </div>
              <p className="about-body">{business.description}</p>
          </div>
          <div className="questions-section">
            <div className="ask-question-div">
              <h2 className="section-header">Ask Bikini Bottom</h2>
              <h3>Ask a question +</h3>
            </div>
            <div className="q-a">
              <span className="question-letter">Q:</span><p className="quesion-asked">This is my question</p>
            </div>
            <div className="q-a">
              <span className="question-letter">A:</span><p className="quesion-asked">This is my answer</p>
            </div>

          </div>
          <div className="review-section">
            <div className="sort-review">
              <input></input>
              <button className="sort">Kelp Sort</button>
            </div>
            <div className="review">
              <div className="reviewer">
                <img className="reviewer-img" src='https://i.imgur.com/5Gg1YPS.png' alt='krabs'></img>
                <div className="reviewer-info">
                  <h4 className="reviewer-name">Name</h4>
                  <h4 className="reviewer-title">Location</h4>
                </div> 
              </div>
              <span className="stars">Stars</span>
              <p className="review-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
              eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim 
              id est laborum.</p>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Businesses;
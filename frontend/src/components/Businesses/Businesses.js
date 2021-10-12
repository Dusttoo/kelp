import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getBusinesses} from '../../store/businesses';
import { getUsers } from '../../store/users';
import { getReviews} from '../../store/reviews'
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import DeleteBusiness from '../DeleteBusiness/DeleteBusiness';
import Reviews from '../Reviews/ReviewList';
import './Businesses.css'
import AddReview from '../AddReview/AddReview';


const Businesses = () => {
  const {id} = useParams();
  const dispatch = useDispatch();
  const businesses = useSelector((state) => state.business);
  const sessionUser = useSelector(state => state.session.user);
  const users = useSelector((state) => state.users);
  const reviews = useSelector((state) => state.reviews)

  const eachUser = [];
  const eachBusiness = [];
  const eachReview = [];
  Object.values(businesses).map((business) => (eachBusiness.push(business)))
  const business = eachBusiness.find(oneBusiness => +id === oneBusiness.id);

  Object.values(users).map((user) => (eachUser.push(user)))
  const user = eachUser.find(oneUser => business.userId === oneUser.id);

  Object.values(reviews).map((review) => (eachReview.push(review)))
  const review = eachReview.find(oneUser => business.userId === oneUser.id);
  
  

  useEffect(() => {
        dispatch(getBusinesses())
        dispatch(getUsers())
        dispatch(getReviews())
    }, [dispatch])



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
            
            {sessionUser.id === business.userId ? 
            <div className="your-business">
              <Link to={`/businesses/${id}`} className="edit-business">Edit your Business:</Link> 
              {/* <button onClick={(e) => {confirmDelete();}} 
                className="delete-business">Delete your Business:</button>  */}
              <DeleteBusiness />
              
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
              <button className="write-review">edit hours</button>
            </div>
          </div>
          <div className="about-section">
              <h2 className="section-header">About the Business</h2>
              <div className="owner">
                <img className="owner-img" src={`${user.profileImg}`} alt={`${user.firstName}`}></img>
                <div className="owner-details">
                  <h4 className="owner-name">{user.firstName} {user.lastName}</h4>
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
            <div className="review-header">
              <AddReview />
              <div className="sort-review">
                <input></input>
                <button className="sort write-review">Kelp Sort</button>
              </div>
            </div>
            <Reviews />
          </div>
        </div>
    </div>
  );
};

export default Businesses;
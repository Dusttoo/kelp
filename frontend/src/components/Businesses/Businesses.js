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
import { getCategories } from '../../store/categories';


const Businesses = () => {
  const {id} = useParams();
  const dispatch = useDispatch();
  const businesses = useSelector((state) => state.business);
  const sessionUser = useSelector(state => state.session.user);
  const users = useSelector((state) => state.users);
  const reviews = useSelector((state) => state.reviews)
  const categories = useSelector((state) => state.categories)
  const hours = useSelector((state) => state.hours)

  const average = arr => arr.reduce((a,b) => a + b, 0) / arr.length;


  const eachUser = [];
  const eachHour = [];
  const eachBusiness = [];
  const eachReview = [];
  const eachCategory = [];
  Object.values(businesses).map((business) => (eachBusiness.push(business)))
  const business = eachBusiness.find(oneBusiness => +id === oneBusiness.id);

  Object.values(categories).map((category) => (eachCategory.push(category)))
  const category = eachCategory.find(oneCategory => oneCategory.id === business.categoryId);


  Object.values(users).map((user) => (eachUser.push(user)))
  const user = eachUser.find(oneUser => business.userId === oneUser.id);

  Object.values(hours).map(hour => eachHour.push(hour));
  const hour = eachHour.find(oneHour => oneHour.businessId === business.id);
  console.log("HOURS", hour)

  Object.values(reviews).map((review) => (eachReview.push(review)))
  const starTotal = []
  eachReview.forEach((review) => {
        if (review.businessId === business.id) {
            starTotal.push(review.stars)
        }
    })

    // useEffect(() => {
    //     dispatch(getBusinesses())
    //     dispatch(getCategories())
    // }, [dispatch])

    const stars = average(starTotal);

    const getStars = () => {

      return (
        <div className="star-rating">
                {[...Array(5)].map((star, rate) => {
                  rate += 1;
                  return (

                    <button
                      type="button"
                      key={rate}
                      className={rate <= stars ? "on" : "off"}
                    >
                      <span className="star">&#9733;</span>
                    </button>
                  );
                })}
              </div>
      )
    }
  
  

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
                  {!stars ? 
                  <p className="stars">No Reviews</p> :
                  getStars()}
                  <p className="category-header">{category.category}</p>
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
          <div className="location-section">
            <div className="location-left-side">
              <h2 className="section-header">Location</h2>
              <div>Map</div>
              <p>{business.address}</p>
            </div>
            <div className="location-right-side">
              <ul className="hours">
                <li>Mon: {hour.monHours}</li>
                <li>Tue: {hour.tueHours}</li>
                <li>Wed: {hour.wedHours}</li>
                <li>Thu: {hour.thurHours}</li>
                <li>Fri: {hour.friHours}</li>
                <li>Sat: {hour.satHours}</li>
                <li>Sun: {hour.sunHours}</li>
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
            </div>
            <Reviews />
          </div>
        </div>
    </div>
  );
};

export default Businesses;
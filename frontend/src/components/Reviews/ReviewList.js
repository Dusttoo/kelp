import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getBusinesses} from '../../store/businesses';
import { getUsers } from '../../store/users';
import { getReviews} from '../../store/reviews'
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import AddReview from '../AddReview/AddReview';


const Reviews = () => {
  const {id} = useParams();
  const dispatch = useDispatch();
  const businesses = useSelector((state) => state.business);
  const sessionUser = useSelector(state => state.session.user);
  const users = useSelector((state) => state.users);
  const reviews = useSelector((state) => state.reviews)

  const eachUser = [];
  const eachBusiness = [];
  const eachReview = [];
  const allReviews = [];
  Object.values(businesses).map((business) => (eachBusiness.push(business)))
  const business = eachBusiness.find(oneBusiness => +id === oneBusiness.id);
  Object.values(users).map((user) => (eachUser.push(user)))
  Object.values(reviews).map((review) => (eachReview.push(review)))
    eachReview.forEach((review) => {
        if (review.businessId === business.id) {
            allReviews.push(review)
        }
    })


  
  

  useEffect(() => {
        dispatch(getBusinesses())
        dispatch(getUsers())
        dispatch(getReviews())
    }, [dispatch])


    const getOwner = (reviewId) => {
        const review = eachReview.find(reviews => reviewId === reviews.id);
        const user = eachUser.find(oneUser => review.userId === oneUser.id);
        return user;
    }

    const getDate = (userId) => {
        let options = { month: 'long'};
        const user = eachUser.find(oneUser => userId === oneUser.id);
        const date = new Date(user.kelpingSince);
        const day = date.getDate();
        const month = new Intl.DateTimeFormat('en-US', options).format(date)
        const year = date.getFullYear();

        return `${month} ${day}, ${year}`
    }

    const noReviews = () => {
        return (
        <div className="empty-reviews">
            <h2>Barnacles! No Reviews Yet.</h2>
            <AddReview />
        </div>
        )
    }

    const getStars = (reviewId) => {
      const review = eachReview.find(reviews => reviewId === reviews.id);

      return (
        <div className="star-rating">
                {[...Array(5)].map((star, rate) => {
                  rate += 1;
                  return (

                    <button
                      type="button"
                      key={rate}
                      className={rate <= review.stars ? "on" : "off"}
                    >
                      <span className="star">&#9733;</span>
                    </button>
                  );
                })}
              </div>
      )
    }





  return (
    <div>
        {allReviews.length === 0 ? 
         noReviews()
        :
            allReviews.map(thisReview => (
                
            <div className="review">
              <div className="reviewer">
                <img className="reviewer-img" src={`${getOwner(thisReview.id).profileImg}`} alt={getOwner(thisReview.id).firstName}></img>
                <div className="reviewer-info">
                  <h4 className="reviewer-name">{getOwner(thisReview.id).firstName} {getOwner(thisReview.id).lastName}</h4>
                  <h4 className="reviewer-title">Kelping Since: {getDate(getOwner(thisReview.id).id)}</h4>
                </div> 
              </div>
              <div>
                <span className="stars">{getStars(thisReview.id)}</span>
                <p className="review-content">{thisReview.review}</p>
              
              </div>
              {sessionUser ? 
              <div>
                {thisReview.userId === sessionUser.id ?
              <div className="edit-delete-review">
                <Link to={`/reviews/${thisReview.id}`} className="edit-business">Edit </Link> 
                <Link to={`/reviews/${thisReview.id}/delete`} className="delete-business">Delete</Link>
              </div> :
              <span></span>
              }
              </div> :
              <span></span>}
              
            </div>
            ))
            }
            
    </div>
  );
};

export default Reviews;
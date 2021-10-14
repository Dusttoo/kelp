import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateReview } from '../../store/reviews';
import { useParams, useHistory } from 'react-router-dom';
import { getReviews } from '../../store/reviews';


const EditReview = () => {
    const dispatch = useDispatch();
    const {id} = useParams();
    const history = useHistory();
    const reviews = useSelector(state => state.reviews);
    const eachReview = [];
    Object.values(reviews).map((review) => eachReview.push(review));
    const thisReview = eachReview.find(thisReview => +id === thisReview.id);
    const [hover, setHover] = useState(0);
    const [rating, setRating] = useState(thisReview.stars);
    const [review, setReview] = useState(thisReview.review);
    const [validationErrors, setValidationErrors] = useState([]);

    const businessId = thisReview.businessId;
    const userId = thisReview.userId;

    useEffect(() => {
        dispatch(getReviews())
    }, [dispatch])

    
    const validate = () => {
        const validationErrors = [];

        if(rating < 1) validationErrors.push('Rating must be greater than zero');
        if(review.length < 5) validationErrors.push('Review must be at least 15 characters');

        return validationErrors;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();


        const payload = {
            rating,
            review,
            businessId,
            userId
        };

        const errors = validate();
        if (errors.length > 0) {
            setValidationErrors(errors);
        } else {
            setValidationErrors([]);

        dispatch(updateReview(id, payload));
        history.push(`/${businessId}`)
            
        };

    }


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
        <div className="rating-box">
            <h1 className="review-title">Add a review</h1>
            <form onSubmit={handleSubmit}>
              <div className="star-rating">
                {[...Array(5)].map((star, rate) => {
                  rate += 1;
                  return (
                    <button
                      type="button"
                      key={rate}
                      className={rate <= (hover || rating) ? "on" : "off"}
                      onClick={() => setRating(rate)}
                      onMouseEnter={() => setHover(rate)}
                      onMouseLeave={() => setHover(rating)}
                    >
                      <span className="star">&#9733;</span>
                    </button>
                  );
                })}
              </div>
              <div className="add-review-content">
                <label className="review-label" >Review:</label>
                        <input
                        placeholder="Enter your review here"
                        className="review-input"
                        type='text'
                        value={review}
                        onChange={(e) => setReview(e.target.value)}
                        required/>
                      
                <button className="submit-review" type="submit">Submit</button>
              </div>
              
            </form>
        </div>
      </>
    )
}

export default EditReview;
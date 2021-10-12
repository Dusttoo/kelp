import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateReview } from '../../store/reviews';
import { useParams, useHistory } from 'react-router-dom';

import './EditReview.css'

const EditReview = () => {
    const dispatch = useDispatch();
    const {id} = useParams();
    const history = useHistory();
    const reviews = useSelector(state => state.reviews);
    const eachReview = [];
    Object.values(reviews).map((review) => eachReview.push(review));
    const thisReview = eachReview.find(thisReview => +id === thisReview.id);
    const [hover, setHover] = useState(thisReview.stars);
    const [rating, setRating] = useState(0);
    const [review, setReview] = useState(thisReview.review);
    const businessId = thisReview.businessId;
    const userId = thisReview.userId;

    


    const handleSubmit = async (e) => {
        e.preventDefault();


        const payload = {
            rating,
            review,
            businessId,
            userId
        };

        const updated = await dispatch(updateReview(id, payload));

        if (updated) {
            history.push(`/${businessId}`)
        }

    }


    return (
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
    )
}

export default EditReview;
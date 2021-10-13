import React from 'react';
import { useDispatch} from 'react-redux';
import {  useHistory } from 'react-router-dom';
import { useState } from 'react';
import './AddReview.css'
import { newReview } from '../../store/reviews';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';

function AddReviewForm() {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    const [review, setReview] = useState('');
    const sessionUser = useSelector(state => state.session.user);
    const [validationErrors, setValidationErrors] = useState([]);

    const userId = sessionUser.id;
    const {id} = useParams();


    const dispatch = useDispatch();
    const history = useHistory();

    const validate = () => {
        const validationErrors = [];

        if(rating < 1) validationErrors.push('Rating must be greater than zero');
        if(review.length < 5) validationErrors.push('Review must be at least 15 characters');

        return validationErrors;
    }

    const handleSubmit = async (e) => {
    e.preventDefault();
    const createdReview = {
      userId,
      businessId: id,
      rating,
      review
    };

    const errors = validate();
        console.log("This is the rating!!!!", rating)

        if (errors.length > 0) {
            setValidationErrors(errors);
        } else {
            setValidationErrors([]);

        const added = await dispatch(newReview(createdReview));
        if (added) {
          history.push(`/`) 
        }};
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

export default AddReviewForm;
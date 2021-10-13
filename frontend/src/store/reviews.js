import { csrfFetch } from './csrf';


const LOAD_REVIEWS = 'businesses/loadReviews';
const ADD_REVIEW = 'businesses/addReview';
const UPDATE_REVIEW = 'businesses/updateReview';
const DELETE_REVIEW = 'businesses/deleteReview';




const loadReviews = (reviews) => ({
  type: LOAD_REVIEWS,
  reviews,
});


const addReview = (review) => ({
  type: ADD_REVIEW,
  review,
});

const updateAReview = (review) => ({
  type: UPDATE_REVIEW,
  review,
});

const deleteReview = (reviewId) => ({
  type: DELETE_REVIEW,
  reviewId,
});


export const getReviews = () => async (dispatch) => {
  const response = await fetch('/api/reviews');
  const reviews = await response.json();
  dispatch(loadReviews(reviews));
  return response
};

export const newReview = (review) => async (dispatch) => {
  const response = await csrfFetch('/api/reviews/add', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(review),
  });


  const newReview = await response.json();
  dispatch(addReview(newReview));
  return newReview
};

export const updateReview = (reviewId, payload) => async (dispatch) => {
  const response = await csrfFetch(`/api/reviews/${reviewId}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });


  if(response.ok) {
  const review = await response.json();
  dispatch(updateAReview(review));
  }
  
};

export const removeReview = (reviewId) => async (dispatch) => {
  const response = await csrfFetch(`/api/reviews/${reviewId}/delete`,{
  method: 'DELETE',
  statusCode: 204,
  headers: {'Content-Type': 'application/json'}
});

  if(response.ok) {
    const review = await response.json();
    dispatch(deleteReview(review.reviewId));
  }
}




const initialState = {};

const reviewReducer = (state = initialState, action) => {
      console.log("Update action", action.review)

  switch (action.type) {
    case LOAD_REVIEWS:
      const newState = { ...state };
      action.reviews.forEach(review => {
        newState[review.id] = review;
      });
      return newState;
    case ADD_REVIEW:
      return { ...state };
    case UPDATE_REVIEW:
      {
      return {
        ...state,
        [action.review]: action.review
      };
    }
    case DELETE_REVIEW:
      const deleteState = {...state}
      delete deleteState[action.reviewId]
      return { ...deleteState };
    default:
      return state;
  }
};

export default reviewReducer;
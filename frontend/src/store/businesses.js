import { csrfFetch } from './csrf';



const LOAD_BUSINESSES = 'businesses/loadBusiness';
const LOAD_PHOTOS = 'photos/loadPhotos';
const ADD_ONE = 'businesses/addOne';
const DELETE_BUSINESS = 'businesses/delete';




const loadBusiness = (businesses) => ({
  type: LOAD_BUSINESSES,
  businesses,
});

const loadPhotos = (photos) => ({
  type: LOAD_PHOTOS,
  photos,
})

const addOneBusiness = (business) => ({
  type: ADD_ONE,
  business,
});

const deleteBusiness = (businessId) => ({
  type: DELETE_BUSINESS,
  businessId,
});


export const getBusinesses = () => async (dispatch) => {
  const response = await fetch('/api/businesses');
  const businesses = await response.json();
  dispatch(loadBusiness(businesses));
  return response
};

export const getPhotos = () => async (dispatch) => {
  const response = await fetch('/api/businesses/photos');
  const photos = await response.json();
  dispatch(loadPhotos(photos));
  return response
}

export const addBusiness = (business) => async (dispatch) => {
  const response = await csrfFetch('/api/businesses/add', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(business),
  });

  console.log("POST RESPONSE:",response)

  const newBusiness = await response.json();
  console.log(newBusiness)
  dispatch(addOneBusiness(newBusiness));
  return newBusiness
};

//edit business
export const updateBusiness = (businessId, payload) => async (dispatch) => {
  const response = await csrfFetch(`/api/businesses/${businessId}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  console.log("POST RESPONSE:",response)

  const business = await response.json();
  console.log(business)
  dispatch(addOneBusiness(business));
  return business
};

export const removeBusiness = (businessId) => async (dispatch) => {
  const response = await csrfFetch(`/api/businesses/${businessId}/delete`,{
  method: 'DELETE',
  statusCode: 204,
  headers: {'Content-Type': 'application/json'}
});

  if(response.ok) {
    const business = await response.json();
    dispatch(deleteBusiness(business.id));
  }
}




const initialState = {};

const businessReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_BUSINESSES:
      const newState = { ...state };
      action.businesses.forEach(business => {
        newState[business.id] = business;
      });
      return newState;
    case LOAD_PHOTOS:
      const photoState = { ...state };
      action.photos.forEach(photo => {
        photoState[photo.id] = photo;
      });
      return photoState;
    case ADD_ONE:
      return { ...state };
    default:
      return state;
  }
};

export default businessReducer;
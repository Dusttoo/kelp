import { csrfFetch } from './csrf';



const LOAD_BUSINESSES = 'businesses/loadBusiness';
const LOAD_PHOTOS = 'photos/loadPhotos';
const ADD_ONE = 'businesses/addOne';




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
const LOAD_BUSINESSES = 'businesses/loadBusiness';
const LOAD_PHOTOS = 'photos/loadPhotos';


const loadBusiness = (businesses) => ({
  type: LOAD_BUSINESSES,
  businesses,
});

const loadPhotos = (photos) => ({
  type: LOAD_PHOTOS,
  photos,
})



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
    default:
      return state;
  }
};

export default businessReducer;
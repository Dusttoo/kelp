const LOAD_BUSINESSES = 'businesses/loadBusiness';
const LOAD_PHOTOS = 'photos/loadPhotos';
const LOAD_ONE_BIZ = 'photos/loadOneBiz';


const loadBusiness = (businesses) => ({
  type: LOAD_BUSINESSES,
  businesses,
});

const loadPhotos = (photos) => ({
  type: LOAD_PHOTOS,
  photos,
})

const loadOneBusiness = (business) => ({
  type: LOAD_ONE_BIZ,
  business,
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

export const getOneBusiness = (id) => async (dispatch) => {
  const response = await fetch(`/api/businesses/${id}`)
  const business = await response.json();

  dispatch(loadOneBusiness(business));
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
    case LOAD_ONE_BIZ:
      const oneBizState = { ...state };
      
    default:
      return state;
  }
};

export default businessReducer;
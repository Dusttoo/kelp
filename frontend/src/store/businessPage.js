const LOAD_ONE_BIZ = 'business/loadOneBiz';
// const LOAD_ONE_PHOTO = 'business/loadOnePhoto';

const loadOneBusiness = (oneBusiness) => ({
  type: LOAD_ONE_BIZ,
  oneBusiness,
})

// export const loadOnePhoto = (onePhoto) => ({
//   type: LOAD_ONE_PHOTO,
//   onePhoto,
// })

export const getOneBusiness = (id) => async (dispatch) => {
  const response = await fetch(`/api/businesses/${id}`)
  const {business} = await response.json();

  dispatch(loadOneBusiness(business));
  return ({business})

}

// export const getOnePhoto = (id) => async (dispatch) => {
//   const response = await fetch(`/api/businesses/${id}/photos`)
  
//   const  {photos}  = await response.json();
//   dispatch(loadOnePhoto(photos));
//   return ({photos})

// }

const initialState = {};

const oneBusinessReducer = (state = initialState, action) => {
    
  switch (action.type) {
    case LOAD_ONE_BIZ:
        const newState = { ...state };
        newState[action.oneBusiness.id] = action.oneBusiness;
      return newState;
    // case LOAD_ONE_PHOTO:
    //     const newPhotoState = { ...state };
    //     action.onePhoto.forEach(photo => {
    //         newPhotoState[photo] = photo;
    //     });
    //   return newPhotoState;
    default:
      return state;
  }
};

export default oneBusinessReducer;
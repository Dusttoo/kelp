import { csrfFetch } from './csrf';

const LOAD_CATEGORY = 'businesses/categories';

const loadCategory = (categories) => ({
  type: LOAD_CATEGORY,
  categories,
})

export const getCategories = () => async (dispatch) => {
  const response = await fetch('/api/categories');
  console.log("Category response: ", response)
  const categories = await response.json();
  dispatch(loadCategory(categories));
  return response
};

const initialState = {};

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_CATEGORY:
      const newState = { ...state };
      action.categories.forEach(category => {
        newState[category.id] = category;
      });
      return newState;
    default:
      return state;
  }
};

export default categoryReducer;
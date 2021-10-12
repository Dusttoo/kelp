const LOAD_HOURS = 'hours/loadHours';

const loadHours = (hours) => ({
  type: LOAD_HOURS,
  hours,
});

export const getHours = () => async (dispatch) => {
  const response = await fetch('/api/businesses/hours');
  const hours = await response.json();
  dispatch(loadHours(hours));
  return response
};

const initialState = {};

const hourReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_HOURS:
      const newState = { ...state };
      action.hours.forEach(hour => {
        newState[hour.id] = hour;
      });
      return newState;
    default:
      return state;
  }
};

export default hourReducer;

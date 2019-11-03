import { generalActions } from '../actions/generalActions';

const initialState = {
  alertActive: false,
  alertType: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case generalActions.SET_ALERT:
      return {
        ...state,
        alertActive: true,
        alertType: action.payload.type,
      };
    case generalActions.CLOSE_ALERT:
      return {
        ...state,
        alertActive: false,
        alertType: null,
      };
    default:
      return state;
  }
};

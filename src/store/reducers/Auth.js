import { authActions } from '../actions';

const initialState = {
  authLoad: false,
  authError: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case authActions.SIGN_IN:
      return { ...state, authLoad: true };
    case authActions.SIGN_IN_FAILURE:
      return {
        ...state,
        authError: action.payload.message,
        authLoad: false,
      };
    case authActions.SIGN_IN_SUCCESS:
      return {
        ...state,
        authError: null,
        authLoad: false,
      };

    case authActions.SIGN_OUT:
      return state;
    case authActions.SIGN_OUT_FAILURE:
      return {
        ...state,
        authError: action.payload.message,
      };
    case authActions.SIGN_OUT_SUCCESS:
      return {
        ...state,
        authError: null,
      };

    default:
      return state;
  }
};

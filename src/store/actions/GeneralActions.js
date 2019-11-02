export const generalActions = {
  SET_ALERT: 'SET_ALERT',
  CLOSE_ALERT: 'CLOSE_ALERT',
};

export const setAlert = ({ type }) => dispatch => {
  dispatch({
    type: generalActions.SET_ALERT,
    payload: { type },
  });
};

export const closeAlert = () => dispatch => {
  dispatch({
    type: generalActions.CLOSE_ALERT,
  });
};

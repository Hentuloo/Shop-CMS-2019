export const orderActions = {
    CHANGE_STATUS: 'CHANGE_STATUS',
    DELETE_ORDER: 'DELETE_ORDER',
};

export const changeStatus = ({ id, status }) => dispatch => {
    dispatch({
        type: orderActions.CHANGE_STATUS,
        payload: { id, status },
    });
};
export const deleteOrder = ({ id }) => dispatch => {
    dispatch({
        type: orderActions.DELETE_ORDER,
        payload: { id },
    });
};

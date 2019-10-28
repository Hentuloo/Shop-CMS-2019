export const OrderActions = {
    CHANGE_STATUS: 'CHANGE_STATUS',
    DELETE_ORDER: 'DELETE_ORDER',
};

export const changeStatus = ({ id, status }) => dispatch => {
    dispatch({
        type: OrderActions.CHANGE_STATUS,
        payload: { id, status },
    });
};
export const deleteOrder = ({ id }) => dispatch => {
    dispatch({
        type: OrderActions.DELETE_ORDER,
        payload: { id },
    });
};

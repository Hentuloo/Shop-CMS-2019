export const orderActions = {
  FETCH_ORDERS: 'FETCH_ORDERS',
  FETCH_ORDERS_SUCCESS: 'FETCH_ORDERS_SUCCESS',
  FETCH_ORDERS_FAILURE: 'FETCH_ORDERS_FAILURE',
  CHANGE_STATUS: 'CHANGE_STATUS',
  CHANGE_STATUS_SUCCESS: 'CHANGE_STATUS_SUCCESS',
  CHANGE_STATUS_FAILURE: 'CHANGE_STATUS_FAILURE',
  DELETE_ORDER: 'DELETE_ORDER',
  DELETE_ORDER_SUCCESS: 'DELETE_ORDER_SUCCESS',
  DELETE_ORDER_FAILURE: 'DELETE_ORDER_FAILURE',
};
export const fetchOrders = () => async (
  dispatch,
  getState,
  { getFirestore },
) => {
  dispatch({
    type: orderActions.FETCH_ORDERS,
  });
  try {
    const firestore = getFirestore();
    const querySnapshot = await firestore.collection('orders').get();

    const orders = querySnapshot.docs.map(doc => ({
      ...doc.data(),
      id: doc.id,
    }));
    dispatch({
      type: orderActions.FETCH_ORDERS_SUCCESS,
      payload: orders,
    });
  } catch (error) {
    dispatch({
      type: orderActions.FETCH_ORDERS_FAILURE,
      payload: error,
    });
  }
};

export const changeStatus = ({ id, status }) => async (
  dispatch,
  getState,
  { getFirestore },
) => {
  dispatch({
    type: orderActions.CHANGE_STATUS,
  });
  try {
    const firestore = getFirestore();
    await firestore
      .collection('orders')
      .doc(id)
      .update({ status });

    dispatch({
      type: orderActions.CHANGE_STATUS_SUCCESS,
      payload: { id, status },
    });
    return true;
  } catch (error) {
    dispatch({
      type: orderActions.CHANGE_STATUS_FAILURE,
      payload: error,
    });
    return false;
  }
};
export const deleteOrder = ({ id }) => async (
  dispatch,
  getState,
  { getFirestore },
) => {
  dispatch({
    type: orderActions.DELETE_ORDER,
  });
  try {
    const firestore = getFirestore();
    await firestore
      .collection('orders')
      .doc(id)
      .delete();

    dispatch({
      type: orderActions.DELETE_ORDER_SUCCESS,
      payload: { id },
    });
    return true;
  } catch (error) {
    dispatch({
      type: orderActions.DELETE_ORDER_FAILURE,
      payload: error,
    });
    return false;
  }
};

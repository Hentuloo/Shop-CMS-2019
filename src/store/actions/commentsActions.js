export const commentsActions = {
  FETCH_COMMENTS: 'FETCH_COMMENTS',
  FETCH_COMMENTS_SUCCESS: 'FETCH_COMMENTS_SUCCESS',
  FETCH_COMMENTS_FAILURE: 'FETCH_COMMENTS_FAILURE',
};

export const fetchComments = () => async (
  dispatch,
  getState,
  { getFirestore },
) => {
  dispatch({
    type: commentsActions.FETCH_COMMENTS,
  });
  try {
    const firestore = getFirestore();
    const querySnapshot = await firestore
      .collection('comments')
      .get();

    const comments = querySnapshot.docs.map(doc => ({
      ...doc.data(),
      id: doc.id,
    }));
    dispatch({
      type: commentsActions.FETCH_COMMENTS_SUCCESS,
      payload: comments,
    });
  } catch (error) {
    dispatch({
      type: commentsActions.FETCH_COMMENTS_FAILURE,
      payload: error,
    });
  }
};

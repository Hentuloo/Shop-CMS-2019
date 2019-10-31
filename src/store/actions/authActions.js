export const authActions = {
    SIGN_IN: 'SIGN_IN',
    SIGN_IN_FAILURE: 'SIGN_IN_FAILURE',
    SIGN_IN_SUCCESS: 'SIGN_IN_SUCCESS',
    SIGN_OUT: 'SIGN_OUT',
    SIGN_OUT_FAILURE: 'SIGN_OUT_FAILURE',
    SIGN_OUT_SUCCESS: 'SIGN_OUT_SUCCESS',
};

export const signIn = ({ login, password }) => (
    dispatch,
    getState,
    { getFirebase },
) => {
    dispatch({
        type: authActions.SIGN_IN,
    });

    // I want to play loading animation at least 1.3s
    setTimeout(async () => {
        try {
            const firebase = getFirebase();
            await firebase.auth().signInWithEmailAndPassword(login, password);
            dispatch({
                type: authActions.SIGN_IN_SUCCESS,
            });
        } catch (error) {
            dispatch({
                type: authActions.SIGN_IN_FAILURE,
                payload: error,
            });
        }
    }, 1300);
};
export const signOut = () => async (dispatch, getState, { getFirebase }) => {
    dispatch({
        type: authActions.SIGN_OUT,
    });
    try {
        const firebase = getFirebase();
        await firebase.auth().signOut();
        dispatch({
            type: authActions.SIGN_OUT_SUCCESS,
        });
    } catch (error) {
        dispatch({
            type: authActions.SIGN_OUT_FAILURE,
            payload: error,
        });
    }
};

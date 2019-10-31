export const productActions = {
    CREATE_PROJECT: 'CREATE_PROJECT',
    EDIT_PROJECT: 'EDIT_PROJECT',
    DELETE_PROJECT: 'DELETE_PROJECT',
};

export const createProject = project => dispatch => {
    dispatch({
        type: productActions.CREATE_PROJECT,
        payload: project,
    });
};
export const editProject = project => dispatch => {
    dispatch({
        type: productActions.EDIT_PROJECT,
        payload: project,
    });
};
export const deleteProject = id => dispatch => {
    dispatch({
        type: productActions.DELETE_PROJECT,
        payload: { id },
    });
};

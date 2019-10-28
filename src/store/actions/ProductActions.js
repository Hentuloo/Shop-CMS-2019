export const ProductActions = {
    CREATE_PROJECT: 'CREATE_PROJECT',
    EDIT_PROJECT: 'EDIT_PROJECT',
    DELETE_PROJECT: 'DELETE_PROJECT',
};

export const createProject = project => dispatch => {
    dispatch({
        type: ProductActions.CREATE_PROJECT,
        payload: project,
    });
};
export const editProject = project => dispatch => {
    dispatch({
        type: ProductActions.EDIT_PROJECT,
        payload: project,
    });
};
export const deleteProject = id => dispatch => {
    dispatch({
        type: ProductActions.DELETE_PROJECT,
        payload: { id },
    });
};

export const Actions = {
    CREATE_PROJECT: 'CREATE_PROJECT',
    EDIT_PROJECT: 'EDIT_PROJECT',
    DELETE_PROJECT: 'DELETE_PROJECT',
};

export const createProject = project => dispatch => {
    dispatch({
        type: Actions.CREATE_PROJECT,
        payload: project,
    });
};
export const editProject = project => dispatch => {
    dispatch({
        type: Actions.EDIT_PROJECT,
        payload: project,
    });
};
export const deleteProject = id => dispatch => {
    dispatch({
        type: Actions.DELETE_PROJECT,
        payload: { id },
    });
};

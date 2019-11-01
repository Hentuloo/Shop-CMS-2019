export const productActions = {
    FETCH_PRODUCTS: 'FETCH_PRODUCTS',
    FETCH_PRODUCTS_SUCCESS: 'FETCH_PRODUCTS_SUCCESS',
    FETCH_PRODUCTS_FAILURE: 'FETCH_PRODUCTS_FAILURE',
    CREATE_PRODUCT: 'CREATE_PRODUCT',
    CREATE_PRODUCT_SUCCESS: 'CREATE_PRODUCT_SUCCESS',
    CREATE_PRODUCT_FAILURE: 'CREATE_PRODUCT_FAILURE',
    EDIT_PRODUCT: 'EDIT_PRODUCT',
    EDIT_PRODUCT_SUCCESS: 'EDIT_PRODUCT_SUCCESS',
    EDIT_PRODUCT_FAILURE: 'EDIT_PRODUCT_FAILURE',
    DELETE_PRODUCT: 'DELETE_PRODUCT',
    DELETE_PRODUCT_SUCCESS: 'DELETE_PRODUCT_SUCCESS',
    DELETE_PRODUCT_FAILURE: 'DELETE_PRODUCT_FAILURE',
};

export const fetchProducts = () => async (
    dispatch,
    getState,
    { getFirestore },
) => {
    dispatch({
        type: productActions.FETCH_PRODUCTS,
    });
    try {
        const firestore = getFirestore();
        const querySnapshot = await firestore.collection('products').get();

        const products = querySnapshot.docs.map(doc => ({
            ...doc.data(),
            id: doc.id,
        }));
        dispatch({
            type: productActions.FETCH_PRODUCTS_SUCCESS,
            payload: products,
        });
    } catch (error) {
        dispatch({
            type: productActions.FETCH_PRODUCTS_FAILURE,
            payload: error,
        });
    }
};
export const createProduct = product => async (
    dispatch,
    getState,
    { getFirestore },
) => {
    dispatch({
        type: productActions.CREATE_PRODUCT,
    });
    try {
        const firestore = getFirestore();
        const newDocument = await firestore.collection('products').add(product);

        dispatch({
            type: productActions.CREATE_PRODUCT_SUCCESS,
            payload: { ...product, id: newDocument.id },
        });

        //Math.floor(Math.random() * 100), //for dummy data
        return true;
    } catch (error) {
        dispatch({
            type: productActions.CREATE_PRODUCT_FAILURE,
            payload: product,
        });
        return false;
    }
};
export const editProduct = product => async (
    dispatch,
    getState,
    { getFirestore },
) => {
    dispatch({
        type: productActions.EDIT_PRODUCT,
    });
    try {
        const firestore = getFirestore();
        await firestore
            .collection('products')
            .doc(product.id)
            .update(product);

        dispatch({
            type: productActions.EDIT_PRODUCT_SUCCESS,
            payload: product,
        });
        return true;
    } catch (error) {
        dispatch({
            type: productActions.EDIT_PRODUCT_FAILURE,
            payload: error,
        });
        return false;
    }
};
export const deleteProduct = id => async (
    dispatch,
    getState,
    { getFirestore },
) => {
    dispatch({
        type: productActions.DELETE_PRODUCT,
    });
    try {
        const firestore = getFirestore();
        await firestore
            .collection('products')
            .doc(id)
            .delete();
        dispatch({
            type: productActions.DELETE_PRODUCT_SUCCESS,
            payload: { id },
        });
    } catch (error) {
        dispatch({
            type: productActions.DELETE_PRODUCT_FAILURE,
            payload: error,
        });
    }
};

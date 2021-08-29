export const ADD_PRODUCT = "ADD_PRODUCT";
export const REMOVE_PRODUCT = "REMOVE_PRODUCT";

export const addProduct = (product) => {
    return {
        type: ADD_PRODUCT,
        payload: product
    }
};

export const removeProduct = (product) => {
    return {
        type: REMOVE_PRODUCT,
        payload: product
    }
};
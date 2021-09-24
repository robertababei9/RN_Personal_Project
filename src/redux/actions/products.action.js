export const ADD_PRODUCT = "ADD_PRODUCT";
export const REMOVE_PRODUCT = "REMOVE_PRODUCT";
export const ADD_TO_FAVORITE = "ADD_TO_FAVORITE";
export const GET_ALL_FAVORITES = "GET_ALL_FAVORITES";
export const DELETE_FAVORITE = "DELETE_FAVORITE";

import FavoriteCategoryAPI from '@src/api/FavoriteCategoryAPI';

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

export const addToFavorite = (productId) => {
    // console.log("productId: ", productId)

    return async (dispatch, getState) => {
        const userId = getState().authReducer.user.id;
        const model = {
            productId: productId,
            userId: userId
        }

        const result = await FavoriteCategoryAPI.Create(model);
        dispatch({type: ADD_TO_FAVORITE, payload: result});
    }
}

export const removeFromFavorite = (id) => {
    // console.log("id: ", id)

    return async (dispatch) => {
        const result = await FavoriteCategoryAPI.Delete(id);
        dispatch({type: DELETE_FAVORITE, payload: id});
    }
}

export const getAllFavoriteProducts = () => {
    return async (dispatch, getState) => {
        const userId = getState().authReducer.user.id;
        let favoriteProducts = await FavoriteCategoryAPI.GetByUserId(userId);
        favoriteProducts = favoriteProducts.map(product => ({
                                id: product._id, 
                                productId: product.SubcategoryId
                            }))

        dispatch({type: GET_ALL_FAVORITES, payload: favoriteProducts});
    }
}
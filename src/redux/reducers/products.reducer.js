
const initialState = {
    selectedProducts: [],
    favoriteProducts: [],
};

export default (state = initialState, action) => {
    switch (action.type) {
        case "ADD_PRODUCT":
            return { 
                ...state,
                selectedProducts: [...state.selectedProducts, action.payload]
            };

        case "REMOVE_PRODUCT":
            let _selectedProducts = [...state.selectedProducts];
            const index = _selectedProducts.findIndex(x => x._id == action.payload);
            if (index > -1)
                _selectedProducts.splice(index, 1);

            return {
                ...state,
                selectedProducts: _selectedProducts
            }
        case "ADD_TO_FAVORITE":
            const model = {
                id: action.payload._id,
                productId: action.payload.SubcategoryId
            }
            return {...state, favoriteProducts: [...state.favoriteProducts, model]}
        
        case "GET_ALL_FAVORITES":
            return {...state, favoriteProducts: action.payload}

        case "DELETE_FAVORITE":
            return {...state, favoriteProducts: state.favoriteProducts.filter(x => x.id != action.payload)}
        default:
            return state;
    }
}
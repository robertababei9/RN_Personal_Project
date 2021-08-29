
const initialState = {
    selectedProducts: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case "ADD_PRODUCT":
            return { 
                ...state,
                selectedProducts: [...state.selectedProducts, action.payload]
            };

        case "REMOVE_PRODUCT":
            let found = false;
            let _selectedProducts = state.selectedProducts.filter(x => found || !(found = x == action.payload));

            return {
                ...state,
                selectedProducts: _selectedProducts
            }

        default:
            return state;
    }
}
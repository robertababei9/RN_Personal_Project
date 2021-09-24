
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
            let _selectedProducts = [...state.selectedProducts];
            const index = _selectedProducts.findIndex(x => x._id == action.payload);
            if (index > -1)
                _selectedProducts.splice(index, 1);

            return {
                ...state,
                selectedProducts: _selectedProducts
            }

        default:
            return state;
    }
}
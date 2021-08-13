
const initialState = {
    user: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case "SET_USER":
            console.log("hello there ", action.payload);
            return { 
                ...state,
                user: action.payload
            };

        default:
            return state;
    }
}
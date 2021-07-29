// capitalizing an object is a convention used to communicate to other devs that this variable should not be modified under any circumstances
const INITIAL_STATE = {
    isSignedIn: null,
    userId: null
};

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'SIGN_IN':
            return { ...state, isSignedIn: true, userId: action.payload };
        case 'SIGN_OUT':
            return { ...state, isSignedIn: false, userId: null };
        default:
            return state;
    }
}; 
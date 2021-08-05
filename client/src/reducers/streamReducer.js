import _ from 'lodash';

// the [] used in the following code is not the use of an array; this syntax is called key interpolaton 
export default (state={}, action) => {
    switch (action.type) {
        case "FETCH_STREAM":
            return { ...state, [action.payload.id]: action.payload };
        case "CREATE_STREAM":
            return { ...state, [action.payload.id]: action.payload }; 
        case "EDIT_STREAM":
            return { ...state, [action.payload.id]: action.payload }; 
        case "DELETE_STREAM":
            return _.omit(state, action.payload);      
        default:
            return state;
    }
} 
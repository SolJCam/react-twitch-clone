import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'; // redux-form comes with it's own reducer
import authReducer from './authReducer';
import streamReducer from './streamReducer';

export default combineReducers({
    auth: authReducer,
    form: formReducer,
    streams: streamReducer
});
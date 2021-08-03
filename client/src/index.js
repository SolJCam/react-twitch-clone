import React from  'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';

import App from './components/App';
import authReducer from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    authReducer,
    composeEnhancers(applyMiddleware())
);

ReactDom.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector('#root')
);
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
// import ReduxPromise from 'redux-promise';
// import { Router, hashHistory } from 'react-router';
import reducers from './reducers';
import { loadState } from './localStorage';

// import routes from './routes';

// const persistedState = loadState();

let store = createStore(reducers);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();

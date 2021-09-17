import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app'
import store from './app/store';
import { Provider } from 'react-redux';
import './index.css';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';

let persistor = persistStore(store);


ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
        <App /> 
        </PersistGate>
    </Provider>,
    document.getElementById('root')
);

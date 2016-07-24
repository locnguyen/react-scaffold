import React from 'react';
import ReactDom from 'react-dom';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import Root from './containers/Root';
import configureStore from './configureStore';
import getRoutes from './routes';


const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);


const root = document.getElementById('root');
ReactDom.render(
    <Root store={store} routes={getRoutes()} history={history} />,
    root
);
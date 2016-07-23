import React from 'react';
import ReactDom from 'react-dom';
import {browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import {syncHistoryWithStore} from 'react-router-redux';

import App from './App';
import configureStore from './configureStore';


const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);



const root = document.getElementById('root');
ReactDom.render(
    <App />,
    root
);
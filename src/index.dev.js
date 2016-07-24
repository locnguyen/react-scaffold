import React from 'react';
import ReactDom from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import Root from './containers/Root';
import configureStore from './configureStore';
import getRoutes from './routes';

const root = document.getElementById('root');
const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

function renderApp(routes) {
    ReactDom.render(
        <AppContainer>
            <Root store={store} routes={routes} history={history} />
        </AppContainer>,
        root
    );
}


if (module.hot) {
    module.hot.accept('./routes', () => {
        const getNextRoutes = require('./routes').default;
        renderApp(getNextRoutes());
    });
}

renderApp(getRoutes());

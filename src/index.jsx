import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';

import MainLayout from './Layout/MainLayout';
import { Global } from './global-style.jsx';
import configureStore, { history } from './store';

const store = configureStore();
import { ConnectedRouter } from 'connected-react-router';

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Global />
            <MainLayout />
        </ConnectedRouter>
    </Provider>,
    document.getElementById("root")
);

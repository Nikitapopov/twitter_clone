import React from 'react';
import ReactDOM from 'react-dom';
import {ThemeProvider} from '@material-ui/core';
import {BrowserRouter as Router} from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import {Provider} from 'react-redux';

import App from './App';
import './index.css';
import {theme} from './theme';
import {store} from './store/store';

ReactDOM.render(
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <Router>
                <App/>
            </Router>
        </ThemeProvider>
    </Provider>,
    document.getElementById('root')
);
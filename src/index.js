import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import tasks from './reducers'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { devToolsEnhancer } from 'redux-devtools-extension';

import injectTapEventPlugin from 'react-tap-event-plugin';

const store = createStore(tasks, devToolsEnhancer());

injectTapEventPlugin();

ReactDOM.render(
    <Provider store={store}>
    <App />
    </Provider>, document.getElementById('root')
);

registerServiceWorker();
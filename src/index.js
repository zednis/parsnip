import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import tasks from './reducers'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(tasks);

ReactDOM.render(
    <Provider store={store}>
    <App />
    </Provider>, document.getElementById('root')
);

registerServiceWorker();
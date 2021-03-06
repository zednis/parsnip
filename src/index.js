import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import tasksReducer from './reducers'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { composeWithDevTools } from 'redux-devtools-extension';
import injectTapEventPlugin from 'react-tap-event-plugin';

// TODO replace with combineReducers
const rootReducer = (state = {}, action) => {

    console.log(state);

    return {
        tasks: tasksReducer(state.tasks, action),
        // projects: projectsReducer(state.projects, action)
    }
};

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);

injectTapEventPlugin();

// if(module.hot) {
//     module.hot.accept('./App', () => {
//         console.log("In ./App hot load");
//         const NextApp = require('./App').default;
//         ReactDOM.render(
//             <Provider store={store}>
//                 <NextApp />
//             </Provider>,
//             document.getElementById('root')
//         );
//     });
//
//     module.hot.accept('./reducers', () => {
//        const nextRootReducer = require('./reducers').default;
//         store.replaceReducer(nextRootReducer);
//     });
// }

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();
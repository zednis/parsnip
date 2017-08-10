/**
 * Created by uzednst on 8/7/17.
 */

import { createStore } from 'redux';

function counterReducer(state = 0, action) {
    if(action.type === 'INCREMENT') {
        return state + 1;
    }
    return state;
}

import { createStore } from 'redux';
const store = createStore(counterReducer);

console.log(store.getState());

store.dispatch({type: 'INCREMENT'});

store.subscribe(() => {
    console.log('current state:', store.getState());
});
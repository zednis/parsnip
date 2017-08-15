import { actions } from '../actions';

export default function tasks(state = { tasks: [] }, action) {

    if(action.type === actions.FETCH_TASKS_SUCCEEDED) {
        return {
            tasks: action.payload.tasks,
            lastUpdated: Date.now()
        }
    }

    if (action.type === actions.CREATE_TASK) {
        return {
            tasks: state.tasks.concat(action.payload),
            lastUpdated: Date.now()
        };
    }

    if (action.type === actions.EDIT_TASK) {
        const { payload } = action;
        return {
            tasks: state.tasks.map(task => {
                if(task.id === payload.id) {
                    return Object.assign({}, task, payload.params);
                }
                return task;
            }),
            lastUpdated: Date.now()
        }
    }

    if (action.type === actions.DELETE_TASK) {
        const { payload } = action;
        return {
            tasks: state.tasks.filter(task => task.id !== payload.id),
            lastUpdated: Date.now()
        }
    }

    return state
}
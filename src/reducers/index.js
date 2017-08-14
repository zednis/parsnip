import { uniqueId, actions } from '../actions';

const mockTasks = [
    {
        id: uniqueId(),
        title: "Learn Redux",
        description: 'The store, actions, and reducers, oh my!',
        status: 'In Progress'
    },
    {
        id: uniqueId(),
        title: "Peace on Earth",
        description: "No big deal",
        status: 'Unstarted'
    },
    {
        id: uniqueId(),
        title: "FUBAR",
        description: "F*cked Up Beyond All Reason",
        status: 'In Progress'
    }
];

export default function tasks(state = { tasks: mockTasks }, action) {

    if (action.type === actions.CREATE_TASK) {
        return { tasks: state.tasks.concat(action.payload)};
    }

    if (action.type === actions.EDIT_TASK) {
        const { payload } = action;
        return {
            tasks: state.tasks.map(task => {
                if(task.id === payload.id) {
                    return Object.assign({}, task, payload.params);
                }
                return task;
            })
        }
    }

    // not sure if this works...
    if (action.type === actions.DELETE_TASK) {
        const { payload } = action;
        return {
            tasks: state.tasks.map(task => {
                if(task.id === payload.id) {
                    return null;
                }
                return task;
            })
        }
    }

    return state
}
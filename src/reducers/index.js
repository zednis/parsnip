import { actions } from '../actions';

const _state = {
    tasks: [],
    isLoading: false,
    error: null
};

export default function tasksReducer(state = _state, action) {

    switch(action.type) {
        case actions.FETCH_TASKS_STARTED: {
            return {
                ...state,
                isLoading: true
            }
        }

        case actions.FETCH_TASKS_FAILED: {
            return {
                ...state,
                isLoading: false,
                error: action.payload.error,
                lastUpdated: Date.now()
            }
        }

        case actions.FETCH_TASKS_SUCCEEDED: {
            return {
                ...state,
                isLoading: false,
                tasks: action.payload.tasks,
                lastUpdated: Date.now()
            }
        }
        case actions.CREATE_TASK_SUCCEEDED: {
            return {
                ...state,
                tasks: state.tasks.concat(action.payload.task),
                lastUpdated: Date.now()
            };
        }
        case actions.EDIT_TASK_SUCCEEDED: {
            const { payload } = action;
            return {
                ...state,
                tasks: state.tasks.map(task => {
                    if(task.id === payload.task.id) {
                        return payload.task;
                    }
                    return task;
                }),
                lastUpdated: Date.now()
            }
        }
        case actions.CREATE_TASK: {
            return {
                tasks: state.tasks.concat(action.payload),
                lastUpdated: Date.now()
            };
        }
        case actions.EDIT_TASK: {
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
        case actions.DELETE_TASK: {
            const { payload } = action;
            return {
                tasks: state.tasks.filter(task => task.id !== payload.id),
                lastUpdated: Date.now()
            }
        }
        case actions.DELETE_TASK_SUCCEEDED: {
            const { payload } = action;
            return {
                tasks: state.tasks.filter(task => task.id !== payload.id),
                lastUpdated: Date.now()
            }
        }
        default: {
            return state;
        }
    }
}
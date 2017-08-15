import * as api from '../api';

let _id = 1;
export function uniqueId() {
    return _id++;
}

export const actions = {
    CREATE_TASK: "CREATE_TASK",
    EDIT_TASK: "EDIT_TASK",
    DELETE_TASK: "DELETE_TASK",
    FETCH_TASKS_SUCCEEDED: "FETCH_TASKS_SUCCEEDED"
};

export function fetchTasks() {
    return dispatch => {
        api.fetchTasks().then(resp => {
            dispatch(fetchTasksSucceeded(resp.data))
        });
    }
}

export function fetchTasksSucceeded(tasks) {
    return {
        type: actions.FETCH_TASKS_SUCCEEDED,
        payload: {
            tasks
        }
    }
}

export function createTask({title, description}) {

    return {
        type: actions.CREATE_TASK,
        payload: {
            id: uniqueId(),
            title: title,
            description: description,
            status: 'Unstarted'
        }
    };
}

export function editTask(id, params={}) {

    return {
        type: actions.EDIT_TASK,
        payload: {
            id,
            params
        }
    };
}

export function deleteTask(id) {
    return {
        type: actions.DELETE_TASK,
        payload: {
            id
        }
    }
}
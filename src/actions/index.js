import * as api from '../api';

let _id = 1;
export function uniqueId() {
    return _id++;
}

export const actions = {
    CREATE_TASK: "CREATE_TASK",
    EDIT_TASK: "EDIT_TASK",
    DELETE_TASK: "DELETE_TASK",
    FETCH_TASKS_STARTED: "FETCH_TASKS_STARTED",
    FETCH_TASKS_SUCCEEDED: "FETCH_TASKS_SUCCEEDED",
    FETCH_TASKS_FAILED: "FETCH_TASKS_FAILED",
    CREATE_TASK_SUCCEEDED: "CREATE_TASK_SUCCEEDED",
    EDIT_TASK_SUCCEEDED: "EDIT_TASK_SUCCEEDED",
    EDIT_TASK_FAILED: "EDIT_TASK_FAILED",
    DELETE_TASK_SUCCEEDED: "DELETE_TASK_SUCCEEDED",
    DELETE_TASK_FAILED: "DELETE_TASK_FAILED"
};

export function fetchTasks() {
    return dispatch => {
        dispatch(fetchTasksStarted());
        api.fetchTasks().then(resp => {
            dispatch(fetchTasksSucceeded(resp.data));
        }).catch(err => {
            dispatch(fetchTasksFailed(err.message));
        });
    }
}

export function fetchTasksFailed(error) {
    return {
        type: actions.FETCH_TASKS_FAILED,
        payload: {
            error
        }
    }
}

export function fetchTasksStarted() {
    return {
        type: actions.FETCH_TASKS_STARTED
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

export function createTaskSucceeded(task) {
    return {
        type: actions.CREATE_TASK_SUCCEEDED,
        payload: {
            task
        }
    }
}

export function editTaskSucceeded(task) {
    return {
        type: actions.EDIT_TASK_SUCCEEDED,
        payload: {
            task
        }
    }
}

export function createTask({title, description, status = "Unstarted"}) {
    return dispatch => {
        api.createTask({title, description, status})
            .then(resp => {
                dispatch(createTaskSucceeded(resp.data));
            });
    }
}

function getTaskById(tasks, id) {
    return tasks.find(task => task.id === id)
}

export function editTask(id, params={}) {
    return (dispatch, getState) => {

        const task = getTaskById(getState().tasks.tasks, id);

        const updatedTask = {
            ...task,
            ...params
        };

        api.editTask(id, updatedTask)
            .then(resp => {
                dispatch(editTaskSucceeded(resp.data));
            }).catch(err => {
                dispatch(editTaskFailed(err.message));
            });
    }
}

export function deleteTask(id) {
    return dispatch => {
        api.deleteTask(id)
            .then(resp => {
                dispatch(deleteTaskSucceeded(id));
                // dispatch(fetchTasks());
            }).catch(err => {
                dispatch(deleteTaskFailed(err.message));
            });
    }
}

export function deleteTaskSucceeded(id) {
    return {
        type: actions.DELETE_TASK_SUCCEEDED,
        payload: {
            id
        }
    }
}

export function deleteTaskFailed(error) {
    return {
        type: actions.DELETE_TASK_FAILED,
        payload: {
            error
        }
    }
}

export function editTaskFailed(error) {
    return {
        type: actions.EDIT_TASK_FAILED,
        payload: {
            error
        }
    }
}
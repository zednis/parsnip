/**
 * Created by uzednst on 8/7/17.
 */

let _id = 1;
export function uniqueId() {
    return _id++;
}

export const actions = {
    CREATE_TASK: "CREATE_TASK",
    EDIT_TASK: "EDIT_TASK",
    DELETE_TASK: "DELETE_TASK"
};

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
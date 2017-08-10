/**
 * Created by uzednst on 8/7/17.
 */

let _id = 1;
export function uniqueId() {
    return _id++;
}

export function createTask({title, description}) {

    return {
        type: 'CREATE_TASK',
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
        type: 'EDIT_TASK',
        payload: {
            id,
            params
        }
    };
}

export function deleteTask(id) {
    return {
        type: 'DELETE_TASK',
        payload: {
            id
        }
    }
}
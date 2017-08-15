import axios from 'axios';

const API_BASE_URL = 'http://localhost:3001';

const client = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json'
    }
});

export function fetchTasks() {
    return client.get('/tasks');
}

// export function getTaskById(id) {
//     return client.get(`/tasks/${id}`)
// }

export function createTask(task) {
    return client.post('/tasks', task);
}

export function editTask(id, params) {
    return client.put(`/tasks/${id}`, params);
}

export function deleteTask(id) {
    return client.delete(`/tasks/${id}`)
}
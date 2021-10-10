//Change with the IP of the server where the React Native Backend Task API is running
const API = 'http://192.168.18.7:4000/tasks';

export const getTasks = async () => {
    const res = await fetch(API);
    return await res.json();
};

export const getTask = async (id) => {
    const res = await fetch(`${API}/${id}`);
    return await res.json();
};

export const saveTask = async (newTask) => {
    const res = await fetch(API, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newTask),
    });
    return await res.json();
};

export const deleteTask = async (id) => {
    const res = await fetch(`${API}/${id}`, {
        method: 'DELETE',
    });
};

export const updateTask = async (id, task) => {
    const res = await fetch(`${API}/${id}`, {
        method: 'PUT',
        headers: {
            accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(task),
    });

    return res;
};

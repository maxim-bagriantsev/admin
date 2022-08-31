import simpleRestDataProvider from 'ra-data-simple-rest';

const baseDataProvider = simpleRestDataProvider('http://localhost:3001/api');

export const dataProvider = {
    ...baseDataProvider,
    banUser: (userId) => {
        return fetch(`/api/user/${userId}/ban`, { method: 'POST' })
            .then(response => response.json());
    },
}
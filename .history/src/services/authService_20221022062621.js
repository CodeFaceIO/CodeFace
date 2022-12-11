import axios from 'axios';


export const register  = (username,email) => {
    return axios.post('/api/register', {
        username,
        email
    })
    .then(response => {
        console.log('Registered')
    })
}

export const login = (username, password) => {

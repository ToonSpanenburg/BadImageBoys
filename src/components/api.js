import axios from 'axios';

export function getData(apiLink)
{
    return axios.get('http://localhost:8080/'+ apiLink)
        .then(response => {
            return response.data;
        })
        .catch(error => {
            throw error;
        });
}

import axios from 'axios';

const Api_data = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com"
})
export const getUsers = async()=>{
    const response = await Api_data.get('/users');
    return response.data
}
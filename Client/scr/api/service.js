import axios from 'axios';
const baseUrl = 'http://localhost:3001/api/persons';
const service = axios.create({
    baseURL: baseUrl,
    timeout: 1000
});
const errorHandler = (error) => {
    console.error(error);
    throw error;
}
const getAllPhones = () => {
    return service.get('/').then(response => response.data).catch(errorHandler);
}
const create = (newPhone => {
    return service.post('/', newPhone).then(response => response.data).catch(errorHandler);
}
)
const update = (id, newPhone) => {
    return service.put(`/${id}`, newPhone).then(response => response.data).catch(errorHandler);
}
const deletePhone = (id) => {
    return service.delete(`/${id}`).then(response => response.data).catch(errorHandler);
}
export default { getAllPhones, create, update, deletePhone };


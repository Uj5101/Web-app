import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-app-burger-35b25.firebaseio.com/'
});

export default instance;
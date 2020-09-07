import axios from 'axios';

const instance = axios.create({
    baseURL: "https://video-app-by-mak.herokuapp.com",
});

export default instance;
import axios from "axios";

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID wO7HzeBEFAapKQu3e0dBmWVxUQjVm5vQypumxx3hvgI'
    }
});


import axios from 'axios';
import { ACCESS_TOKEN, BASE_URL } from '../Settings/configUrl';
import { TOKEN_GHN } from '../Settings/config';
import { getToken } from '../services/adminApi';

export const apiRefreshToken = (endpoint, method = "get", data = null) => {
    return axios({
        method,
        url: `${BASE_URL}/${endpoint}`,
        data,
        headers: {
            "Authorization": `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`
        }
    });
}

export const apiCheckout = (endpoint, method = "get", data = null, token) => {
    return axios({
        method,
        url: `${BASE_URL}/${endpoint}`,
        data
    });
}

export const apiTransport = (endpoint, method = "get", data = null) => {
    return axios({
        method,
        url: endpoint,
        data,
        headers: {
            token: TOKEN_GHN
        }
    });
}

export const callApi = (endpoint, method = "get", data = null) => {
    return axios({
        method,
        url: `${BASE_URL}/${endpoint}`,
        data,
        headers: {
            "Content-Type" : "application/json",
            "Authorization" : "Bearer " + TOKEN_GHN,
        }
    });
}



export const callApiMuti = (endpoint, method = "get", data = null) => {
    return axios({
        method,
        url: `${BASE_URL}/${endpoint}`,
        data,
        headers: {
            "Content-Type" : "multipart/form-data",
            "Authorization" : "Bearer " + TOKEN_GHN,

        }
    });
    
}

export const apiKindOfFilm = (endpoint, method = "get", data = null) => {
    return axios({
        method,
        url: `${BASE_URL}/${endpoint}`,
        data
    });
}
export const callApiText = (endpoint, method = "get", data = null) => {
    return axios({
        method,
        url: `${BASE_URL}/${endpoint}`,
        data,
        headers: {
            "Content-Type" : "application/json, text/plain",
            "Authorization" : "Bearer " + TOKEN_GHN,

        }
    });
    
}
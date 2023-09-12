import axios from "axios";

export const getApiUrl = () => {
    return process.env.REACT_APP_API_URL || "http://localhost:5000"
}

const headers = {
    headers: {
        'content-type': 'text/json',
    }
}

export const makeRequest = {
    get: async (endpoint, params) => {
        const url = getApiUrl() + endpoint
        return await axios.get(url, { params }, headers)
            .then(function (response) {
                return response
            })
            .catch(function (error) {
                console.log(error);
            })
    },
    post: async (endpoint, params) => {
        const url = getApiUrl() + endpoint
        return await axios.post(url, params, headers)
            .then(function (response) {
                return response
            })
            .catch(function (error) {
                console.log(error);
            })
    }
}
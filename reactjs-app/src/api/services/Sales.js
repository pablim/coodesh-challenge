import { makeRequest } from "../Api";

export const getSalesRequest = () => {
    return makeRequest.get('/api/get-data', {}).then((response) => {
        return response.data
    })
}

export const sendSalesFile = (data) => {
    return makeRequest.post('/api/upload-file', data).then((response) => {
        return response.data
    })
}
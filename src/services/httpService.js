import axios from "axios";
import { toast } from 'react-toastify'
import logger from './logService.js'

axios.defaults.baseURL = process.env.REACT_APP_API_URL

axios.interceptors.response.use(null, error => {
    const expectedError = error.response && error.response.status >= 400 && error.response.status < 500;
    if (!expectedError) {
        //unexpected
        logger.log(error)
        toast.error('A unexpected error occurred')
    }
    return Promise.reject(error)
})

function setJwt(jwt) {
    axios.defaults.headers.common['x-auth-token'] = jwt
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete,
    setJwt
}
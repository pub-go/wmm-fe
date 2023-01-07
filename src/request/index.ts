import axios from 'axios'
const env = import.meta.env
const service = axios.create({
    baseURL: env.VITE_BASE_API,
    timeout: 50000,
})
service.interceptors.request.use(
    config => {
        // config.headers['Content-Type'] = 'application/json'
        return config
    },
    err => {
        console.error('[axios][request]', err)
        return Promise.reject(err)
    },
)
service.interceptors.response.use(
    response => {
        console.log('[axios][response]', response)
        return response
    },
    err => {
        console.error('[axios][response]', err)
        return Promise.reject(err)
    }
)
export default service
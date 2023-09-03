import axios from "axios"

axios.defaults.baseURL = 'http://127.0.0.1:8000/api/' //for local env development
//axios.defaults.baseURL = 'http://localhost:8080/api/' //for docker development
axios.defaults.withCredentials = true

const refresh_token = JSON.parse(localStorage.getItem('refresh_token'))

let refresh = false

axios.interceptors.response.use(resp => resp, async error => {

    if(error.response.status === 403 && !refresh){
        refresh = true
        const response = await axios.post('auth/refresh', {'refresh_token': refresh_token})     
        
        if(response.status === 200){
            localStorage.removeItem('access_token');
            localStorage.setItem('access_token', JSON.stringify(response.data.token))
            window.location.reload()
        }
    }

    refresh = false
    return error
})


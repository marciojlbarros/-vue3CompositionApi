import axios from 'axios'

const api = axios.create({
    baseUrl: 'https://economia.awesomeapi.com.br/json'
})

export default {
    all(){
        return api.get('/all')
    },

    listen(codes = []){
        return api.get(`/all/${codes.join()}`)
    }
}
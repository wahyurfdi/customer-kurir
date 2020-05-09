import axios from 'axios'

const Api = axios.create({
    baseURL: 'https://private-dca39-kurirtiketux.apiary-mock.com/'
})

export default Api 
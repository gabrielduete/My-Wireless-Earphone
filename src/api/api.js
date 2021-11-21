import axios from 'axios'

export const apiFones = () => {
    const response = axios.get('https://api-wireless-earphone.herokuapp.com/fones')
    
    return response
}

module.export = { apiFones }
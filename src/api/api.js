import axios from "axios"


const API_URL = import.meta.env.VITE_API_URL


const apiClient = axios.create({
    baseURL:API_URL
})

export const terminalAPI = {
    getQuery : async (message) => 
        apiClient.post('/api/terminal-chat', {message : message})
        
    
}

import api from "../utils/api"
import useFlashMessage from "./useFlashMessage"
import { useState, useEffect } from "react"
import { useNavigate } from 'react-router-dom'


export default function useAuth(){
    const { setFlashMessage} = useFlashMessage()
    const [authenticated, setAuthenticated] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem('token')

        if (token) {
            api.defaults.headers.Autorization =`Bearer ${JSON.parse(token)}`
            setAuthenticated(true)
        }
    }, [])
    
    async function register(user){
        
        let msgText = 'user registered with sucess'
        let msgType = 'success'

        try {
            const data = await api.post('users/register', user).then((response)=>{
                return response.data
            })
            //console.log(data)
            await authUser(data);
        } catch (error) {
            msgText = error.response.data.message
            msgType = "error";
            
        }
        setFlashMessage(msgText,msgType)
    }
    

    async function authUser(data){
        setAuthenticated(true)
        localStorage.setItem('token', JSON.stringify(data.token))
        navigate('/')

    }

    return {authenticated, register}
}
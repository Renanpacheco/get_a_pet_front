//import api from "../utils/api"
/*import { useState, useEffect } from "react"
import { useHistory} from 'react-router-dom'*/
import axios from "axios";

export default function useAuth(){
    
    async function register(user){

        try {
            const data = await axios.post('http://localhost:5000/users/register', user).then((response)=>{
                return response.data
            })
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }
    return {register}
}
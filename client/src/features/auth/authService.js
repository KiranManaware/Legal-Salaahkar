import axios from "axios"
import { API_URL } from "../../config";
const register=async(formData)=>{
    console.log(formData)
    const response=await axios.post(`${API_URL}/api/register`,formData);
    localStorage.setItem('user',JSON.stringify(response.data));
    return response.data
}
const login=async(formData)=>{
    const response=await axios.post(`${API_URL}/api/login`,formData);
    localStorage.setItem('user',JSON.stringify(response.data));
    return response.data
}

const authService={register,login};

export default  authService;
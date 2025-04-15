import axios from "axios"
import { API_URL } from "../../config";

const fetchUsers=async(token)=>{
    const options={
        headers:{
            authorization:`Bearer ${token}`
        }
    }
    const response=await axios(`${API_URL}/api/admin`,options);
    return response.data;
}

export default fetchUsers;
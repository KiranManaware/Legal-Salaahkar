import axios from "axios"
import { API_URL } from "../../config";

const fetchMyLawyer=async(token)=>{
    const options={
        headers:{
            authorization:`Bearer ${token}`
        }
    }
    const response=await axios.get(`${API_URL}/api/mylawyer`,options);
    return response.data;
}

export default fetchMyLawyer;
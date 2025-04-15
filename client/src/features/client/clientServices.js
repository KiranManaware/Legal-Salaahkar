import axios from "axios"
import { API_URL } from "../../config";
const fetchAllLawyers=async(token)=>{
    const options={
        headers:{
            authorization:`Bearer ${token}`
        }
    }
    const response=await axios.get(`${API_URL}/api/client`,options);
    return response.data
}

const fetchLawyer=async(id,token)=>{
    const options={
        headers:{
            authorization:`Bearer ${token}`
        }
    }
    const response=await axios.get(`${API_URL}/api/client/${id}`,options);
    return response.data
}

const apointLawyer=async(id,token)=>{
    const options={
        headers:{
            Authorization:`Bearer ${token}`
        }
    }
    console.log(options)
    const response=await axios.post(`/api/client/${id}`,{},options);
    console.log(response)
    return response.data
}

const clientServices={fetchAllLawyers,fetchLawyer,apointLawyer};

export default clientServices;
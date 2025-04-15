import axios from "axios"
import { API_URL } from "../../config";

const fetchAllClients=async(token)=>{
    const options={
        headers:{
            authorization:`Bearer ${token}`
        }
    }
    const response=await axios.get(`${API_URL}/api/lawyer/clients`,options);
    return response.data
}
const fetchAllComplaints=async(token)=>{
    console.log("Fetch all complaints of lawyer called")
    const options={
        headers:{
            authorization:`Bearer ${token}`
        }
    }
    const response=await axios.get(`${API_URL}/api/lawyer/complaints`,options);
    return response.data
}

const lawyerServices={fetchAllClients,fetchAllComplaints};
export default lawyerServices;
import axios from "axios"

const fetchUsers=async(token)=>{
    const options={
        headers:{
            authorization:`Bearer ${token}`
        }
    }
    const response=await axios('/api/admin',options);
    return response.data;
}

export default fetchUsers;
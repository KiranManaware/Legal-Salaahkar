import axios from "axios"

const fetchMyLawyer=async(token)=>{
    const options={
        headers:{
            authorization:`Bearer ${token}`
        }
    }
    const response=await axios.get('/api/mylawyer',options);
    return response.data;
}

export default fetchMyLawyer;
import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'

const ComplaintComponent = ({complaint}) => {
    const { user } = useSelector((state) => state.auth);
  return (
    <div className="p-6 rounded bg-[#c49603] shadow-xl  flex flex-col">
    <h1 className="text-xl  font-semi-bold" >Client ID </h1>
    <h1 className="text-xl mb-3 font-semi-bold" >{complaint?.user} </h1>
    <p className='text-sm my-2'>Complaint id : {complaint?._id}</p>
    <p className='text-sm my-2'>Casetype : {complaint?.caseType}</p>
    <p className='text-sm my-2'>Description : {complaint?.description}</p>
    <p className='text-sm my-2'>Register Date :{new Date(complaint?.createdAt).toLocaleDateString("en-IN")}</p>
    <p className='text-sm my-2'>Status : {complaint?.status}</p>
    <Link to={`/complaints/${complaint?._id}`} className='w-full text-center bg-black text-white py-2 my-5 text-lg font-semi-bold'>View More</Link>
</div>
  )
}

export default ComplaintComponent 

import React from 'react'
import { Link } from 'react-router-dom'

const LawyerComponent = ({lawyer}) => {
  return (
    <div className="p-6 rounded bg-[#c49603] shadow-xl  flex flex-col">
          <h1 className="text-3xl my-3 font-semi-bold" >{lawyer?.name}</h1>
          <p className='text-sm my-2'>Email id : {lawyer?.email}</p>
          <p className='text-sm my-2'>Lawyer id :{lawyer?._id} </p>
          <p className='text-sm my-2'>Register Date :{new Date(lawyer?.createdAt).toLocaleDateString("en-IN")}</p>
          <Link to={`/lawyers/${lawyer._id}`} className='w-full text-center bg-black text-white py-2 my-5 text-lg font-semi-bold'>View More</Link>
    </div>
  )
}

export default LawyerComponent

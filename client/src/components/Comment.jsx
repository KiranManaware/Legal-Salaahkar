import React from 'react'
import {  useSelector } from "react-redux";

const Comment = ({comment}) => {
    
  const {user}=useSelector(state=>state.auth);
  return (
    <div className={comment?.client===user?.id?"relative my-3 p-5  bg-[#C49603]  ":"relative my-3 p-5  bg-gray-500  "}>
      <div className="absolute top-3  md:right-4  bg-[#001331] rounded-full text-center p-3 text-white font-bold">
       {comment?.client===user?.id?"By me":"By you"}
      </div>
      <h1 className="text-2xl mt-15 md:mt-0 font-bold">{comment?.message}</h1>
      <p className="text-sm text-gray-600 font-semibold my-2">
      Date : 
      {new Date(comment.createdAt).toLocaleDateString("en-IN")}
      </p>
    </div>
  )
}

export default Comment

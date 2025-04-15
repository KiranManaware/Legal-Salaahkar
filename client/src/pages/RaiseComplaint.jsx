import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import BackButton from "../components/BackButton";
import { useNavigate } from "react-router-dom";
import bgImage from "../assets/hero.jpg";
import {toast} from "react-toastify"
import { raiseComplaint } from "../features/complaint/complaintSlice";

const RaiseComplaint = () => {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const[formData,setFormData]=useState(
    {
      caseType:"",
      description:""
    }
  )

  const{caseType,description}=formData;

  const handleChange=(e)=>{
    setFormData({
      ...formData,
      [e.target.name]:e.target.value
    })
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    if ( !description) {
      toast.error("Please Fill All Details");
    } else {
      console.log(formData)
      dispatch(raiseComplaint(formData));
      navigate("/complaints");
    }
  };
  return (
    <div
      className="min-h-screen p-10"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <BackButton url={"/client-dashboard"} />
      <h1 className="text-center text-2xl  font-bold">Describe Your Problem</h1>
      <div className="border border-[#001331] p-5 my-5  ">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="my-2 border border-gray-300 p-3 w-full disabled:bg-sky-100 text-sm"
            value={user?.name}
            disabled
          />
          <input
            type="text"
            className="my-2 border border-gray-300 p-3 w-full disabled:bg-sky-100 text-sm"
            value={user?.email}
            disabled
          />
          <input
            name="caseType"
            value={caseType}
            onChange={handleChange}
            type="text"
            placeholder="Enter the type of your case"
            className="my-2 border border-gray-300 p-3 w-full disabled:bg-sky-100 text-sm"
            
          />

          <textarea
            name="description"
            value={description}
            onChange={handleChange}
            placeholder="Enter description of your problem"
            className="w-full p-4 border border-gray-300 outline-none"
          ></textarea>
          <button className="bg-[#001331] text-lg my-2 text-white font-semibold p-3 text-center w-full hover:bg-white hover:text-black hover:border duration-150">
            Raise Complaint
          </button>
        </form>
      </div>
    </div>
  );
};

export default RaiseComplaint;

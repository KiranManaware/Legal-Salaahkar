import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import bgImage from "../assets/hero.jpg";
import Loader from "../components/Loader";

const LawyerDashboard = () => {
  const { user,isLoading } = useSelector((state) => state.auth);
  const navigate=useNavigate();
  useEffect(()=>{
    if (!user) {
      navigate("/login");
    } else if (user && user.isAdmin === true) {
      navigate("/admin-dashboard");
    } else if(user && user.isLawyer === true){
      navigate('/lawyer-dashboard')
    } else {
      navigate("/client-dashboard");
    }
  },[user])
  if(isLoading){
    return <Loader/>
  }
  return (
    <div
    className="min-h-screen p-10"
    style={{ backgroundImage: `url(${bgImage})` }}
  >
    <h1 className="text-center text-3xl text-[#001331] font-bold">Welcome {user?.name}</h1>
    <div className="border p-5 my-5 flex flex-col">
      
      <Link
        to={"/clients"}
        className="bg-[#001331] text-lg my-2 text-white font-semibold p-4 text-center w-full hover:bg-[#C49603]  hover:text-black hover:border duration-150"
      >
        All Client
      </Link>
      <Link
        to={"/complaints"}
        className="bg-[#001331] text-lg my-2 text-white font-semibold p-4 text-center w-full hover:bg-[#C49603]  hover:text-black hover:border duration-150"
      >
        All Complaints
      </Link>
    </div>
  </div>
  )
}

export default LawyerDashboard

import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import {getMyLawyer} from "../features/relation/relationSlice"
import Loader from '../components/Loader';
import bgImage from "../assets/hero.jpg";


const ClientDashboards = () => {
    const navigate = useNavigate();
    const { user } = useSelector((state) => state.auth);
    const {myLawyer,isLoading,isError,message}=useSelector((state)=> state.relation); 
    const dispatch=useDispatch();
  
    useEffect(() => {
  
      //Get my lawyer
      dispatch(getMyLawyer());
  
      if (!user) {
        navigate("/login");
      } else if (user.isAdmin === true) {
        navigate("/admin-dashboard");
      } else if(user.isLawyer === true){
        navigate('lawyer-dashboard')
      } else {
        navigate("/client-dashboard");
      }
    }, [user]);
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
          {myLawyer  && Object.keys(myLawyer).length > 0 ? (
            <Link
              to={`/lawyers/${myLawyer?._id}`}
              className="bg-[#001331] text-lg my-2 text-white font-semibold p-4 text-center w-full hover:bg-[#C49603]  hover:text-black hover:border duration-150"
            >
              My Lawyer
            </Link>
          ) : (
            <Link
              to={"/lawyers"}
              className="bg-[#001331] text-lg my-2 text-white font-semibold p-4 text-center w-full hover:bg-[#C49603]  hover:text-black hover:border duration-150"
            >
              All Lawyers
            </Link>
          )}
          <Link
            to={"/raise-complaint"}
            className="bg-[#001331] text-lg my-2 text-white font-semibold p-4 text-center w-full hover:bg-[#C49603]  hover:text-black hover:border duration-150"
          >
            Raise Complaint
          </Link>
          <Link
            to={"/complaints"}
            className="bg-[#001331] text-lg my-2 text-white font-semibold p-4 text-center w-full hover:bg-[#C49603]  hover:text-black hover:border duration-150"
          >
            All Complaints
          </Link>
        </div>
      </div>
    );
}

export default ClientDashboards

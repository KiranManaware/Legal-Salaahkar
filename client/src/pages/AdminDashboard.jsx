import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import UserComponent from '../components/UserComponent';
import {getUsers} from '../features/admin/adminSlice'
import bgImage from "../assets/hero.jpg";


const AdminDashboard = () => {
    const { user } = useSelector((state) => state.auth);
    const { users, isLoading, isError, message } = useSelector(
      (state) => state.admin
    );
    const navigate = useNavigate();
    const dispatch = useDispatch();
    useEffect(() => {
      if (!user) {
        navigate("/login");
      } else if (user.isAdmin === true) {
        navigate("/admin-dashboard");
      } else if (user.isLawyer === true) {
        navigate("lawyer-dashboard");
      } else {
        navigate("/client-dashboard");
      }
  
      //Get All Users
      dispatch(getUsers());
  
      if (isError && message) {
        toast.error(message);
      }
    }, [user]);
    return (
      <div
        className="min-h-screen p-10"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <h1 className="text-center text-3xl text-[#001331] font-bold">
          Welcome {user?.name}
        </h1>
        <div className="grid grid-cols-1 my-10 md:grid-cols-2  gap-4">
          {
            users.map((i)=><UserComponent key={i._id} i={i}/>)
          }
        </div>
      </div>
    );
}

export default AdminDashboard

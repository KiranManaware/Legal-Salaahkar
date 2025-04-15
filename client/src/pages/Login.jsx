import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import loginbg from '../assets/login.jpg';
import { loginUser } from "../features/auth/authSlice";
import Loader from "../components/Loader";


const Login = () => {
  const { user, isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.auth
  );

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const { email, password } = formData;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
      dispatch(loginUser(formData));
    // setFormData({
    //   name: "",
    //   email: "",
    //   isLawyer: "",
    //   password: "",
    //   password2: "",
    // });
  };

  useEffect(() => {
    if (!user) {
      navigate("/login");
    } else if (user.isAdmin === true) {
      navigate("/admin-dashboard");
    } else if(user.isLawyer === true){
      navigate("/lawyer-dashboard")
    } else {
      navigate("/client-dashboard");
    }
    if (isError && message) {
      toast.error(message);
    }
  }, [isError, message, user]);

  if (isLoading) {
    return <Loader />;
  }
  return (
    <div className="min-h-screen p-10 bg-[#fff] " style={{ backgroundImage: `url(${loginbg})` }}>
       <h1 className="text-3xl text-[#C49603] font-bold mb-4 text-center">Welcome Back to Legal Salaahkar</h1>
       <p className='text-center'>Please Login To Continue</p>
      <form className='my-10' onSubmit={handleSubmit}>
      <input
            name="email"
            value={email}
            onChange={handleChange}
            type="email"
            placeholder="Enter Email"
            className="my-2 border-2 border-gray-400 p-3 w-full disabled:bg-sky-100 text-sm"
          />
          <input
            name="password"
            value={password}
            onChange={handleChange}
            type="password"
            placeholder="Enter Password"
            className="my-2 border-2 border-gray-400  p-3 w-full disabled:bg-sky-100 text-sm"
          />

          <button className="bg-[#C49603] text-black text-lg my-2  font-semibold p-3 text-center w-full hover:bg-white hover:text-black hover:border duration-150">
            Login
          </button>
      </form>

    </div>
  )
}

export default Login

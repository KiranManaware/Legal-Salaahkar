import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import loginbg from "../assets/login.jpg";
import Loader from "../components/Loader";
import { registerUser } from "../features/auth/authSlice";

const Register = () => {
  const { user, isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.auth
  );

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    isLawyer: "",
    password: "",
    password2: "",
  });

  const { name, email,isLawyer, password, password2 } = formData;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password != password2) {
      console.log("password mismatched")
      toast.error("password Mismatched")
    } else {
      console.log(formData);
      dispatch(registerUser(formData));
    }
    // setFormData({
    //   name: "",
    //   email: "",
    //   isLawyer: "",
    //   password: "",
    //   password2: "",
    // });
  };

  useEffect(() => {
    if (user) {
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
    <div
      className="min-h-screen p-10 bg-[#fff] "
      style={{ backgroundImage: `url(${loginbg})` }}
    >
      <h1 className="text-3xl text-[#C49603] font-bold mb-4 text-center">
        Welcome Back to Legal Salaahkar
      </h1>
      <p className="text-center">Please Register To Continue</p>
      <form onSubmit={handleSubmit} className="my-10">
        <input
          name="name"
          value={name}
          onChange={handleChange}
          type="text"
          placeholder="Enter Name"
          className="my-2 border-2 border-gray-400 p-3 w-full disabled:bg-sky-100 text-sm"
        />
        <input
          name="email"
          value={email}
          onChange={handleChange}
          type="email"
          placeholder="Enter Email"
          className="my-2 border-2 border-gray-400 p-3 w-full disabled:bg-sky-100 text-sm"
        />
        <input
          name="isLawyer"
          value={isLawyer}
          onChange={handleChange}
          type="text"
          placeholder="Are you lawyer if yes fill true otherwise skip it"
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
        <input
          name="password2"
          value={password2}
          onChange={handleChange}
          type="password"
          placeholder="Confirm Password"
          className="my-2 border-2 border-gray-400  p-3 w-full disabled:bg-sky-100 text-sm"
        />

        <button className="bg-[#C49603] text-black text-lg my-2  font-semibold p-3 text-center w-full hover:bg-white hover:text-black hover:border duration-150">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;

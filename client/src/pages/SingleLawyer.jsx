import React, { useEffect, useState } from "react";
import bgImage from "../assets/hero.jpg";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getLawyer, hiredLawyer } from "../features/client/clientSlice";
import { toast } from "react-toastify";
import Loader from "../components/Loader";
import BackButton from "../components/BackButton";

const MyLawyer = () => {
  const { myLawyer } = useSelector((state) => state.relation);
  console.log(myLawyer)
  const { singleLawyer, isLoading, isError, message } = useSelector(
    (state) => state.client
  );
  const { id } = useParams();
  const dispatch = useDispatch();
  console.log(myLawyer)

  const handleApointLawyer = () => {
    // Apoint Lawyer
    dispatch(hiredLawyer(id));
  };

  useEffect(() => {
    // Get a Single Lawyer
    dispatch(getLawyer(id));

    if (isError && message) {
      toast.error(message);
    }
  }, [isError, message, id]);
  if (isLoading) {
    return <Loader />;
  }
  return (
    <div
      className="min-h-screen p-10"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundPosition: "center",
      }}
    >
      <BackButton url={"/client-dashboard"} />
      {myLawyer ? (
        <h1 className="text-black my-5 text-2xl font-bold bg-[#c49603] p-2 rounded text-center">
          Your Personal Lawyer Details
        </h1>
      ) : (
        <h1 className="text-black my-5 text-2xl font-bold bg-[#c49603] p-2 rounded text-center">
          You Can Apoint These Lawyer
        </h1>
      )}
      <div className="bg-[#c49603] p-5 my-5 rounded-sm  shadow-lg">
        <h1 className="text-3xl my-3 font-semi-bold">{singleLawyer.name}</h1>
        <p className="text-sm my-2">Email id : {singleLawyer.email}</p>
        <p className="text-sm my-2">Lawyer id : {singleLawyer._id}</p>
        <p className="text-sm my-2">
          Register Date :{" "}
          {new Date(singleLawyer?.createdAt).toLocaleDateString("en-IN")}
        </p>
        <button
          className={`bg-gray-800 text-white py-2 text-lg w-full text-center my-3`}
        >
          Lawyer Apointed
        </button>
      </div>
    </div>
  );
};

export default MyLawyer;

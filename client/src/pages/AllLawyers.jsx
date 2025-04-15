import React, { useEffect } from "react";
import BackButton from "../components/BackButton";
import bgImage from "../assets/hero.jpg";
import { useDispatch, useSelector } from "react-redux";
import { getAllLawyers } from "../features/client/clientSlice";
import { toast } from "react-toastify";
import Loader from "../components/Loader";
import LawyerComponent from "../components/LawyerComponent";

const AllLawyers = () => {
  const { allLawyers, isError, message, isSuccess, isLoading } = useSelector(
    (state) => state.client
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllLawyers());

    if (isError && message) {
      toast.error(message);
    }
  }, [isError, message]);

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
      <BackButton url={"/lawyers"} />

      <h1 className="text-center text-2xl mb-4  font-bold">All Lawyer</h1>

      <div className="grid grid-cols-1 md:grid-cols-2  gap-4">
        {allLawyers.map((lawyer) => (
          <LawyerComponent key={lawyer?._id} lawyer={lawyer} />
        ))}
      </div>
    </div>
  );
};

export default AllLawyers;

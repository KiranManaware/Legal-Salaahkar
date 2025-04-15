import React, { useEffect } from "react";
import bgImage from "../assets/hero.jpg";
import BackButton from "../components/BackButton";
import ClientComponent from "../components/ClientComponent";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import { getAllClinets } from "../features/lawyer/lawyerSlice";

const AllClients = () => {
  const { allClients, isError, message, isSuccess, isLoading } = useSelector(
    (state) => state.lawyer
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllClinets());

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
      <BackButton url={"/lawyer-dashboard"} />

      <h1 className="text-center text-2xl mb-4  font-bold">All Lawyer</h1>

      <div className="grid grid-cols-1 md:grid-cols-2  gap-4">
        {allClients.map((client) => (
          <ClientComponent key={client?._id} client={client} />
        ))}
      </div>
    </div>
  );
};

export default AllClients;

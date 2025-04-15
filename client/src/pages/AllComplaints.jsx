import React, { useEffect } from "react";
import BackButton from "../components/BackButton";
import bgImage from "../assets/hero.jpg";
import ComplaintComponent from "../components/ComplaintComponent";
import { useDispatch, useSelector } from "react-redux";
import { getComplaints } from "../features/complaint/complaintSlice";
import { toast } from "react-toastify";
import Loader from "../components/Loader";
import { getAllComplaints } from "../features/lawyer/lawyerSlice";

const AllComplaints = () => {
  const { user } = useSelector((state) => state.auth);
  const { allComplaints } = useSelector((state) => state.lawyer);
  const { complaints, isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.complaint
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (user?.isLawyer === true) {
      dispatch(getAllComplaints());
    }
    if (user?.isLawyer === false) {
      dispatch(getComplaints());
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
      className="min-h-screen p-10"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundPosition: "center",
      }}
    >
      {user?.isLawyer === true ? (
        <BackButton url={"/lawyer-dashboard"} />
      ) : (
        <BackButton url={"/client-dashboard"} />
      )}

      <h1 className="text-center text-4xl mb-10  font-bold">All Complaints</h1>

      {
        complaints.length===0?<h3 className="text-center p-3  text-3xl   font-bold">No Complaints Yet !!!!</h3>: <div className="grid grid-cols-1 md:grid-cols-2  gap-4">
        {allComplaints.map((complaint) => (
          <ComplaintComponent key={complaint?._id} complaint={complaint} />
        ))}
        {complaints.map((complaint) => (
          <ComplaintComponent key={complaint?._id} complaint={complaint} />
        ))}
      </div>
      }

     
    </div>
  );
};

export default AllComplaints;

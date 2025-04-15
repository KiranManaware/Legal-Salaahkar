import React, { useEffect, useState } from "react";
import bgImage from "../assets/hero.jpg";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getLawyer, hiredLawyer } from "../features/client/clientSlice";
import { toast } from "react-toastify";
import Loader from "../components/Loader";
import BackButton from "../components/BackButton";
import Confetti from "react-confetti";

const MyLawyer = () => {
  const { myLawyer } = useSelector((state) => state.relation);
  const hasLawyer = myLawyer && Object.keys(myLawyer).length > 0;
  const [showConfetti, setShowConfetti] = useState(false);
  const [isAppointed, setIsAppointed] = useState(false);

  const { singleLawyer, isLoading, isError, message } = useSelector(
    (state) => state.client
  );
  const { id } = useParams();
  const dispatch = useDispatch();

  const handleApointLawyer = () => {
    dispatch(hiredLawyer(id));
    setShowConfetti(true);
    setIsAppointed(true);

    setTimeout(() => {
      setShowConfetti(false);
    }, 5000);
  };

  useEffect(() => {
    dispatch(getLawyer(id));
    if (isError && message) {
      toast.error(message);
    }
  }, [isError, message, id]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      {showConfetti && <Confetti />}
      {isAppointed && (
        <h2 className="text-balck bg-[#c49603] my-3  text-2xl text-center font-bold  p-2 rounded shadow-lg">
          🎉 Congratulations! Your Lawyer has been Appointed! 🎉
        </h2>
      )}

      <div
        className="min-h-screen p-10"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundPosition: "center",
        }}
      >
        <BackButton url={"/client-dashboard"} />
        {hasLawyer ? (
          <h1 className="text-black my-5 text-2xl font-bold bg-[#c49603] p-2 rounded text-center">
            Your Personal Lawyer Details
          </h1>
        ) : (
          <h1 className="text-black my-5 text-2xl font-bold bg-[#c49603] p-2 rounded text-center">
            You Can Appoint This Lawyer
          </h1>
        )}
        <div className="bg-[#c49603] p-5 my-5 rounded-sm shadow-lg">
          <h1 className="text-3xl my-3 font-semibold">{singleLawyer.name}</h1>
          <p className="text-sm my-2">Email id : {singleLawyer.email}</p>
          <p className="text-sm my-2">Lawyer id : {singleLawyer._id}</p>
          <p className="text-sm my-2">
            Register Date:{" "}
            {new Date(singleLawyer?.createdAt).toLocaleDateString("en-IN")}
          </p>
          <button
            className={
              hasLawyer || isAppointed
                ? `bg-gray-800 text-white py-2 text-lg w-full text-center my-3`
                : `bg-black text-white py-2 text-lg w-full text-center my-3`
            }
            onClick={
              !(hasLawyer || isAppointed) ? handleApointLawyer : undefined
            }
            disabled={hasLawyer || isAppointed}
          >
            {hasLawyer || isAppointed ? "Lawyer Appointed" : "Appoint Now"}
          </button>
        </div>
      </div>
    </>
  );
};

export default MyLawyer;

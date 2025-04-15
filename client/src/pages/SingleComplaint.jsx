import React, { useEffect, useState } from "react";
import BackButton from "../components/BackButton";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  closeComplaint,
  getComplaint,
} from "../features/complaint/complaintSlice";
import Loader from "../components/Loader";
import bgImage from "../assets/login.jpg";
import { getComments, raiseComment } from "../features/comment/commentSlice";
import Comment from "../components/Comment";

const SingleComplaint = () => {
  const { singleComplaint, isLoading, isSuccess, isError, message } =
    useSelector((state) => state.complaint);
  const { user } = useSelector((state) => state.auth);
  const { comments } = useSelector((state) => state.comment);

  const dispatch = useDispatch();
  const { id } = useParams();
  const [text, setText] = useState("");

  const handleSumbit = (e) => {
    e.preventDefault();
    dispatch(raiseComment({ id, text }));
    setText("")
  };

  const handleCloseComplaint=(id)=>{
    console.log("closed")
    dispatch(closeComplaint(id))
  }

  useEffect(() => {
    // fetch Complaints
    dispatch(getComplaint(id));

    // fetch Comments
    dispatch(getComments(id));

    if (isError && message) {
      toast.error(message);
    }
  }, [isError, message, id]);

  if (isLoading) {
    return <Loader />;
  }
  return (
    <div
      className="h-auto border border-black  p-10"
      style={{
        backgroundImage: `url(${bgImage})`
      }}
    >
      <BackButton url={"/complaints"} />

      <div className="relative my-5 p-5 border border-gray-400 flex  items-center justify-between md:flex-row flex-col ">
        <div
          className={
            singleComplaint.status === "close"
              ? "absolute top-3 right-3 bg-red-500 rounded-full text-center p-3 text-white font-bold"
              : singleComplaint.status === "pending"
              ? "absolute top-3 right-3 bg-yello-500 rounded-full text-center p-3 text-white font-bold"
              : "absolute top-3 right-3 bg-green-500 rounded-full text-center p-3 text-white font-bold"
          }
        >
          {singleComplaint.status}
        </div>
        <div className="my-15 md:w-1/2 text-center md:text-left">
          <h1 className="text-2xl uppercase font-bold">{singleComplaint.user}</h1>
          <p className="text-sm text-gray-600 font-semibold my-2">
            Description : {singleComplaint.description}
          </p>
          <p className="text-sm text-gray-600 font-semibold my-2">
            Date :{" "}
            {new Date(singleComplaint.createdAt).toLocaleDateString("en-IN")}
          </p>
          <p className="text-sm text-gray-600 font-semibold my-2">
            Complaint ID : {singleComplaint._id}
          </p>
        </div>
      </div>

      <div className="my-4 p-5 border border-gray-400">
        <form onSubmit={handleSumbit}>
          <input
            onChange={(e) => setText(e.target.value)}
            type="text"
            placeholder="Enter Comment"
            className="w-full p-3 border border-gray-400 outline-none"
          />
          <button className="p-2 w-full duration-150 my-2 text-white bg-[#001331] hover:bg-[#C49603]  hover:text-black hover:border hover:border-gray-600  ">
            Add Comment
          </button>
        </form>
        {comments.map((comment) => (
          <Comment key={comment._id} comment={comment} />
        ))}
      </div>

      <button
        className="bg-red-600 p-4 w-full  font-semibold text-white hover:bg-red-500 duration-150 disabled:bg-gray-500 "
        disabled={false === "close"}
        onClick={() => handleCloseComplaint(id)}
      >
        {singleComplaint.status === "open" ? "Close My Complaint" : "closed"}
      </button>
    </div>
  );
};

export default SingleComplaint;

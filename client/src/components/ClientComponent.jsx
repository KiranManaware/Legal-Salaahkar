import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ClientComponents = ({ client }) => {
  const { user } = useSelector((state) => state.auth);
  return (
    <div className="p-6 rounded bg-[#c49603] shadow-xl  flex flex-col">
      <h1 className="text-3xl my-3 font-semi-bold">{client.clientName}</h1>
      <p className="text-sm my-2">Email id : {client.client} </p>
      <p className="text-sm my-2">
        Register Date :{new Date(client?.createdAt).toLocaleDateString("en-IN")}
      </p>
      {user.isLawyer === true ? (
        <p className="text-sm my-2">
        Updated  Date :{new Date(client?.updatedAt).toLocaleDateString("en-IN")}
      </p>
      ) : (
        <Link
          to={`/lawyers/:id`}
          className="w-full text-center bg-black text-white py-2 my-5 text-lg font-semi-bold"
        >
          View More
        </Link>
      )}
    </div>
  );
};

export default ClientComponents;

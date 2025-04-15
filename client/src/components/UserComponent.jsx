import React from "react";

const UserComponent = ({i}) => {
  
  return (
    <div className="p-6 rounded bg-[#c49603] shadow-xl  flex flex-col">
      <h1 className="text-3xl my-3 font-semi-bold">Name : {i?.name}</h1>
      <p className="text-sm my-2">Email id : {i?.email} </p>
      <p className="text-sm my-2">isLawyer : {i?.isLawyer?"Lawyer":"Not Lawyer"}</p>
      <p className="text-sm my-2">
        Register Date :{new Date(i?.createdAt).toLocaleDateString("en-IN")}
      </p>
    </div>
  );
};

export default UserComponent;

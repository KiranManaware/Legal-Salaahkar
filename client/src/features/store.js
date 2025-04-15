import { configureStore } from "@reduxjs/toolkit";
import auth from "./auth/authSlice";
import client from "./client/clientSlice";
import relation from "./relation/relationSlice";
import complaint from "./complaint/complaintSlice";
import comment from "./comment/commentSlice";
import lawyer from "./lawyer/lawyerSlice";
import admin from "./admin/adminSlice";

const store = configureStore({
  reducer: { auth, client, relation, complaint, comment, lawyer, admin },
});

export default store;

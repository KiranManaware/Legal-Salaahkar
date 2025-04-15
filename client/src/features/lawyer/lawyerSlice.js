import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import lawyerServices from "./lawyerServices";

const lawyerSlice = createSlice({
  name: "lawyer",
  initialState: {
    allClients: [],
    SingleClient: {},
    allComplaints: [],
    allComments: [],
    isLoading: false,
    isSuccess: false,
    isError: false,
    message: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllClinets.pending, (state, action) => {
        (state.isLoading = true),
          (state.isSuccess = false),
          (state.isError = false);
      })
      .addCase(getAllClinets.fulfilled, (state, action) => {
        (state.isLoading = false),
          (state.isSuccess = true),
          (state.isError = false),
          (state.allClients = action.payload);
      })
      .addCase(getAllClinets.rejected, (state, action) => {
        (state.isLoading = false),
          (state.isSuccess = false),
          (state.isError = true),
          (state.message = action.payload);
      })
      .addCase(getAllComplaints.pending, (state, action) => {
        (state.isLoading = true),
          (state.isSuccess = false),
          (state.isError = false);
      })
      .addCase(getAllComplaints.fulfilled, (state, action) => {
        (state.isLoading = false),
          (state.isSuccess = true),
          (state.isError = false),
          (state.allComplaints = action.payload);
      })
      .addCase(getAllComplaints.rejected, (state, action) => {
        (state.isLoading = false),
          (state.isSuccess = false),
          (state.isError = true),
          (state.message = action.payload);
      })
  },
});

export default lawyerSlice.reducer;

// thunk for getting all clients
export const getAllClinets = createAsyncThunk(
  "LAWYER/FETCH/CLIENTS",
  async (_, thunkAPI) => {
    const token = thunkAPI.getState().auth.user.token;
    try {
      return lawyerServices.fetchAllClients(token);
    } catch (error) {
      const message = error.response.data.msg;
      return thunkAPI.rejectWithValue(message);
    }
  }
);
export const getAllComplaints = createAsyncThunk(
  "LAWYER/FETCH/COMPLAINTS",
  async (_, thunkAPI) => {
    const token = thunkAPI.getState().auth.user.token;
    try {
      return lawyerServices.fetchAllComplaints(token);
    } catch (error) {
      const message = error.response.data.msg;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

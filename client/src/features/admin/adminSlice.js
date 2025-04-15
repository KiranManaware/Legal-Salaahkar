import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import fetchUsers from "./adminService";

const adminSlice = createSlice({
  name: "admin",
  initialState: {
    users: [],
    isSuccess: false,
    isError: false,
    message: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state, action) => {
        (state.isLoading = true),
          (state.isSuccess = false),
          (state.isError = false);
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        (state.isLoading = false),
          (state.isSuccess = true),
          (state.isError = false),
          (state.users = action.payload);
      })
      .addCase(getUsers.rejected, (state, action) => {
        (state.isLoading = false),
          (state.isSuccess = false),
          (state.isError = true),
          (state.message = action.payload);
      })
      
  },
});

export default adminSlice.reducer;

// All users
export const getUsers = createAsyncThunk("ADMIN/FETCH_USERS", async (_ ,thunkAPI) => {
  const token = thunkAPI.getState().auth.user.token;
  try {
    return fetchUsers(token);
  } catch (error) {
    const message = error.response.data.msg;
    return thunkAPI.rejectWithValue(message);
  }
});


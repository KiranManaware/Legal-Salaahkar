import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import fetchMyLawyer from "./relationService";


const relationSlice = createSlice({
    name: "relation",
    initialState: {
        myLawyer: {},
        isLoading: false,
        isSuccess: false,
        isError: false,
        message: ""
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(getMyLawyer.pending, (state, action) => {
            state.isLoading = true,
            state.isSuccess = false,
            state.isError = false
        })
        .addCase(getMyLawyer.fulfilled, (state, action) => {
            state.isLoading = false,
            state.isSuccess = true,
            state.isError = false,
            state.myLawyer = action.payload
        })
        .addCase(getMyLawyer.rejected, (state, action) => {
            state.isLoading = false,
            state.isSuccess = false,
            state.isError = true,
            state.message = action.payload
        })
    }

})

export default relationSlice.reducer;

// thunk for Mylawyer
export const getMyLawyer = createAsyncThunk('FETCH/MYLAWYER', async (_, thunkAPI) => {

    const token = thunkAPI.getState().auth.user.token;
    try {
        return fetchMyLawyer(token);
    } catch (error) {
        const message = error.response.data.msg;
        return thunkAPI.rejectWithValue(message);
    }
})
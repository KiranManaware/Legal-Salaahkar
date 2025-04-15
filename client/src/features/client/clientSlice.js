import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import clientServices from '../client/clientServices';

const clientSlice=createSlice({
    name:"client",
    initialState:{
        allLawyers:[],
        singleLawyer:{},
        isLoading:false,
        isSuccess:false,
        isError:false,
        message:"",
    },
    reducers:{

    },
    extraReducers:(builder)=>{
        builder
        .addCase(getAllLawyers.pending,(state,action)=>{
            state.isLoading=true,
            state.isSuccess=false,
            state.isError=false
        })
        .addCase(getAllLawyers.fulfilled,(state,action)=>{
            state.isLoading=false,
            state.isSuccess=true,
            state.isError=false,
            state.allLawyers=action.payload
        })
        .addCase(getAllLawyers.rejected,(state,action)=>{
            state.isLoading=false,
            state.isSuccess=false,
            state.isError=true,
            state.message=action.payload
        })
        .addCase(getLawyer.pending,(state,action)=>{
            state.isLoading=true,
            state.isSuccess=false,
            state.isError=false
        })
        .addCase(getLawyer.fulfilled,(state,action)=>{
            state.isLoading=false,
            state.isSuccess=true,
            state.isError=false,
            state.singleLawyer=action.payload
        })
        .addCase(getLawyer.rejected,(state,action)=>{
            state.isLoading=false,
            state.isSuccess=false,
            state.isError=true,
            state.message=action.payload
        })
    }
});
export default  clientSlice.reducer;

// thunk for all Lawyers
export const getAllLawyers=createAsyncThunk('FETCH/LAWYERS',async(_,thunkAPI)=>{

    const token= thunkAPI.getState().auth.user.token;
    try {
        return clientServices.fetchAllLawyers(token);
    } catch (error) {
        const message = error.response.data.msg;
        return thunkAPI.rejectWithValue(message);
    }
})

// thunk for all Lawyers
export const getLawyer=createAsyncThunk('FETCH/LAWYER',async(id,thunkAPI)=>{

    const token= thunkAPI.getState().auth.user.token;
    try {
        return clientServices.fetchLawyer(id,token);
    } catch (error) {
        const message = error.response.data.msg;
        return thunkAPI.rejectWithValue(message);
    }
})

// thunk for all Lawyers
export const hiredLawyer=createAsyncThunk('APOINT/LAWYER',async(id,thunkAPI)=>{

    const token= thunkAPI.getState().auth.user.token;
    try {
        return clientServices.apointLawyer(id,token);
    } catch (error) {
        const message = error.response.data.msg;
        return thunkAPI.rejectWithValue(message);
    }
})
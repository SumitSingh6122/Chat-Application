import {createSlice } from '@reduxjs/toolkit';
const soketSlice=createSlice({
    name:"Socket",
    initialState:{
        socket:null,
    },
    reducers:{
        setsocket:(state,action)=>{
            state.socket=action.payload;
        }
    }
})
export  const{setsocket}=soketSlice.actions;
export default soketSlice.reducer;
import {createSlice} from '@reduxjs/toolkit';
const userSlice=createSlice({
    name:"Users",
    initialState:{
AuthenthecatedUser:null,
Others:null,
ClickUser:null,
OnlineUser:null,
    },
    reducers:{
    setAuthenticatedUser:(state,action)=>{
        state.AuthenthecatedUser=action.payload;
    },
    setOthers:(state,action)=>{
        state.Others=action.payload;
    },
    setClickUser:(state,action)=>{
        state.ClickUser=action.payload;
    },
    setOnlineUser:(state,action)=>{
        state.OnlineUser=action.payload;
    }
    }
})
export const {setAuthenticatedUser,setOthers,setClickUser,setOnlineUser}=userSlice.actions;
export default userSlice.reducer;
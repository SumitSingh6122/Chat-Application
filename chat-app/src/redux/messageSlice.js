import {createSlice} from '@reduxjs/toolkit';
const mesageSlice=createSlice({
    name:"Message",
    initialState:{
        getmessage:null,
    },
    reducers:{
        setgetmessage:(state,action)=>{
            state.getmessage=action.payload;
        }
    }
})
export const {setgetmessage} = mesageSlice.actions;
export default mesageSlice.reducer;
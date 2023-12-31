import { createSlice } from "@reduxjs/toolkit";

 const configSlice = createSlice({
    name:"config",
    initialState:{
        lang:"en",
    },
    reducers:{
        changeLanguage:(state, action)=>{
            state.lang = action.payload; // payload is the language that we want to change to
        },
    },
 });

 export const { changeLanguage } = configSlice.actions;
 export default configSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

let chatSlice=createSlice({


    name:"chat",
    initialState:{
        messages:[{name:"guru",mes:"vutuyvu"}]
    },
    reducers:{
        pushMessage:(state,action)=>{
           if(state.messages.length>100){
            state.messages.pop()
           }

           state.messages.unshift(action.payload)
        }
    }
})
export const {pushMessage}=chatSlice.actions
export default chatSlice.reducer;

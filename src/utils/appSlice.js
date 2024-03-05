import { createSlice } from "@reduxjs/toolkit";

let appSlice=createSlice({
     
    name:"app",
    initialState:{
        isMenuOpen:true,
        searchQuerry:"poetry"
    },
    reducers:{
      
        toggleMenu:(state)=>{
            // state.isMenuOpen=!isMenuOpen
            state.isMenuOpen=!state.isMenuOpen
        },
        closeMenu:(state)=>{
            state.isMenuOpen=false;
        },

        setQuerry:(state,action)=>{
            state.searchQuerry=action.payload;
            // console.log("5",action.payload)
        }

          

    }
})



export const {toggleMenu ,closeMenu,setQuerry} =appSlice.actions
export default appSlice.reducer
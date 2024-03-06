import { configureStore } from "@reduxjs/toolkit"
import appSlice from "./appSlice"
import chatSlice from "./chatSlice"


let store =configureStore({

    reducer:{
        app:appSlice,
        chat:chatSlice

    }
})
export default store
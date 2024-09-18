import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name:"movies",
    initialState :{
        nowplayingMovies:null,
    },

    reducers :{
        addNowPlayingMovies:(state,action)=>{
            state.nowplayingMovies=action.payload
        }
    }
})

export const {addNowPlayingMovies} =moviesSlice.actions
export default moviesSlice.reducer
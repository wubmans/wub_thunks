import { configureStore, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import config from "../config"

const initialState = {
    posts: []
}

const feedSlice = createSlice({
    name: 'feeds',
    initialState,
    reducers: {
        postsFetched: (state, action) => { state.posts = action.payload }, 
        // getFeed: (state) => { console.log('woekie')}
    }
})

export const store = configureStore({
    reducer: feedSlice.reducer,
})


export const { postsFetched } = feedSlice.actions

export const fetchPosts = ()  => { return async (dispatch, getState) => { 
    // const promise = new Promise((resolve, reject) => {
    //     setTimeout(resolve, 1000)
    // })
    // await axios.get(`${API_URL2}/posts`).then((response) => dispatch(postsFetched(response)))

    const response = await axios.get(`${config.url}/posts`)
    dispatch(postsFetched(response))
}}



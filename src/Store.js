import { configureStore, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import config from "../config"

const initialState = {
    posts: [],
    isLoading: false
}

const feedSlice = createSlice({
    name: 'feeds',
    initialState,
    reducers: {
        setLoading: (state, action) => { state.isLoading = action.payload },
        postsFetched: (state, action) => { state.posts = action.payload; }, 
        postFetched: (state, action) => {
            state.posts = [... state.posts, action.payload]
        }
    }
})

export const store = configureStore({
    reducer: feedSlice.reducer,
})


export const { setLoading, postsFetched, postFetched } = feedSlice.actions

export const fetchPosts = async (dispatch, getState) => { 

    dispatch(setLoading(true))

    const response = await axios.get(`${config.url}/posts`)

    dispatch(setLoading(false))

    if (response.data.rows)
        dispatch(postsFetched(response.data.rows))
}

export const fetchPost = (id) => { return async (dispatch, getState) => { 

    dispatch(setLoading(true))

    const response = await axios.get(`${config.url}/posts/${id}`)

    dispatch(setLoading(false))
    if (response.data)
    {
        dispatch(postFetched(response.data))
    }
}}




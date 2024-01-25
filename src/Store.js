import { configureStore, createSlice, combineReducers } from "@reduxjs/toolkit";
import axios from "axios";
import config from "../config"

import { redirect } from "react-router-dom";


const feedSlice = createSlice({
    name: 'feeds',
    initialState: {
        posts: [],
        isLoading: false
    },
    reducers: {
        setLoading: (state, action) => { state.isLoading = action.payload },
        postsFetched: (state, action) => { state.posts = action.payload; }, 
        postFetched: (state, action) => {
            state.posts = [... state.posts.filter(p => p.id != action.payload.id), action.payload]
        }
    }
})

const authSlice = createSlice({
    name: 'auth',
    initialState: JSON.parse(localStorage.getItem("auth")) ?? {},

    reducers : {
        login: (state, action) => { state.user = action.payload.user; state.token = action.payload.token; },
        logout: (state, action) => { state.user = null; state.token = null },
        setToken: (state, action) => { state.token = action.payload }
    }

})

export const store = configureStore({
    reducer: {
        feed: feedSlice.reducer, 
        auth: authSlice.reducer 
    },
})

let prevAuth = null

store.subscribe(() => {

    const currentAuth = store.getState().auth

    if (currentAuth === prevAuth)
    {
        return
    }

    prevAuth = currentAuth
    localStorage.setItem("auth", JSON.stringify(currentAuth))

})


export const { setLoading, postsFetched, postFetched } = feedSlice.actions
export const { setToken, login, logout } = authSlice.actions


/**
 *      my thunks
 */

// why is this not a thunk
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

export const loginThunk = (email, password) => { return async (dispatch, getState) => {

    // console.log(getState())

    // if (getState().user) {
    //     alert('weoifjweiofj')
    //     return
    // }

    const response = await axios.post(`${config.url}/login/`, {
        email: email,
        password: password
    })
    
    let token = response.data.jwt

    console.log(response)

    if (!token)
    {
       // error logging in
    }

    const rr = await axios.get(`${config.url}/me`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

    console.log(rr)

    dispatch(login({ user: rr.data, token: token }))

    console.log('rediractn')
    redirect('/') 
}}

export const signup = (username, email, password) => { return async (dispatch, getState) => {

    dispatch(setLoading(true))

    const response = await axios.post(`${config.url}/signup/`, {
        name: username,
        email: email,
        password: password
    })

    console.log(response)

    if (response.jwt)
    {
        dispatch(setToken(response.jwt))
    }
    dispatch(setLoading(false))

}}

export const createPost = function(title, content) {
    return async function (dispatch, getState) {

        const token = getState().auth.token

        if (!token)
        {
            // error!
            //return
        }

        const response = await axios.post(`${config.url}/posts/`, 
        {
            title: title,
            content: content
        },
       
        {
            headers: { Authorization: `Bearer ${token}` }
        })

        console.log(response)

    }
}


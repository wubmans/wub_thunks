import { useState } from 'react'
import { fetchPosts } from './Store'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

import './App.css'


function App() {
  const posts = useSelector((state) => state.posts) ?? "no posts"

  const dispatch = useDispatch()

  return (
      <div>
        <h2>hoi</h2>
        <pre>
          { JSON.stringify(posts) }
        </pre>
        <button onClick = { () => dispatch(fetchPosts()) } >click me!</button>
      </div>
  )
}

export default App

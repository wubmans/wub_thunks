import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

import { Routes, Route, useParams } from 'react-router-dom'

import HomePage from './HomePage'
import PostPage from './PostPage'


import './App.css'


function App() {



  return (
      <div>
        <Routes>
          <Route path="/" element = { <HomePage /> } />
          <Route path="/posts/:id" element = { <PostPage /> } /> 
        </Routes>
      </div>
  )
}

export default App


import { Routes, Route, useParams } from 'react-router-dom'

import HomePage from './HomePage'
import PostPage from './PostPage'
import CreatePostPage from './CreatePostPage'
import SignupPage from './SignupPage'
import LoginPage from './LoginPage'
import NavBar from './NavBar'


import './App.css'

function App() {

  return (
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element = { <HomePage /> } />
          <Route path="/signup" element = { <SignupPage /> } />
          <Route path="/login" element = { <LoginPage /> } />
          <Route path="/posts/:id" element = { <PostPage /> } /> 
          <Route path="/create_post/" element = { <CreatePostPage /> } /> 
        </Routes>
      </div>
  )
}

export default App

import { useState } from 'react'
import React from 'react'
import './App.css'
import './App.css';
import './Components/Contacts.css'; // Import the CSS files for each component
import './Components/ContactUserCard.css';
import './Components/NavBar.css';
import './Components/Post.css';
import './Components/Posts.css';
import './Components/UserProfile.css';
import "./Components/Contacts"
import UserProfile from './Components/UserProfile'
import Contacts from './Components/Contacts'
import Posts from './Components/Posts'
import NavBar from './Components/NavBar'

function App() {
  return (
    <>
      <div class="parent">
        <NavBar />
        <UserProfile />
        <Contacts />
        <Posts />
      </div>
        
    </>
  )
}

export default App

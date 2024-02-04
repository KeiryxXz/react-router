import React from 'react'
import {Routes, Route, Link } from "react-router-dom";
import "./App.css"

function Description() {
  return (
    <>
      <p>This is the description of the movie.</p><br />
      <p>https://www.youtube.com/watch?v=AwwbhhjQ9Xk</p>
    </>
  )
}

function App() {
  return (
    <div className='Movie-card'>
    <div className='Movie-Image'>
        <img src="/src/assets/maze.jpg" alt="Image" />
    </div>
    <div className='Movie-infos'>
        <h3>The Maze Runner</h3>
        <div className='Movie-descritpion'>
            <Link className='description' to="/more">More</Link>
            <Link className='description' to="/">Reduce</Link>
        </div>
    </div>
    <div className='description'>
    <Routes>
        <Route className='route' path='/more' element={<Description />}>it's just a test</Route>
    </Routes>
    </div>
</div>
  )
}

export default App

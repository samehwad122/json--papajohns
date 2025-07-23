import React from 'react'
import "./Home.css"
import Postars from './Postars/Postars'
import Sections from './Sections/Sections'
function Home() {
  return (
    <div className='Home'>
      <Postars/>
      <Sections/>
    </div>
  )
}

export default Home

import React from 'react'
import './single.css'
import { Link } from 'react-router-dom'
// /post/1
// change post num on edit link
const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <div className="user"></div>
        <div className="info">
          <span>Michael</span>
          <p>Posted 2 days ago</p>
        </div>
        <div className="edit">
          <Link to={'write?edit=2'}>edit</Link>
          <Link to={'write?edit=2'}>delete</Link>
        </div>
      </div>
      <div className="menu">menu</div>
    </div>
  )
}

export default Single
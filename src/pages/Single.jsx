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
          <Link to={'/write?edit=2'}>edit</Link>
          <Link to={'/write?edit=2'}>delete</Link>
        </div>
        <h1>Title</h1>
        <p>hello my name is michael and this is a placeholder for the content that will be in the post. <br />this website will represent my knowledge of javascript html/css and mysql</p>
      </div>
      
      <div className="menu">Menu</div>
    </div>
  )
}

export default Single
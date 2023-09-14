import React from 'react'
import './single.css'
import { Link } from 'react-router-dom'
// /post/1
// change post num on edit link
const posts = [
  {
    id: 1,
    title: "pomp",
    desc: "pomp"},

    {
      id: 1,
      title: "pomp",
      desc: "pomp"}
];
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
        <p className='desc'>hello my name is michael and this is a placeholder for the content that will be in the post. <br />this website will represent my knowledge of javascript html/css and mysql</p>
      </div>
      
      <div className="menu">
        <h1>Other posts you may like</h1>
        {posts.map((post) => (
          <div className="post" key={post.id}>
            <img src={post.img} alt=""/>
            <h2>{post.title}</h2>
            <button>Read More</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Single
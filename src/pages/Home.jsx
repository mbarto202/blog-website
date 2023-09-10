import React from 'react'
import './home.css'
import fall from './fall.jpg'
import { Link } from 'react-router-dom';

const Home = () => {
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
  return (
    <div className='home'>
      <div className='posts'>
        {posts.map((post)=>(
          <div className='post' key={post.id}>
            <div className="img">
              <img src={post.img} alt=""/>
            </div>
            <div className="content">
              <Link className="link" to={`/post/${post.id}`}>
                <h1>{post.title}</h1>
              </Link>
              <p>{post.desc}</p>
              <button>Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home
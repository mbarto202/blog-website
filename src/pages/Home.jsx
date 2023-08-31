import React from 'react'
import './home.css'
import fall from './fall.jpg'

const Home = () => {
  const posts = [
    {
      id: 1,
      title: "pomp",
      desc: "pomp",
      img: fall},

      {
        id: 1,
        title: "pomp",
        desc: "pomp",
        img: fall}
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
              <li className="link" to={`/post/${post.id}`}>
                <h1>{post.title}</h1>
              </li>
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
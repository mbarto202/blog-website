import React from 'react'
import './home.css'

const Home = () => {
  const posts = [
    {
      id: 1,
      title: "pomp",
      desc: "pomp",
      img: ""}
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
              <li to={`/post/${post.id}`}>
                <h1>{post.title}</h1>
                <p>{post.desc}</p>
                <button>Read More</button>
              </li>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home
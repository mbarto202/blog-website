import React, { useState } from 'react'
import './write.css'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Write = () => {const [value, setValue] = useState('');
console.log(value);
//49
  return (
    <div className="write">
      <div className="content">
        <input className='title' type="text" placeholder='Title' />
        <div className="editorContainer">
          <ReactQuill className='editor' theme='snow' value={value} onChange={setValue}></ReactQuill>
        </div>
      </div>
      <div className="menu">
        <div className="item">
          <h1>Publilsh</h1>
          <span>
            <b>Status: </b> Draft
          </span>
          <span>
            <b>Visibility: </b> Public
          </span>
          <input style={{display:"none"}} type="file" id='file' />
          <label htmlFor="file">Upload Image</label>
          <div className="buttons">
            <button>Save as draft</button>
            <button>Update</button>
          </div>
        </div>
        <div className="item">
          <h1>Category</h1>
          <input className='rad' type="radio" name="cat" value="programming" id="programming"/>
          <label htmlFor="programming">Programming</label>
          <input className='rad' type="radio" name="cat" value="bodybuilding" id="bodybuilding"/>
          <label htmlFor="bodybuilding">Bodybuilding</label>
        </div>
      </div>
    </div>
  )
}

export default Write
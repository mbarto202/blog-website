import React, { useState } from 'react'
import './write.css'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Write = () => {const [value, setValue] = useState('');
console.log(value);

  return (
    <div className="write">
      <div className="content">
        <input type="text" placeholder='Title' />
        <div className="editorContainer">
          <ReactQuill theme='snow' value={value} onChange={setValue}></ReactQuill>
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
        </div>
        <div className="item">item2</div>
      </div>
    </div>
  )
}

export default Write
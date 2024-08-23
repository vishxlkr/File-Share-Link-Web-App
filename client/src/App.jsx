
import {useEffect, useRef, useState} from 'react';
import {uploadFile} from './service/api';
import './App.css'

function App() {
const [file,setFile]=useState('');
const[result,setResult]=useState('');
useEffect(()=>{
  const getImage=async()=>{
    if(file){
    const data=new FormData();
    data.append("name",file.name);
    data.append("file",file);

    const response= await uploadFile(data);
    setResult(response.path);
    }
  };
  getImage();
},[file]);
const fileInputRef=useRef();
const onUploadClick=()=>{
  fileInputRef.current.click();
};
  return (
    <>
      <div className='main-wrapper'>
        <div className='container'>
          <div className='wrapper'>
            <h1>
              File Sharing App
            </h1>
            <p>Upload and share the download link</p>
            <button onClick={()=>onUploadClick()}>Upload</button>
            <input type='file' ref={fileInputRef} style={{display:"none"}} onChange={(e)=>setFile(e.target.files[0])}/>
            <br></br>
            <br></br>
            <a href={result}>{result}</a>
          </div>
        </div>
      </div>
    </>
  )
}

export default App

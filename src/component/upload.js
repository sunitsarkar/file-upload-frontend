import { useState } from 'react'
import './upload.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';




export default function Upload(){

    const navigate=useNavigate()

    const [file,setFile]=useState(null);

    const url='https://file-backend-sunit.onrender.com/upload'
    const submit=async (e)=>{
        // console.log(file)
        if(file.type=== "image/png" || "application/pdf"){
            e.preventDefault();
        try {
            const formData = new FormData();
            formData.append("name",'sunit')
            formData.append("file", file);
            const res = await axios.post(url, formData);
            console.log(formData)
           
            console.log(res.data);
        } catch (error) {
            console.error(error);
        }
        navigate("/file")
        }
    }
    const handleFile=(e)=>{
        console.log(e.target.files[0])
        setFile(e.target.files[0])
    }


    return <div >
        <button id='show-button' onClick={()=>{navigate('/file')}}>show files</button>
        <div className='file-input'>
        <form id='field' action="/upload" method="POST" >
        <input  type='file' name='file' onChange={handleFile}/>
        <button  onClick={submit}>upload</button>
        </form>
        </div>
        <p>file size must not exceed 150kb</p>
    </div>
}
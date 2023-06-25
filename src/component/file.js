import axios from "axios"
import { useEffect, useState } from "react"
import './file.css'
export default function File(){

    const [data,setData]=useState([]);

    useEffect(()=>{
        axios.get('https://file-backend-sunit.onrender.com/files').then((res)=>{
            setData(res.data)
            console.log(res.data)
        })
    },[]);

   
    return <div>
        <h1>render the file</h1>
        {
            data.map((item,index)=>{
                const base64String= btoa(
                    String.fromCharCode(...new Uint8Array((item.file.data.data)))
                )
                return <div className="box">
                    <h3>{item.name}</h3>
                    <img src={`data:image/png;base64,${base64String}`} alt="file" width={"120px"} height={"120px"}/>
                    <button  >download</button>
                    </div>
            })
            
        }
    </div>
}
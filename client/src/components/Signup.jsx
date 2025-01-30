import axios from "axios"
import { useState } from "react"
import { BASE_URL } from "../utils/constant"
import { useNavigate } from "react-router-dom"


const Signup = () => {
    const [formData,setformData]=useState({
       username:"", email:"",password:""
    })
    const navigate=useNavigate()
    const handleChange=(e)=>{
       setformData({
        ...formData,
        ["e.target.id"]:e.target.value
       })
    }
    const handleSubmit=async(e)=>{
    try {
        e.preventDefault()
        const response=await axios.post(`${BASE_URL}/api/vi/signup`,formData)
        const data=response.data;
        
        console.log(data)
    } catch (error) {
        console.log(error)
    }
    }
  return (
    <formData onSubmit={(e)=>handleSubmit(e)}>
    <input type="text" id="username" value={formData.username} onChange={(e)=>handleChange(e)}/>
    <input type="text"id="email" value={formData.email} onChange={(e)=>handleChange(e)}/>
    <input type="text" id="password" value={formData.password} onChange={(e)=>handleChange(e)}/>
    </formData>
  )
}

export default Signup

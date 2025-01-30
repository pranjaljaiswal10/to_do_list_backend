import { useContext, useState } from "react"
import axios from "axios"
import { BASE_URL } from "../utils/constant"
import { UserContext } from "../utils/usercontext"


const Signin = () => {
    const [formData,setformData]=useState({
        username:"",email:"",password:""
    })
    const {dispatch}=useContext(UserContext)
    const handleChange=()=>{
      setformData({
        ...formData
      })
    }
    const handleSubmit=async(e)=>{
       try {
        e.preventDefault()
        const response=await axios.post(`${BASE_URL}/`,formData)
        dispatch({type:"LOGIN",payload:response.data.data})
        console.log(response.data)
       } catch (error) {
        console.log(error)
       } 
    }
  return (
    <formData onSubmit={(e)=>handleSubmit(e)}>
        <input type="text" id="username" value={formData.username} onChange={(e)=>handleChange(e)}/>
        <input type="text" id="email" value={formData.email} onChange={(e)=>handleChange(e)}/>
        <input type="text" id="password" value={formData.password} onChange={(e)=>handleChange(e)}/>
    </formData>
  )
}

export default Signin
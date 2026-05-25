import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const nav = useNavigate()
    const [formData,setFormData] = useState({
      email:'',
      password:''
    })
  
    const handleData = (e)=>{
   const {name,value} = e.target;
   setFormData({...formData,[name]:value})
    }
  
    const handleSubmit = async(e)=>{
      e.preventDefault()
      try {
        const res = await axios.post("http://localhost:5432/api/login",formData);
        if(!res.data.success){
          return alert(res.data.message)
        }
        alert(res.data.message)
        nav('/')
      } catch (error) {
        alert(error.message)
      }
    }
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="p-4 bg-blue-100 rounded-md w-100">
        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
          <div className="p-2">
            <h1 className="text-2xl font-bold text-green-500 text-center">
              Login To EPMS
            </h1>
            <p className="text-sm text-center p-2 text-green-950">
              Employee Payllol Managenent System
            </p>
          </div>
          <input
            name="email"
            onChange={handleData}
            required
            className="p-2 border border-blue-500 focus:outline-white rounded-md"
            type="email"
            placeholder="Your Email Please.."
          />
          <input
            name="password"
            onChange={handleData}
            required
            className="p-2 border border-blue-500 focus:outline-white rounded-md"
            type="password"
            placeholder="Your Password Please .."
          />
          <button type='submit' className="p-2 hover:rounded-2xl bg-green-500 text-white font-semibold rounded-md">
            Login
          </button>
          <Link
            to="/register"
            className="text-blue-500 text-center hover:underline"
          >
            I Don't Have Account - Register
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Login
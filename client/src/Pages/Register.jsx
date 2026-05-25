import React,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'

const Register = () => {
  const nav = useNavigate()
  const [formData,setFormData] = useState({
    name:'',
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
      const res = await axios.post("http://localhost:5432/api/regster",formData);
      if(!res.data.success){
        return alert(res.data.message)
      }
      alert(res.data.message)
      nav('/login')
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
              Register To EPMS
            </h1>
            <p className="text-sm text-center p-2 text-green-950">
              Employee Payllol Managenent System
            </p>
          </div>
          <input
            className="p-2 border border-blue-500 focus:outline-white rounded-md"
            onChange={handleData}
            name='name'
            type="text"
            placeholder="Your Username Please.."
            required
          />
          <input
            className="p-2 border border-blue-500 focus:outline-white rounded-md"
            onChange={handleData}
            name='email'
            type="email"
            placeholder="Your Email Please.."
            required
          />
          <input
            className="p-2 border border-blue-500 focus:outline-white rounded-md"
            onChange={handleData}
            name='password'
            type="password"
            placeholder="Your Password Please .."
            required
          />
          <button type='submit' className="p-2 hover:rounded-2xl bg-green-500 text-white font-semibold rounded-md">
            Register
          </button>
          <Link
            to="/login"
            className="text-blue-500 text-center hover:underline"
          >
            Already Have Account - Login
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Register
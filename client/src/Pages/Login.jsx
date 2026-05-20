import React from 'react'
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="p-4 bg-blue-100 rounded-md w-100">
        <form className="flex flex-col gap-2">
          <div className="p-2">
            <h1 className="text-2xl font-bold text-green-500 text-center">
              Login To EPMS
            </h1>
            <p className="text-sm text-center p-2 text-green-950">
              Employee Payllol Managenent System
            </p>
          </div>
          <input
            className="p-2 border border-blue-500 focus:outline-white rounded-md"
            type="email"
            placeholder="Your Email Please.."
          />
          <input
            className="p-2 border border-blue-500 focus:outline-white rounded-md"
            type="password"
            placeholder="Your Password Please .."
          />
          <button className="p-2 hover:rounded-2xl bg-green-500 text-white font-semibold rounded-md">
            Login
          </button>
          <Link to='/register' className='text-blue-500 text-center hover:underline'>I Don't Have Account - Register</Link>
        </form>
      </div>
    </div>
  );
}

export default Login
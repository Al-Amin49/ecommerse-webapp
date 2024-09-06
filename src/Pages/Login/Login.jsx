import { useState } from 'react';
import { useAuth } from '../../components/useAuth';
import loginImg from "../../assets/img/login.png";
import googleLogo from "../../assets/img/icon.png"

const Login = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    login({ email, password });
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Form Section */}
      <div className="flex flex-col justify-center items-center md:w-1/2 w-full p-8">
        <div className="w-full max-w-md bg-white p-8 rounded shadow-md">
          <h2 className="text-2xl font-bold ">Welcome Back</h2>
          <p className=" mb-8 text-[#707070]">Enter your credentials to access your account</p>
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="flex flex-col">
              <label htmlFor="email" className="mb-1 text-gray-600">
                Email address
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="password" className="mb-1 text-gray-600">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-secondary text-white py-2 rounded hover:bg-blue-700 transition duration-200"
            >
              Sign In
            </button>
          </form>

          {/* OR Divider */}
          <div className="flex items-center my-4">
            <hr className="flex-grow border-gray-300" />
            <span className="mx-2 text-gray-500">or</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          {/* Google Login Button */}
          <button
            type="button"
            className="w-full flex items-center justify-center bg-gray-100 rounded-md  border py-2  transition duration-200"
          >
            <img src={googleLogo} alt=""  className='mr-1'/>
            Sign in with Google
          </button>
        </div>
      </div>

       {/* Image Section */}
       <div className="hidden md:block md:w-1/2">
        <img
          src={loginImg}
          alt="Login"
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
};

export default Login;

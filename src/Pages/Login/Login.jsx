import { useState } from "react";
import { useAuth } from "../../components/hooks/useAuth";
import loginImg from "../../assets/img/login.png";
import googleLogo from "../../assets/img/icon.png";
import { Link, useNavigate } from "react-router-dom";
import iconF from "../../assets/img/iconLogin.png";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useForm } from "react-hook-form";

const Login = () => {
   const [showPassword, setShowPassword] = useState(false);
  const [agree, setAgree] = useState(false);
  const {login}= useAuth();
  const navigate=useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log('data', data)
  if(agree){
    login(data)
    window.alert("login successfully")
    navigate("/")
  }
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Form Section */}
      <div className="flex flex-col justify-center items-center md:w-1/2 w-full p-8">
        <div className="w-full max-w-md bg-white p-8 rounded shadow-md">
          <h2 className="text-2xl font-bold ">Welcome Back</h2>
          <p className=" mb-8 text-[#707070]">
            Enter your credentials to access your account
          </p>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="flex flex-col">
              <label htmlFor="email" className="mb-1 text-gray-600">
                Email address
              </label>
              <input
                id="email"
                type="email"
                {...register("email", { required: "Email is required"})}
                placeholder="Enter your email"
                className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.email && (
                <span className="text-red-500 text-sm">{errors.email.message}</span>
              )}
            </div>
            <div className="flex flex-col relative">
              <label htmlFor="password" className="mb-1 text-gray-600">
                Password
              </label>
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                {...register("password", { required: "Password is required"})}
                placeholder="Enter your password"
                className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
               {errors.password && (
                <span className="text-red-500 text-sm">{errors.password.message}</span>
              )}
              <span
                className="absolute right-3 top-10 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>

            {/* Terms and Policy Checkbox */}
            <div className="flex items-center">
              <input
                id="agree"
                type="checkbox"
                checked={agree}
                onChange={() => setAgree(!agree)}
                className="mr-2"
              />
              <label htmlFor="agree" className="font-bold">
                I agree to the{" "}
                <span className="underline">terms and policy</span>
              </label>
            </div>
            <button
              disabled={!agree}
              type="submit"
              className={`w-full py-2 rounded transition duration-200 ${
                agree
                  ? "bg-secondary text-white hover:bg-blue-700"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
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
            <img src={googleLogo} alt="" className="mr-1" />
            Sign in with Google
          </button>
          <div className="text-center mt-2">
            <p className="">
              Dont Have an account?{" "}
              <Link to="/signup">
                <span className="text-blue-600 font-medium">SignUp</span>
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Image Section */}
      <div className="hidden md:block md:w-1/2 relative">
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <img src={iconF} alt="" />
          <h3 className="font-bold text-white">
            Furni<span className="text-blue-600 ">Flex</span>
          </h3>
          <p className="text-[#C8C4C4] w-[65%] mx-auto">
            Discover a seamless shopping experience with our curated collection
            of products. From fashion to electronics, we bring quality.
          </p>
        </div>
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

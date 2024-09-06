import { Link } from "react-router-dom";
import logo from "../../assets/img/chair/logo.png";
import {
  AiOutlineClose,
  AiOutlineMenu,
  AiOutlineShopping,
} from "react-icons/ai";
import { useState } from "react";
import { motion } from "framer-motion";
const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!isOpen);
  };
  return (
    <div className="shadow-md">
      <nav className="flex items-center justify-between px-6 py-4">
        {/* logo */}
        <div className="flex items-center">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>

        {/* large menu */}
        <div className="hidden md:flex items-center space-x-4">
          <Link to="/" className="text-gray-700 hover:text-gray-900">
            Home
          </Link>
          <Link to="/products" className="text-gray-700 hover:text-gray-900">
            Products
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          <a
            href="#"
            className="text-gray-700 hover:text-gray-900 hidden md:block"
          >
            <AiOutlineShopping className="text-2xl" />
          </a>
          <Link
            href="#"
            className="bg-secondary hidden md:block  text-white px-4 py-1 rounded hover:bg-blue-600 text-center"
          >
            Login
          </Link>
        </div>
        {/* hamburger & shopping cart for small screen  */}

        <div className="md:hidden flex space-x-4">
          <a href="#" className=" text-gray-700 hover:text-gray-900">
            <AiOutlineShopping className="text-2xl" />
          </a>

          <button onClick={toggleMenu}>
            {isOpen ? (
              <AiOutlineClose className="text-2xl text-gray-700 hover:text-gray-900" />
            ) : (
              <AiOutlineMenu className="text-2xl text-gray-700 hover:text-gray-900" />
            )}
          </button>
        </div>

        {/* mobile menu */}
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: isOpen ? "auto" : 0 }}
          className={`overflow-hidden md:hidden w-full absolute top-16 left-0 bg-white shadow-md`}
        >
          <div className="flex flex-col items-start space-y-4 px-6 py-4">
            <Link
              to="/"
              className="text-gray-700 hover:text-gray-900"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to="/products"
              className="text-gray-700 hover:text-gray-900"
              onClick={toggleMenu}
            >
              Products
            </Link>
            <Link
              to="/login"
              className="text-gray-700 hover:text-gray-900"
              onClick={toggleMenu}
            >
              Login
            </Link>
          </div>
        </motion.div>
      </nav>
    </div>
  );
};

export default Navbar;

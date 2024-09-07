import { motion } from "framer-motion";
import chair1 from "../../assets/img/chair1.png";
import chair2 from "../../assets/img/chair2.png";
import chair3 from "../../assets/img/chair3.png";

const HeroSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between py-10 px-5 md:px-10 bg-gray-100">
      {/* Left Side - Text */}
      <div className="mb-10 md:mb-0 text-center md:text-left">
        <h1 className="text-4xl md:text-6xl font-bold text-secondary mb-4">
          Furniflex
        </h1>
        <p className="text-lg md:text-xl text-gray-700">
          Discover premium furniture that combines style and comfort, perfect for every room in your home.
        </p>
      </div>

      {/* Right Side - Images */}
      <div className="flex space-x-4">
        <motion.img
          src={chair1}
          alt="Chair 1"
          className="w-28 h-28 md:w-40 md:h-40 object-cover rounded-lg"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        />
        <motion.img
          src={chair2}
          alt="Chair 2"
          className="w-28 h-28 md:w-40 md:h-40 object-cover rounded-lg"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        />
        <motion.img
          src={chair3}
          alt="Chair 3"
          className="w-28 h-28 md:w-40 md:h-40 object-cover rounded-lg"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        />
      </div>
    </div>
  );
};

export default HeroSection;

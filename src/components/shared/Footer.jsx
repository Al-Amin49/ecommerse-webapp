import logo from "../../assets/img/iconLogin.png";
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto border-t border-gray-600">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="w-full md:w-1/4 mb-4 md:mb-0">
            <div className="flex items-center">
              <img src={logo} alt="" className="h-16" />
              <h3 className="font-bold text-xl lg:text-3xl">
                Furni<span className="text-blue-600 ">Flex</span>
              </h3>
            </div>
          </div>
          <div className="w-full md:w-1/4 mb-4 md:mb-0">
            <h3 className="text-lg font-bold">About Us</h3>
            <ul>
              <li>
                <a href="#" className="hover:underline">
                  Company
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-4 md:mb-0">
            <h3 className="text-lg font-bold">Explore</h3>
            <ul>
              <li>
                <a href="#" className="hover:underline">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4">
            <h3 className="text-lg font-bold">Support</h3>
            <ul>
              <li>
                <a href="#" className="hover:underline">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Returns
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Shipping Info
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex justify-center mt-4">
          <a href="#" className="mx-2 text-xl hover:text-gray-400">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#" className="mx-2 text-xl hover:text-gray-400">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="mx-2 text-xl hover:text-gray-400">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { Outlet } from "react-router-dom";
import Navbar from "../../context/shared/Navbar";
import Footer from "../../context/shared/Footer";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen">
        <Outlet/>
      </div>
      <Footer/>
    </div>
  );
};

export default MainLayout;

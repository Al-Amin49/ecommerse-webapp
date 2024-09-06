import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../shared/Navbar";
import Footer from '../shared/Footer'


const MainLayout = () => {
  const location = useLocation();
  const noHeaderFooter = ["/login", "/signup"];
  const shouldHideHeaderFooter = noHeaderFooter.includes(location.pathname);
  return (
    <div>
      {!shouldHideHeaderFooter && <Navbar />}
      <div className="min-h-screen">
        <Outlet />
      </div>
      {!shouldHideHeaderFooter && <Footer/>}
    </div>
  );
};

export default MainLayout;

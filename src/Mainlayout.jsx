import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";


const Mainlayout = () => {
  return (
    <div className="flex justify-center align-middle flex-col">
    
      
      <Outlet />
      <Footer/>
    </div>
  );
};

export default Mainlayout;

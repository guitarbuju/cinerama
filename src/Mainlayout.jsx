import { Outlet } from "react-router-dom";


const Mainlayout = () => {
  return (
    <div className="flex justify-center align-middle flex-col">
    
      
      <Outlet />
    </div>
  );
};

export default Mainlayout;

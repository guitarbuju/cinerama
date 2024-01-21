/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'


const Header = () => {
  const styles = {
    fontFamily: "Kaushan Script",
    textShadow:'3px 3px 3px 0 white',
  };


  


  return (
    <div>
      <header className="navbar w-3/4 sm:w-full -mt-30 text-primary-content rounded-lg z-50 flex justify-between">
        <div className="flex justify-start gap-1">
        <div className="flex justify-start gap-1">
          <img src='' className="w-10 ml-5 mb-2" />
          <Link to="/" className="btn btn-ghost normal-case text-lg sm:text-xl">
            cinerama
          </Link>
        </div>
        <div className="flex justify-center gap-4 text-gray-300 text:lg sm:text-xl">
          <Link to='/about'><button className="ghost">About</button></Link>
          <Link to='/contact'><button className="ghost">Contact</button></Link>
          <a>Locations</a>
          <a>Links</a>
        </div>
        </div>
        <div className="flex flex-col mr-2 w-full ">
        <Link to='/'><h1 style={styles} >Welcome Back to the Movies...</h1></Link> 
        
            
          
        </div>
      </header>
    </div>
  );
};

export default Header;

/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'


const Header = () => {
  const styles = {
    fontFamily: "Kaushan Script",
    fontSize: "60px",
    textShadow:'3px 3px 3px 0 white'
  };
  

  const NavClass = {
    nav1: "navbar   w-12/12 -mt-20 text-primary-content rounded-lg z-50 flex justify-between",
    nav2: "navbar w-full -mt-20 text-primary-content rounded-lg z-50 flex justify-between",
  };

  


  return (
    <div>
      <header className={NavClass.nav1}>
        <div className="flex justify-start gap-1">
        <div className="flex justify-start gap-1">
          <img src='' className="w-10 ml-5 mb-2" />
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            cinerama
          </Link>
        </div>
        <div className="flex justify-center gap-4 text-gray-300">
          <Link to='/about'><button className="ghost">About</button></Link>
          <Link to='/contact'><button className="ghost">Contact</button></Link>
          <a>Locations</a>
          <a>Links</a>
        </div>
        </div>
        <div className="flex flex-col mr-2">
        <Link to='/'><h1 style={styles}>Welcome Back to the Movies...</h1></Link> 
        
            
          
        </div>
      </header>
    </div>
  );
};

export default Header;

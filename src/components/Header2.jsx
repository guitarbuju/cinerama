/* eslint-disable react/prop-types */



const Header = ({ choose }) => {
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
         
        </div>
        <div className="flex flex-col mr-2">
         <h1 style={styles}>Welcome Back to the Movies...</h1>
        
            
          
        </div>
      </header>
    </div>
  );
};

export default Header;

import "./navbar.scss";
import DesktopNavBar from "./Desktop";
import MobileNavBar from "./Mobile";
import { Link } from "react-router-dom";

function NavBar() {

  return (
    <div className="navbar">
      <div className="logo-container">
        <Link to="/portfolio/">
          <img 
            src={process.env.PUBLIC_URL + "/logo.svg"}
            className="logo" 
            />
        </Link>
      </div>
      <div className='desktop-nav-container'>
        <DesktopNavBar />
      </div>
      <div className='mobile-nav-container'>
        <MobileNavBar />
      </div> 
    </div>
  );
}

export default NavBar;
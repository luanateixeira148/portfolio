import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./navbar.scss";
import DesktopNavBar from "./Desktop";
import MobileNavBar from "./Mobile";

function NavBar() {

  // changes navbar styling based on the window scroll position
  const [pageScrollTop, setPageScrollTop] = useState(true)

  const changeNavHeight = () => {
    console.log(window.scrollY)
    if (window.scrollY >= 100) {
      setPageScrollTop(false)
    } else {
      setPageScrollTop(true)
    }
  }

  useEffect(() => {
    changeNavHeight();
    window.addEventListener("scroll", changeNavHeight);
  }, [changeNavHeight])

  return (
    <div className={pageScrollTop ? "navbar large" : "navbar shrank"}>
        <div className="logo-container">
          <Link 
            smooth
            to="/portfolio/"
          >
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
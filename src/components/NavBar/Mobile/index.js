import { useState } from "react";
import "./mobile.scss";
import SideNav from '../SideNav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from "@fortawesome/free-solid-svg-icons";

function MobileNavBar() {

  // set hamburger menu state
  const [burgerMenuOpen, setBurgerMenuOpen] = useState(false);

  return (
    <div className="mobile-navbar">
      <div className="burger-menu" id="burger-menu">
        <FontAwesomeIcon 
          icon={faBars} 
          className="burger-menu-icon"
          onClick={() => setBurgerMenuOpen(true)}  
        />
      </div>
      {burgerMenuOpen && (
        <SideNav 
          setBurgerMenuOpen={setBurgerMenuOpen}
        />
      )}
    </div>
  );
}

export default MobileNavBar;
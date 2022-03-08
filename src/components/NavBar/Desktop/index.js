import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { HashLink, NavHashLink } from 'react-router-hash-link';
import "./desktop.scss";
import ScrollToTop from '../../../helpers/scrollToTop';

function DesktopNavBar() {

  let location = useLocation();

  return (
    <div 
      className="desktop-navbar"
    >
      <HashLink 
        to="/portfolio/projects" 
        className={`${location.pathname}${location.hash}` === "/portfolio/projects" ? "nav-link selected" : "nav-link"}
        onClick={() => ScrollToTop()}
      >
        <h6>Projects</h6>
      </HashLink>
      <HashLink 
        to="/portfolio#about" 
        className={`${location.pathname}${location.hash}` === "/portfolio#about" ? "nav-link selected" : "nav-link"}
      >
        <h6>About</h6>
      </HashLink>
      <HashLink 
        to="/portfolio#contact" 
        className={`${location.pathname}${location.hash}` === "/portfolio#contact" ? "nav-link selected" : "nav-link"}
      >
        <h6>Contact</h6>
      </HashLink>
      <a 
        href={process.env.PUBLIC_URL + "/resume.pdf"} 
        target="_blank" 
        type="application/pdf"
        className="nav-link"
      >
        <h6>Resume</h6>
      </a>
    </div>
  );
}

export default DesktopNavBar;
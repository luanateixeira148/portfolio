import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import "./side-nav.scss";

function SideNav(props) {

  return (
    <div className="side-nav">
      <div className="header">
        <FontAwesomeIcon 
          icon={faTimes} 
          className="burger-menu-icon"
          onClick={() => props.setMenuOpen(false)}  
        />
      </div>
      <div className="side-nav-links">
        <Link 
          to="/portfolio/projects" 
          className="side-nav-link" 
          onClick={() => props.setMenuOpen(false)}
          >
          <h2>Projects</h2>
        </Link>
        <HashLink 
          to="/portfolio#about" 
          className="side-nav-link" 
          onClick={() => props.setMenuOpen(false)}
          >
          <h2>About</h2>
        </HashLink>
        <HashLink 
          to="/portfolio#contact" 
          className="side-nav-link" 
          onClick={() => props.setMenuOpen(false)}
          >
          <h2>Contact</h2>
        </HashLink>
      </div>
    </div>
  );
}

export default SideNav;
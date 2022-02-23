import "./footer.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Footer () {

  return (
    <div className="footer">
        <a href="https://github.com/luanateixeira148/portfolio" target="_blank" >
          <h5>
            Designed &amp; Developed by Luana Teixeira
          </h5>
        </a>
        <div className="social-icons">
          <a href="mailto:luanateixeira148@gmail.com" target="_blank" id="email-icon">
            <FontAwesomeIcon icon={faEnvelope} className="social-icon" />
          </a>
          <a href='https://www.linkedin.com/in/luanateixeira148/' target="_blank">
            <FontAwesomeIcon icon={faLinkedinIn} className="social-icon" />
          </a>
          <a href="https://github.com/luanateixeira148/" target="_blank" >
            <FontAwesomeIcon icon={faGithub} className="social-icon" />
          </a>
        </div>
    </div>
  );

}

export default Footer;
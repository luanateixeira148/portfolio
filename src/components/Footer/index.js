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
    </div>
  );

}

export default Footer;
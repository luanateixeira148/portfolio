import "./contact.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

function Contact () {

  return (
    <div className="contact">
      <header>
        <h3 className="coral">&lt; contact &gt;</h3>
      </header>
      <main>
        <div className="email">
          <p className="off-white">
            luanateixeira148@gmail.com
          </p>
        </div>
        <div className="social-icons">
          <a href='https://www.linkedin.com/in/luanateixeira148/' target="_blank">
            <FontAwesomeIcon icon={faLinkedinIn} className="social-icon" />
          </a>
          <a href="https://github.com/luanateixeira148/" target="_blank" >
            <FontAwesomeIcon icon={faGithub} className="social-icon" />
          </a>
        </div>
      </main>
      <footer>
        <h3 className="coral">&lt;/ contact &gt;</h3>
      </footer>
    </div>
  );

}

export default Contact;
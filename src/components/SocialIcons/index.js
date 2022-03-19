import "./social-icons.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faAt } from "@fortawesome/free-solid-svg-icons";

function SocialIcons () {

  return (
    <div className="social-icons-vertical">
      <a href="mailto:luanateixeira148@gmail.com" target="_blank" >
        <FontAwesomeIcon icon={faAt} className="social-icon-vertical" />
      </a>
      <a href='https://www.linkedin.com/in/luanateixeira148/' target="_blank" >
        <FontAwesomeIcon icon={faLinkedinIn} className="social-icon-vertical" />
      </a>
      <a href='https://twitter.com/_Luana148' target="_blank" >
        <FontAwesomeIcon icon={faTwitter} className="social-icon-vertical" />
      </a>
      <a href="https://github.com/luanateixeira148/" target="_blank" >
        <FontAwesomeIcon icon={faGithub} className="social-icon-vertical" />
      </a>
    </div>
  );
}

export default SocialIcons;
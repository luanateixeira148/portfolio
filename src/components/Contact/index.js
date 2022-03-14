import "./contact.scss";
import PrimaryButton from '../PrimaryButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faAt } from "@fortawesome/free-solid-svg-icons";

function Contact () {

  return (
    <div className="contact" id="contact">
      <h1 className="title">&lt; contact &gt;</h1>
      <p>I am always open to talk about partnership opportunities, software development, mental health, and dogs!</p>
      <a
        href="https://calendly.com/luanateixeira148/30min"
        target="_blank" 
      >
        <PrimaryButton text={"LET'S TALK"} />
      </a>
      <div className="social-icons">
        <a href="mailto:luanateixeira148@gmail.com" target="_blank" >
          <FontAwesomeIcon icon={faAt} className="social-icon" />
        </a>
        <a href='https://www.linkedin.com/in/luanateixeira148/' target="_blank" >
          <FontAwesomeIcon icon={faLinkedinIn} className="social-icon" />
        </a>
        <a href="https://github.com/luanateixeira148/" target="_blank" >
          <FontAwesomeIcon icon={faGithub} className="social-icon" />
        </a>
      </div>
    </div>
  );

}

export default Contact;
import "./contact.scss";
import Button from "../PrimaryButton"
import SectionTags from "../SectionTags";

function Contact () {

  return (
    <div className="contact" id="contact">
      <SectionTags 
        text={"< contact >"}
      />
      <main>
        <div className="contact-info">
          <h2>Get in touch</h2>
          <p>
            Feel free to reach out to learn more about my work or just to say hi! Feel free to reach out to learn more about my work or just to say hi!
          </p>
          <a 
            href="mailto:luanateixeira148@gmail.com"
            className="contact-button"  
            >
            <Button text={"SAY HELLO!"} />
          </a>
        </div>
      </main>
      <SectionTags 
        text={"</ contact >"}
      />
    </div>
  );

}

export default Contact;
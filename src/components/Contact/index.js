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
            If you want to ask questions, learn more about my work, collaborate, share a photo of your dog, or just say hi, please, feel free to reach out!
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
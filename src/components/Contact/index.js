import "./contact.scss";

function Contact () {

  return (
    <div className="contact" id="contact">
      <h1 className="title">&lt; contact &gt;</h1>
      <div className="contact-block">
        <a
          href="https://calendly.com/luanateixeira148/30min"
          target="_blank" 
        >
          <p><span>book a time</span> with me</p>
        </a>
        <a
          href="mailto:luanateixeira148@gmail.com"
          target="_blank"
        >
          <p><span>email</span> me</p>
        </a>
        <a
          href="https://www.linkedin.com/in/luanateixeira148/"
          target="_blank"
        >
          <p>connect with me on <span>LinkedIn</span></p>
        </a>
        <a
          href="https://github.com/luanateixeira148/"
          target="_blank"
        >
          <p>see my projects on <span>GitHub</span></p>
        </a>
        <a
          href="https://twitter.com/_Luana148"
          target="_blank"
        >
          <p>follow me on <span>Twitter</span></p>
        </a>
      </div>
    </div>
  );

}

export default Contact;
import "./about.scss";
import Button from "./Button"

function About () {

  return (
    <div className="about">
      <header>
        <h3>&lt; about &gt;</h3>
      </header>
      <main>
        <div className="profile-photo">
          Profile photo
        </div>
        <div className="bio">
          <p className="off-white">
            With a passion for learning, I’m fascinated with Human-Computer Interactions and user-centred design.
            I have a strong background in UI/UX Design, though my expertise lies in simple yet effective web and software development.
          </p>
        </div>
        <div className="about-button">
          <Button text={"RESUME (PDF)"} />
        </div>
      </main>
      <footer>
        <h3>&lt;/ about &gt;</h3>
      </footer>
    </div>
  );

}

export default About;
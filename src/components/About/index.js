import "./about.scss";
import PrimaryButton from "../PrimaryButton";
import profilePhoto from "../../assets/profile_photo.jpg";

function About () {

  return (
    <div className="about">
      <header>
        <h3>&lt; about &gt;</h3>
      </header>
      <main>
        <div className="bio">
          <p className="off-white">
            With a passion for learning, I am fascinated with Human-Computer Interactions and user-centred design.
            I have a strong background in UI/UX Design, though my expertise lies in simple yet effective web and mobile development.
            <br />
            With a passion for learning, I am fascinated with Human-Computer Interactions and user-centred design.
            I have a strong background in UI/UX Design, though my expertise lies in simple yet effective web and mobile development.
            <br />
            With a passion for learning, I am fascinated with Human-Computer Interactions and user-centred design.
            I have a strong background in UI/UX Design, though my expertise lies in simple yet effective web and mobile development.
          </p>
          <div className="about-button">
            <a href={process.env.PUBLIC_URL + "/resume.pdf"} target="_blank" type="application/pdf">
              <PrimaryButton text={"RESUME (PDF)"} />
            </a>
          </div>
        </div>
        <aside>
          <img src={profilePhoto} className="profile-photo"/>
        </aside>
      </main>
      <footer>
        <h3>&lt;/ about &gt;</h3>
      </footer>
    </div>
  );

}

export default About;
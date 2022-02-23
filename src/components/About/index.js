import "./about.scss";
import PrimaryButton from "../PrimaryButton";
import SectionTags from "../SectionTags";

function About () {
  
  return (
    <div className="about" id="about">
      <SectionTags 
        text={"< about >"}
      />
      <main>
        <div className="bio">
          <p>
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
        <img 
          src={process.env.PUBLIC_URL + "/images/luana.png"} className="profile-photo"
        />
      </main>
      <SectionTags 
        text={"</ about >"}
      />
    </div>
  );

}

export default About;
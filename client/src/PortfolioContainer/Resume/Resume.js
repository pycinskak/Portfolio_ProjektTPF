import React, {useEffect, useState} from 'react'
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading';
import ScrollService from '../../utilities/ScrollService';
import Animations from '../../utilities/Animations';
import './Resume.css'

export default function Resume(props) {
    const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
    const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

    let fadeInScreenHandler = (screen) => {
        if (screen.fadeInScreen !== props.id) return;
        Animations.animations.fadeInScreen(props.id);
      };
      const fadeInSubscription =
        ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

    const ResumeHeading = (props) => {
        return (
          <div className="resume-heading">
            <div className="resume-main-heading">
              <div className="heading-bullet"></div>
              <span>{props.heading ? props.heading : ""}</span>
              {props.fromDate && props.toDate ? (
                <div className="heading-date">
                  {props.fromDate + "-" + props.toDate}
                </div>
              ) : (
                <div></div>
              )}
            </div>
            <div className="resume-sub-heading">
              <span>{props.subHeading ? props.subHeading : ""}</span>
            </div>
            <div className="resume-heading-description">
              <span>{props.description ? props.description : ""}</span>
            </div>
          </div>
        );
      };

    const resumeBullets = [
        { label: "Education", logoSrc: "education.svg" },
        { label: "Work History", logoSrc: "work-history.svg" },
        { label: "Programming Skills", logoSrc: "programming-skills.svg" },
        { label: "Projects", logoSrc: "projects.svg" },
        { label: "Interests", logoSrc: "interests.svg" },
    ];

    const programmingSkillsDetails = [
        { skill: "HTML", ratingPercentage: 85 },
        { skill: "CSS", ratingPercentage: 85 },
        { skill: "Photoshop", ratingPercentage: 85 },
        { skill: "Figma", ratingPercentage: 89 },
        { skill: "AdobeXd", ratingPercentage: 89 },
        { skill: "JavaScript", ratingPercentage: 70 },
        { skill: "Illustrator", ratingPercentage: 80 },
        { skill: "iMovie", ratingPercentage: 80 },
    ];

    const projectsDetails = [
        {
          title: "Personal Portfolio Website",
          duration: { fromDate: "2021", toDate: "2022" },
          description:
            "A Personal Portfolio website to showcase all my details and projects at one place.",
          subHeading: "Technologies Used: React JS, Bootsrap",
        },
        {
          title: "Mobile application for photographers",
          duration: { fromDate: "2020", toDate: "2021" },
          description:
            "Engineering work written in Java and XML, using Android Studio, Firebase, Photoshop and Illustrator",
          subHeading:
            "Technologies Used: Java, XML",
        },
        {
          title: "Redesign Website Crighlist",
          duration: { fromDate: "2021", toDate: "2022" },
          description:
            "Redesign Website for shopping and for using the forum",
          subHeading:
            "Figma",
        },
      ];

      const resumeDetails = [
        <div className="resume-screen-container" key="education">
          <ResumeHeading
            heading={"Cracow University of Technology, Computer Science"}
            subHeading={"Bachelor of Computer Science"}
            fromDate={"2017"}
            toDate={"2020"}
          />
    
          <ResumeHeading
            heading={"Cracow University of technology"}
            subHeading={"Computer Science - Computer Graphic and Multimedia, master's degree"}
            fromDate={"2020"}
            toDate={"now"}
          />
          <ResumeHeading
            heading={"Academy of Photography"}
            subHeading={"Photography course certificate"}
            fromDate={"2015"}
            toDate={"now"}
          />
        </div>,
    
        /* WORK EXPERIENCE */
        <div className="resume-screen-container" key="work-experience">
          <div className="experience-container">
            <ResumeHeading
              heading={"Capgemini"}
              subHeading={"Junior Tools Developer"}
              fromDate={"2020"}
              toDate={"Now"}
            />
            <div className="experience-description">
              <span className="resume-description-text">
              SKI Jumping Applications for Polish National Ski Jumpers - research and test new libraries, assist developers, learn the codebase and improve coding skills, 
              </span>
            </div>
            <div className="experience-description">
              <span className="resume-description-text">
              Application software testing, analysis and reporting of result.
              </span>
              <br />
              <span className="resume-description-text">
              Creating report in Excel on the basic of which the forecast is made,{" "}
              </span>
              <br />
              <span className="resume-description-text">
              Service automation Google Workspace, writing Scripts in AppScript that used Google Workspace (forms. sheets, mailbox, etc.)
              </span>
              <br />
            </div>
          </div>
        </div>,
    
        /* PROGRAMMING SKILLS */
        <div
          className="resume-screen-container programming-skills-container"
          key="programming-skills"
        >
          {programmingSkillsDetails.map((skill, index) => (
            <div className="skill-parent" key={index}>
              <div className="heading-bullet"></div>
              <span>{skill.skill}</span>
              <div className="skill-percentage">
                <div
                  style={{ width: skill.ratingPercentage + "%" }}
                  className="active-percentage-bar"
                ></div>
              </div>
            </div>
          ))}
        </div>,
    
        /* PROJECTS */
        <div className="resume-screen-container" key="projects">
          {projectsDetails.map((projectsDetails, index) => (
            <ResumeHeading
              key={index}
              heading={projectsDetails.title}
              subHeading={projectsDetails.subHeading}
              description={projectsDetails.description}
              fromDate={projectsDetails.duration.fromDate}
              toDate={projectsDetails.duration.toDate}
            />
          ))}
        </div>,
    
        /* Interests */
        <div className="resume-screen-container" key="interests">
          <ResumeHeading
            heading="Teaching"
            description="Apart from being a tech enthusiast and a code writer, i also love to teach people what i know simply because i believe in sharing."
          />
          <ResumeHeading
            heading="Music"
            description="Listening to soothing music is something i can never compromise with, skimming through Spotify's pop songs charts is at times the best stress reliever that i can get my hands on."
          />
          <ResumeHeading
            heading="Competitive Gaming"
            description="I like to challenge my reflexes a lot while competing in football games, pushing the rank and having interactive gaming sessions excites me the most."
          />
        </div>,
      ];
    
    const handleCarousal = (index) => {
        let offsetHeight = 360;
    
        let newCarousalOffset = {
          style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
        };
    
        setCarousalOffsetStyle(newCarousalOffset);
        setSelectedBulletIndex(index);
      };

      const getBullets = () => {
        return resumeBullets.map((bullet, index) => (
          <div onClick={() => handleCarousal(index)} className={index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"} key={index}>
            <img className="bullet-logo" src={require(`../../assets/Resume/${bullet.logoSrc}`)} alt="B"/>
            <span className="bullet-label">{bullet.label}</span>
          </div>
        ));
      };
    
      const getResumeScreens = () => {
        return (
          <div style={carousalOffsetStyle.style} className="resume-details-carousal">
            {resumeDetails.map((ResumeDetail) => ResumeDetail)}
          </div>
        );
      };
    
      useEffect(() => {
        return () => {
          /* UNSUBSCRIBE THE SUBSCRIPTIONS */
          fadeInSubscription.unsubscribe();
        };
      }, [fadeInSubscription]);
    

    return (
        <div className='resume-container screen-container' id={props.id || ""}>
            <div className='resume-content'>
                <ScreenHeading title={"Resume"} subHeading={"My Formal Bio Details"}/>
                <div className='resume-card'>
                    <div className='resume-bullets'>
                        <div className='bullet-container'>
                            <div className='bullet-icons'></div>
                            <div className='bullets'>{getBullets()}</div>
                        </div>
                    </div>
                    <div className='resume-bullet-details'>{getResumeScreens()}</div>
                </div>
            </div>
        </div>
)
}
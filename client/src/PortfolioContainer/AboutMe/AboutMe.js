import React, {useEffect} from 'react'
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading'
import ScrollService from '../../utilities/ScrollService'
import Animations from "../../utilities/Animations"
import './AboutMe.css'

export default function AboutMe(props){
    let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

    const SCREEN_CONSTSANTS = {
        description:
          "I am a student of computer science with a specialization in computer graphic at the Cracow University of Technology. I have experience in designing websites, web or mobile application. I am interested in photography and I have experience with Photoshop I would like to undertake an internship or work as UX/UI Designer or Frontend Developer.",
        highlights: {
          bullets: [
            "Junior UX/UI Designer",
            "Junior Tools Developer",
            "Business Analyst",
            "Photographer",
          ],
          heading: "Here are a Few Highlights:",
        },
      };

      const renderHighlight = () => {
        return (
            SCREEN_CONSTSANTS.highlights.bullets.map((value, i) => (
          <div className="highlight" key={i}>
            <div className="highlight-blob"></div>
            <span>{value}</span>
          </div>
        ))
        )      
      };
    return(
        <div className='about-me-container screen-container' id={props.id || ""}>
            <div className='about-me-parent'>
                <ScreenHeading title ={'About Me'} subHeading={'Why Choose Me?'}/>
                <div className='about-me-card'>
                    <div className='about-me-profile'></div>
                    <div className='about-me-details'>
                        <span className='about-me-description'>{SCREEN_CONSTSANTS.description}</span>
                        <div className='about-me-highlights'>
                            <div className='highlight-heading'>
                                <span> {SCREEN_CONSTSANTS.highlights.heading}</span>
                            </div>
                            {renderHighlight()}
                        </div>
                        <div className='about-me-options'>
                        <button className='btn primary-btn' onClick={() => ScrollService.scrollHandler.scrollToHireMe()}>
                            {" "}
                            Hire Me{" "}
                        </button>
                        <a href="cv.pdf" download='KatarzynaPycinskaCV.pdf'>
                            <button className="btn highlighted-btn">Get Resume</button>
                        </a>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    );
}
import React, {useContext} from "react";
import {Fade} from "react-reveal";
import "./Greeting.scss";
import landingPerson from "../../assets/lottie/landingPerson";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";

import {illustration, greeting} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import manOnTableImg from "../../assets/images/manOnTable.svg";

export default function Greeting() {
  const {isDark} = useContext(StyleContext);
  if (!greeting.displayGreeting) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1
                className={isDark ? "dark-mode greeting-text" : "greeting-text"}
              >
                {" "}
                {greeting.title}{" "}
              </h1>
              <p
                className={
                  isDark ? "dark-mode greeting-headline" : "greeting-headline"
                }
              >
                {greeting.subTitle}
              </p>
              {greeting.summary && (
                <p
                  className={
                    isDark ? "dark-mode greeting-summary" : "greeting-summary"
                  }
                >
                  {greeting.summary}
                </p>
              )}
              {greeting.location && (
                <p
                  className={
                    isDark ? "dark-mode greeting-location" : "greeting-location"
                  }
                >
                  <i className="fas fa-map-marker-alt" aria-hidden="true"></i>
                  {greeting.location}
                </p>
              )}
              <SocialMedia />
              <div className="button-greeting-div">
                <Button text="Contact me" href="#contact" />
              </div>
            </div>
          </div>
          <div className="greeting-image-div">
            {greeting.profileImage ? (
              <img
                className="profile-photo"
                alt={greeting.username}
                src={import.meta.env.BASE_URL + greeting.profileImage}
              ></img>
            ) : illustration.animated ? (
              <DisplayLottie animationData={landingPerson} />
            ) : (
              <img
                alt="man sitting on table"
                src={manOnTableImg}
              ></img>
            )}
          </div>
        </div>
      </div>
    </Fade>
  );
}

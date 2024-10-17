import React, { useState } from 'react';
import './teamMembers.css'; 
import image4 from '../../img/image (4).jpg';
import image5 from '../../img/image (5).jpg';

const Team = [
  {
    name: " PULKIT CHOUDHARY",
    designation: "Director",
   
    image: image4,
    social: [
      { platform: "facebook", icon: "fab fa-facebook-f", link: "#" },
      { platform: "twitter", icon: "fab fa-twitter", link: "#" },
      { platform: "instagram", icon: "fab fa-instagram", link: "#" },
      { platform: "linkedin", icon: "fab fa-linkedin-in", link: "#" },
    ],
  },
  {
    name: "BHAGAT SINGH",
    designation: "Director",
  
    image: image5,
    social: [
      { platform: "facebook", icon: "fab fa-facebook-f", link: "#" },
      { platform: "twitter", icon: "fab fa-twitter", link: "#" },
      { platform: "instagram", icon: "fab fa-instagram", link: "#" },
      { platform: "linkedin", icon: "fab fa-linkedin-in", link: "#" },
    ],
  }
  
 
];

const TeamSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? Math.max(0, Team.length - 3) : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex >= Team.length - 3;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <section className="team light-grey-bg" id="team">
      <div className="teams-container">
        <div className="row">
          <div className="col-12">
            <div className="herotext text-center">
              <h6>MEET OUR TEAM!</h6>
              <h2>Your Partner in Smarter Cattle Management</h2>
              <h5 className="pt-2">A group of cattle professionals committed to revolutionizing cattle field solutions.</h5>
            </div>
          </div>
        </div>

        <div className="team-carousel-wrapper">
          <div className="team-carousel">
            {Team.slice(currentIndex, currentIndex + 3).map((member, index) => (
              <div
                className="team-item"
                key={index}
              >
                <img className="img-fluid mb-4" src={member.image} alt={member.name} />
                <h5>{member.name}</h5>
                <p>{member.designation}</p>
                <span className="text-primary">{member.role}</span>
                <ul className="team-social">
                  {member.social.map((social, idx) => (
                    <li key={idx}>
                      <a className="btn btn-square" href={social.link}>
                        <i className={social.icon}></i>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Navigation buttons */}
          {/* <button 
            className="carousel-control prev" 
            onClick={goToPrevious}
            aria-label="Previous team member"
          >
            <PiLessThanLight />
          </button>
          <button 
            className="carousel-control next" 
            onClick={goToNext}
            aria-label="Next team member"
          >
            <PiGreaterThanLight />
          </button> */}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;

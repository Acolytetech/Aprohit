import React, { useState } from 'react';
import cssteam from './teamMembers.module.css'; 
import image4 from '../../img/image (4).jpg';
import image5 from '../../img/image (5).jpg';

const Team = [
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
  },
  {
    name: "PULKIT CHOUDHARY",
    designation: "Director",
    image: image4,
    social: [
      { platform: "facebook", icon: "fab fa-facebook-f", link: "#" },
      { platform: "twitter", icon: "fab fa-twitter", link: "#" },
      { platform: "instagram", icon: "fab fa-instagram", link: "#" },
      { platform: "linkedin", icon: "fab fa-linkedin-in", link: "#" },
    ],
  },
];

const TeamSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // const goToPrevious = () => {
  //   const isFirstSlide = currentIndex === 0;
  //   const newIndex = isFirstSlide ? Math.max(0, Team.length - 3) : currentIndex - 1;
  //   setCurrentIndex(newIndex);
  // };

  // const goToNext = () => {
  //   const isLastSlide = currentIndex >= Team.length - 3;
  //   const newIndex = isLastSlide ? 0 : currentIndex + 1;
  //   setCurrentIndex(newIndex);
  // };

  return (
    <section className={cssteam.team} id="team">
      <div className={cssteam.teams_container}>
        <div className={cssteam.row}>
          <div className={cssteam.col_12}>
            <div className={`herotext ${cssteam.herotext} ${cssteam.text_center}`}>
              <h6>MEET OUR TEAM!</h6>
              <h2>Your Partner in Smarter Cattle Management</h2>
              <h5 className="pt-2">A group of cattle professionals committed to revolutionizing cattle field solutions.</h5>
            </div>
          </div>
        </div>

        <div className={cssteam.team_carousel_wrapper}>
          <div className={cssteam.team_carousel}>
            {Team.slice(currentIndex, currentIndex + 3).map((member, index) => (
              <div className={`team-item ${cssteam.team_item}`} key={index}>
                <img className={cssteam.img_fluid} src={member.image} alt={member.name} />
                <h5>{member.name}</h5>
                <p>{member.designation}</p>
              
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;

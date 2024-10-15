import React from 'react';
import { TbMathGreater } from 'react-icons/tb';
import { PiLessThanBold } from 'react-icons/pi';
import './About.css';
import aboutPic from '../../img/pic1.png'
import { FaCheck } from "react-icons/fa";
 

const About = () => {
    return (
        <section className="home-intro" id="about">
            <div className="container">
                <div className="About-flex">
                    <div className="about-col-lg-5">
                        <img src={aboutPic} className="img-fluid" alt="About Us" />
                    </div>
                    <div className="about-col-lg-6">
                        <div className="aboutText">
                            <h6>/Who we are</h6>
                            <h2>We Are Perfect Solutions for Your Cattle Feed Needs.</h2>
                            <h5 className="pt-2">
                            We provide fresh, fair, and sustainable cattle feed, sourced directly from local farmers. Our high-quality products are designed to nourish your livestock and contribute to a healthier planet. Trust PARUIT TRADING for reliable, sustainable feed solutions that support the well-being of your herds                            </h5>
                        </div>
                        <div className="about-left-flex pt-4">
                            <div className="col-12 about-left-col-md-6 block">
                                <div className="about-right">
                                    <div className="about-left-right">
                                        <h1 className="display-2">25 </h1>
                                        <h5 className="about-display-right">YEARS OF<br /> EXPERIENCE</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 about-left-col-md-6 block">
                          
 

                                <div className="about-left">
                                <ul>
                                        <li><FaCheck style={{ color: '#27AE60', marginRight:'10px' }} /> Direct Sourcing</li>
                                        <li><FaCheck style={{ color: '#27AE60',marginRight:'10px' }} /> Sustainability</li>
                                        <li><FaCheck style={{ color: '#27AE60', marginRight:'10px' }} />High-Quality</li>
                                        <li><FaCheck style={{ color: '#27AE60', marginRight:'10px' }} /> Fram Fresh</li>
                                        <li className="mb-0"><FaCheck style={{ color: '#27AE60', marginRight:'10px' }} /> Inovation</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                      
                       
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;

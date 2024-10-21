import React from 'react';
// import { TbMathGreater } from 'react-icons/tb';
// import { PiLessThanBold } from 'react-icons/pi';
import cssabout from'./About.module.css';
import aboutPic from '../../img/about.png'
import { FaCheck } from "react-icons/fa";
 

const About = () => {
    return (
        <section className={cssabout.home_intro} id="about">
            <div className={cssabout.container}>
                <div className={cssabout.About_flex}>
                    <div className={cssabout.about_col_lg_5}>
                        <img src={aboutPic} className={cssabout.img_fluid} alt="About Us" />
                    </div>
                    <div className={cssabout.about_col_lg_6}>
                        <div className={cssabout.aboutText}>
                            <h6>Who we are</h6>
                            <h2>We Are Perfect Solutions for Your Cattle Feed Needs.</h2>
                            <h5 className={cssabout.pt-2}>
                            We provide fresh, fair, and sustainable cattle feed, sourced directly from local farmers. Our high-quality products are designed to nourish your livestock and contribute to a healthier planet. Trust PARUIT TRADING for reliable, sustainable feed solutions that support the well-being of your herds                            </h5>
                        </div>
                        <div className={` ${cssabout.about_left_flex} ${cssabout.pt-4}`}>
                            <div className={` ${cssabout.col_12} ${cssabout.about_left_col_md_6} ${cssabout.block}`}>
                                <div className={cssabout.about_right}>
                                    <div className={cssabout.about_left_right}>
                                        <h1 className={cssabout.display_2}>25 </h1>
                                        <h5 className={cssabout.about_display_right}>YEARS OF<br /> EXPERIENCE</h5>
                                    </div>
                                </div>
                            </div>
                            <div className={` ${cssabout.col_12} ${cssabout.about_left_col_md_6} ${cssabout.block}`}>
                          
 

                                <div className={cssabout.about_left}>
                                <ul>
                                        <li><FaCheck style={{ color: '#27AE60', marginRight:'10px' }} /> Direct Sourcing</li>
                                        <li><FaCheck style={{ color: '#27AE60',marginRight:'10px' }} /> Sustainability</li>
                                        <li><FaCheck style={{ color: '#27AE60', marginRight:'10px' }} />High-Quality</li>
                                        <li><FaCheck style={{ color: '#27AE60', marginRight:'10px' }} /> Fram Fresh</li>
                                        <li className={cssabout.mb_0}><FaCheck style={{ color: '#27AE60', marginRight:'10px' }} /> Inovation</li>
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

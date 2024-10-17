import React, { useState, useEffect } from 'react';
import './Portfolio.css';
import { motion } from "framer-motion";

import dorb1 from '../../img/dorb/dorb.jpg';
import dorb2 from '../../img/dorb/dorb-2.jpg';
import dorb3 from '../../img/dorb/dorb-3.jpg';
import korma1 from '../../img/guar korma/guar_korma.jpg';
import korma2 from '../../img/guar korma/gura_korma-2.jpg';
import korma3 from '../../img/guar korma/gura_korma-3.jpg';
import domc1 from '../../img/Domc/domc.jpg';
import domc2 from '../../img/Domc/domc_2.jpg';
import domc3 from '../../img/Domc/domc_3.jpg';
import rice1 from '../../img/Rice bran/Rice_bran.jpg';
import rice2 from '../../img/Rice bran/Rice_bran-2.jpg';
import rice3 from '../../img/Rice bran/Rice_bran-3.jpg';
// import rice4 from '../../img/Rice bran/Rice_bran-4.jpg';
import maze1 from '../../img/Maize/maize.png';
import maze2 from '../../img/Maize/maize_2.jpg';
import maze3 from '../../img/Maize/maize_3.jpg';
// import molas from '../../img/Molasses/molasses.jpg';
import molas1 from '../../img/Molasses/molasses-2.jpg';
import molas2 from '../../img/Molasses/molasses-3.jpg';
import 'animate.css';
import { a } from '@react-spring/web';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('*');
  const [animate, setAnimate] = useState(false); // New state to trigger animation

  // Portfolio items data
  const portfolioItems = [
    { id: 1, category: 'category1', title: 'Project 1', description: 'dorb', img: dorb1 },
    { id: 2, category: 'category2', title: 'Project 2', description: 'dom', img: domc1 },
    { id: 3, category: 'category3', title: 'Project 3', description: 'korma', img: korma1 },
    { id: 4, category: 'category4', title: 'Project 4', description: 'rice', img: rice1 },
    { id: 5, category: 'category5', title: 'Project 5', description: 'mazel', img: maze1 },
    { id: 6, category: 'category6', title: 'Project 6', description: 'molas', img: molas1 },

    { id: 7, category: 'category1', title: 'Project 7', description: 'dorb', img: dorb2 },
    { id: 8, category: 'category2', title: 'Project 8', description: 'dom', img: domc2 },
    { id: 9, category: 'category3', title: 'Project 9', description: 'korma', img: korma2 },
    { id: 10, category: 'category4', title: 'Project 10', description: 'rice', img: rice2 },
    { id: 11, category: 'category5', title: 'Project 11', description: 'mazel', img: maze2 },
    { id: 12, category: 'category6', title: 'Project 12', description: 'molas', img: molas2 },

    { id: 13, category: 'category1', title: 'Project 13', description: 'dorb', img: dorb3 },
    { id: 14, category: 'category2', title: 'Project 14', description: 'dom', img: domc3 },
    { id: 15, category: 'category3', title: 'Project 15', description: 'korma', img: korma3 },
    { id: 16, category: 'category4', title: 'Project 16', description: 'rice', img: rice3 },
    { id: 17, category: 'category5', title: 'Project 17', description: 'mazel', img: maze3 },
    { id: 18, category: 'category6', title: 'Project 18', description: 'molas', img: molas2 },
  ];

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };
  
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  // Filtered portfolio items
  const filteredItems = portfolioItems.filter((item) =>
    activeFilter === '*' ? true : item.category === activeFilter
  );

  // Handle filter click and trigger animation
  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
    setAnimate(true); // Trigger animation on filter change
  };

  // Sort portfolio items based on title in ascending order
  const sortedItems = [...filteredItems].sort((a, b) => a.title.localeCompare(b.title));

  // Limit the items to 6 when the "All" filter is selected
  const displayedItems = activeFilter === '*' ? filteredItems.slice(0, 6) : filteredItems;
  // const displayedItems = filteredItems;  // Show all items when "All" filter is selected


  // Remove animation class after it completes (optional)
  useEffect(() => {
    if (animate) {
      const timeout = setTimeout(() => setAnimate(false), 5000); // Reset animation state after 1 second
      return () => clearTimeout(timeout); // Cleanup timeout on unmount
    }
  }, [animate]);

  return (
    <section id="portfolio" className="portfolio pb-0">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="herotext text-center">
              <h6>our products</h6>
              <h2>Here are our latest products</h2>
              <h5 className="pt-2">
              Now manage your farm with greater efficiency
              </h5>
            </div>
          </div>
        </div>

        <div className="Portfolio-bottom pt-5 pb-3">
          <div className="Portfolio-bottom-col-12">
            <div id="options">
              <ul id="filters" className="option-set clearfix" data-option-key="filter">
                <li>
                  <a 
                    href="#filter" 
                    className={activeFilter === '*' ? 'selected' : ''} 
                    onClick={() => handleFilterClick('*')}
                  >
                    All
                  </a>
                </li>
                <li>
                  <a 
                    href="#filter" 
                    className={activeFilter === 'category1' ? 'selected' : ''} 
                    onClick={() => handleFilterClick('category3')}
                  >
                    Domc
                  </a>
                </li>
                <li>
                  <a 
                    href="#filter" 
                    className={activeFilter === 'category2' ? 'selected' : ''} 
                    onClick={() => handleFilterClick('category2')}
                  >
                    KORMA
                  </a>
                </li>
                <li>
                  <a 
                    href="#filter" 
                    className={activeFilter === 'category1' ? 'selected' : ''} 
                    onClick={() => handleFilterClick('category1')}
                  >
                    dorb
                  </a>
                </li>
                <li>
                  <a 
                    href="#filter" 
                    className={activeFilter === 'category4' ? 'selected' : ''} 
                    onClick={() => handleFilterClick('category4')}
                  >
                    RICE BRAN
                  </a>
                </li>
                <li>
                  <a 
                    href="#filter" 
                    className={activeFilter === 'category5' ? 'selected' : ''} 
                    onClick={() => handleFilterClick('category5')}
                  >
                    MAIZE
                  </a>
                </li>
                <li>
                  <a 
                    href="#filter" 
                    className={activeFilter === 'category6' ? 'selected' : ''} 
                    onClick={() => handleFilterClick('category6')}
                  >
                    MOLASSES
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <motion.ul
    className="container"
    variants={container}
    initial="hidden"
    animate="visible"
  >
        <div className="portfolio-bottom-container row">
          {displayedItems.map((item) => (
             <div 
             key={item.id} 
             className={`Portfolio-bottom-col-12 portfolio-item ${item.category} ${animate ? 'animate__animated animate__backInRight' : ''}`}
             style={{ animationDuration: '0.1s', animationTimingFunction: 'ease-in-out' }} // Smooth animation
           >
              <div className="make4columns">
                <div className="picture">
                  <img src={item.img} alt={item.title} className="img-fluid" />
                </div>
                <div className="text-overlay">
                  {/* <h4>{item.title}</h4> */}
                  <p>{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        </motion.ul>
      </div>
    </section>
  );
};

export default Portfolio;

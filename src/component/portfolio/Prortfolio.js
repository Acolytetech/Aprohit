import React, { useState } from 'react';
import './Portfolio.css';
import branding from '../../img/branding-4.jpg';

const Portfolio = () => {
  // State to track the selected filter
  const [activeFilter, setActiveFilter] = useState('*');

  // Portfolio items data
  const portfolioItems = [
    { id: 1, category: 'category1', title: 'Project 1', description: 'Web Design', img: branding },
    { id: 2, category: 'category2', title: 'Project 2', description: 'App Development', img: branding },
    { id: 3, category: 'category1', title: 'Project 3', description: 'Web Design', img: branding },
    { id: 4, category: 'category3', title: 'Project 4', description: 'Graphic Design', img: branding },
   
  ];

  // Filter click handler
  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  return (
    <section id="portfolio" className="portfolio pb-0">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="herotext text-center">
              <h6>Portfolio</h6>
              <h2>Our Latest Projects</h2>
              <h5 className="pt-2">
                There are three responses to a piece of design – 
                <br className="d-none d-md-block" />yes, no, and WOW! Wow is the one to aim for.
              </h5>
            </div>
          </div>
        </div>

        <div className="Portfolio-bottom pt-5 pb-3">
          <div className="Portfolio-bottom-col-12">
            <div id="options">
              <ul id="filters" className="option-set clearfix" data-option-key="filter">
                <li><a href="#filter" className={activeFilter === '*' ? 'selected' : ''} onClick={() => handleFilterClick('*')}>All</a></li>
                <li><a href="#filter" className={activeFilter === 'category1' ? 'selected' : ''} onClick={() => handleFilterClick('category1')}>Web Design</a></li>
                <li><a href="#filter" className={activeFilter === 'category2' ? 'selected' : ''} onClick={() => handleFilterClick('category2')}>App Development</a></li>
                <li><a href="#filter" className={activeFilter === 'category3' ? 'selected' : ''} onClick={() => handleFilterClick('category3')}>Graphic Design</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="portfolio-bottom-container row">
          {portfolioItems.map((item) => (
            <div 
              key={item.id} 
              className={`Portfolio-bottom-col-12 portfolio-item ${item.category} ${activeFilter === '*' || activeFilter === item.category ? 'active' : ''}`}
            >
              <div className="make4columns">
                <div className="picture">
                  <img src={item.img} alt={item.title} className="img-fluid" />
                </div>
                <div className="text-overlay">
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

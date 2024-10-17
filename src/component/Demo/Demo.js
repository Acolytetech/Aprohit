import React, { useEffect, useState } from 'react';
import './Demo.css'
import { gsap } from 'gsap';
import { Flip } from 'gsap/Flip';

gsap.registerPlugin(Flip);

const Demo = () => {
  const [filters, setFilters] = useState({
    all: true,
    blue: true,
    pink: true,
    purple: true,
  });

  const items = [
    { id: 1, class: 'gradient-blue' },
    { id: 2, class: 'gradient-pink' },
    { id: 3, class: 'gradient-purple' },
    { id: 4, class: 'gradient-pink' },
    { id: 5, class: 'gradient-blue' },
    { id: 6, class: 'gradient-purple' },
    { id: 7, class: 'gradient-blue' },
    { id: 8, class: 'gradient-purple' },
  ];

  useEffect(() => {
    updateFilters();
  }, [filters]);

  const updateFilters = () => {
    const state = Flip.getState('.item');
    const activeFilters = Object.keys(filters).filter(key => filters[key] && key !== 'all');
    
    // Update display for items based on active filters
    document.querySelectorAll('.item').forEach(item => {
      const shouldShow = activeFilters.some(filter => item.classList.contains(`gradient-${filter}`));
      item.style.display = shouldShow || filters.all ? 'inline-flex' : 'none';
    });

    Flip.from(state, {
      duration: 0.7,
      scale: true,
      ease: 'power1.inOut',
      stagger: 0.08,
      absolute: true,
      onEnter: elements => gsap.fromTo(elements, { opacity: 0, scale: 0 }, { opacity: 1, scale: 1, duration: 1 }),
      onLeave: elements => gsap.to(elements, { opacity: 0, scale: 0, duration: 1 }),
    });
  };

  const handleFilterChange = (e) => {
    const { id, checked } = e.target;
    if (id === 'all') {
      setFilters({ all: checked, blue: checked, pink: checked, purple: checked });
    } else {
      setFilters(prev => ({
        ...prev,
        [id]: checked,
        all: false,
      }));
    }
  };

  return (
    <div className="container">
      <div className="buttons-container">
        <div className="checkboxes">
          <label className="tag-button">
            <input
              type="checkbox"
              id="all"
              checked={filters.all}
              onChange={handleFilterChange}
            />
            <span className="checked">All</span>
          </label>
          <label className="tag-button">
            <input
              type="checkbox"
              id="blue"
              checked={filters.blue}
              onChange={handleFilterChange}
            />
            <span className="checked">Blue</span>
          </label>
          <label className="tag-button">
            <input
              type="checkbox"
              id="pink"
              checked={filters.pink}
              onChange={handleFilterChange}
            />
            <span className="checked">Pink</span>
          </label>
          <label className="tag-button">
            <input
              type="checkbox"
              id="purple"
              checked={filters.purple}
              onChange={handleFilterChange}
            />
            <span className="checked">Purple</span>
          </label>
        </div>
      </div>
      <div className="box-container">
        {items.map(item => (
          <div key={item.id} className={`item ${item.class}`}></div>
        ))}
      </div>
    </div>
  );
};

export default Demo;

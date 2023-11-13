// src/pages/JobAreas.js
import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './JobAreas.css';

const JobAreas = () => {
  const jobAreasData = [
    {
      title: 'Área 1',
      description: 'Descrição da Área 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      title: 'Área 2',
      description: 'Descrição da Área 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      title: 'Área 3',
      description: 'Descrição da Área 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      title: 'Área 4',
      description: 'Descrição da Área 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    }
  ];

  const [expandedArea, setExpandedArea] = useState(null);

  const handleToggleExpansion = (index) => {
    setExpandedArea(expandedArea === index ? null : index);
  };

  return (
    <div>
      <Header />
      <div className="job-areas-content">
        <h2>Áreas de Trabalho</h2>
        {jobAreasData.map((area, index) => (
          <div className="job-area" key={index}>
            <div className="job-area-header" onClick={() => handleToggleExpansion(index)}>
              <h3>{area.title}</h3>
              <span className={expandedArea === index ? 'arrow-up' : 'arrow-down'}>&#9660;</span>
            </div>
            {expandedArea === index && (
              <div className="job-area-description">
                <p>{area.description}</p>
              </div>
            )}
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default JobAreas;

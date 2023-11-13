// src/pages/JobListings.js
import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './JobListings.css';

const JobListings = () => {
  const jobListingsData = [
    {
      title: 'Desenvolvedor Frontend',
      company: 'Empresa A',
      requirements: ['HTML', 'CSS', 'JavaScript'],
    },
    {
      title: 'Desenvolvedor Frontend',
      company: 'Empresa A',
      requirements: ['HTML', 'CSS', 'JavaScript'],
    },
    {
      title: 'Desenvolvedor Frontend',
      company: 'Empresa A',
      requirements: ['HTML', 'CSS', 'JavaScript'],
    },
    {
      title: 'Analista de Dados',
      company: 'Empresa B',
      requirements: ['SQL', 'Python', 'Estatística'],
    },
    {
      title: 'Engenheiro de Software',
      company: 'Empresa C',
      requirements: ['Java', 'Spring', 'Banco de Dados'],
    },
    {
      title: 'Engenheiro de Software',
      company: 'Empresa C',
      requirements: ['Java', 'Spring', 'Banco de Dados'],
    },
    // Adicione mais vagas de emprego conforme necessário
  ];

  const [completedDisciplines, setCompletedDisciplines] = useState([]);

  const handleDisciplineToggle = (discipline) => {
    setCompletedDisciplines((prevDisciplines) =>
      prevDisciplines.includes(discipline)
        ? prevDisciplines.filter((item) => item !== discipline)
        : [...prevDisciplines, discipline]
    );
  };

  const isDisciplineCompleted = (discipline) => completedDisciplines.includes(discipline);

  return (
    <div>
      <Header />
      <div className="job-listings-content">
        <h2>Vagas em Aberto</h2>
        <div className="job-listings-list">
          {jobListingsData.map((job, index) => (
            <div className="job-listing" key={index}>
              <h3>{job.title}</h3>
              <p>{job.company}</p>
              <div className="requirements">
                {job.requirements.map((requirement, i) => (
                  <span
                    key={i}
                    className={`requirement ${isDisciplineCompleted(requirement) ? 'completed' : ''}`}
                    onClick={() => handleDisciplineToggle(requirement)}
                  >
                    {requirement}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default JobListings;

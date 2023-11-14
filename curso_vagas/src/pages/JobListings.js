// src/pages/JobListings.js
import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './JobListings.css';

const JobListings = () => {
  const jobListingsData = [
    {
      title: 'ESPECIALISTA EM E-MAIL MARKETING = HTML E CSS INLINE',
      company: 'Leilão Publico',
      requirements: ['HTML', 'CSS', 'Marketing', 'Pacote Ofice'],
      responsibilities: 'Anúncios Na Internet, Anúncios Em Sites Classificados E Redes Sociais. Divulgar Mídias Alternativas De Amplo Alcance. Eventualmente Irá Elaborar, Criar, Publicar Flyers Eletrônicos, Banners E Outras Formas De Divulgação Ampla Em Ambiente Web Relacionados Com Vendas Públicas; Administrativo De Escritório Rotinas Internas (Via De Regra). Adobe Illustrator, Word, Excel, Paint, Base Gmail, Google Drive, Google Agenda. ',
    },
    {
      title: ' DESIGN E CRIAÇAO BANNERS',
      company: 'Leilão Publico',
      requirements: ['Adobe Photoshop', 'Desing', 'Marketing'],
      responsibilities: 'Anúncios Na Internet, Anúncios Em Sites Classificados E Redes Sociais. Divulgar Mídias Alternativas De Amplo Alcance. Eventualmente Irá Elaborar, Criar, Publicar Flyers Eletrônicos, Banners E Outras Formas De Divulgação Ampla Em Ambiente Web Relacionados Com Vendas Públicas; Administrativo De Escritório Rotinas Internas (Via De Regra). Adobe Illustrator, Word, Excel, Paint, Base Gmail, Google Drive, Google Agenda. ',
    },
    {
      title: 'Estágio em Análise de Dados',
      company: 'Doutorie',
      requirements: ['SQL', 'Python', 'Pacote Office'],
      responsibilities: '•  Coletar, selecionar e otimizar dados para atender às necessidades do cliente. \n•  Utilizar insights da análise de dados para melhorar ofertas e processos empresariais. •  Analisar grandes volumes de dados para extrair conhecimento e aprimorar a empresa. •  Apresentar resultados de forma acessível, usando ferramentas de visualização de dados.',
    },
    {
      title: 'estágio em suporte',
      company: 'Bendito',
      requirements: ['Comunicação', 'Gestão da Informação'],
      responsibilities: '•  Atuar com suporte direto aos clientes; •  Retirar dúvidas dos usuários; •  Documentar erros na ferramenta e reportá-los ao time de produto; •  Participar ativamente da jornada de retenção de clientes; •  Participar da elaboração do roadmap de produto.',
    },
    {
      title: 'estágio em área administrativa',
      company: 'Facilita',
      requirements: ['Comunicação', 'Pacote Office', 'Licitações'],
      responsibilities: '• Realizar pesquisa direcionada nos portais de licitação • Organizar cada oportunidade destinando-as por data de cadastro. • Captar novos portais de licitações.  • Trazer informações de pregões presenciais, cotações, dispensas, compras diretas de forma imediata para o setor comercial. • Selecionar oportunidades dentro do software',
    },
    {
      title: ' Desenvolvimento de Aplicativo',
      company: 'Facilita',
      requirements: ['JavaScript', 'React Native', 'POO'],
      responsibilities: 'Atuar no desenvolvimento de softwares escritos em, mas não limitados a, linguagem Javascript com Framework React Native, programando, codificando, testando, especificando e/ou validando;Pesquisar, estudar e propor novas  tecnologias, funcionalidades, produtos e melhorias. Auxílio em documentação, componentes e telas dos Apps. Empresa brasileira com atuação global, desenvolvedora de soluções de hardware e software para os mercados de telecomunicações, controle de acesso e IoT.',
    },
  ];

  const [completedDisciplines, setCompletedDisciplines] = useState([]);
  const [showDetailsIndex, setShowDetailsIndex] = useState(null);

  const handleDisciplineToggle = (discipline) => {
    setCompletedDisciplines((prevDisciplines) =>
      prevDisciplines.includes(discipline)
        ? prevDisciplines.filter((item) => item !== discipline)
        : [...prevDisciplines, discipline]
    );
  };

  const isDisciplineCompleted = (discipline) => completedDisciplines.includes(discipline);

  const handleShowDetails = (index) => {
    setShowDetailsIndex(index);
  };

  const handleHideDetails = () => {
    setShowDetailsIndex(null);
  };

  return (
    <div>
      <Header />
      <div className="job-listings-content">
        <h2>Vagas em Aberto</h2>
        <div className="job-listings-list">
          {jobListingsData.map((job, index) => (
            <div className="job-listing" key={index}>
              <h3>{job.title}</h3>
              <p><strong>Empresa: {job.company}</strong></p>
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
              <button className="info-button" onClick={() => handleShowDetails(index)}>
                + Informações
              </button>
              {showDetailsIndex === index && (
                <div className="job-details">
                  <p><strong>Responsabilidades:</strong> {job.responsibilities}</p>
                  {/* Adicione mais informações conforme necessário */}
                  <button className="hide-details-button" onClick={handleHideDetails}>
                    Ocultar Detalhes
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default JobListings;
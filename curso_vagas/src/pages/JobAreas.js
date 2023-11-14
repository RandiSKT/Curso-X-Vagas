// src/pages/JobAreas.js
import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './JobAreas.css';

const JobAreas = () => {
  const jobAreasData = [
    {
      title: 'Analise de Dados',
      description: 'Na área de análise de dados, o profissional mergulha em conjuntos de dados para extrair insights valiosos. Isso envolve habilidades em estatísticas, programação e ferramentas de visualização. O analista de dados trabalha para transformar dados brutos em informações significativas, oferecendo suporte às decisões estratégicas da empresa.',
    },
    {
      title: 'Desenvolvimento',
      description: 'No espaço de desenvolvimento, os profissionais são arquitetos de soluções tecnológicas. Eles codificam, testam e implementam sistemas, aplicativos e softwares, transformando ideias em realidade digital. O desenvolvedor precisa ser versátil, adaptando-se a diferentes linguagens de programação e metodologias ágeis.',
    },
    {
      title: 'Marketing',
      description: 'Trabalhar em marketing na ciência da informação envolve a criação de estratégias digitais. Profissionais de marketing exploram dados para entender o comportamento do consumidor, utilizam técnicas de SEO para aumentar a visibilidade online e gerenciam campanhas publicitárias nas redes sociais. A criatividade é combinada com análise de dados para atingir o público-alvo.',
    },
    {
      title: 'Arquivo',
      description: 'A gestão de arquivos é a arte de organizar informações. Profissionais dessa área trabalham na classificação, catalogação e preservação de documentos, seja em papel ou formato digital. A eficiência na recuperação de informações é crucial, assim como a manutenção da integridade dos dados ao longo do tempo.',
    },
    {
      title: 'DPO (Data Protection Officer)',
      description: 'O DPO é o guardião da privacidade e segurança dos dados. Esse profissional gerencia políticas de proteção de dados, assegurando a conformidade com regulamentações. Trabalhar como DPO envolve estar atualizado sobre leis de privacidade, colaborar com equipes de TI e sensibilizar a organização sobre a importância da proteção de dados.',
    },
    {
      title: ' User Experience (UX) / Customer Experience (CX) / Design',
      description: 'Na área de UX/CX/Design, o foco está na experiência do usuário. Profissionais projetam interfaces intuitivas, garantem a navegabilidade eficiente e criam designs atraentes. Combinam elementos estéticos com a funcionalidade para garantir que os usuários tenham interações positivas com produtos digitais, desde sites até aplicativos.',
    },
    {
      title: ' Governança de TI',
      description: 'Na governança de TI, os profissionais supervisionam políticas, procedimentos e práticas para garantir que os recursos de tecnologia da informação atendam aos objetivos organizacionais. Posições como "Gerente de Governança de TI" e "Analista de Governança de TI" envolvem a implementação de melhores práticas e padrões para otimizar o uso da tecnologia na empresa.',
    },
    {
      title: ' Analista de Processos',
      description: 'Analistas de processos trabalham na melhoria contínua de operações organizacionais, usando ferramentas para mapeamento, análise e otimização de processos. Títulos como "Analista de Processos" ou "Especialista em Melhoria Contínua" focam na eficiência operacional e na implementação de soluções baseadas em dados.',
    },
    {
      title: ' Gerente de Projetos',
      description: 'O Gerente de Projetos é responsável por liderar e coordenar todas as fases de um projeto, desde o planejamento até a execução e entrega. Utiliza ferramentas de gestão de projetos, e colabora com equipes multidisciplinares para garantir o cumprimento dos prazos e a realização dos objetivos do projeto.',
    },
    {
      title: ' Empreendedor',
      description: 'O empreendedor é aquele que concebe, desenvolve e lança novos empreendimentos. Utiliza diversas ferramentas para pesquisa de mercado, elaboração de planos de negócios e estratégias de marketing. A criatividade e a capacidade de identificar oportunidades são cruciais para o sucesso nesse papel.',
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

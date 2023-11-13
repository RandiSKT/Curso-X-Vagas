// src/pages/UploadCV.js
import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './UploadCV.css';

const UploadCV = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleUpload = () => {
    if (selectedFile) {
      console.log('Arquivo selecionado:', selectedFile.name);
      // Adicione lógica para processar o arquivo aqui
    } else {
      console.log('Nenhum arquivo selecionado.');
    }
  };

  return (
    <div className="upload-container">
      <Header />
      <div className="upload-content">
        <h2>Upload do Currículo</h2>
        <p>
          Faça o upload do seu controle curricular. O sistema irá analisar as disciplinas já cursadas
          para indicar as vagas de mercado para as quais você está apto.
        </p>
        <div className="file-drop-area">
          <input type="file" accept=".pdf" onChange={handleFileChange} />
          <p>Arraste e solte o arquivo ou clique aqui para selecionar</p>
        </div>
        <button onClick={handleUpload}>Enviar Currículo</button>
      </div>
      <Footer />
    </div>
  );
};

export default UploadCV;

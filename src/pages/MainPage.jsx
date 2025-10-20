import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MainPage = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const navigate = useNavigate();

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    if (file && file.type === 'application/pdf') {
      setSelectedFile(file);
    } else {
      alert('PDF 파일만 선택해주세요!');
    }
  };

  const handleStartPresentation = () => {
    if (selectedFile) {
      navigate('/create-presentation', { 
        state: { pdfFile: selectedFile, fileName: selectedFile.name } 
      });
    } else {
      alert('먼저 PDF 파일을 업로드해주세요!');
    }
  };

  return (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '40px'
    }}>
      <input
        type="file"
        accept=".pdf"
        onChange={handleFileSelect}
        style={{ 
          marginBottom: '20px',
          padding: '10px',
          fontSize: '16px'
        }}
      />

      <button 
        onClick={handleStartPresentation}
        disabled={!selectedFile}
        style={{
          padding: '15px 30px',
          backgroundColor: selectedFile ? '#4A90E2' : '#ccc',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          fontSize: '16px',
          cursor: selectedFile ? 'pointer' : 'not-allowed'
        }}
      >
        발표 시작하기
      </button>
    </div>
  );
};

export default MainPage;

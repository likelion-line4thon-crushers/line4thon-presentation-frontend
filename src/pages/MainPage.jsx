import React from 'react';
import { Link } from 'react-router-dom';

const MainPage = () => {
  return (
    <div style={{ padding: '40px', textAlign: 'center' }}>
      <h1 style={{ color: '#4A90E2', marginBottom: '20px' }}>
        🎤 보이니 (Boini)
      </h1>
      <p style={{ fontSize: '18px', color: '#666', marginBottom: '40px' }}>
        실시간 발표 동기화 플랫폼
      </p>
      
      <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
        <button 
          style={{
            padding: '15px 30px',
            backgroundColor: '#4A90E2',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            fontSize: '16px',
            cursor: 'pointer'
          }}
        >
          📊 발표 시작하기
        </button>
        
        <button 
          style={{
            padding: '15px 30px',
            backgroundColor: '#7ED321',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            fontSize: '16px',
            cursor: 'pointer'
          }}
        >
          👥 청중으로 참여
        </button>
        
        <Link 
          to="/pdf-test"
          style={{
            padding: '15px 30px',
            backgroundColor: '#F5A623',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            fontSize: '16px',
            textDecoration: 'none',
            display: 'inline-block'
          }}
        >
          📄 PDF 테스트
        </Link>
      </div>
    </div>
  );
};

export default MainPage;

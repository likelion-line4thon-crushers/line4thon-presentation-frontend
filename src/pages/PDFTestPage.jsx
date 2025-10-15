import React, { useState } from 'react';
import * as pdfjsLib from "pdfjs-dist";
import pdfjsWorker from "pdfjs-dist/build/pdf.worker.min.js";

// PDF.js 워커 설정
pdfjsLib.GlobalWorkerOptions.workerSrc = pdfjsWorker;

const PDFTestPage = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileInfo, setFileInfo] = useState(null);
  const [slides, setSlides] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // PDF를 이미지로 변환하는 함수
  const convertPdfToImages = async (file) => {
    try {
      console.log('PDF를 이미지로 변환 시작...');
      const arrayBuffer = await file.arrayBuffer();
      const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
      const images = [];

      console.log(`총 ${pdf.numPages}페이지 변환 중...`);

      for (let i = 1; i <= pdf.numPages; i++) {
        console.log(`${i}/${pdf.numPages} 페이지 처리 중...`);
        const page = await pdf.getPage(i);
        const viewport = page.getViewport({ scale: 1.5 }); // 1.5배 확대
        const canvas = document.createElement("canvas");
        const context = canvas.getContext("2d");
        canvas.width = viewport.width;
        canvas.height = viewport.height;

        await page.render({ canvasContext: context, viewport }).promise;

        // canvas → base64 이미지 변환
        const img = canvas.toDataURL("image/png");
        images.push(img);
      }

      console.log('PDF 변환 완료!');
      return images;
    } catch (error) {
      console.error('PDF 변환 오류:', error);
      throw error;
    }
  };

  const handleFileSelect = async (event) => {
    const file = event.target.files[0];
    console.log('선택된 파일:', file);
    
    if (file && file.type === 'application/pdf') {
      console.log('PDF 파일 선택됨');
      setSelectedFile(file);
      setFileInfo({
        name: file.name,
        size: (file.size / 1024 / 1024).toFixed(2) + ' MB',
        type: file.type,
        lastModified: new Date(file.lastModified).toLocaleString()
      });

      // PDF를 이미지로 변환
      setLoading(true);
      setError(null);
      setSlides([]);
      setCurrentPage(0);

      try {
        const images = await convertPdfToImages(file);
        setSlides(images);
        console.log(`${images.length}개 페이지가 이미지로 변환되었습니다.`);
      } catch (error) {
        console.error('PDF 변환 실패:', error);
        setError('PDF 파일을 변환할 수 없습니다: ' + error.message);
      } finally {
        setLoading(false);
      }
    } else {
      console.log('PDF가 아닌 파일 선택됨');
      alert('PDF 파일만 선택해주세요!');
    }
  };

  const goToPage = (pageNumber) => {
    if (pageNumber >= 0 && pageNumber < slides.length) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <div style={{ padding: '40px', maxWidth: '1000px', margin: '0 auto' }}>
      <h1 style={{ color: '#4A90E2', marginBottom: '30px' }}>
        📄 PDF → 이미지 변환 테스트
      </h1>
      
      <div style={{ 
        border: '2px dashed #ddd', 
        padding: '20px', 
        textAlign: 'center',
        borderRadius: '8px',
        marginBottom: '30px'
      }}>
        <input
          type="file"
          accept=".pdf"
          onChange={handleFileSelect}
          style={{ marginBottom: '10px' }}
        />
        <p style={{ color: '#666', fontSize: '14px' }}>
          PDF 파일을 선택하면 이미지로 변환됩니다
        </p>
      </div>

      {loading && (
        <div style={{
          backgroundColor: '#e8f4fd',
          color: '#4A90E2',
          padding: '20px',
          borderRadius: '8px',
          marginBottom: '20px',
          textAlign: 'center'
        }}>
          📄 PDF를 이미지로 변환 중...
          <br />
          <small style={{ color: '#666', marginTop: '10px', display: 'block' }}>
            브라우저 콘솔(F12)에서 진행 상황을 확인할 수 있습니다.
          </small>
        </div>
      )}

      {error && (
        <div style={{
          backgroundColor: '#ffeaea',
          color: '#D0021B',
          padding: '15px',
          borderRadius: '8px',
          marginBottom: '20px',
          textAlign: 'center'
        }}>
          ❌ {error}
        </div>
      )}

      {fileInfo && (
        <div style={{
          backgroundColor: '#f8f9fa',
          padding: '20px',
          borderRadius: '8px',
          marginBottom: '20px'
        }}>
          <h3>📋 PDF 파일 정보</h3>
          <p><strong>파일명:</strong> {fileInfo.name}</p>
          <p><strong>크기:</strong> {fileInfo.size}</p>
          <p><strong>타입:</strong> {fileInfo.type}</p>
          <p><strong>수정일:</strong> {fileInfo.lastModified}</p>
        </div>
      )}

      {slides.length > 0 && (
        <>
          {/* 페이지 네비게이션 */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '15px',
            marginBottom: '20px',
            padding: '15px',
            backgroundColor: '#f8f9fa',
            borderRadius: '8px'
          }}>
            <button
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage <= 0}
              style={{
                padding: '8px 16px',
                border: '2px solid #4A90E2',
                background: currentPage <= 0 ? '#f5f5f5' : 'white',
                color: currentPage <= 0 ? '#ccc' : '#4A90E2',
                borderRadius: '6px',
                cursor: currentPage <= 0 ? 'not-allowed' : 'pointer'
              }}
            >
              ← 이전
            </button>
            
            <span style={{ fontSize: '16px', color: '#666' }}>
              {currentPage + 1} / {slides.length}
            </span>
            
            <button
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage >= slides.length - 1}
              style={{
                padding: '8px 16px',
                border: '2px solid #4A90E2',
                background: currentPage >= slides.length - 1 ? '#f5f5f5' : 'white',
                color: currentPage >= slides.length - 1 ? '#ccc' : '#4A90E2',
                borderRadius: '6px',
                cursor: currentPage >= slides.length - 1 ? 'not-allowed' : 'pointer'
              }}
            >
              다음 →
            </button>
          </div>

          {/* 이미지 표시 */}
          <div style={{
            backgroundColor: 'white',
            border: '1px solid #ddd',
            borderRadius: '8px',
            padding: '20px',
            textAlign: 'center',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            marginBottom: '20px'
          }}>
            <img
              src={slides[currentPage]}
              alt={`페이지 ${currentPage + 1}`}
              style={{
                maxWidth: '100%',
                height: 'auto',
                border: '1px solid #eee',
                borderRadius: '4px'
              }}
            />
          </div>

          <div style={{
            backgroundColor: '#e8f5e8',
            padding: '15px',
            borderRadius: '8px',
            textAlign: 'center',
            border: '1px solid #7ED321'
          }}>
            <p style={{ color: '#2d5a2d', fontWeight: 'bold', margin: 0 }}>
              ✅ PDF 변환 성공! {slides.length}페이지가 이미지로 변환되었습니다.
            </p>
            <p style={{ color: '#666', marginTop: '10px', fontSize: '14px' }}>
              각 페이지가 base64 이미지로 변환되어 slides 배열에 저장되었습니다.
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default PDFTestPage;

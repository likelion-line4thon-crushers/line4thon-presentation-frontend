import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import usePdfConverter from "../../hooks/usePdfConverter";
import usePresentationSession from "../../hooks/usePresentationSession";
import Layout from "../../components/Layout/LayoutContainer";
import SidebarSlides from "../../components/SidebarSlides";
import SlideViewer from "../../components/SlideViewer";
import SettingsPanel from "../../components/SettingsPanel";

const PresentationPrepPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { pdfFile } = location.state || {};

  const [currentSlide, setCurrentSlide] = useState(0);
  const { slides, convertPdfToImages } = usePdfConverter();
  const {
    participantCount,
    maxParticipants,
    setMaxParticipants,
    sessionId,
    features,
    toggleFeature,
  } = usePresentationSession();

  useEffect(() => {
    if (pdfFile) convertPdfToImages(pdfFile);
    else navigate("/");
  }, [pdfFile]);

  const handleStart = () =>
    navigate("/presentation", { state: { slides, sessionId, features, maxParticipants } });

  if (!slides.length) return <div style={{ marginTop: "120px", textAlign: "center" }}>발표 준비 중...</div>;

  return (
    <Layout>
      <SidebarSlides
        slides={slides}
        currentSlide={currentSlide}
        setCurrentSlide={setCurrentSlide}
        participantCount={participantCount}
        maxParticipants={maxParticipants}
      />
      <SlideViewer slides={slides} currentSlide={currentSlide} setCurrentSlide={setCurrentSlide} mode="prepare"/>
      <SettingsPanel />
    </Layout>
  );
};

export default PresentationPrepPage;

import React, { useState, useEffect, useCallback } from 'react';
import Header from './components/Header';
import NavigationFooter from './components/NavigationFooter';
import SpeakerNotesDrawer from './components/SpeakerNotesDrawer';
import ThumbnailsModal from './components/ThumbnailsModal';
import { SLIDES_DATA } from './data/slides';
import { 
  Slide1, Slide2, Slide3, Slide4, Slide5, 
  Slide6, Slide7, Slide8, Slide9 
} from './components/SlideViews';
import { sound } from './utils/audio';

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showNotes, setShowNotes] = useState(false);
  const [showThumbnails, setShowThumbnails] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const totalSlides = SLIDES_DATA.length;

  const nextSlide = useCallback(() => {
    setCurrentSlide(prev => (prev < totalSlides - 1 ? prev + 1 : prev));
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentSlide(prev => (prev > 0 ? prev - 1 : prev));
  }, []);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().then(() => setIsFullscreen(true)).catch(() => {});
    } else {
      document.exitFullscreen().then(() => setIsFullscreen(false)).catch(() => {});
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Don't trigger shortcuts if typing inside an input/textarea
      if (['INPUT', 'TEXTAREA'].includes(e.target.tagName)) return;

      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') {
        e.preventDefault();
        sound.playChime();
        nextSlide();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        sound.playClick();
        prevSlide();
      } else if (e.key === 'f' || e.key === 'F') {
        e.preventDefault();
        toggleFullscreen();
      } else if (e.key === 'n' || e.key === 'N') {
        e.preventDefault();
        setShowNotes(prev => !prev);
      } else if (e.key === 'm' || e.key === 'M') {
        e.preventDefault();
        sound.toggle();
      } else if (e.key === 'Escape') {
        setShowNotes(false);
        setShowThumbnails(false);
      } else if (!isNaN(parseInt(e.key)) && parseInt(e.key) >= 1 && parseInt(e.key) <= 9) {
        sound.playClick();
        setCurrentSlide(parseInt(e.key) - 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  // Render the current active slide component
  const renderSlide = () => {
    switch (currentSlide) {
      case 0: return <Slide1 />;
      case 1: return <Slide2 />;
      case 2: return <Slide3 />;
      case 3: return <Slide4 />;
      case 4: return <Slide5 />;
      case 5: return <Slide6 />;
      case 6: return <Slide7 />;
      case 7: return <Slide8 />;
      case 8: return <Slide9 />;
      default: return <Slide1 />;
    }
  };

  return (
    <div className={`deck-app-container slide-theme-${currentSlide + 1}`}>
      {/* Dynamic ambient particles & subtle glow */}
      <div className="ambient-background">
        <div className="ambient-glow glow-1" />
        <div className="ambient-glow glow-2" />
        <div className="ambient-stars" />
      </div>

      {/* Top Duolingo gamified progress header */}
      <Header 
        currentSlide={currentSlide}
        totalSlides={totalSlides}
        toggleNotes={() => setShowNotes(prev => !prev)}
        showNotes={showNotes}
        toggleFullscreen={toggleFullscreen}
        isFullscreen={isFullscreen}
      />

      {/* Slide viewport */}
      <main className="deck-main-viewport">
        <div className="slide-frame">
          {renderSlide()}
        </div>
      </main>

      {/* Bottom tactile 3D navigation footer */}
      <NavigationFooter 
        currentSlide={currentSlide}
        totalSlides={totalSlides}
        onNext={nextSlide}
        onPrev={prevSlide}
        onOpenThumbnails={() => setShowThumbnails(true)}
      />

      {/* Hidden collapsible presenter teleprompter */}
      <SpeakerNotesDrawer 
        isOpen={showNotes}
        onClose={() => setShowNotes(false)}
        currentSlideData={SLIDES_DATA[currentSlide]}
        currentSlideIndex={currentSlide}
        totalSlides={totalSlides}
      />

      {/* Slide grid overview modal */}
      <ThumbnailsModal 
        isOpen={showThumbnails}
        onClose={() => setShowThumbnails(false)}
        slides={SLIDES_DATA}
        currentSlide={currentSlide}
        onSelectSlide={(idx) => setCurrentSlide(idx)}
      />
    </div>
  );
}

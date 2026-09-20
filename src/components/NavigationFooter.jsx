import React from 'react';
import { ArrowLeft, ArrowRight, Grid } from 'lucide-react';
import { sound } from '../utils/audio';

export default function NavigationFooter({ 
  currentSlide, 
  totalSlides, 
  onNext, 
  onPrev, 
  onOpenThumbnails 
}) {
  const isFirst = currentSlide === 0;
  const isLast = currentSlide === totalSlides - 1;

  const handleNextClick = () => {
    sound.playChime();
    onNext();
  };

  const handlePrevClick = () => {
    sound.playClick();
    onPrev();
  };

  return (
    <footer className="duo-footer">
      <div className="footer-left">
        <button 
          className="duo-btn-3d duo-btn-secondary"
          onClick={handlePrevClick}
          disabled={isFirst}
        >
          <ArrowLeft size={18} />
          <span>ANTERIOR</span>
        </button>

        <button 
          className="duo-btn-icon-subtle"
          onClick={onOpenThumbnails}
          title="Ver todas las diapositivas (Grid)"
        >
          <Grid size={18} />
        </button>
      </div>

      <div className="footer-center">
        <div className="keyboard-shortcuts-pill">
          <span>Usa <kbd>←</kbd> <kbd>→</kbd> o <kbd>Espacio</kbd></span>
        </div>
      </div>

      <div className="footer-right">
        <button 
          className="duo-btn-3d duo-btn-green"
          onClick={handleNextClick}
        >
          <span>{isLast ? 'FINALIZAR 🦉' : 'CONTINUAR'}</span>
          <ArrowRight size={18} />
        </button>
      </div>
    </footer>
  );
}

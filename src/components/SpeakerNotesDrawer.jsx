import React from 'react';
import { X, Mic, Volume2 } from 'lucide-react';
import { sound } from '../utils/audio';

export default function SpeakerNotesDrawer({ 
  isOpen, 
  onClose, 
  currentSlideData, 
  currentSlideIndex,
  totalSlides 
}) {
  if (!isOpen) return null;

  return (
    <div className="speaker-notes-overlay">
      <div className="speaker-notes-backdrop" onClick={onClose} />
      <aside className="speaker-notes-panel">
        <div className="notes-header">
          <div className="notes-badge">
            <Mic size={16} className="text-green-400" />
            <span>GUION PRIVADO DEL ORADOR</span>
          </div>
          <button className="close-notes-btn" onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        <div className="notes-slide-indicator">
          <span className="slide-tag">Diapositiva {currentSlideIndex + 1} de {totalSlides}</span>
          <h3 className="notes-slide-title">{currentSlideData.title}</h3>
        </div>

        <div className="notes-content-box">
          <div className="speech-quote-icon">“</div>
          <p className="speaker-script-text">
            {currentSlideData.speakerNotes}
          </p>
        </div>

        <div className="notes-footer-tip">
          <span>💡 Este texto es exclusivamente para tu apoyo al hablar. Las diapositivas que ve la audiencia solo muestran el contenido gráfico oficial.</span>
        </div>
      </aside>
    </div>
  );
}

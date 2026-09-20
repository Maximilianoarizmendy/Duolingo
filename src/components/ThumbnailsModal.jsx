import React from 'react';
import { X } from 'lucide-react';
import { sound } from '../utils/audio';

export default function ThumbnailsModal({ 
  isOpen, 
  onClose, 
  slides, 
  currentSlide, 
  onSelectSlide 
}) {
  if (!isOpen) return null;

  return (
    <div className="thumbnails-modal-overlay">
      <div className="thumbnails-modal-backdrop" onClick={onClose} />
      <div className="thumbnails-modal-content">
        <div className="thumbnails-header">
          <h2>MAPA DE DIAPOSITIVAS</h2>
          <button className="close-notes-btn" onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        <div className="thumbnails-grid">
          {slides.map((s, idx) => (
            <div 
              key={s.id}
              className={`thumbnail-card ${currentSlide === idx ? 'current' : ''}`}
              onClick={() => {
                sound.playClick();
                onSelectSlide(idx);
                onClose();
              }}
            >
              <div className="thumb-num-badge">#{idx + 1}</div>
              <div className="thumb-preview">
                <span className="thumb-title">{s.title}</span>
                {s.subtitle && <span className="thumb-sub">{s.subtitle}</span>}
                <div className="thumb-pill-count">
                  {s.items ? `${s.items.length} puntos` : ''}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

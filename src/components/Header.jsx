import React, { useState } from 'react';
import { Volume2, VolumeX, Maximize, Minimize, FileText, Sparkles, Flame, Heart, Gem } from 'lucide-react';
import { sound } from '../utils/audio';

export default function Header({ 
  currentSlide, 
  totalSlides, 
  toggleNotes, 
  showNotes, 
  toggleFullscreen, 
  isFullscreen,
  streakCount = 247
}) {
  const [soundOn, setSoundOn] = useState(true);

  const handleSoundToggle = () => {
    const state = sound.toggle();
    setSoundOn(state);
    if (state) sound.playClick();
  };

  const progressPct = ((currentSlide + 1) / totalSlides) * 100;

  return (
    <header className="duo-header">
      {/* Left: Branding & current slide indicator */}
      <div className="header-left">
        <div className="duo-brand-badge">
          <span className="brand-owl">🦉</span>
          <span className="brand-text">DUO<span className="brand-highlight">DECK</span></span>
        </div>
        <div className="slide-counter-pill">
          <span>{currentSlide + 1}</span>
          <span className="counter-divider">/</span>
          <span>{totalSlides}</span>
        </div>
      </div>

      {/* Center: Duolingo Lesson Progress Bar */}
      <div className="header-center">
        <div className="duo-progress-container">
          <div className="duo-progress-track">
            <div 
              className="duo-progress-fill" 
              style={{ width: `${progressPct}%` }}
            >
              <div className="duo-progress-gloss" />
            </div>
          </div>
        </div>
      </div>

      {/* Right: Gamified Stats + Controls */}
      <div className="header-right">
        {/* Heart Stat */}
        <div className="gamified-stat stat-hearts">
          <span className="stat-icon">❤️</span>
          <span className="stat-val">5</span>
        </div>

        {/* Streak Stat */}
        <div className="gamified-stat stat-streak" onClick={() => sound.playFlame()}>
          <span className="stat-icon">🔥</span>
          <span className="stat-val">{streakCount}</span>
        </div>

        {/* Gem Stat */}
        <div className="gamified-stat stat-gems">
          <span className="stat-icon">💎</span>
          <span className="stat-val">1,420</span>
        </div>

        <div className="header-divider" />

        {/* Audio Mute Toggle */}
        <button 
          className="header-icon-btn" 
          onClick={handleSoundToggle}
          title={soundOn ? "Silenciar audio (M)" : "Activar audio (M)"}
        >
          {soundOn ? <Volume2 size={18} /> : <VolumeX size={18} className="text-red-400" />}
        </button>

        {/* Speaker Notes Toggle (Preserves strict user rule: audience never sees notes unless toggled by presenter) */}
        <button 
          className={`header-icon-btn notes-btn ${showNotes ? 'btn-active' : ''}`}
          onClick={toggleNotes}
          title="Mis notas de orador (N)"
        >
          <FileText size={18} />
          <span className="btn-label">NOTAS</span>
        </button>

        {/* Fullscreen Toggle */}
        <button 
          className="header-icon-btn" 
          onClick={toggleFullscreen}
          title="Pantalla completa (F)"
        >
          {isFullscreen ? <Minimize size={18} /> : <Maximize size={18} />}
        </button>
      </div>
    </header>
  );
}

import React, { useState, useEffect } from 'react';
import DuoMascot from './DuoMascot';
import { sound } from '../utils/audio';
import confetti from 'canvas-confetti';
import {
  Sparkles, Flame, Trophy, Star, Bell, Heart,
  CheckCircle2, Volume2, Globe, Music,
  Calculator, Award
} from 'lucide-react';

/* =========================================================
   SLIDE 1: ORIGINS
   En la diapositiva:
   - DUOLINGO
   - Learn without paying a fortune.
   - 🦉 2011
   - 👨‍💻 Luis von Ahn & Severin Hacker
   - 🌎 Education for everyone
   ========================================================= */
export function Slide1() {
  return (
    <div className="slide-content slide-origins">
      <div className="spotlight-beam" />

      {/* Top ticket badge (Duolingo Green) */}
      <div className="duolipass-badge animate-bounce-subtle">
        <Sparkles size={16} className="text-white" />
        <span>duoli PASS • SPECIAL EDITION</span>
        <Sparkles size={16} className="text-white" />
      </div>

      <div className="poster-header">
        <h1 className="poster-title tracking-tight">DUOLINGO</h1>
        <div className="poster-highlight-strip">
          <span>Learn without paying a fortune.</span>
        </div>
      </div>

      <div className="slide-layout-split">
        {/* Left: Key Pillars */}
        <div className="cards-stack">
          <div className="duo-card duo-card-elevated" onClick={() => sound.playClick()}>
            <div className="card-icon-badge bg-green">🦉</div>
            <div className="card-info">
              <span className="card-meta">FOUNDED</span>
              <span className="card-main-text">2011</span>
            </div>
          </div>

          <div className="duo-card duo-card-elevated" onClick={() => sound.playClick()}>
            <div className="card-icon-badge bg-blue">👨‍💻</div>
            <div className="card-info">
              <span className="card-meta">FOUNDERS</span>
              <span className="card-main-text">Luis von Ahn & Severin Hacker</span>
            </div>
          </div>

          <div className="duo-card duo-card-elevated highlight-border" onClick={() => sound.playClick()}>
            <div className="card-icon-badge bg-green">🌎</div>
            <div className="card-info">
              <span className="card-meta">MISSION</span>
              <span className="card-main-text">Education for everyone</span>
            </div>
          </div>
        </div>

        {/* Right: Authentic Duolingo Mascot under spotlight */}
        <div className="mascot-stage">
          <div className="stage-glow-circle" />
          <DuoMascot variant="normal" size={240} className="floating-animation" />
          <div className="duo-speech-pill">
            <span className="pulse-dot" />
            <span>Free • Fun • Effective</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   SLIDE 2: EXPANSION
   En la diapositiva:
   - IT’S NOT JUST LANGUAGES
   - 🗣️ 40+ languages
   - ➗ Math
   - 🎵 Music
   - ♟️ Chess
   - What happened, Duo?
   ========================================================= */
export function Slide2() {
  const [activeSubject, setActiveSubject] = useState(null);

  const subjects = [
    {
      id: 'lang',
      iconImg: '/assets/duo_music.png',
      title: '🗣️ 40+ languages',
      subtitle: 'Spanish, Klingon & more',
      soundFreq: 523
    },
    {
      id: 'math',
      iconImg: '/assets/duo_pencil.png',
      title: '➗ Math',
      subtitle: 'Brain training & calculations',
      soundFreq: 659
    },
    {
      id: 'music',
      iconImg: '/assets/duo_microphone.png',
      title: '🎵 Music',
      subtitle: 'Notes, rhythm & melodies',
      soundFreq: 784
    },
    {
      id: 'chess',
      emoji: '♟️',
      title: '♟️ Chess',
      subtitle: 'Tactics & grandmaster moves',
      soundFreq: 1046
    }
  ];

  const handleSubjectClick = (s) => {
    setActiveSubject(s.id);
    sound.playMusicalNote(s.soundFreq);
  };

  return (
    <div className="slide-content slide-expansion">
      <div className="poster-header text-center">
        <div className="category-pill mb-2">CURRICULUM EXPANSION</div>
        <h1 className="poster-title">IT’S NOT JUST LANGUAGES</h1>
      </div>

      <div className="grid-2x2">
        {subjects.map((s) => (
          <div
            key={s.id}
            className={`subject-card ${activeSubject === s.id ? 'active-card' : ''}`}
            onClick={() => handleSubjectClick(s)}
          >
            <div className="subject-icon flex items-center justify-center">
              {s.iconImg ? (
                <img
                  src={s.iconImg}
                  alt={s.title}
                  className="subject-real-img"
                />
              ) : (
                <span className="text-4xl">{s.emoji}</span>
              )}
            </div>
            <div className="subject-details">
              <h3 className="subject-title text-xl font-bold">{s.title}</h3>
              <p className="subject-sub">{s.subtitle}</p>
            </div>
            <div className="subject-status">
              <span className="dot" />
            </div>
          </div>
        ))}
      </div>

      {/* Comic punchline with Professor Duo with glasses */}
      <div className="flex flex-col items-center mt-4">
        <div className="flex items-center gap-4">
          <DuoMascot variant="glasses" size={100} className="floating-animation" />
          <div className="punchline-card" onClick={() => sound.playClick()}>
            <span className="punchline-text">What happened, Duo?</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   SLIDE 3: GAMIFICATION
   En la diapositiva:
   - LEARNING, BUT MAKE IT A GAME
   - 🔥 Streaks
   - ⭐ XP
   - 🏆 Leagues
   - 💎 Rewards
   - “I can’t lose my streak.”
   ========================================================= */
export function Slide3() {
  const [streakCount, setStreakCount] = useState(247);
  const [xp, setXp] = useState(1420);
  const [floatingXp, setFloatingXp] = useState(false);

  const boostStreak = () => {
    sound.playFlame();
    setStreakCount(prev => prev + 1);
    confetti({
      particleCount: 30,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#58CC02', '#46A302', '#FF9600', '#FF4B4B']
    });
  };

  const boostXp = () => {
    sound.playChime();
    setXp(prev => prev + 50);
    setFloatingXp(true);
    setTimeout(() => setFloatingXp(false), 800);
  };

  return (
    <div className="slide-content slide-gamification">
      <div className="poster-header text-center">
        <div className="category-pill mb-2">NEUROSCIENCE & HOOKS</div>
        <h1 className="poster-title">LEARNING, BUT MAKE IT A GAME</h1>
      </div>

      {/* Battle Pass Track Container inspired by Duolingo Battle Pass UI */}
      <div className="battlepass-board mt-2">
        {/* Top Progress & Tier Bar */}
        <div className="bp-top-bar">
          <div className="bp-tier-badge">
            <span className="bp-tier-label">TIER</span>
            <span className="bp-tier-num">62</span>
          </div>

          <div className="bp-progress-wrapper">
            <div className="bp-progress-meta">
              <span>CURRENT XP PROGRESS</span>
              <span className="text-green-400 font-bold">{xp} / 2,000 XP</span>
            </div>
            <div className="bp-progress-bar">
              <div
                className="bp-progress-fill"
                style={{ width: `${Math.min(100, (xp / 2000) * 100)}%` }}
              />
            </div>
          </div>

          <button className="duo-btn-3d duo-btn-green py-2 px-4 text-sm" onClick={boostXp}>
            +50 XP ⭐
          </button>
        </div>

        {/* The Track Rail with 4 Core Milestones */}
        <div className="bp-track-container">
          <div className="bp-rail-line" />
          <div className="bp-rail-active" style={{ width: '65%' }} />

          <div className="gamification-grid">
            {/* Card 1: Streaks (Interactive) */}
            <div className="game-card flame-border" onClick={boostStreak}>
              <div className="game-card-header">
                <span className="game-icon">🔥</span>
                <span className="badge-tag">TIER 61</span>
              </div>
              <h2 className="game-card-title">Streaks</h2>
              <div className="streak-display">
                <span className="streak-num">{streakCount}</span>
                <span className="streak-unit">DAYS IN A ROW</span>
              </div>
            </div>

            {/* Card 2: XP */}
            <div className="game-card xp-border" onClick={boostXp}>
              <div className="game-card-header">
                <span className="game-icon">⭐</span>
                {floatingXp && <span className="floating-xp-bubble">+50 XP</span>}
                <span className="badge-tag">TIER 62</span>
              </div>
              <h2 className="game-card-title">XP</h2>
              <div className="streak-display">
                <span className="streak-num text-green">{xp}</span>
                <span className="streak-unit">EXPERIENCE POINTS</span>
              </div>
            </div>

            {/* Card 3: Leagues */}
            <div className="game-card league-border" onClick={() => sound.playClick()}>
              <div className="game-card-header">
                <span className="game-icon">🏆</span>
                <span className="badge-tag">TIER 63</span>
              </div>
              <h2 className="game-card-title">Leagues</h2>
              <div className="streak-display">
                <span className="streak-num text-purple">DIAMOND</span>
                <span className="streak-unit">LEADERBOARD RANK #1</span>
              </div>
            </div>

            {/* Card 4: Rewards */}
            <div className="game-card reward-border" onClick={() => sound.playClick()}>
              <div className="game-card-header">
                <span className="game-icon">💎</span>
                <span className="badge-tag">TIER 64</span>
              </div>
              <h2 className="game-card-title">Rewards</h2>
              <div className="streak-display">
                <span className="streak-num text-blue">CHESTS</span>
                <span className="streak-unit">FREEZES & GEMS</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quote card */}
      <div className="quote-banner mt-4" onClick={() => sound.playFlame()}>
        <span className="quote-mark">“</span>
        <span className="quote-text">I can’t lose my streak.</span>
        <span className="quote-mark">”</span>
      </div>
    </div>
  );
}

/* =========================================================
   SLIDE 4: THE MASCOT
   En la diapositiva:
   - MEET DUO
   - Cute? 🥰
   - Friendly? 🙂
   - Scary? 👁️👁️
   - Do. Your. Lesson.
   ========================================================= */
export function Slide4() {
  const [mood, setMood] = useState('friendly');

  const selectMood = (newMood) => {
    setMood(newMood);
    if (newMood === 'scary') {
      sound.playOminous();
    } else {
      sound.playClick();
    }
  };

  return (
    <div className={`slide-content slide-meet-duo ${mood === 'scary' ? 'dark-scary-mode' : ''}`}>
      <div className="poster-header text-center">
        <h1 className="poster-title">MEET DUO</h1>
      </div>

      <div className="duo-stage-container">
        {/* Center Mascot: Clean authentic expressions, NO red laser eyes */}
        <div className="duo-center-portrait flex items-center justify-center">
          <DuoMascot
            variant={mood}
            size={260}
            className={mood === 'scary' ? 'shake-infinite' : 'gentle-float'}
          />
        </div>

        {/* Selector pills */}
        <div className="mood-selector-row">
          <button
            className={`mood-button ${mood === 'cute' ? 'selected' : ''}`}
            onClick={() => selectMood('cute')}
          >
            <span className="mood-emoji">🥰</span>
            <span>Cute?</span>
          </button>

          <button
            className={`mood-button ${mood === 'friendly' ? 'selected' : ''}`}
            onClick={() => selectMood('friendly')}
          >
            <span className="mood-emoji">🙂</span>
            <span>Friendly?</span>
          </button>

          <button
            className={`mood-button ${mood === 'scary' ? 'selected scary-active' : ''}`}
            onClick={() => selectMood('scary')}
          >
            <span className="mood-emoji">👁️👁️</span>
            <span>Scary?</span>
          </button>
        </div>

        {/* The Warning Callout */}
        <div className={`warning-callout mt-6 ${mood === 'scary' ? 'warning-glow-red' : ''}`}>
          <span className="warning-word">Do.</span>
          <span className="warning-word">Your.</span>
          <span className="warning-word font-black">Lesson.</span>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   SLIDE 5: SURVEILLANCE
   En la diapositiva:
   - DUO IS WATCHING
   - 🤖 AI
   - 🔔 Notifications
   - 🔥 Your streak
   - “You have 10 minutes.”
   ========================================================= */
export function Slide5() {
  const [seconds, setSeconds] = useState(599);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds(prev => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (sec) => {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  return (
    <div className="slide-content slide-watching">
      <div className="poster-header text-center">
        <div className="surveillance-pill mb-2">
          <span className="radar-ping" />
          <span>REAL-TIME TRACKING ACTIVE</span>
        </div>
        <h1 className="poster-title">DUO IS WATCHING</h1>
      </div>

      <div className="watching-layout">
        {/* Left: 3 Pillars */}
        <div className="cards-stack">
          <div className="duo-card duo-card-elevated" onClick={() => sound.playClick()}>
            <div className="card-icon-badge bg-purple">🤖</div>
            <div className="card-info">
              <span className="card-meta">SURVEILLANCE ENGINE</span>
              <span className="card-main-text">AI</span>
            </div>
          </div>

          <div className="duo-card duo-card-elevated" onClick={() => sound.playClick()}>
            <div className="card-icon-badge bg-green">🔔</div>
            <div className="card-info">
              <span className="card-meta">DELIVERY METHOD</span>
              <span className="card-main-text">Notifications</span>
            </div>
          </div>

          <div className="duo-card duo-card-elevated highlight-flame" onClick={() => sound.playFlame()}>
            <div className="card-icon-badge bg-orange">🔥</div>
            <div className="card-info">
              <span className="card-meta">LEVERAGE</span>
              <span className="card-main-text">Your streak</span>
            </div>
          </div>
        </div>

        {/* Right: Authentic Smartphone Lock Screen Notification Mockup */}
        <div className="phone-mockup-wrapper">
          <div className="phone-screen">
            <div className="phone-clock">
              <span>23:50</span>
              <p className="phone-date">Sunday, Streak Expiring</p>
            </div>

            <div className="push-notification-bubble" onClick={() => sound.playOminous()}>
              <div className="notif-header">
                <img
                  src="/assets/duo_app_icon.png"
                  alt="Duolingo"
                  className="w-6 h-6 rounded-md object-contain"
                />
                <span className="app-name">DUOLINGO</span>
                <span className="notif-time">NOW</span>
              </div>
              <div className="notif-body">
                <p className="notif-headline">“You have 10 minutes.”</p>
                <p className="notif-subtext">These chairs don't learn Spanish on their own... 🔪🦉</p>
              </div>
              <div className="countdown-tag">
                <span>TIME REMAINING: </span>
                <span className="font-mono text-red-400">{formatTime(seconds)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   SLIDE 6: R.I.P. DUO
   En la diapositiva:
   - R.I.P. DUO
   - 2011 — 2025
   - 🚗💥🦉 A Cybertruck?!
   ========================================================= */
export function Slide6() {
  const [xpBillion, setXpBillion] = useState(48.6);
  const [crashed, setCrashed] = useState(false);

  const contributeXp = () => {
    sound.playChime();
    setXpBillion(prev => +(Math.min(50, prev + 0.4)).toFixed(1));
    if (xpBillion >= 49.6) {
      confetti({ particleCount: 50, spread: 80, colors: ['#58CC02', '#2EE2C2', '#FFFFFF'] });
    }
  };

  const triggerCrashSound = () => {
    setCrashed(true);
    sound.playCrash();
    setTimeout(() => setCrashed(false), 500);
  };

  return (
    <div className={`slide-content slide-rip ${crashed ? 'screen-shake' : ''}`}>
      <div className="poster-header text-center">
        <h1 className="poster-title text-rip">R.I.P. DUO</h1>
        <div className="rip-years-banner">
          <span>2011 — 2025</span>
        </div>
      </div>

      <div className="rip-stage">
        {/* Memorial Card */}
        <div className="tombstone-card" onClick={triggerCrashSound}>
          <div className="ghost-duo-container flex items-center justify-center">
            <DuoMascot variant="dead" size={170} />
          </div>

          <div className="event-pill mt-4">
            <span className="crash-icon">🚗💥🦉</span>
            <span className="crash-text">A Cybertruck?!</span>
          </div>

          <span className="tap-hint mt-3 block text-slate-400 text-xs">Tap to replay crash</span>
        </div>

        {/* Global 50 Billion XP campaign widget */}
        <div className="xp-resurrection-box">
          <div className="revive-header">
            <Trophy className="text-green-400" size={24} />
            <span className="revive-title">GLOBAL XP RESURRECTION</span>
          </div>
          <div className="progress-bar-bg">
            <div
              className="progress-bar-fill revive-fill"
              style={{ width: `${(xpBillion / 50) * 100}%` }}
            />
          </div>
          <div className="revive-meta">
            <span className="current-xp">{xpBillion}B / 50.0B XP</span>
            <span className="status-label">{xpBillion >= 50 ? 'DUO HAS RISEN! 🎉' : 'KEEP STUDYING TO REVIVE DUO'}</span>
          </div>
          <button className="duo-btn-3d duo-btn-cyan w-full mt-3" onClick={contributeXp}>
            DO LESSON (+400M XP)
          </button>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   SLIDE 7: ROMANCE
   En la diapositiva:
   - DUO ❤️ DUA LIPA
   - He likes her.
   - She… exists.
   - It’s complicated.
   ========================================================= */
export function Slide7() {
  return (
    <div className="slide-content slide-romance">
      <div className="poster-header text-center">
        <div className="category-pill mb-2">CELEBRITY CRUSH</div>
        <h1 className="poster-title">DUO ❤️ DUA LIPA</h1>
      </div>

      <div className="romance-layout">
        {/* Left: Duo with Love mascot */}
        <div className="romance-mascot-box flex flex-col items-center justify-center">
          <DuoMascot variant="love" size={220} className="floating-animation" />
          <div className="floating-hearts">
            <span className="heart h1">💖</span>
            <span className="heart h2">💚</span>
            <span className="heart h3">✨</span>
          </div>
        </div>

        {/* Right: Relationship status list */}
        <div className="relationship-cards">
          <div className="duo-card duo-card-elevated" onClick={() => sound.playClick()}>
            <div className="card-icon-badge bg-green">💚</div>
            <div className="card-info">
              <span className="card-main-text text-xl">He likes her.</span>
            </div>
          </div>

          <div className="duo-card duo-card-elevated" onClick={() => sound.playClick()}>
            <div className="card-icon-badge bg-blue">✨</div>
            <div className="card-info">
              <span className="card-main-text text-xl">She… exists.</span>
            </div>
          </div>

          <div className="duo-card duo-card-elevated highlight-border" onClick={() => sound.playClick()}>
            <div className="card-icon-badge bg-orange">💔</div>
            <div className="card-info">
              <span className="card-main-text text-xl">It’s complicated.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   SLIDE 8: FUN FACTS
   En la diapositiva:
   - THINGS THAT SOUND FAKE
   - 🐉 Klingon is on Duolingo
   - 🐲 High Valyrian is on Duolingo
   - 💀 Duo “died”
   - 🚗 He was hit by a Cybertruck
   - 🤖 AI helps write notifications
   - 💍 Users met and got married
   - This is a real company.
   ========================================================= */
export function Slide8() {
  const [stamped, setStamped] = useState({});

  const facts = [
    { id: 1, icon: "🐉", text: "Klingon is on Duolingo" },
    { id: 2, icon: "🐲", text: "High Valyrian is on Duolingo" },
    { id: 3, icon: "💀", text: "Duo “died”" },
    { id: 4, icon: "🚗", text: "He was hit by a Cybertruck" },
    { id: 5, icon: "🤖", text: "AI helps write notifications" },
    { id: 6, icon: "💍", text: "Users met and got married" }
  ];

  const toggleStamp = (id) => {
    sound.playClick();
    setStamped(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="slide-content slide-fun-facts">
      <div className="poster-header text-center">
        <div className="category-pill mb-2">VERIFIED LORE</div>
        <h1 className="poster-title">THINGS THAT SOUND FAKE</h1>
      </div>

      <div className="facts-grid">
        {facts.map((f) => (
          <div
            key={f.id}
            className="fact-pill-card"
            onClick={() => toggleStamp(f.id)}
          >
            <span className="fact-icon">{f.icon}</span>
            <span className="fact-text">{f.text}</span>
            <span className="real-stamp">100% REAL</span>
          </div>
        ))}
      </div>

      <div className="real-company-stamp-banner mt-6" onClick={() => sound.playChime()}>
        <CheckCircle2 size={24} className="text-white" />
        <span className="stamp-text">This is a real company.</span>
        <CheckCircle2 size={24} className="text-white" />
      </div>
    </div>
  );
}

/* =========================================================
   SLIDE 9: FINALE
   En la diapositiva:
   - DUOLINGO
   - Learn a language.
   - Keep your streak.
   - Avoid Duo.
   - Thank you. 🦉
   ========================================================= */
export function Slide9() {
  const [completed, setCompleted] = useState(false);

  const fireGrandCelebration = () => {
    sound.playChime();
    setCompleted(true);

    // Multi-stage confetti fireworks with Duolingo Green & vibrant blue/white (NO yellow)
    const duration = 3000;
    const end = Date.now() + duration;

    const interval = setInterval(() => {
      if (Date.now() > end) {
        return clearInterval(interval);
      }
      confetti({
        startVelocity: 30,
        spread: 360,
        ticks: 60,
        origin: { x: Math.random(), y: Math.random() - 0.2 },
        colors: ['#58CC02', '#46A302', '#61E002', '#1CB0F6', '#FFFFFF', '#2EE2C2']
      });
    }, 250);
  };

  useEffect(() => {
    fireGrandCelebration();
  }, []);

  return (
    <div className="slide-content slide-finale">
      <div className="spotlight-beam" />

      <div className="poster-header text-center">
        <h1 className="poster-title">DUOLINGO</h1>
      </div>

      <div className="takeaways-box">
        <div className="takeaway-row" onClick={() => sound.playClick()}>
          <span className="check-bullet">✅</span>
          <span className="takeaway-text">Learn a language.</span>
        </div>

        <div className="takeaway-row" onClick={() => sound.playFlame()}>
          <span className="check-bullet">🔥</span>
          <span className="takeaway-text">Keep your streak.</span>
        </div>

        <div className="takeaway-row" onClick={() => sound.playOminous()}>
          <span className="check-bullet">👀</span>
          <span className="takeaway-text">Avoid Duo.</span>
        </div>
      </div>

      <div className="thank-you-container mt-6">
        <button className="thank-you-button" onClick={fireGrandCelebration}>
          <span>Thank you. 🦉</span>
        </button>
      </div>
    </div>
  );
}

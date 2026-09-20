import React from 'react';

/**
 * DuoMascot Component
 * Uses the exact authentic images requested by the user:
 * - Cute? 🥰: Kawaii Duo with giant sparkling anime eyes (duo_kawaii.png)
 * - Friendly? 🙂: Buff muscular Duo flexing (duo_buff.png)
 * - Scary? 👁️👁️: Furious screaming Duo with popping bloodshot eyes (duo_screaming.png)
 */
export default function DuoMascot({ variant = 'normal', size = 260, className = '' }) {
  return (
    <div 
      className={`duo-mascot-wrapper ${variant} ${className} flex items-center justify-center`} 
      style={{ width: size, height: size, position: 'relative' }}
    >
      {/* 1. CUTE / NORMAL: Kawaii Duo with big sparkly eyes */}
      {(variant === 'cute' || variant === 'normal') && (
        <img 
          src="/assets/duo_kawaii.png" 
          alt="Cute Duolingo Owl" 
          className="w-full h-full object-contain filter drop-shadow-lg"
        />
      )}

      {/* 2. FRIENDLY / SMUG / BUFF: Muscular flexing Duo */}
      {(variant === 'friendly' || variant === 'smug') && (
        <img 
          src="/assets/duo_buff.png" 
          alt="Friendly Buff Duolingo Owl" 
          className="w-full h-full object-contain filter drop-shadow-lg"
        />
      )}

      {/* 2b. GLASSES / PROFESSOR: Intellectual thinking Duo */}
      {variant === 'glasses' && (
        <img 
          src="/assets/duo_glasses.png" 
          alt="Intellectual Duolingo Owl with Glasses" 
          className="w-full h-full object-contain filter drop-shadow-lg"
        />
      )}

      {/* 3. SCARY / FURIOUS: Furious screaming Duo with popping eyes */}
      {variant === 'scary' && (
        <img 
          src="/assets/duo_screaming.png" 
          alt="Scary Furious Duolingo Owl" 
          className="w-full h-full object-contain filter drop-shadow-xl"
        />
      )}

      {/* 4. DEAD: Knocked out Duo for Slide 6 */}
      {variant === 'dead' && (
        <div className="relative w-full h-full flex items-center justify-center">
          <img 
            src="/assets/duo_kawaii.png" 
            alt="Dead Duo" 
            className="w-full h-full object-contain grayscale opacity-60"
          />
          <div className="absolute top-2 text-3xl font-black text-slate-300">R.I.P.</div>
        </div>
      )}

      {/* 5. LOVE: Duo with love hearts for Slide 7 */}
      {variant === 'love' && (
        <div className="relative w-full h-full flex items-center justify-center">
          <img 
            src="/assets/duo_kawaii.png" 
            alt="Duo in Love" 
            className="w-full h-full object-contain filter drop-shadow-lg"
          />
        </div>
      )}

      {/* Official Subject Icons */}
      {variant === 'music' && (
        <img 
          src="/assets/duo_music.png" 
          alt="Duolingo Music" 
          className="w-full h-full object-contain" 
        />
      )}
      {variant === 'pencil' && (
        <img 
          src="/assets/duo_pencil.png" 
          alt="Duolingo Math" 
          className="w-full h-full object-contain" 
        />
      )}
      {variant === 'microphone' && (
        <img 
          src="/assets/duo_microphone.png" 
          alt="Duolingo Languages" 
          className="w-full h-full object-contain" 
        />
      )}
    </div>
  );
}

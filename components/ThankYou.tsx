import React, { useEffect, useMemo, useRef, useState } from 'react';
import { ArrowLeft, Sparkles, Zap, Target } from 'lucide-react';
import GlitchText from './UI/GlitchText';

interface ThankYouProps {
  onBack: () => void;
}

type GameState = 'idle' | 'running' | 'finished';

const GAME_DURATION_MS = 30_000;
const GRID_COLS = 10;
const GRID_ROWS = 6;
const GRID_CELLS = GRID_COLS * GRID_ROWS;

const ThankYou: React.FC<ThankYouProps> = ({ onBack }) => {
  const arenaRef = useRef<HTMLDivElement>(null);

  const [gameState, setGameState] = useState<GameState>('idle');
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [timeLeftMs, setTimeLeftMs] = useState(GAME_DURATION_MS);
  const [targetIndex, setTargetIndex] = useState(0);
  const [targetSeed, setTargetSeed] = useState(0);

  const timeLeftLabel = useMemo(() => {
    const seconds = Math.max(0, Math.ceil(timeLeftMs / 1000));
    return `${seconds}s`;
  }, [timeLeftMs]);

  useEffect(() => {
    try {
      const stored = localStorage.getItem('nexus_thanks_best_score');
      const parsed = stored ? Number(stored) : 0;
      setBestScore(Number.isFinite(parsed) ? parsed : 0);
    } catch {
      setBestScore(0);
    }
  }, []);

  useEffect(() => {
    if (gameState !== 'running') return;

    const startedAt = Date.now();
    const tick = window.setInterval(() => {
      const elapsed = Date.now() - startedAt;
      const remaining = Math.max(0, GAME_DURATION_MS - elapsed);
      setTimeLeftMs(remaining);

      if (remaining <= 0) {
        window.clearInterval(tick);
        setGameState('finished');
      }
    }, 100);

    return () => window.clearInterval(tick);
  }, [gameState]);

  useEffect(() => {
    if (gameState !== 'finished') return;
    if (score <= bestScore) return;

    setBestScore(score);
    try {
      localStorage.setItem('nexus_thanks_best_score', String(score));
    } catch {
      // ignore
    }
  }, [gameState, score, bestScore]);

  const moveTarget = () => {
    setTargetIndex(Math.floor(Math.random() * GRID_CELLS));
    setTargetSeed(s => s + 1);
  };

  const startGame = () => {
    setScore(0);
    setTimeLeftMs(GAME_DURATION_MS);
    setGameState('running');

    moveTarget();
  };

  const handleHit = () => {
    if (gameState !== 'running') return;
    setScore(s => s + 1);
    moveTarget();
  };

  return (
    <section className="min-h-screen pt-24 pb-12 bg-background relative overflow-hidden animate-in fade-in slide-in-from-bottom-10 duration-700">
      {/* Background Decor */}
      <div className="absolute top-24 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-green-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="flex items-center gap-4 mb-12">
          <button
            onClick={onBack}
            aria-label="Back to home"
            className="p-3 rounded-full bg-surface border border-muted/20 hover:border-primary text-muted hover:text-primary transition-all group"
          >
            <ArrowLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
          </button>

          <div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-green-400 animate-pulse" />
              <span className="text-xs font-mono text-green-400 tracking-widest uppercase">Transmission Confirmed</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-main font-orbitron">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Thank You</span>
            </h1>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-10">
          {/* Message */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-surface border border-muted/10 rounded-2xl p-8 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-b from-green-500/10 via-transparent to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative space-y-4">
                <GlitchText text="MESSAGE RECEIVED" className="text-xl md:text-2xl font-bold text-main block" />

                <p className="text-muted text-lg leading-relaxed">
                  Your message is safely in my queue. I’ll review it and respond as soon as possible.
                </p>

                <div className="grid sm:grid-cols-2 gap-4 pt-2">
                  <div className="bg-background/40 border border-muted/10 rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-1">
                      <Zap className="w-4 h-4 text-green-400" />
                      <span className="text-xs font-mono text-green-400 tracking-widest uppercase">Status</span>
                    </div>
                    <p className="text-main font-bold">Delivered</p>
                    <p className="text-muted/80 text-sm">Next step: response</p>
                  </div>

                  <div className="bg-background/40 border border-muted/10 rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-1">
                      <Target className="w-4 h-4 text-primary" />
                      <span className="text-xs font-mono text-primary tracking-widest uppercase">Bonus</span>
                    </div>
                    <p className="text-main font-bold">Play a quick game</p>
                    <p className="text-muted/80 text-sm">while you wait</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-surface/50 border border-muted/10 rounded-2xl p-6 backdrop-blur-sm">
              <p className="text-muted font-mono text-sm">
                Tip: If you don’t see a reply within 24–48 hours, feel free to send a quick follow-up.
              </p>
            </div>
          </div>

          {/* Game */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-surface border border-muted/10 rounded-2xl p-6 relative overflow-hidden">
              <div className="flex items-center justify-between gap-4 mb-4">
                <div>
                  <h2 className="text-2xl font-bold text-main font-orbitron">Neon Reflex</h2>
                  <p className="text-muted text-sm">Hit as many targets as you can in 30 seconds.</p>
                </div>

                <button
                  type="button"
                  onClick={startGame}
                  className="px-5 py-2 bg-primary/10 hover:bg-primary/20 text-primary border border-primary/50 font-bold tracking-widest uppercase transition-all transform hover:scale-[1.01] active:scale-[0.99]"
                >
                  {gameState === 'running' ? 'Restart' : 'Start'}
                </button>
              </div>

              <div className="grid grid-cols-3 gap-3 mb-4">
                <div className="bg-background/40 border border-muted/10 rounded-xl p-3">
                  <p className="text-xs font-mono text-muted tracking-widest uppercase">Time</p>
                  <p className="text-main font-bold text-lg">{timeLeftLabel}</p>
                </div>
                <div className="bg-background/40 border border-muted/10 rounded-xl p-3">
                  <p className="text-xs font-mono text-muted tracking-widest uppercase">Score</p>
                  <p className="text-main font-bold text-lg">{score}</p>
                </div>
                <div className="bg-background/40 border border-muted/10 rounded-xl p-3">
                  <p className="text-xs font-mono text-muted tracking-widest uppercase">Best</p>
                  <p className="text-main font-bold text-lg">{bestScore}</p>
                </div>
              </div>

              <div
                ref={arenaRef}
                className="relative w-full h-64 md:h-72 bg-background/30 border border-muted/10 rounded-2xl overflow-hidden"
              >
                {/* subtle scanline */}
                <div className="absolute inset-0 opacity-30 pointer-events-none bg-gradient-to-b from-transparent via-muted/10 to-transparent" />

                {gameState === 'idle' && (
                  <div className="absolute inset-0 flex items-center justify-center text-center p-6">
                    <p className="text-muted font-mono">Press START to begin.</p>
                  </div>
                )}

                {gameState === 'finished' && (
                  <div className="absolute inset-0 flex items-center justify-center text-center p-6 animate-in fade-in">
                    <div>
                      <p className="text-main font-bold text-xl mb-1">Run complete</p>
                      <p className="text-muted font-mono">Final score: {score}</p>
                    </div>
                  </div>
                )}

                {gameState === 'running' && (
                  <div className="absolute inset-0 p-3 grid grid-cols-10 grid-rows-6 gap-2">
                    {Array.from({ length: GRID_CELLS }).map((_, i) => (
                      <div key={i} className="relative">
                        {i === targetIndex && (
                          <button
                            key={targetSeed}
                            type="button"
                            onClick={handleHit}
                            aria-label="Target"
                            className="w-full h-full rounded-xl border border-green-400/60 bg-green-500/15 hover:bg-green-500/25 transition-all duration-150 shadow-[0_0_25px_rgba(34,197,94,0.35)] animate-pulse"
                          />
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <p className="text-muted/80 text-sm mt-4">
                Pro tip: Use a mouse/touchpad for maximum precision.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThankYou;

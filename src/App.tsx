import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useState, useEffect, useRef } from 'react';

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const hasPlayedRef = useRef(false);

  useEffect(() => {
    const audio = new Audio('/music/Love Thru the Night.mp3');
    audio.volume = 0.3;
    audioRef.current = audio;

    const tryPlay = () => {
      if (audioRef.current && !hasPlayedRef.current) {
        audioRef.current.play()
          .then(() => {
            hasPlayedRef.current = true;
            setIsPlaying(true);
          })
          .catch((e) => console.log('Audio play failed:', e));
      }
    };

    setTimeout(() => {
      tryPlay();
    }, 500);

    const firstInteraction = () => tryPlay();
    document.addEventListener('click', firstInteraction, { once: true });
    document.addEventListener('keydown', firstInteraction, { once: true });

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
      document.removeEventListener('click', firstInteraction);
      document.removeEventListener('keydown', firstInteraction);
    };
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;
    
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(() => {});
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="min-h-screen bg-[#0A0A1A] text-white">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
      
      <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
        <div className="overflow-hidden w-44 h-10 rounded-full bg-slate-900/80 backdrop-blur-md border border-[#9D00FF]/30 flex items-center">
          <div className="animate-marquee whitespace-nowrap">
            <span className="text-[#00FFFF] font-medium text-sm">Mike Ault - Love Thru The Night</span>
          </div>
        </div>
        
        <button
          onClick={togglePlay}
          className="p-4 rounded-full bg-gradient-to-r from-[#9D00FF] to-[#00FFFF] hover:from-[#B54DFF] hover:to-[#4DFFFF] transition-all hover:scale-110 shadow-lg shadow-[#9D00FF]/25"
        >
          {isPlaying ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
              <rect x="6" y="4" width="4" height="16" rx="1" />
              <rect x="14" y="4" width="4" height="16" rx="1" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
              <path d="M8 5v14l11-7z"/>
            </svg>
          )}
        </button>
      </div>
    </div>
  );
}

export default App;
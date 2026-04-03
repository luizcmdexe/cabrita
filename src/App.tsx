import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import InitialScreen from './components/InitialScreen';
import Letter from './components/Letter';
import MovieInvite from './components/MovieInvite';
import FinalResponse from './components/FinalResponse';
import MusicPlayer from './components/MusicPlayer';

function App() {
  const [phase, setPhase] = useState<'initial' | 'letter' | 'invite' | 'response'>('initial');

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-blue-50 relative overflow-hidden">
      <MusicPlayer />

      <AnimatePresence mode="wait">
        {phase === 'initial' && (
          <InitialScreen key="initial" onOpen={() => setPhase('letter')} />
        )}
        {phase === 'letter' && (
          <Letter key="letter" onComplete={() => setPhase('invite')} />
        )}
        {phase === 'invite' && (
          <MovieInvite key="invite" onContinue={() => setPhase('response')} />
        )}
        {phase === 'response' && (
          <FinalResponse key="response" />
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;

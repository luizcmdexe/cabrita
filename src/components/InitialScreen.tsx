import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

interface InitialScreenProps {
  onOpen: () => void;
}

export default function InitialScreen({ onOpen }: InitialScreenProps) {
  const [noAttempts, setNoAttempts] = useState(0);
  const [noPosition, setNoPosition] = useState({ x: 0, y: 0 });
  const [showMessage, setShowMessage] = useState(false);

  const handleNoClick = () => {
    if (noAttempts < 3) {
      const newX = Math.random() * (window.innerWidth - 150);
      const newY = Math.random() * (window.innerHeight - 50);
      setNoPosition({ x: newX, y: newY });
      setNoAttempts(noAttempts + 1);
    } else {
      setShowMessage(true);
      setTimeout(() => setShowMessage(false), 3000);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen flex flex-col items-center justify-center p-4"
    >
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: 'spring', duration: 1 }}
        className="mb-8"
      >
        <div className="relative">
          <div className="w-40 h-40 bg-gradient-to-br from-pink-200 to-pink-300 rounded-2xl flex items-center justify-center shadow-2xl">
            <Mail className="w-20 h-20 text-white" />
          </div>
          <motion.div
            animate={{ rotate: [0, -5, 5, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute -top-2 -right-2 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg"
          >
            1
          </motion.div>
        </div>
      </motion.div>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onOpen}
        className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-12 py-4 rounded-full text-xl font-semibold shadow-lg hover:shadow-xl transition-shadow mb-4"
      >
        Abrir
      </motion.button>

      <motion.button
        animate={{ x: noPosition.x, y: noPosition.y }}
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
        onClick={handleNoClick}
        className="bg-gray-200 text-gray-700 px-6 py-2 rounded-full text-sm hover:bg-gray-300 transition-colors"
        style={{ position: noAttempts > 0 ? 'fixed' : 'relative' }}
      >
        Não quero abrir não
      </motion.button>

      {showMessage && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="fixed bottom-8 left-4 right-4 bg-white p-4 rounded-lg shadow-xl text-center max-w-md mx-auto"
        >
          <p className="text-gray-700">
            Eu gastei meu React e Tailwind nisso aqui só pra fazer algo bonitinho pra você... :(
          </p>
        </motion.div>
      )}
    </motion.div>
  );
}

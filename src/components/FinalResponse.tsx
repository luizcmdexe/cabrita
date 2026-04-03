import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import SignatureCanvas from './SignatureCanvas';

export default function FinalResponse() {
  const [accepted, setAccepted] = useState(false);
  const [showSignature, setShowSignature] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');

  const handleYes = () => {
    setAccepted(true);
    setShowSignature(true);

    const duration = 3000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#ff69b4', '#ff1493', '#ffc0cb'],
      });
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#ff69b4', '#ff1493', '#ffc0cb'],
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };
    frame();
  };

  const handleNo = () => {
    alert('Mas... mas... 🥺');
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen flex flex-col items-center justify-center p-4"
    >
      {!accepted ? (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', duration: 0.8 }}
          className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl p-6 md:p-8 max-w-md w-full"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-8">
            Então... qual é a resposta?
          </h2>

          <div className="space-y-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleYes}
              className="w-full bg-gradient-to-r from-green-500 to-emerald-500 text-white py-4 rounded-full text-lg font-bold shadow-lg hover:shadow-xl transition-shadow"
            >
              ( SIM EU ACEITO CARAAAALHOOO )
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleNo}
              className="w-full bg-gray-300 text-gray-700 py-3 rounded-full text-sm hover:bg-gray-400 transition-colors"
            >
              ( não, obrigado 👍🏼 )
            </motion.button>
          </div>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl p-6 md:p-8 max-w-md w-full"
        >
          <motion.h2
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            className="text-2xl md:text-3xl font-bold text-center text-pink-600 mb-6"
          >
            🎉🎉🎉🎉🎉 OH GLORIA DEUS AMÉM 🎉🎉🎉
          </motion.h2>

          {showSignature && (
            <div className="space-y-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Assine aqui embaixo:
                </label>
                <SignatureCanvas />
                <p className="text-center text-gray-600 text-sm mt-2">
                  (após assinar, tire print e envie para mim, obrigado)
                </p>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Escolha a data:
                </label>
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-pink-300 rounded-lg focus:outline-none focus:border-pink-500 transition-colors"
                />
              </div>

              <p className="text-center text-gray-600 text-sm italic">
                Escolha a data e me fale, porque não fiz algo que dê para eu saber a data que escolheu kkk
              </p>
            </div>
          )}
        </motion.div>
      )}
    </motion.div>
  );
}

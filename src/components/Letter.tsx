import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface LetterProps {
  onComplete: () => void;
}

const page1Text = "Oi cabrita, eu nunca fui de fazer essas coisas de 'gays' e, mesmo você demorando o tempo de Jesus pra responder às vezes, eu gosto de estar aqui. Por que? Eu não sei ainda, mas você mesmo sem querer me faz feliz. Bom, isso já está bem 'gay', né? Me desculpa, eu só quis dizer que você é incrível e sei que tem coisas que você passa, se não, não estaria fazendo terapia, kkkkk. Mas quero que fique boa da cuca. Talvez você duvide um pouco do que vou falar, mas você é a garota mais linda que conheço e que já conheci por muitos anos.";

const page2Text = "E só estou falando isso porque quero que saiba que todo dia que acordo vem aquele pensamento rápido de 'como você está?', sabe?! Eu não sei te explicar porque a gente não se viu ainda, mas em alguns momentos é como se fosse manhã de Natal, mesmo só conversando de longe... eu gosto de manhã de Natal, é tudo diferente. Já falei muito e você deve estar achando isso tudo uma besteira. Fica bem, cabrita. Antes de qualquer coisa, quero dizer que devo estar fazendo isso porque você se tornou alguém importante pra mim. 'Ah, mas a gente nem se viu'... tem razão pra caralho, mas o que eu posso fazer? Enfim, se cuida cabeçuda... ah e antes que eu me esqueça, aperta em algum botão em algum canto dessa tela.";

export default function Letter({ onComplete }: LetterProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  const currentText = currentPage === 1 ? page1Text : page2Text;

  useEffect(() => {
    if (currentIndex < currentText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(currentText.substring(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 30);
      return () => clearTimeout(timeout);
    } else {
      setIsComplete(true);
    }
  }, [currentIndex, currentText]);

  const handleNextPage = () => {
    if (currentPage === 1) {
      setCurrentPage(2);
      setDisplayedText('');
      setCurrentIndex(0);
      setIsComplete(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen flex items-center justify-center p-4"
    >
      <motion.div
        initial={{ scale: 0.8, rotateY: -90 }}
        animate={{ scale: 1, rotateY: 0 }}
        transition={{ type: 'spring', duration: 1 }}
        className="bg-white/90 backdrop-blur-sm rounded-lg shadow-2xl p-6 md:p-8 max-w-2xl w-full"
      >
        <div className="min-h-[400px] flex flex-col">
          <motion.p
            key={currentPage}
            initial={{ opacity: 0, x: currentPage === 1 ? -20 : 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-gray-800 leading-relaxed text-base md:text-lg font-serif"
          >
            {displayedText}
            {currentIndex < currentText.length && (
              <span className="animate-pulse">|</span>
            )}
          </motion.p>

          <div className="mt-auto pt-6 flex justify-between items-center">
            {isComplete && currentPage === 1 && (
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleNextPage}
                className="ml-auto bg-pink-500 text-white px-6 py-2 rounded-full hover:bg-pink-600 transition-colors"
              >
                Próxima →
              </motion.button>
            )}
            {isComplete && currentPage === 2 && (
              <motion.button
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={onComplete}
                className="fixed bottom-4 right-4 bg-gradient-to-r from-pink-500 to-rose-500 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-shadow font-semibold"
              >
                &gt; aqui
              </motion.button>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

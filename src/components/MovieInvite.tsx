import { motion } from 'framer-motion';

interface MovieInviteProps {
  onContinue: () => void;
}

const moviePosters = [
  'https://ingresso-a.akamaihd.net/prd/img/movie/cara-de-um-focinho-de-outro/8a86d677-007f-4ae4-8d12-f61c0621e799.webp',
  'https://ingresso-a.akamaihd.net/prd/img/movie/panico-7/30da3b1d-7b38-492c-85c3-790fcb5dbb7f.webp',
  'https://ingresso-a.akamaihd.net/prd/img/movie/barba-ensopada-de-sangue/1d488004-1e31-4ba7-b7e5-e1de6f1e5b69.webp',
  'https://ingresso-a.akamaihd.net/prd/img/movie/velhos-bandidos/151d69f8-a505-4752-bbaf-21cf44d83ec1.webp',
  'https://ingresso-a.akamaihd.net/prd/img/movie/devoradores-de-estrelas/b50b2ea1-ceac-4de3-a787-aae2209181e2.webp',
  'https://ingresso-a.akamaihd.net/prd/img/movie/nuremberg/8032b08a-7446-47de-983d-14e0e84e7d9d.webp',
  'https://ingresso-a.akamaihd.net/prd/img/movie/uma-segunda-chance/3681c1f8-b70e-4f67-8aa0-8775b3a258c1.webp',
  'https://ingresso-a.akamaihd.net/prd/img/movie/super-mario-galaxy-o-filme/23fedf27-eac0-4987-8403-4a0760dc3d6f.webp',
];

export default function MovieInvite({ onContinue }: MovieInviteProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen flex flex-col items-center justify-center p-4 py-20"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', duration: 0.8 }}
        className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl p-6 max-w-4xl w-full mb-6"
      >
        <h1 className="text-xl md:text-2xl text-center text-gray-800 font-serif leading-relaxed mb-6">
          Você aceitaria sair comigo para assistir um filme e, quem sabe depois do filme, ver o mar à noite em alguma orla perto do shopping?
        </h1>

        <div className="flex justify-between items-center mb-6">
          <motion.img
            animate={{ rotate: [-5, 5, -5] }}
            transition={{ duration: 2, repeat: Infinity }}
            src="https://i.pinimg.com/736x/5e/72/bd/5e72bd74ea81135c57d801e2a7d87f7d.jpg"
            alt="meme"
            className="w-16 h-16 md:w-24 md:h-24 rounded-lg object-cover"
          />
          <motion.img
            animate={{ rotate: [5, -5, 5] }}
            transition={{ duration: 2, repeat: Infinity }}
            src="https://i.pinimg.com/736x/2d/91/2c/2d912c4a7a3b883917c94c5f86a18c69.jpg"
            alt="meme"
            className="w-16 h-16 md:w-24 md:h-24 rounded-lg object-cover"
          />
        </div>

        <div className="overflow-x-auto pb-4 mb-4">
          <div className="flex gap-3 md:gap-4 min-w-max px-2">
            {moviePosters.map((poster, index) => (
              <motion.div
                key={index}
                animate={{
                  rotate: [-2, 2, -2],
                  y: [0, -5, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.1,
                }}
                className="flex-shrink-0"
              >
                <img
                  src={poster}
                  alt={`Filme ${index + 1}`}
                  className="w-20 h-28 md:w-24 md:h-32 rounded-lg shadow-lg object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>

        <p className="text-center text-gray-600 text-sm mb-4">
          entre outros filmes que estão em cartaz
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onContinue}
          className="w-full bg-gradient-to-r from-pink-500 to-rose-500 text-white py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-shadow"
        >
          Continuar
        </motion.button>

        <p className="text-center text-gray-500 text-xs mt-4 italic">
          Por favor, eu gastei todo meu React e Tailwind fazendo isso aqui há quase 1 semana.
        </p>
      </motion.div>
    </motion.div>
  );
}

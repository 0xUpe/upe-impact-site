// useConfetti.ts
import confetti from 'canvas-confetti';

const useConfetti = () => {
  const showConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  return showConfetti;
};

export default useConfetti;

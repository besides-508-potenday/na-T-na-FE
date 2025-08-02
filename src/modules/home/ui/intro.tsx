import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import IntroCard from './components/IntroCard';
import IntroButton from './components/IntroButton';

export default function Intro() {
  const [showLogo, setShowLogo] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLogo(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br p-4">
      <AnimatePresence>
        {showLogo && (
          <div className="flex flex-col items-center gap-8">
            {/* 메인 인트로 카드 */}
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ type: 'spring', duration: 2 }}
              className="w-[375px] h-[483px]"
            >
              <IntroCard />
            </motion.div>

            {/* 시작하기 버튼 */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="flex justify-center"
            >
              <IntroButton />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

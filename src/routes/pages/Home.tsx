/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router';
import Lottie from 'lottie-react';

import animationStart from '../../assets/animations/시작 화면.json';
import animationTG from '../../assets/animations/T-ㄱ.json';
import ChatTypingAnimation from '../../assets/animations/two.json';
import IntroButton from '@/modules/home/ui/components/IntroButton';
import LayoutCard from '@/components/LayoutCard';
import { motion } from 'framer-motion';

function Home() {
  const lottieRef = useRef<any>(null);
  const navigate = useNavigate();
  const [step, setStep] = useState<'start' | 'tg' | 'intro'>('start');
  const [showIntroText, setShowIntroText] = useState(false);

  const handleComplete = () => {
    if (step === 'start') {
      setStep('tg');
    }
  };

  const handleButtonClick = () => {
    if (step === 'tg') {
      setStep('intro');
    }
  };

  const handleChatAnimationComplete = () => {
    setShowIntroText(true);
    setTimeout(() => {
      navigate('/nickname');
    }, 4000);
  };

  if (step === 'intro') {
    return (
      <LayoutCard headerMessage="시작중。。。">
        <div className="flex-1 flex flex-col items-center px-4 pt-5 z-10">
          {/* 채팅 애니메이션 */}
          <Lottie
            animationData={ChatTypingAnimation}
            loop={false}
            autoplay
            onComplete={handleChatAnimationComplete}
          />

          {/* 소개 텍스트 - 채팅 애니메이션 완료 후에만 표시 */}
          {showIntroText && (
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ type: 'spring', duration: 3 }}
          
            >
              <div className="text-center">
                <p
                  className="text-[34px] font-semibold leading-[1.193em] text-[#18181B]"
                  style={{ fontFamily: 'Pretendard' }}
                >
                  F캐릭터와 대화를 나누어 보고 편지를 받아 보세요!
                </p>
                <p className="pt-3 text-[26px] font-semibold leading-[1.193em] text-[#71717A]">
                  F와 난 베프가 될 수 있을까요?
                </p>
              </div>
            </motion.div>
          )}
        </div>
      </LayoutCard>
    );
  }

  // 기본 애니메이션 화면
  return (
    <LayoutCard headerMessage="시작중。。。">
      <div className="flex-1 flex items-center justify-center z-10">
        <Lottie
          lottieRef={lottieRef}
          animationData={step === 'start' ? animationStart : animationTG}
          loop={false}
          autoplay
          onComplete={handleComplete}
        />
      </div>

      {/* 시작하기 버튼 */}
      <div className="px-7 pb-13 w-full z-10">
        <IntroButton onClick={handleButtonClick} />
      </div>
    </LayoutCard>
  );
}

export default Home;

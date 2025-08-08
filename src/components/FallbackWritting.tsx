import LayoutCard from '@/components/LayoutCard';
import { PencilIcon } from '@/assets/pictures';
import { useEffect, useState } from 'react';
function FallbackWritting() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = ['/로딩중 캐릭터 2.png', '/로딩중 캐릭터.png'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 400);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <LayoutCard headerMessage="편지지 생성중。。。">
      <div className="flex-1 flex flex-col justify-center items-center gap-10 px-4 z-10">
        <div className="text-center">
          <p
            className="text-[26px] font-semibold leading-[1.193em] text-[#18181B] flex flex-col justify-center gap-2"
            style={{ fontFamily: 'Pretendard' }}
          >
            투닥이가
            <br />
            <span className="flex items-center gap-2">
              편지를 쓰는 중이에요
              <PencilIcon />
            </span>
          </p>

          <p className="pt-3 text-[22px] font-semibold leading-[1.193em] text-[#71717A]">
            잠시만 기다려주세요...
          </p>
        </div>
        <img
          src={images[currentImageIndex]}
          alt="loading"
          className="transition-opacity duration-300 ease-in-out"
        />
      </div>
    </LayoutCard>
  );
}

export default FallbackWritting;

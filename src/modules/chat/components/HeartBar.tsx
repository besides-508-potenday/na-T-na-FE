import React from 'react';
import { FullHeartIcon, DeadHeartIcon } from '../../../assets/pictures';

interface HeartBarProps {
  currentHearts: number; // 현재 하트 개수 (0-10)
  maxHearts?: number; // 최대 하트 개수 (기본값: 10)
}

const HeartBar: React.FC<HeartBarProps> = ({
  currentHearts,
  maxHearts = 10,
}) => {
  const hearts = Array.from({ length: maxHearts }, (_, index) => {
    const isAlive = index < currentHearts;
    return (
      <div key={index} className="transition-all duration-300">
        {isAlive ? <FullHeartIcon size={28} /> : <DeadHeartIcon size={28} />}
      </div>
    );
  });

  return (
    <div className="flex gap-1 justify-center bg-transparent backdrop-blur-sm rounded-xl">
      {hearts}
    </div>
  );
};

export default HeartBar;

import { useRef, useState } from 'react';
import mySong from '/result.mp3';
import { DotPlayIcon, PauseIcon } from '@/assets/icons';

interface AudioPlayButtonProps {
  letterMp3?: string;
}

export function AudioPlayButton({ letterMp3 }: AudioPlayButtonProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // letterMp3가 제공되면 사용하고, 아니면 기본 파일 사용
  const audioSrc = letterMp3 || mySong;

  const toggleAudio = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    setIsPlaying(!isPlaying);
  };

  return (
    <button
      onClick={toggleAudio}
      aria-label={isPlaying ? '편지지 일시정지' : '편지지 재생'}
      className="w-full bg-[#D4FE8E] border-b-[2px] border-[#00D692] cursor-pointer hover:bg-[#AAFE75] active:bg-[#88FE61] rounded-md px-3 py-4 flex items-center justify-center gap-1 shadow-[inset_-2px_2px_1px_0px_rgba(255,255,255,0.4)]"
    >
      <audio ref={audioRef} src={audioSrc} />
      {isPlaying ? <PauseIcon /> : <DotPlayIcon />}
      <span
        className="text-xl font-normal text-[#18181B]"
        style={{ fontFamily: 'DungGeunMo' }}
      >
        {isPlaying ? '편지지 일시정지' : '편지지 재생하기'}
      </span>
    </button>
  );
}

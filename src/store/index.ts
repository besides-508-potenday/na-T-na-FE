import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Character, AppState } from '@/types';

// 기본 캐릭터 데이터
const defaultCharacters: Character[] = [
  {
    id: 'tudag',
    name: '투닥이',
    personality: '소심함, 감정 과몰입,\n인정 욕구, 관계 중심 정서',
    image: '/tudag.png',
    description: '공감 능력 학습기',
  },
  {
    id: 'sample1',
    name: '썸고수_???',
    personality: '???\n???',
    image: '/레이어 2.png', // 임시로 같은 이미지 사용
    description: '연애 공감 시뮬레이션',
  },
  {
    id: 'sample2',
    name: '사회 선배_???',
    personality: '???\n???',
    image: '/tudag.png', // 임시로 같은 이미지 사용
    description: '직장 내 감정소통 연습',
  },
];

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      nickname: '',
      selectedCharacter: null,
      characters: defaultCharacters,

      setNickname: (nickname: string) => set({ nickname }),

      setSelectedCharacter: (character: Character) =>
        set({ selectedCharacter: character }),

      resetState: () =>
        set({
          nickname: '',
          selectedCharacter: null,
        }),
    }),
    {
      name: 'app-store', // localStorage 키
      partialize: (state) => ({
        nickname: state.nickname,
        selectedCharacter: state.selectedCharacter,
      }), // 지속할 상태만 선택
    }
  )
);

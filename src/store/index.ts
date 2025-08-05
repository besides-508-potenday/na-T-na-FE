// import { create } from 'zustand';
// import { persist } from 'zustand/middleware';
// import { Character, AppState } from '@/types';

// // 기본 캐릭터 데이터
// const defaultCharacters: Character[] = [
//   {
//     id: 'tudag',
//     name: '투닥이',
//     personality: '소심함, 감정 과몰입,\n인정 욕구, 관계 중심 정서',
//     image: '/tudag.png',
//     description: '친근하고 다정한 캐릭터',
//   },
//   {
//     id: 'sample1',
//     name: '밝은이',
//     personality: '활발함, 긍정적,\n호기심 많음, 외향적',
//     image: '/tudag.png', // 임시로 같은 이미지 사용
//     description: '항상 밝고 활기찬 캐릭터',
//   },
//   {
//     id: 'sample2',
//     name: '차분이',
//     personality: '침착함, 신중함,\n분석적, 논리적',
//     image: '/tudag.png', // 임시로 같은 이미지 사용
//     description: '신중하고 차분한 캐릭터',
//   },
// ];

// export const useAppStore = create<AppState>()(
//   persist(
//     (set) => ({
//       nickname: '',
//       selectedCharacter: null,
//       characters: defaultCharacters,

//       setNickname: (nickname: string) => set({ nickname }),

//       setSelectedCharacter: (character: Character) =>
//         set({ selectedCharacter: character }),

//       resetState: () =>
//         set({
//           nickname: '',
//           selectedCharacter: null,
//         }),
//     }),
//     {
//       name: 'app-store', // localStorage 키
//       partialize: (state) => ({
//         nickname: state.nickname,
//         selectedCharacter: state.selectedCharacter,
//       }), // 지속할 상태만 선택
//     }
//   )
// );

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { AppState } from '@/types';

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      nickname: '',
      selectedChatbotId: null,

      setNickname: (nickname: string) => set({ nickname }),

      setSelectedChatbotId: (chatbotId: number) =>
        set({ selectedChatbotId: chatbotId }),

      resetState: () =>
        set({
          nickname: '',
          selectedChatbotId: null,
        }),
    }),
    {
      name: 'app-store', // localStorage 키
      partialize: (state) => ({
        nickname: state.nickname,
        selectedChatbotId: state.selectedChatbotId,
      }), // 지속할 상태만 선택
    }
  )
);
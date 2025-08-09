import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { AppState } from '@/types';

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      nickname: '',
      selectedChatbotId: null,
      chatSession: null,

      setNickname: (nickname: string) => set({ nickname }),

      setSelectedChatbotId: (chatbotId: number) =>
        set({ selectedChatbotId: chatbotId }),

      setChatSession: (session) => set({ chatSession: session }),

      resetState: () =>
        set({
          nickname: '',
          selectedChatbotId: null,
          chatSession: null,
        }),
    }),
    {
      name: 'app-store', // localStorage 키
      partialize: (state) => ({
        nickname: state.nickname,
        selectedChatbotId: state.selectedChatbotId,
        chatSession: state.chatSession,
      }), // 지속할 상태만 선택
    }
  )
);

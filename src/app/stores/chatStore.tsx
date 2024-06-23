import { create } from 'zustand'

type ChatStore = {
    chatData: {isOpened: boolean}
    setChatData: (data: {isOpened: boolean}) => void
}

export const useChatStore = create<ChatStore>()((set) => ({
    chatData: { isOpened: false },
    setChatData: (data) => set({chatData: data})
}))
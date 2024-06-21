import { create } from 'zustand'
import {ChatTypes} from "../../widgets/chat/ui";

type ModalStore = {
    modal: string | null
    setModal: (name: string | null) => void
    clearModal: () => void
}

type ChatStore = {
    chatData: ChatTypes
    setChatData: (data: ChatTypes) => void
}

export const useModalStore = create<ModalStore>()((set) => ({
    modal: null,
    setModal: (name) => set({ modal: name }),
    clearModal: () => set({ modal: null }),
}))

export const useChatStore = create<ChatStore>()((set) => ({
    chatData: { isOpened: false },
    setChatData: (data) => set({chatData: data})
}))
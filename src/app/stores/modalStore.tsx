import {create} from "zustand";
import {ReactNode} from "react";

type ModalStore = {
    modal: ReactNode | null;
    openModal: (component: ReactNode) => void;
    closeModal: () => void;
};
export const useModalStore = create<ModalStore>((set) => ({
    modal: null,
    openModal: (component: ReactNode) => set({
        modal: component,
    }),
    closeModal: () => set({ modal: null }),
}));

import {create} from "zustand";
import {ReactNode} from "react";
import ModalUserSettings from "../../entities/modals/ModalUserSettings.tsx";
type ModalStore = {
    modal: string | null
    component: ReactNode | null
    openModal: (name: string) => void
    closeModal: () => void
}
const getComponentByName = (name: string) => {
    switch (name) {
        case 'user_settings': return <ModalUserSettings />;
        default: return null;
    }
};
export const useModalStore = create<ModalStore>()((set) => ({
    modal: null,
    component: null,
    openModal: (name: string) => set({
        modal: name,
        component: getComponentByName(name)
    }),
    closeModal: () => set({ modal: null, component: null }),
}));

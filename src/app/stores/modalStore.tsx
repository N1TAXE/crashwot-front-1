import {create} from "zustand";
import {ReactNode} from "react";
import {ModalSlider, ModalUserSettings} from "../../entities/modals";
import {ModalSliderType} from "../../entities/modals/ModalSlider.tsx";

type ModalStore = {
    modal: string | null
    component: ReactNode | null
    openModal: (name: string, data?: ModalSliderType) => void
    closeModal: () => void
}
const getComponentByName = (name: string, data?: ModalSliderType) => {
    switch (name) {
        case 'user_settings': return <ModalUserSettings />;
        case 'user_hiw_level': return <ModalSlider data={data!}/>;
        default: return null;
    }
};
export const useModalStore = create<ModalStore>()((set) => ({
    modal: null,
    component: null,
    openModal: (name: string, data?: ModalSliderType) => set({
        modal: name,
        component: getComponentByName(name, data)
    }),
    closeModal: () => set({ modal: null, component: null }),
}));

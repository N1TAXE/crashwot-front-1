import {create} from "zustand";
type CrashStore = {
    state: number;
    setState: (state: number) => void;
};
export const useCrashStore = create<CrashStore>((set) => ({
    state: 0,
    setState: (state: number) => set({ state: state }),
}));
import {create} from "zustand";
import {DataUserType} from "../../shared/types";
export interface CrashSettingsType {
    sum: number
    editorRatio: number
    editorRatioList: number[]
}
interface UserStore {
    user: DataUserType | null
    setUser: (data: DataUserType) => void
    setUserBalance: (amount: number) => void
    clearUser: () => void
    crashSettings: CrashSettingsType
    setCrashSettings: (data: CrashSettingsType) => void
}
export const useUserStore = create<UserStore>()((set, get) => ({
    user: null,
    crashSettings: {sum: 0.1, editorRatio: 2, editorRatioList: [1.1, 1.2, 1.5, 2]},
    setUser: (data: DataUserType) => set({ user: data }),
    setUserBalance: (amount: number) => {
        const currentUser = get().user;
        if (currentUser) {
            set({ user: { ...currentUser, balance: amount } });
        }
    },
    clearUser: () => set({ user: null }),
    setCrashSettings: (data: CrashSettingsType) => set({crashSettings: data})
}));
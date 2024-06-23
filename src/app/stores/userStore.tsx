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
    clearUser: () => void
    crashSettings: CrashSettingsType
    setCrashSettings: (data: CrashSettingsType) => void
}
export const useUserStore = create<UserStore>()((set) => ({
    user: null,
    crashSettings: {sum: 0.1, editorRatio: 2, editorRatioList: [1.1, 1.2, 1.5, 2]},
    setUser: (data: DataUserType) => set({ user: data }),
    clearUser: () => set({ user: null }),
    setCrashSettings: (data: CrashSettingsType) => set({crashSettings: data})
}));

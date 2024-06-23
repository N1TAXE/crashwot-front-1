import {create} from "zustand";
import {DataUserType} from "../../shared/types";
interface UserStore {
    user: DataUserType | null
    setUser: (data: DataUserType) => void
    clearUser: () => void
}
export const useUserStore = create<UserStore>()((set) => ({
    user: null,
    setUser: (data: DataUserType) => set({ user: data }),
    clearUser: () => set({ user: null })
}));

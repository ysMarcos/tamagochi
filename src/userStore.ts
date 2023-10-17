import { create } from "zustand";

type Token = {
    token: string | null;
    setToken: (token:string) => void;
}

const userStore = create<Token>(set => ({
    token: null,
    setToken: token => set(() => ({
        token
    }))
}))
export default userStore;

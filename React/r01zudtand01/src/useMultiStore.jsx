import { create } from "zustand";

// 여러 개의 상태를 포함한 Zustand 스토어
const useMultiStore = create((set) => ({
  count: 0,
  name: "My name is..",
  increase: () => set((state) => ({ 
    count: state.count + 1 
  })),
  setName: (newName) => set({ 
    name: newName 
  }),
}));

export default useMultiStore;


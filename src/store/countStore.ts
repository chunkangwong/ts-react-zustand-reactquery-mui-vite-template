import create from "zustand";

interface CountStore {
  count: number;
  increment: () => void;
  decrement: () => void;
  setCount: (count: number) => void;
}

export const useCount = create<CountStore>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
  setCount: (count) => set({ count }),
}));

import { create } from "zustand";
import { combine } from "zustand/middleware";

export const useCount = create(
  combine({ count: 0 }, (set) => {
    return {
      increment: () => set((state) => ({ count: state.count + 1 })),
      decrement: () => set((state) => ({ count: state.count - 1 })),
      setCount: (count: number) => set({ count }),
    };
  })
);

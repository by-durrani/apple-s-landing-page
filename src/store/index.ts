// state management lib
import { create } from "zustand";

const useMacbookStore = create<MacbookStoreTypes>((set) => ({
  color: "#2e2c2e",
  setColor: (color: string) => set({ color }),

  // 3D model scaling size
  scale: 0.08,
  setScale: (scale: number) => set({ scale }),

  // reset color, size
  reset: () => set({ color: "#2e2c2e", scale: 0.08 }),
}));

export default useMacbookStore;

import { create } from 'zustand';

interface EnergyState {
  currentLevel: number;
  history: Array<{ timestamp: Date; level: number }>;
  updateLevel: (level: number) => void;
}

export const useEnergyStore = create<EnergyState>((set) => ({
  currentLevel: 75,
  history: [],
  updateLevel: (level: number) => {
    set((state) => ({
      currentLevel: level,
      history: [...state.history, { timestamp: new Date(), level }],
    }));
  },
}));
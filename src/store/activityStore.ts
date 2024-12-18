import { create } from 'zustand';
import { Activity } from '../types/activity';

interface ActivityState {
  currentActivity: Activity | null;
  activities: Activity[];
  startActivity: (name: string) => void;
  stopActivity: () => void;
  addActivity: (activity: Activity) => void;
}

export const useActivityStore = create<ActivityState>((set) => ({
  currentActivity: null,
  activities: [],
  startActivity: (name: string) => {
    const activity: Activity = {
      id: crypto.randomUUID(),
      name,
      startTime: new Date(),
    };
    set({ currentActivity: activity });
  },
  stopActivity: () => {
    set((state) => {
      if (!state.currentActivity) return state;
      const completedActivity = {
        ...state.currentActivity,
        endTime: new Date(),
      };
      return {
        currentActivity: null,
        activities: [...state.activities, completedActivity],
      };
    });
  },
  addActivity: (activity: Activity) => {
    set((state) => ({
      activities: [...state.activities, activity],
    }));
  },
}));
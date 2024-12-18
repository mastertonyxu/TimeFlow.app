import React, { createContext, useContext } from 'react';

interface ThemeColors {
  primary: string;
  background: string;
  surface: string;
  text: string;
  error: string;
  success: string;
  warning: string;
}

interface Theme {
  colors: ThemeColors;
}

const defaultTheme: Theme = {
  colors: {
    primary: '#3b82f6',
    background: '#f3f4f6',
    surface: '#ffffff',
    text: '#1f2937',
    error: '#ef4444',
    success: '#22c55e',
    warning: '#f59e0b',
  },
};

const ThemeContext = createContext<Theme>(defaultTheme);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <ThemeContext.Provider value={defaultTheme}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
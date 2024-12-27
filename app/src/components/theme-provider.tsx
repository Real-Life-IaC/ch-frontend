import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface ThemeProviderProps {
  children: ReactNode;
  attribute: string; // e.g., 'class' for Tailwind CSS
  defaultTheme?: 'light' | 'dark'; // Default theme
  enableSystem?: boolean; // Use system theme
  disableTransitionOnChange?: boolean; // Disable transitions when switching themes
}

interface ThemeContextType {
  theme: 'light' | 'dark';
  setTheme: (theme: 'light' | 'dark') => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  attribute = 'class',
  defaultTheme = 'light',
  enableSystem = true,
  disableTransitionOnChange = false,
}) => {
  const [theme, setThemeState] = useState<'light' | 'dark'>(() => {
    if (enableSystem) {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      return systemTheme;
    }
    return defaultTheme;
  });

  const setTheme = (newTheme: 'light' | 'dark') => {
    setThemeState(newTheme);
    document.documentElement.setAttribute(attribute, newTheme);

    if (disableTransitionOnChange) {
      const root = document.documentElement;
      root.style.transition = 'none';
      setTimeout(() => (root.style.transition = ''), 0);
    }
  };

  useEffect(() => {
    document.documentElement.setAttribute(attribute, theme);
  }, [theme, attribute]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

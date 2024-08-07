import { useState, createContext, useEffect } from 'react';

import { AppContextType, PropsWithChildren } from './context';

const defaultContextValue: AppContextType = {
  view: '',
  jobDesc: '',
  setView: () => {},
  setJobDesc: () => {},
  isDarkMode: false,
  toggleDarkMode: () => {},
};

export const AppContext = createContext<AppContextType>(defaultContextValue);

export const AppContextProvider = ({ children }: PropsWithChildren) => {
  const [view, setView] = useState<string>('');
  const [jobDesc, setJobDesc] = useState<string>('');

  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    // Check if there's a saved preference in localStorage
    const savedTheme = localStorage.getItem('darkMode');
    // If there's a saved preference, use it; otherwise, default to light mode (false)
    return savedTheme ? savedTheme === 'true' : false;
  });

  useEffect(() => {
    // Update localStorage whenever the theme changes
    localStorage.setItem('darkMode', isDarkMode.toString());

    // Apply or remove the 'dark' class on the document element
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const value = {
    view,
    setView,
    jobDesc,
    setJobDesc,
    isDarkMode,
    toggleDarkMode,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

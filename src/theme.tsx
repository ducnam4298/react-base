import React, { useState } from 'react';

const CACHE_KEY = 'IS_LIGHT';

const Theme = React.createContext({
  isLight: false,
  toggleTheme: () => {},
  isResize: false,
  toggleResize: () => {},
});

const ThemeProvider = ({ children }) => {
  const [isLight, setIsLight] = useState(() => {
    const isDarkUserSetting = localStorage.getItem(CACHE_KEY);
    return isDarkUserSetting ? JSON.parse(isDarkUserSetting) : false;
  });
  const [isResize, setIsResize] = useState(false);
  const toggleTheme = () => {
    setIsLight((prevState: any) => {
      localStorage.setItem(CACHE_KEY, JSON.stringify(!prevState));
      return !prevState;
    });
  };
  const toggleResize = () => {
    setIsResize(prevState => {
      return !prevState;
    });
  };

  return (
    <Theme.Provider value={{ isLight, toggleTheme, isResize, toggleResize }}>
      {children}
    </Theme.Provider>
  );
};

export { Theme, ThemeProvider };

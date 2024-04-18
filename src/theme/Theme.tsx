import React, { ReactNode, createContext, useEffect, useState } from "react";
import { ThemeProvider as ThemeProviderStyled } from "styled-components";
import { darkTheme } from "./darkTheme";
import { lightTheme } from "./lightTheme";
import AsyncStorage from "@react-native-async-storage/async-storage";

export enum ThemeType {
  light = "light",
  dark = "dark",
}

const themes = {
  dark: darkTheme,
  light: lightTheme,
};

export const ThemeContext = createContext({
  theme: ThemeType.dark,
  toggleTheme: () => {},
});

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useState(ThemeType.dark);

  function toggleTheme() {
    let selectedTheme;

    if (theme === ThemeType.dark) {
      selectedTheme = ThemeType.light;
    } else {
      selectedTheme = ThemeType.dark;
    }

    setTheme(selectedTheme);
    AsyncStorage.setItem("@gamechest:theme", selectedTheme);
  }

  async function loadTheme() {
    const savedTheme = await AsyncStorage.getItem("@gamechest:theme");

    if (
      savedTheme &&
      (savedTheme === ThemeType.dark || savedTheme === ThemeType.light)
    ) {
      setTheme(savedTheme as ThemeType);
    }
  }

  useEffect(() => {
    loadTheme();
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProviderStyled theme={themes[theme]}>
        {children}
      </ThemeProviderStyled>
    </ThemeContext.Provider>
  );
};

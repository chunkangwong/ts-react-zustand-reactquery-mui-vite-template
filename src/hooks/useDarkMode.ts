import { useMediaQuery } from "@mui/material";
import { useEffect, useState } from "react";

export const useDarkMode = () => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const [darkMode, setDarkMode] = useState(prefersDarkMode);

  useEffect(() => {
    setDarkMode(prefersDarkMode);
  }, [prefersDarkMode]);

  const toggle = () => {
    setDarkMode(!darkMode);
  };

  return {
    darkMode,
    toggle,
  };
};

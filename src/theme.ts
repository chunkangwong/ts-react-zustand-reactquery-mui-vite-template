import { createTheme } from "@mui/material";

declare module "@mui/material/styles" {
  interface Palette {
    bg: {
      item: string;
      panel: string;
      textField: string;
      searchIconButton: string;
      itemIconButton: string;
      themeToggleButton: string;
    };
    border: {
      itemIconButton: string;
      panel: string;
    };
    font: {
      info: string;
      temp: string;
      itemInfo: string;
    };
  }
  interface PaletteOptions {
    bg?: {
      item: string;
      panel: string;
      textField: string;
      searchIconButton: string;
      itemIconButton: string;
      themeToggleButton: string;
    };
    border?: {
      itemIconButton: string;
      panel: string;
    };
    font?: {
      info: string;
      temp: string;
      itemInfo: string;
    };
  }
}

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    bg: {
      item: "rgba(255, 255, 255, 0.4)",
      panel: "rgba(255, 255, 255, 0.2)",
      textField: "rgba(255, 255, 255, 0.2)",
      searchIconButton: "rgba(108, 64, 181, 1)",
      itemIconButton: "white",
      themeToggleButton: "rgba(108, 64, 181, 1)",
    },
    border: {
      itemIconButton: "white",
      panel: "rgba(255, 255, 255, 0.5)",
    },
    font: {
      info: "rgba(102, 102, 102, 1)",
      temp: "rgba(108, 64, 181, 1)",
      itemInfo: "rgba(0, 0, 0, 1)",
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    bg: {
      item: "rgba(26, 26, 26, 0.5)",
      panel: "rgba(26, 26, 26, 0.3)",
      textField: "rgba(26, 26, 26, 0.5)",
      searchIconButton: "rgba(40, 18, 77, 1)",
      itemIconButton: "transparent",
      themeToggleButton: "rgba(40, 18, 77, 1)",
    },
    border: {
      itemIconButton: "rgba(255, 255, 255, 0.4)",
      panel: "rgba(26, 26, 26, 0.3)",
    },
    font: {
      info: "white",
      temp: "white",
      itemInfo: "rgba(255, 255, 255, 0.5)",
    },
  },
});

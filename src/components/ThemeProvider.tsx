import Brightness4 from "@mui/icons-material/Brightness4";
import Brightness7 from "@mui/icons-material/Brightness7";
import { ThemeProvider as MUIThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import Fab from "@mui/material/Fab";
import Stack from "@mui/material/Stack";
import { useDarkMode } from "../hooks/useDarkMode";
import { darkTheme, lightTheme } from "../theme";

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const { darkMode, toggle } = useDarkMode();

  return (
    <MUIThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <Fab
        color="primary"
        onClick={toggle}
        style={{ position: "fixed", bottom: 20, right: 20 }}
      >
        {darkMode ? <Brightness7 /> : <Brightness4 />}
      </Fab>
      <Stack
        height="100%"
        alignItems="center"
        py={2}
        sx={{
          backgroundImage: `url('${
            darkMode ? "bg-dark.png" : "bg-light.png"
          }')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      >
        {children}
      </Stack>
    </MUIThemeProvider>
  );
};

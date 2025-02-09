import Brightness4 from "@mui/icons-material/Brightness4";
import Brightness7 from "@mui/icons-material/Brightness7";
import { ThemeProvider as MUIThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import Fab from "@mui/material/Fab";
import Stack from "@mui/material/Stack";
import Tooltip from "@mui/material/Tooltip";
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
      <Tooltip title={darkMode ? "Light" : "Dark"}>
        <Fab
          color="primary"
          onClick={toggle}
          sx={{
            position: "fixed",
            bottom: 20,
            right: 20,
            backgroundColor: "bg.themeToggleButton",
            color: "white",
            "&:hover": {
              backgroundColor: "rgba(255,255,255,0.08)",
            },
          }}
        >
          {darkMode ? <Brightness7 /> : <Brightness4 />}
        </Fab>
      </Tooltip>
      <Stack
        minHeight="100vh"
        alignItems="center"
        py={2}
        sx={{
          backgroundImage: `url('${
            darkMode ? "bg-dark.png" : "bg-light.png"
          }')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "scroll",
        }}
      >
        {children}
      </Stack>
    </MUIThemeProvider>
  );
};

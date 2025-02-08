import { useTheme } from "@mui/material";
import Stack from "@mui/material/Stack";
import { SearchBar } from "./components/SearchBar";
import { SearchHistory } from "./components/SearchHistory";
import { WeatherHeader } from "./components/WeatherHeader";

const backgroundImageConfig = {
  light: "/bg-light.png",
  dark: "/bg-dark.png",
};

function App() {
  const theme = useTheme();

  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      width="100%"
      minHeight="100vh"
      pt={2}
      sx={{
        backgroundImage: `url(${backgroundImageConfig[theme.palette.mode]})`,
        backgroundSize: "auto,cover",
        backgroundPosition: "center",
      }}
    >
      <SearchBar />
      <Stack
        alignItems="center"
        justifyContent="center"
        width={{ md: "50%", xs: "80%" }}
        p={4}
        mt={2}
        sx={{
          backgroundColor: "bg.panel",
          borderRadius: { xs: "24px", md: "40px" },
          borderColor: "border.panel",
          borderWidth: "1px",
          borderStyle: "solid",
        }}
      >
        <WeatherHeader />
        <SearchHistory />
      </Stack>
    </Stack>
  );
}

export default App;

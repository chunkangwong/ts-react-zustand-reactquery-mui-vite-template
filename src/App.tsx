import { useTheme } from "@mui/material";
import Stack from "@mui/material/Stack";
import { SearchBarForm } from "./components/SearchBarForm/SearchBarForm";
import { SearchHistory } from "./components/SearchHistory";
import { WeatherHeaderLayout } from "./components/WeatherHeaderLayout/WeatherHeaderLayout";
import { useQueryWeather } from "./hooks/useQueryWeather";
import { useSearchHistoryStore } from "./store/searchHistoryStore";
import { FormValues } from "./types";
import { useEffect } from "react";

const backgroundImageConfig = {
  light: "/bg-light.png",
  dark: "/bg-dark.png",
};

function App() {
  const theme = useTheme();

  const addItem = useSearchHistoryStore((state) => state.addItem);

  const queryWeather = useQueryWeather();

  // Initial render effect to run the last search
  useEffect(() => {
    const items = useSearchHistoryStore.getState().searchHistoryItems;
    if (items.length === 0) return;
    const firstItem = items[0];
    queryWeather.mutateAsync(firstItem);
  }, []);

  const handleSearch = async (formValues: FormValues) => {
    const weatherData = await queryWeather.mutateAsync(formValues);
    addItem({
      city: weatherData.name,
      country: weatherData.sys.country,
      datetime: weatherData.datetime,
      id: weatherData.datetime,
    });
  };

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
      <SearchBarForm onSearch={handleSearch} />
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
        <WeatherHeaderLayout
          loading={queryWeather.isPending}
          weatherData={queryWeather.data}
        />
        <SearchHistory onSearch={handleSearch} />
      </Stack>
    </Stack>
  );
}

export default App;

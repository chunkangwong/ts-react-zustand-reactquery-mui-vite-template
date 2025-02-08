import { useTheme } from "@mui/material";
import Stack from "@mui/material/Stack";
import { Searchbar } from "./components/Searchbar/Searchbar";
import { SearchHistory } from "./components/SearchHistory/SearchHistory";
import { WeatherHeader } from "./components/WeatherHeader/WeatherHeader";
import { useQueryWeather } from "./hooks/useQueryWeather";
import { useSearchHistoryStore } from "./store/searchHistoryStore";
import { FormValues } from "./types";

const backgroundImageConfig = {
  light: "/bg-light.png",
  dark: "/bg-dark.png",
};

function App() {
  const { addItem, deleteItem, searchHistoryItems } = useSearchHistoryStore();

  const queryWeather = useQueryWeather();

  const theme = useTheme();

  const handleSearch = async (formValues: FormValues) => {
    const weatherData = await queryWeather.mutateAsync(formValues);
    addItem({
      city: weatherData.name,
      country: weatherData.sys.country,
      datetime: weatherData.datetime,
      id: weatherData.datetime,
    });
  };

  const handleDelete = (id: number) => {
    deleteItem(id);
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
      <Searchbar onSearch={handleSearch} />
      <Stack
        alignItems="center"
        justifyContent="center"
        width={{ md: "50%", xs: "80%" }}
        p={2}
        mt={2}
        sx={{
          backgroundColor: "bg.panel",
          borderRadius: "24px",
          borderColor: "rgba(255, 255, 255, 0.5)",
          borderWidth: "1px",
          borderStyle: "solid",
        }}
      >
        {queryWeather.data && <WeatherHeader {...queryWeather.data} />}
        <SearchHistory
          searchHistoryItems={searchHistoryItems}
          onDelete={handleDelete}
          onSearch={handleSearch}
        />
      </Stack>
    </Stack>
  );
}

export default App;

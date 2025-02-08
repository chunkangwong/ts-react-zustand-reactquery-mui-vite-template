import Stack from "@mui/material/Stack";
import { useEffect } from "react";
import { SearchBar } from "./components/SearchBar/SearchBar";
import { SearchHistory } from "./components/SearchHistory";
import { WeatherHeader } from "./components/WeatherHeader/WeatherHeader";
import { useQueryWeather } from "./hooks/useQueryWeather";
import { useSearchHistoryStore } from "./store/searchHistoryStore";
import { FormValues } from "./types";

function App() {
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
    try {
      const weatherData = await queryWeather.mutateAsync(formValues);
      addItem({
        city: weatherData.name,
        country: weatherData.sys.country,
        datetime: weatherData.datetime,
        id: weatherData.datetime,
      });
    } catch (error) {
      if ((error as Error).message === "Invalid location") {
        window.alert("Invalid location. Please try another city & country.");
      } else {
        window.alert("Unexpected error. Please try again.");
      }
      console.error(error);
    }
  };

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      <Stack
        alignItems="center"
        justifyContent="center"
        width={{ md: "50%", xs: "80%" }}
        p={4}
        mt={14}
        sx={{
          backgroundColor: "bg.panel",
          borderRadius: { xs: "24px", md: "40px" },
          borderColor: "border.panel",
          borderWidth: "1px",
          borderStyle: "solid",
        }}
      >
        <WeatherHeader
          loading={queryWeather.isPending}
          weatherData={queryWeather.data}
        />
        <SearchHistory onSearch={handleSearch} />
      </Stack>
    </>
  );
}

export default App;

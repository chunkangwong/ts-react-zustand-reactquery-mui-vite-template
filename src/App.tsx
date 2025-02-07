import Stack from "@mui/material/Stack";
import { Searchbar } from "./components/Searchbar/Searchbar";
import { SearchHistory } from "./components/SearchHistory/SearchHistory";
import { WeatherHeader } from "./components/WeatherHeader/WeatherHeader";
import { useQueryWeather } from "./hooks/useQueryWeather";
import { useSearchHistoryStore } from "./store/searchHistoryStore";
import { FormValues } from "./types";

function App() {
  const { addItem, deleteItem, searchHistoryItems } = useSearchHistoryStore();

  const queryWeather = useQueryWeather();

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
    <Stack>
      <Searchbar onSearch={handleSearch} />
      {queryWeather.data && <WeatherHeader {...queryWeather.data} />}
      <SearchHistory
        searchHistoryItems={searchHistoryItems}
        onDelete={handleDelete}
        onSearch={handleSearch}
      />
    </Stack>
  );
}

export default App;

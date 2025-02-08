import { useQueryWeather } from "../hooks/useQueryWeather";
import { WeatherHeaderLayout } from "./WeatherHeaderLayout/WeatherHeaderLayout";

export const WeatherHeader = () => {
  const queryWeather = useQueryWeather();

  return (
    <WeatherHeaderLayout
      loading={queryWeather.isFetching}
      weatherData={queryWeather.data}
    />
  );
};

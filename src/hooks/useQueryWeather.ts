import { useQuery } from "@tanstack/react-query";
import { useSearchHistoryStore } from "../store/searchHistoryStore";
import type { WeatherResponse } from "../types";

export const useQueryWeather = () => {
  const { lastQuery, addItem } = useSearchHistoryStore();

  return useQuery({
    queryKey: ["queryWeather", lastQuery],
    queryFn: async () => {
      const q = `${lastQuery.city}, ${lastQuery.country}`;
      const url = `${
        import.meta.env.VITE_OPENWEATHER_BASE_URL
      }?q=${encodeURIComponent(q)}&appid=${
        import.meta.env.VITE_OPENWEATHER_API_KEY
      }&units=metric`;

      const response = await fetch(url);
      if (!response.ok) throw new Error(`API error: ${response.status}`);

      const weatherData: WeatherResponse = await response.json();

      weatherData.main.temp = Math.round(weatherData.main.temp);
      weatherData.main.temp_max = Math.round(weatherData.main.temp_max);
      weatherData.main.temp_min = Math.round(weatherData.main.temp_min);

      const datetime = new Date().getTime();
      addItem({
        city: lastQuery.city,
        country: lastQuery.country,
        datetime: datetime,
        id: datetime,
      });
      return { ...weatherData, datetime: datetime };
    },
    enabled: Boolean(lastQuery.city && lastQuery.country),
  });
};

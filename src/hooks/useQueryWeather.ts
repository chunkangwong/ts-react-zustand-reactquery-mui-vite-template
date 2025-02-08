import { useMutation } from "@tanstack/react-query";
import { FormValues, WeatherResponse } from "../types";

export const useQueryWeather = () => {
  return useMutation({
    mutationFn: async (formValues: FormValues) => {
      const q = `${formValues.city}, ${formValues.country}`;
      const url = `${
        import.meta.env.VITE_OPENWEATHER_BASE_URL
      }?q=${encodeURIComponent(q)}&appid=${
        import.meta.env.VITE_OPENWEATHER_API_KEY
      }&units=metric`;

      const response = await fetch(url);
      if (response.status === 404) throw new Error("Invalid location");
      if (!response.ok) throw new Error(`API error: ${response.status}`);

      const weatherData: WeatherResponse = await response.json();

      weatherData.main.temp = Math.round(weatherData.main.temp);
      weatherData.main.temp_max = Math.round(weatherData.main.temp_max);
      weatherData.main.temp_min = Math.round(weatherData.main.temp_min);

      const datetime = new Date().getTime();
      return { ...weatherData, datetime: datetime };
    },
  });
};

export interface SearchHistoryItemType {
  id: number;
  city: string;
  country: string;
  datetime: number;
}

export interface WeatherResponse {
  name: string; // City name
  main: {
    temp: number; // Current temperature
    temp_min: number; // Low temperature
    temp_max: number; // High temperature
    humidity: number; // Humidity percentage
  };
  weather: {
    main: "Clouds" | "Rain"; // Weather condition (e.g., clouds, rain)
  }[];
  sys: {
    country: string; // Country code
  };
}

export interface FormValues {
  city: string;
  country: string;
}

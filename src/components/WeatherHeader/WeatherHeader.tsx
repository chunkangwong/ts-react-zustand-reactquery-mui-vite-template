import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { WeatherResponse } from "../../types";
import dayjs from "dayjs";

interface WeatherHeaderProps extends WeatherResponse {
  datetime: number;
}

export const WeatherHeader = ({
  main: { humidity, temp, temp_max, temp_min },
  name,
  sys: { country },
  weather,
  datetime,
}: WeatherHeaderProps) => {
  return (
    <Stack>
      <Typography>Today's Weather</Typography>
      <Typography>{temp}&deg;</Typography>
      <Typography>
        H: {temp_max}&deg; L: {temp_min}&deg;
      </Typography>
      <Stack direction="row">
        <Typography>
          {name}, {country}
        </Typography>
        <Typography>{dayjs(datetime).format("DD-MM-YYYY hh:mmA")}</Typography>
        <Typography>Humidity: {humidity}%</Typography>
        <Typography>{weather?.[0].main}</Typography>
      </Stack>
    </Stack>
  );
};

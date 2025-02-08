import Grid from "@mui/material/Grid2";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import dayjs from "dayjs";
import { WeatherResponse } from "../../types";

interface WeatherHeaderProps {
  weatherData?: { datetime: number } & WeatherResponse;
  loading?: boolean;
}

export const WeatherHeader = ({ loading, weatherData }: WeatherHeaderProps) => {
  return (
    <Grid
      container
      justifyContent="space-between"
      width="100%"
      columnSpacing={1}
    >
      <Grid size={6}>
        <Stack gap={1}>
          <Typography>Today's Weather</Typography>
          {loading || !weatherData ? (
            <>
              <Skeleton
                variant="text"
                sx={{
                  fontSize: "6rem",
                }}
              />
              <Skeleton variant="text" />
              <Skeleton variant="text" />
            </>
          ) : (
            <>
              <Typography
                variant="h1"
                sx={{
                  fontWeight: "bold",
                  color: "font.temp",
                }}
              >
                {weatherData.main.temp}&deg;
              </Typography>
              <Typography>
                H: {weatherData.main.temp_max}&deg; L:{" "}
                {weatherData.main.temp_min}
                &deg;
              </Typography>
              <Typography
                sx={{
                  fontWeight: "bold",
                  color: "font.info",
                }}
              >
                {weatherData.name}, {weatherData.sys.country}
              </Typography>
            </>
          )}
        </Stack>
      </Grid>
      <Grid size={6}>
        <Stack
          direction={{
            xs: "column-reverse",
            md: "row",
          }}
          justifyContent={{
            xs: "end",
            md: "space-between",
          }}
          alignItems="end"
          height="100%"
          gap={1}
          sx={{
            color: "font.info",
          }}
        >
          {loading || !weatherData ? (
            <>
              <Skeleton variant="text" width="100%" />
              <Skeleton variant="text" width="100%" />
            </>
          ) : (
            <>
              <Typography>
                {dayjs(weatherData.datetime).format("DD-MM-YYYY hh:mmA")}
              </Typography>
              <Typography>Humidity: {weatherData.main.humidity}%</Typography>
              <Typography>{weatherData.weather?.[0].main}</Typography>
            </>
          )}
        </Stack>
      </Grid>
    </Grid>
  );
};

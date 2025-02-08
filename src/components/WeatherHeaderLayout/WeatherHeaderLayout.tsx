import Grid from "@mui/material/Grid2";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import dayjs from "dayjs";
import { WeatherResponse } from "../../types";
import { MotionSkeleton } from "../MotionSkeleton";
import { MotionTypography } from "../MotionTypography";

interface WeatherHeaderLayoutProps {
  weatherData?: { datetime: number } & WeatherResponse;
  loading?: boolean;
}

export const WeatherHeaderLayout = ({
  loading,
  weatherData,
}: WeatherHeaderLayoutProps) => {
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
              <MotionSkeleton variant="logo" />
              <MotionSkeleton variant="text" />
              <MotionSkeleton variant="text" />
            </>
          ) : (
            <>
              <MotionTypography
                variant="h1"
                sx={{
                  fontWeight: "bold",
                  color: "font.temp",
                }}
              >
                {weatherData.main.temp}&deg;
              </MotionTypography>
              <MotionTypography>
                H: {weatherData.main.temp_max}&deg; L:{" "}
                {weatherData.main.temp_min}
                &deg;
              </MotionTypography>
              <MotionTypography
                sx={{
                  fontWeight: "bold",
                  color: "font.info",
                }}
              >
                {weatherData.name}, {weatherData.sys.country}
              </MotionTypography>
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
              <MotionSkeleton variant="text" />
              <MotionSkeleton variant="text" />
            </>
          ) : (
            <>
              <MotionTypography>
                {dayjs(weatherData.datetime).format("DD-MM-YYYY hh:mmA")}
              </MotionTypography>
              <MotionTypography>
                Humidity: {weatherData.main.humidity}%
              </MotionTypography>
              <MotionTypography>
                {weatherData.weather?.[0].main}
              </MotionTypography>
            </>
          )}
        </Stack>
      </Grid>
    </Grid>
  );
};

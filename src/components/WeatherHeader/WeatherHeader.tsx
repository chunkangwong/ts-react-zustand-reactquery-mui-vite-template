import Grid from "@mui/material/Grid2";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import dayjs from "dayjs";
import { WeatherResponse } from "../../types";

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
    <Grid container justifyContent="space-between">
      <Grid
        size={{
          md: 6,
        }}
      >
        <Typography>Today's Weather</Typography>
        <Typography
          variant="h1"
          sx={{
            fontWeight: "bold",
            color: "rgba(108, 64, 181, 1)",
          }}
        >
          {temp}&deg;
        </Typography>
        <Typography>
          H: {temp_max}&deg; L: {temp_min}&deg;
        </Typography>
        <Typography
          sx={{
            fontWeight: "bold",
            color: "rgba(102, 102, 102, 1)",
          }}
        >
          {name}, {country}
        </Typography>
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
          sx={{
            color: "rgba(102, 102, 102, 1)",
          }}
        >
          <Typography>{dayjs(datetime).format("DD-MM-YYYY hh:mmA")}</Typography>
          <Typography>Humidity: {humidity}%</Typography>
          <Typography>{weather?.[0].main}</Typography>
        </Stack>
      </Grid>
    </Grid>
  );
};

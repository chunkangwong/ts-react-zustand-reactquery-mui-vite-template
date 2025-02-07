import ClearIcon from "@mui/icons-material/Clear";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { useForm } from "react-hook-form";
import { FormValues } from "../../types";

interface SearchbarProps {
  onSearch: (formValues: FormValues) => void;
}

export const Searchbar = ({ onSearch }: SearchbarProps) => {
  const form = useForm<FormValues>({
    defaultValues: {
      city: "Johor",
      country: "MY",
    },
  });

  const { city, country } = form.watch();

  const handleSubmit = form.handleSubmit(({ city, country }) => {
    onSearch({ city, country });
    form.reset();
  });

  return (
    <form onSubmit={handleSubmit}>
      <Stack direction="row" gap={1} alignItems="center">
        <TextField
          label="City"
          variant="filled"
          {...form.register("city", {
            required: true,
          })}
          error={!!form.formState.errors.city}
          helperText={!!form.formState.errors.city?.message}
          slotProps={{
            input: {
              disableUnderline: true,
            },
          }}
          sx={{
            "& .MuiFilledInput-root": {
              borderRadius: "8px",
              backgroundColor: "rgba(255, 255, 255, 0.2)",
            },
          }}
        />
        <TextField
          label="Country"
          variant="filled"
          {...form.register("country", {
            required: true,
          })}
          error={!!form.formState.errors.country}
          helperText={!!form.formState.errors.country?.message}
          slotProps={{
            input: {
              disableUnderline: true,
            },
          }}
          sx={{
            "& .MuiFilledInput-root": {
              borderRadius: "8px",
              backgroundColor: "rgba(255, 255, 255, 0.2)",
            },
          }}
        />
        {(city || country) && (
          <IconButton
            type="reset"
            sx={{
              borderRadius: "25%",
              backgroundColor: "rgba(108, 64, 181, 1)",
              color: "white",
              "&:hover": {
                backgroundColor: "rgba(108, 64, 181, 0.6)",
              },
            }}
          >
            <ClearIcon />
          </IconButton>
        )}
        <IconButton
          type="submit"
          sx={{
            borderRadius: "25%",
            backgroundColor: "rgba(108, 64, 181, 1)",
            color: "white",
            "&:hover": {
              backgroundColor: "rgba(108, 64, 181, 0.6)",
            },
          }}
        >
          <SearchIcon />
        </IconButton>
      </Stack>
    </form>
  );
};

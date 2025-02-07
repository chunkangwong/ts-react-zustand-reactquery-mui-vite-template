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
  const handleSubmit = form.handleSubmit(({ city, country }) => {
    onSearch({ city, country });

    form.reset();
  });

  return (
    <form onSubmit={handleSubmit}>
      <Stack direction="row">
        <TextField
          label="City"
          variant="filled"
          {...form.register("city", {
            required: true,
          })}
          error={!!form.formState.errors.city}
          helperText={!!form.formState.errors.city?.message}
        />
        <TextField
          label="Country"
          variant="filled"
          {...form.register("country", {
            required: true,
          })}
          error={!!form.formState.errors.country}
          helperText={!!form.formState.errors.country?.message}
        />
        <IconButton type="reset">
          <ClearIcon />
        </IconButton>
        <IconButton type="submit">
          <SearchIcon />
        </IconButton>
      </Stack>
    </form>
  );
};

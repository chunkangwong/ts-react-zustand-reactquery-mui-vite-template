import ClearIcon from "@mui/icons-material/Clear";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { FormValues } from "../../types";

interface SearchbarProps {
  onSearch: (formValues: FormValues) => void;
}

export const Searchbar = ({ onSearch }: SearchbarProps) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const city = formData.get("city") as string;
    const country = formData.get("country") as string;
    onSearch({ city, country });

    form.reset();
  };

  return (
    <Stack
      direction="row"
      gap={1}
      alignItems="center"
      width={{ md: "50%", xs: "80%" }}
      component="form"
      onSubmit={handleSubmit}
    >
      <TextField
        label="City"
        variant="filled"
        required
        name="city"
        autoFocus
        slotProps={{
          input: {
            disableUnderline: true,
          },
        }}
        sx={{
          "& .MuiFilledInput-root": {
            borderRadius: { xs: "8px", md: "20px" },
            backgroundColor: "bg.textField",
          },
          flexGrow: 1,
        }}
      />
      <TextField
        label="Country"
        variant="filled"
        required
        name="country"
        slotProps={{
          input: {
            disableUnderline: true,
          },
        }}
        sx={{
          "& .MuiFilledInput-root": {
            borderRadius: { xs: "8px", md: "20px" },
            backgroundColor: "bg.textField",
          },
          flexGrow: 1,
        }}
      />
      <IconButton
        type="reset"
        sx={{
          borderRadius: { xs: "8px", md: "25%" },
          backgroundColor: "bg.searchIconButton",
          color: "white",
          "&:hover": {
            backgroundColor: "rgba(108, 64, 181, 0.6)",
          },
        }}
      >
        <ClearIcon />
      </IconButton>
      <IconButton
        type="submit"
        sx={{
          borderRadius: { xs: "8px", md: "25%" },
          backgroundColor: "bg.searchIconButton",
          color: "white",
        }}
      >
        <SearchIcon />
      </IconButton>
    </Stack>
  );
};

import ClearIcon from "@mui/icons-material/Clear";
import SearchIcon from "@mui/icons-material/Search";
import { SxProps, Theme } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { FormValues } from "../../types";

interface SearchBarProps {
  onSearch: (formValues: FormValues) => void;
}

const iconButtonStyle: SxProps<Theme> = {
  borderRadius: { xs: "8px", md: "25%" },
  backgroundColor: "bg.searchIconButton",
  color: "white",
};

export const SearchBar = ({ onSearch }: SearchBarProps) => {
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
      <SearchBarTextField label="City" name="city" />
      <SearchBarTextField label="Country" name="country" />
      <IconButton type="reset" sx={iconButtonStyle}>
        <ClearIcon />
      </IconButton>
      <IconButton type="submit" sx={iconButtonStyle}>
        <SearchIcon />
      </IconButton>
    </Stack>
  );
};

interface SearchBarTextFieldProps {
  label: string;
  name: string;
}

const SearchBarTextField = ({ label, name }: SearchBarTextFieldProps) => {
  return (
    <TextField
      label={label}
      variant="filled"
      required
      name={name}
      size="small"
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
  );
};

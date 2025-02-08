import ClearIcon from "@mui/icons-material/Clear";
import SearchIcon from "@mui/icons-material/Search";
import { SxProps, Theme, useMediaQuery, useTheme } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Tooltip from "@mui/material/Tooltip";
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
      <Tooltip title="Clear" disableInteractive>
        <IconButton type="reset" sx={iconButtonStyle}>
          <ClearIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="Search" disableInteractive>
        <IconButton type="submit" sx={iconButtonStyle}>
          <SearchIcon />
        </IconButton>
      </Tooltip>
    </Stack>
  );
};

interface SearchBarTextFieldProps {
  label: string;
  name: string;
}

const SearchBarTextField = ({ label, name }: SearchBarTextFieldProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <TextField
      label={label}
      variant="filled"
      required
      name={name}
      size={isMobile ? "small" : "medium"}
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

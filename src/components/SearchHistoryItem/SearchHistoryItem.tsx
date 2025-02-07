import DeleteIcon from "@mui/icons-material/Delete";
import SearchIcon from "@mui/icons-material/Search";
import Grid from "@mui/material/Grid2";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import dayjs from "dayjs";
import { type SearchHistoryItemType } from "../../types";

interface SearchHistoryItemProps {
  searchHistoryItem: SearchHistoryItemType;
  onSearch: (formValues: { city: string; country: string }) => void;
  onDelete: (id: number) => void;
}

export const SearchHistoryItem = ({
  searchHistoryItem: { city, country, datetime, id },
  onDelete,
  onSearch,
}: SearchHistoryItemProps) => {
  const handleDelete = () => {
    const ok = confirm("Are you sure you want to delete this item?");
    if (!ok) return;
    onDelete(id);
  };

  const handleSearch = () => {
    onSearch({
      city,
      country,
    });
  };

  return (
    <Stack direction="row" width="100%" alignItems="center">
      <Grid container marginRight="auto" width="100%">
        <Grid
          size={{
            md: 10,
            xs: 12,
          }}
        >
          <Typography>
            {city}, {country}
          </Typography>
        </Grid>
        <Grid
          size={{
            md: 2,
            xs: 12,
          }}
        >
          <Typography>{dayjs(datetime).format("DD-MM-YYYY hh:mmA")}</Typography>
        </Grid>
      </Grid>
      <Stack direction="row">
        <IconButton onClick={handleSearch}>
          <SearchIcon />
        </IconButton>
        <IconButton onClick={handleDelete}>
          <DeleteIcon />
        </IconButton>
      </Stack>
    </Stack>
  );
};

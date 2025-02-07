import DeleteIcon from "@mui/icons-material/Delete";
import SearchIcon from "@mui/icons-material/Search";
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
    <Stack
      direction="row"
      width="100%"
      alignItems="center"
      gap={1}
      sx={{
        padding: "0 20px",
        height: "60px",
        backgroundColor: "rgba(255, 255, 255, 0.4)",
        borderRadius: "16px",
        minWidth: "300px",
        width: "100%",
        maxWidth: "580px",
        boxSizing: "border-box",
      }}
    >
      <Stack
        marginRight="auto"
        width="100%"
        direction={{
          md: "row",
          sx: "column",
        }}
      >
        <Typography>
          {city}, {country}
        </Typography>
        <Typography
          variant="caption"
          marginLeft={{
            md: "auto",
          }}
        >
          {dayjs(datetime).format("DD-MM-YYYY hh:mmA")}
        </Typography>
      </Stack>
      <Stack direction="row" gap={1}>
        <IconButton
          onClick={handleSearch}
          sx={{
            backgroundColor: "white",
          }}
        >
          <SearchIcon />
        </IconButton>
        <IconButton
          onClick={handleDelete}
          sx={{
            backgroundColor: "white",
          }}
        >
          <DeleteIcon />
        </IconButton>
      </Stack>
    </Stack>
  );
};

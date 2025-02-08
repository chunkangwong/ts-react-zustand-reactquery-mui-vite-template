import DeleteSweepIcon from "@mui/icons-material/DeleteSweep";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import { SearchHistoryItemType } from "../../types";
import { SearchHistoryItem } from "../SearchHistoryItem/SearchHistoryItem";

interface SearchHistoryListProps {
  searchHistoryItems: SearchHistoryItemType[];
  onDelete: (id: number) => void;
  onDeleteAll: () => void;
  onSearch: (formValues: { city: string; country: string }) => void;
}

export const SearchHistoryList = ({
  searchHistoryItems,
  onDelete,
  onDeleteAll,
  onSearch,
}: SearchHistoryListProps) => {
  return (
    <Stack
      gap={2}
      sx={{
        borderRadius: "16px",
        backgroundColor: "bg.panel",
        padding: 2,
        width: "100%",
        mt: 2,
      }}
    >
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography>Search History</Typography>
        <Tooltip title="Delete All" disableInteractive>
          <IconButton size="small" onClick={onDeleteAll}>
            <DeleteSweepIcon />
          </IconButton>
        </Tooltip>
      </Stack>
      {searchHistoryItems.map((searchHistoryItem) => (
        <SearchHistoryItem
          key={searchHistoryItem.id}
          searchHistoryItem={searchHistoryItem}
          onDelete={onDelete}
          onSearch={onSearch}
        />
      ))}
    </Stack>
  );
};

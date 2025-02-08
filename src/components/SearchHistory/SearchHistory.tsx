import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { SearchHistoryItemType } from "../../types";
import { SearchHistoryItem } from "../SearchHistoryItem/SearchHistoryItem";

interface SearchHistoryProps {
  searchHistoryItems: SearchHistoryItemType[];
  onDelete: (id: number) => void;
  onSearch: (formValues: { city: string; country: string }) => void;
}

export const SearchHistory = ({
  searchHistoryItems,
  onDelete,
  onSearch,
}: SearchHistoryProps) => {
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
      <Typography>Search History</Typography>
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

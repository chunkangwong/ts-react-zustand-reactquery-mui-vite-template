import DeleteSweepIcon from "@mui/icons-material/DeleteSweep";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useSearchHistoryStore } from "../../store/searchHistoryStore";
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
  const deleteAll = useSearchHistoryStore((state) => state.deleteAll);

  const handleDeleteAll = () => {
    const ok = confirm("Are you sure you want to delete all?");
    if (!ok) return;
    deleteAll();
  };

  return (
    <Stack>
      <Stack direction="row">
        <Typography>Search History</Typography>
        <IconButton onClick={handleDeleteAll}>
          <DeleteSweepIcon />
        </IconButton>
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

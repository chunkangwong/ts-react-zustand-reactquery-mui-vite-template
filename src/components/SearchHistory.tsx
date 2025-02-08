import { useSearchHistoryStore } from "../store/searchHistoryStore";
import { SearchHistoryList } from "./SearchHistoryList/SearchHistoryList";

export const SearchHistory = () => {
  const { searchHistoryItems, deleteItem, setLastQuery } =
    useSearchHistoryStore();

  return (
    <SearchHistoryList
      searchHistoryItems={searchHistoryItems}
      onDelete={deleteItem}
      onSearch={setLastQuery}
    />
  );
};

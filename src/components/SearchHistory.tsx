import { useSearchHistoryStore } from "../store/searchHistoryStore";
import { SearchHistoryList } from "./SearchHistoryList/SearchHistoryList";

export const SearchHistory = () => {
  const searchHistoryItems = useSearchHistoryStore(
    (state) => state.searchHistoryItems
  );
  const deleteItem = useSearchHistoryStore((state) => state.deleteItem);
  const setLastQuery = useSearchHistoryStore((state) => state.setLastQuery);

  return (
    <SearchHistoryList
      searchHistoryItems={searchHistoryItems}
      onDelete={deleteItem}
      onSearch={setLastQuery}
    />
  );
};

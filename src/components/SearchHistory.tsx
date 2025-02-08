import { useSearchHistoryStore } from "../store/searchHistoryStore";
import { SearchHistoryList } from "./SearchHistoryList/SearchHistoryList";

export const SearchHistory = () => {
  const { searchHistoryItems, deleteItem, setLastQuery } =
    useSearchHistoryStore((state) => ({
      searchHistoryItems: state.searchHistoryItems,
      deleteItem: state.deleteItem,
      setLastQuery: state.setLastQuery,
    }));

  return (
    <SearchHistoryList
      searchHistoryItems={searchHistoryItems}
      onDelete={deleteItem}
      onSearch={setLastQuery}
    />
  );
};

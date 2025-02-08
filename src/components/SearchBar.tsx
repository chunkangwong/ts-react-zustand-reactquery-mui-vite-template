import { useSearchHistoryStore } from "../store/searchHistoryStore";
import { SearchBarForm } from "./SearchBarForm/SearchBarForm";

export const SearchBar = () => {
  const lastQuery = useSearchHistoryStore((state) => state.lastQuery);
  const setLastQuery = useSearchHistoryStore((state) => state.setLastQuery);

  return <SearchBarForm lastQuery={lastQuery} onSearch={setLastQuery} />;
};

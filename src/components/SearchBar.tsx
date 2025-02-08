import { useSearchHistoryStore } from "../store/searchHistoryStore";
import { SearchBarForm } from "./SearchBarForm/SearchBarForm";

export const SearchBar = () => {
  const { lastQuery, setLastQuery } = useSearchHistoryStore();

  return <SearchBarForm lastQuery={lastQuery} onSearch={setLastQuery} />;
};

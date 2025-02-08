import { useSearchHistoryStore } from "../store/searchHistoryStore";
import { SearchBarForm } from "./SearchBarForm/SearchBarForm";

export const SearchBar = () => {
  const setLastQuery = useSearchHistoryStore((state) => state.setLastQuery);

  return <SearchBarForm onSearch={setLastQuery} />;
};

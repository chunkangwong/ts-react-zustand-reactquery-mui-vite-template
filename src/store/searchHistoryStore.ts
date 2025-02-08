import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { FormValues, SearchHistoryItemType } from "../types";

type BearStore = {
  lastQuery: FormValues;
  searchHistoryItems: SearchHistoryItemType[];
  addItem: (item: SearchHistoryItemType) => void;
  deleteItem: (id: number) => void;
  setLastQuery: (newQuery: FormValues) => void;
};

export const useSearchHistoryStore = create<BearStore>()(
  persist(
    (set, get) => ({
      lastQuery: {
        city: "",
        country: "",
      },
      searchHistoryItems: [],
      addItem: (item) => {
        const historyItems = get().searchHistoryItems;
        historyItems.unshift(item);
        set({ searchHistoryItems: historyItems });
      },
      deleteItem: (id) =>
        set({
          searchHistoryItems: get().searchHistoryItems.filter(
            (item) => item.id !== id
          ),
        }),
      setLastQuery: (newQuery) =>
        set({
          lastQuery: newQuery,
        }),
    }),
    {
      name: "weather-search-history", // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
    }
  )
);

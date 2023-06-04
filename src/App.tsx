import "./App.css";
import { useState } from "react";
import { SearchBar } from "./SearchBar";
import { AutoCompleteItem, GetAutocompleteItems, SearchState } from "./types";

export default function App() {
  const [search, setSearch] = useState<SearchState>({
    results: [],
    searchText: "",
  });

  const searchQuery = search.searchText;

  const getAutocompleteItems: GetAutocompleteItems = async (e) => {
    try {
      const searchInput = e.target.value;

      if (searchInput) {
        // let's trim here so accidental spaces around the text dont yield zero results (api limitation)
        const searchQuery = searchInput.trim().toLowerCase();

        const countries = (await (
          await fetch("https://restcountries.com/v3.1/all?fields=name,maps")
        ).json()) as AutoCompleteItem[];

        const foundCountries = countries.filter((country) => {
          return country.name.common.toLowerCase().includes(searchQuery);
        });

        setSearch({
          results: foundCountries,
          searchText: searchQuery,
        });
      } else {
        // reset search
        setSearch({ results: [], searchText: "" });
      }
    } catch (err) {
      //
    }
  };

  const showAutocompleteBar = search.results.length > 0;

  return (
    <div className="app">
      <h1 className="app__title">
        Search your country{" "}
        <span role="img" aria-label="plain-emoji">
          ✈️
        </span>
      </h1>
      <SearchBar
        autocompleteResults={search.results}
        onChange={getAutocompleteItems}
        showAutocompleteBar={showAutocompleteBar}
        searchQuery={searchQuery}
      />
    </div>
  );
}

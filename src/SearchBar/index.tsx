import { FC } from "react";
import { ItemWithHighlight } from "../ItemWithHighlight";
import styles from "./styles.module.css";
import { SearchBarProps } from "./types";

export const SearchBar: FC<SearchBarProps> = ({
  onChange,
  showAutocompleteBar,
  autocompleteResults,
  searchQuery,
}) => {
  return (
    <div className={styles.searchBar}>
      <input onChange={onChange} className={styles.searchBar__input} />
      {showAutocompleteBar && (
        <div tabIndex={1} className={styles.searchBar__autocompleteBar}>
          {autocompleteResults.map((autocompleteItem) => {
            const countryName = autocompleteItem.name.common.toLowerCase();

            return (
              <a
                href={autocompleteItem.maps.googleMaps}
                target="_blank"
                rel="noreferrer"
                className={styles.searchBar__searchResult}
                key={countryName}
              >
                <ItemWithHighlight
                  highlightedText={searchQuery}
                  fullText={countryName}
                />
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
};

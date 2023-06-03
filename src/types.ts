export type GetAutocompleteItems = (
  e: React.ChangeEvent<HTMLInputElement>
) => void;

export interface AutoCompleteItem {
  name: { common: string };
  maps: { googleMaps: string };
}

export interface SearchState {
  searchText: string;
  results: AutoCompleteItem[];
}

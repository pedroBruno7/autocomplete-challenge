import { AutoCompleteItem } from "../types";

export interface SearchBarProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  showAutocompleteBar: boolean;
  autocompleteResults: AutoCompleteItem[];
  searchQuery: string;
}

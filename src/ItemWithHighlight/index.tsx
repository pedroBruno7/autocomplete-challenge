import { FC } from "react";
import styles from "./styles.module.css";
import { ItemWithHighlightProps } from "./types";

export const ItemWithHighlight: FC<ItemWithHighlightProps> = ({
  highlightedText,
  fullText
}) => {
  const highligthedPart = (
    <span className={styles.searchBar__highlightedText}>{highlightedText}</span>
  );

  const splittedName = fullText.split(highlightedText.toLowerCase());

  return (
    <span>
      {/* Left part */}
      {splittedName[0]}
      {/* searched term */}
      {highligthedPart}
      {/* right part */}
      {splittedName[1]}
    </span>
  );
};

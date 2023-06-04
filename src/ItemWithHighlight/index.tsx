import { FC } from "react";
import styles from "./styles.module.css";
import { ItemWithHighlightProps } from "./types";

export const ItemWithHighlight: FC<ItemWithHighlightProps> = ({
  highlightedText,
  fullText,
}) => {
  const splitName = fullText.split(highlightedText);
  const leftPart = splitName[0];
  const rightPart = splitName[1];

  return (
    <span>
      {leftPart}
      <span className={styles.highlightedText}>{highlightedText}</span>
      {rightPart}
    </span>
  );
};

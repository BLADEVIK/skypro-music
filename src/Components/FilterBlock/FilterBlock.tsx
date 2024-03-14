"use client";
import styles from "@components/FilterBlock/FilterBlock.module.css";
import classNames from "classnames";
import { useState } from "react";

export default function FilterBlock() {
  const [filterActive, setFilterActive] = useState("");
  return (
    <div className={classNames(styles.centerBlockFilter, styles.filter)}>
      <div className={styles.filterTitle}>Искать по:</div>
      <div
        onClick={() => setFilterActive("author")}
        className={`${
          filterActive === "author"
            ? classNames(
                styles.filterButtonActive,
                styles.buttonAuthor,
                styles.btnTextActive
              )
            : classNames(
                styles.filterButton,
                styles.buttonAuthor,
                styles.btnText
              )
        } `}
      >
        исполнителю
      </div>
      <div
        onClick={() => setFilterActive("year")}
        className={`${
          filterActive === "year"
            ? classNames(
                styles.filterButtonActive,
                styles.buttonYear,
                styles.btnTextActive
              )
            : classNames(styles.filterButton, styles.buttonYear, styles.btnText)
        } `}
      >
        году выпуска
      </div>
      <div
        onClick={() => setFilterActive("genre")}
        className={`${
          filterActive === "genre"
            ? classNames(
                styles.filterButtonActive,
                styles.buttonGenre,
                styles.btnTextActive
              )
            : classNames(
                styles.filterButton,
                styles.buttonGenre,
                styles.btnText
              )
        } `}
      >
        жанру
      </div>
    </div>
  );
}

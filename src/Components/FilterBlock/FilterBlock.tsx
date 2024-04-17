"use client";
import styles from "@components/FilterBlock/FilterBlock.module.css";
import FilterItem from "@components/FilterItem/FilterItem";
import classNames from "classnames";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { setActiveFilter } from "../../store/features/playlistSlice";

export default function FilterBlock() {
  const [filterActive, setFilterActive] = useState("");
  const [authors, setAuthors] = useState<string[]>([]);
  const [genres, setGenre] = useState<string[]>([]);
  const { playlistPage } = useAppSelector((state) => state.playlist);
  const dispatch = useAppDispatch();
  const selectedAuthors = useAppSelector(
    (state) => state.playlist.activeFilters.author
  );
  const selectedGenres = useAppSelector(
    (state) => state.playlist.activeFilters.genre
  );
  function handleFilterClick(itemName: string, filterName: string) {
    if (filterName === "authors") {
      dispatch(
        setActiveFilter({
          author: selectedAuthors.includes(itemName)
            ? selectedAuthors.filter((author) => author !== itemName)
            : [...selectedAuthors, itemName],
        })
      );
    }
    if (filterName === "genres") {
      dispatch(
        setActiveFilter({
          genre: selectedGenres.includes(itemName)
            ? selectedGenres.filter((genre) => genre !== itemName)
            : [...selectedGenres, itemName],
        })
      );
    }
  }
  useEffect(() => {
    if (playlistPage.length > 0) {
      setAuthors(Array.from(new Set(playlistPage.map((item) => item.author))));
      setGenre(Array.from(new Set(playlistPage.map((item) => item.genre))));
    }
  }, [playlistPage]);

  const years = ["По умолчанию", "По убыванию", "По возрастанию"];

  function activeChangeFilter(nameFilter: string) {
    if (filterActive === nameFilter) {
      setFilterActive("");
      return;
    }
    setFilterActive(nameFilter);
  }
  return (
    <div className={classNames(styles.centerBlockFilter, styles.filter)}>
      <div className={styles.filterTitle}>Искать по:</div>
      <div className={styles.wrapperFilters}>
        <div
          onClick={() => activeChangeFilter("author")}
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
        {filterActive === "author" ? (
          <FilterItem
            selectedFilters={selectedAuthors}
            onClick={handleFilterClick}
            filterList={authors}
            filterName={"authors"}
          />
        ) : (
          ""
        )}
      </div>
      <div className={styles.wrapperFilters}>
        <div
          onClick={() => activeChangeFilter("year")}
          className={`${
            filterActive === "year"
              ? classNames(
                  styles.filterButtonActive,
                  styles.buttonYear,
                  styles.btnTextActive
                )
              : classNames(
                  styles.filterButton,
                  styles.buttonYear,
                  styles.btnText
                )
          } `}
        >
          году выпуска
        </div>
        {filterActive === "year" ? (
          <FilterItem
            selectedFilters={selectedAuthors}
            onClick={handleFilterClick}
            filterList={years}
            filterName={"years"}
          />
        ) : (
          ""
        )}
      </div>
      <div className={styles.wrapperFilters}>
        <div
          onClick={() => activeChangeFilter("genre")}
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
        {filterActive === "genre" ? (
          <FilterItem
          selectedFilters={selectedGenres}
            onClick={handleFilterClick}
            filterList={genres}
            filterName={"genres"}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

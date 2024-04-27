"use client";
import styles from "@components/ContentPlaylist/ContentPlaylist.module.css";
import PlayListItem from "../PlaylistItem/PlayListItem";
import classNames from "classnames";
import { useAppSelector } from "../../hooks";
import { useState, useEffect } from "react";

export default function ContentPlaylist() {
  const { currentTrack, playlistPage, filteredPlaylist, isActiveFilter } =
    useAppSelector((store) => store.playlist);
  const [isEmpty, setIsEmpty] = useState(false);
  // const isEmpty = isActiveFilter && filteredPlaylist.length === 0;
  const data = filteredPlaylist.length > 0 ? filteredPlaylist : playlistPage;
  useEffect(() => {
    setIsEmpty(isActiveFilter && filteredPlaylist.length === 0);
  }, [isActiveFilter, filteredPlaylist]);
  return (
    <div className={classNames(styles.contentPlaylist, styles.playlist)}>
      {isEmpty
        ? "Нет результата"
        : data.map((item, index) => (
            <PlayListItem
              key={index}
              item={item}
              playlist={data}
              isCurrentTrack={item.id === currentTrack?.id}
            />
          ))}
    </div>
  );
}

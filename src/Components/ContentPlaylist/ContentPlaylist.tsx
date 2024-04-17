"use client";
import styles from "@components/ContentPlaylist/ContentPlaylist.module.css";
import PlayListItem from "../PlaylistItem/PlayListItem";
import classNames from "classnames";
import { useAppSelector } from "../../hooks";

export default function ContentPlaylist() {
  const { currentTrack, playlistPage, filteredPlaylist } = useAppSelector(
    (store) => store.playlist
  );
  const data = filteredPlaylist.length > 0 ? filteredPlaylist : playlistPage;
  return (
    <div className={classNames(styles.contentPlaylist, styles.playlist)}>
      {data.map((item, index) => (
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

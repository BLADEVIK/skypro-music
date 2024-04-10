"use client";
import styles from "@components/ContentPlaylist/ContentPlaylist.module.css";
import PlayListItem from "../PlaylistItem/PlayListItem";
import classNames from "classnames";
import { useState, useEffect } from "react";
import { getTracks } from "../../api/tracks/tracks";
import { trackType } from "../../types";
import { useAppSelector } from "../../hooks";
import { useDispatch } from "react-redux";
import { setActiveFilter, setPlaylistPage } from "../../store/features/playlistSlice";

export default function ContentPlaylist() {
  const { currentTrack, playlistPage,filteredPlaylist } = useAppSelector(
    (store) => store.playlist
  );

  const dispatch = useDispatch();
  // console.log(tracks);
  useEffect(() => {
    getTracks().then((res) => {
      if (res.data) {
        dispatch(setPlaylistPage(res.data));
        dispatch(setActiveFilter({author:[]}))
      }
    });
  }, []);
  return (
    <div className={classNames(styles.contentPlaylist, styles.playlist)}>
      {/* <div>{currentTrack?.name}</div> */}
      {filteredPlaylist.map((item, index) => (
        <PlayListItem
          key={index}
          item={item}
          playlist={filteredPlaylist}
          isCurrentTrack={item.id === currentTrack?.id}
        />
      ))}
    </div>
  );
}

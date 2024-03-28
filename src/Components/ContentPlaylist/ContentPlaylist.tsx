"use client";
import styles from "@components/ContentPlaylist/ContentPlaylist.module.css";
import PlayListItem from "../PlaylistItem/PlayListItem";
import classNames from "classnames";
import { useState, useEffect } from "react";
import { getTracks } from "../../api/tracks/tracks";
import { getTrackResponse, trackType } from "../../types";
import { useAppSelector } from "../../hooks";
type contentPlaylistProps = {
  setCurrentTrack: (item: trackType) => void;
};
export default function ContentPlaylist({
  setCurrentTrack,
}: contentPlaylistProps) {
  const currentTrack = useAppSelector((store) => store.playlist.currentTrack);
  const [tracks, setTracks] = useState<trackType[]>([]);
  useEffect(() => {
    getTracks().then((res) => {
      if (res.data) {
        setTracks(res.data);
      }
    });
  }, []);
  // console.log(tracks);
  return (
    <div className={classNames(styles.contentPlaylist, styles.playlist)}>
      <div>{currentTrack?.name}</div>
      {tracks?.map((item, index) => (
        <PlayListItem
          onClick={() => {
            setCurrentTrack(item);
          }}
          key={index}
          item={item}
          playlist={tracks}
        />
      ))}
    </div>
  );
}

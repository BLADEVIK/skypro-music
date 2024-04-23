"use client";
import styles from "../page.module.css";
import { useAppSelector } from "../../../hooks";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  setClearFilter,
  setPlaylistPage,
} from "../../../store/features/playlistSlice";
import CenterBlock from "@components/CenterBlock/CenterBlock";
import MainSlideBar from "@components/MainSlideBar/MainSlideBar";
import Nav from "@components/Nav/Nav";
import Bar from "@components/Bar/Bar";
import { getTracksId } from "../../../api/tracks/tracks";
type paramsIDType = {
  params: { id: string };
};
export default function PlaylistID({ params }: paramsIDType) {
  const { currentTrack } = useAppSelector((store) => store.playlist);
  const dispatch = useDispatch();
  useEffect(() => {
    getTracksId(params.id).then((res) => {
      if (res.data) {
        dispatch(setClearFilter());
        dispatch(setPlaylistPage(res.data.items));
      }
    });
  }, []);
  return (
    <>
      <main className={styles.main}>
       
        <CenterBlock isFilter={false} />
        <MainSlideBar isSideBar={false} />
      </main>
      <footer> </footer>
    </>
  );
}

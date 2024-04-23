"use client";
import Bar from "@components/Bar/Bar";
import CenterBlock from "@components/CenterBlock/CenterBlock";
import MainSlideBar from "@components/MainSlideBar/MainSlideBar";
import Nav from "@components/Nav/Nav";
import styles from "@components/Favorite/Favorite.module.css";
import { useAppSelector } from "../../hooks";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getTracks } from "../../api/tracks/tracks";
import {
  setActiveFilter,
  setPlaylistPage,
} from "../../store/features/playlistSlice";

export default function Favorite() {
  const { currentTrack } = useAppSelector((store) => store.playlist);
  const dispatch = useDispatch();
  useEffect(() => {
    getTracks().then((res) => {
      if (res.data) {
        dispatch(setPlaylistPage(res.data));
        dispatch(setActiveFilter({ author: [] }));
      }
    });
  }, []);
  return (
    <>
      <main className={styles.main}>
        <Nav />
        <CenterBlock isFilter={true} />

        <MainSlideBar isSideBar={true} />
      </main>
      {currentTrack ? <Bar /> : ""}
      <footer> </footer>
    </>
  );
}

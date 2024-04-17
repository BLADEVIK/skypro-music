"use client";
import Bar from "@components/Bar/Bar";
import CenterBlock from "@components/CenterBlock/CenterBlock";
import MainSlideBar from "@components/MainSlideBar/MainSlideBar";
import Nav from "@components/Nav/Nav";
import styles from "@components/Main/Main.module.css";
import { useAppSelector } from "../../hooks";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getTracks } from "../../api/tracks/tracks";
import {
  setActiveFilter,
  setPlaylistPage,
} from "../../store/features/playlistSlice";
type mainType = {
  isFilter?: boolean;
  isSideBar?: boolean;
};
export default function Main({ isFilter = true, isSideBar = true }: mainType) {
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
        <CenterBlock isFilter={isFilter} />

        <MainSlideBar isSideBar={isSideBar} />
      </main>
      {currentTrack ? <Bar /> : ""}
      <footer> </footer>
    </>
  );
}

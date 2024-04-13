"use client";
import Bar from "@components/Bar/Bar";
import CenterBlock from "@components/CenterBlock/CenterBlock";
import MainSlideBar from "@components/MainSlideBar/MainSlideBar";
import Nav from "@components/Nav/Nav";
import styles from "@components/Main/Main.module.css";
import { useAppSelector } from "../../hooks";
type mainType = {
  playlistID: string;
  isFilter?: boolean;
  isSideBar?:boolean;
};
export default function Main({ playlistID, isFilter = true,isSideBar=true }: mainType) {
  const { currentTrack } = useAppSelector((store) => store.playlist);
  return (
    <>
      <main className={styles.main}>
        <Nav />
        <CenterBlock isFilter={isFilter} />
        <h2>{playlistID}</h2>
        <MainSlideBar isSideBar={isSideBar} />
      </main>
      {currentTrack ? <Bar /> : ""}
      <footer> </footer>
    </>
  );
}

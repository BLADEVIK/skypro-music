"use client"
import Bar from "@components/Bar/Bar";
import CenterBlock from "@components/CenterBlock/CenterBlock";
import MainSlideBar from "@components/MainSlideBar/MainSlideBar";
import Nav from "@components/Nav/Nav";
import styles from "@components/Main/Main.module.css";
import { useState } from "react";
import { trackType } from "../../types";

export default function Main() {
  const [currentTrack, setCurrentTrack] = useState<trackType | null>(null);
  return (
    <>
      <main className={styles.main}>
        <Nav />
        <CenterBlock setCurrentTrack={setCurrentTrack} />
        <MainSlideBar />
      </main>
      {currentTrack ? <Bar currentTrack={currentTrack} /> : ""}
      <footer> </footer>
    </>
  );
}

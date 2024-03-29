"use client";
import Bar from "@components/Bar/Bar";
import CenterBlock from "@components/CenterBlock/CenterBlock";
import MainSlideBar from "@components/MainSlideBar/MainSlideBar";
import Nav from "@components/Nav/Nav";
import styles from "@components/Main/Main.module.css";
import { useState } from "react";
import { trackType } from "../../types";
import { useAppSelector } from "../../hooks";
export default function Main() {
  const { currentTrack } = useAppSelector((store) => store.playlist);
  return (
    <>
      <main className={styles.main}>
        <Nav />
        <CenterBlock  />
        <MainSlideBar />
      </main>
      {currentTrack ? <Bar /> : ""}
      <footer> </footer>
    </>
  );
}

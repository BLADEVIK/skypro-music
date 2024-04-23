"use client"
import Nav from "@components/Nav/Nav";
import styles from "./page.module.css";
import Bar from "@components/Bar/Bar";
import { useAppSelector } from "../../hooks";

export default function TracksLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { currentTrack } = useAppSelector((store) => store.playlist);
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <main className={styles.main}>
          <Nav />
          {children}
        </main>
        {currentTrack ? <Bar /> : ""}
        <footer> </footer>
      </div>
    </div>
  );
}

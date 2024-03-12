import Bar from "@components/Bar/Bar";
import CenterBlock from "@components/CenterBlock/CenterBlock";
import MainSlideBar from "@components/MainSlideBar/MainSlideBar";
import Nav from "@components/Nav/Nav";
import styles from "@components/Main/Main.module.css";

export default function Main() {
  return (
    <>
      <main className={styles.main}>
        <Nav />
        <CenterBlock />
        <MainSlideBar />
      </main>
      <Bar />
      <footer> </footer>
    </>
  );
}

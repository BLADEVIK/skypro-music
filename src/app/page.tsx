import Main from "@components/Main/Main";
import styles from "./page.module.css";
export default function Home() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Main />
      </div>
    </div>
  );
}

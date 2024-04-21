import Image from "next/image";
import styles from "@components/MainSlideBar/MainSlideBar.module.css";
import classNames from "classnames";
import Link from "next/link";
import { useAppSelector } from "../../hooks";
type mainSideBarType = {
  isSideBar: boolean;
};
export default function MainSlideBar({ isSideBar }: mainSideBarType) {
  const { user } = useAppSelector((store) => store.auth);
  return (
    <div className={classNames(styles.mainSidebar, styles.sidebar)}>
      <Link href="/signin"><div className={styles.sidebarPersonal}>
        <p className={styles.sidebarPersonalName}>{user}</p>
        <div className={styles.sidebarIcon}>
          <svg>
            <use href="/img/icon/sprite.svg#logout"></use>
          </svg>
        </div>
      </div></Link>
      {isSideBar && (
        <div className={styles.sidebarBlock}>
          <div className={styles.sidebarList}>
            <div className={styles.sidebarItem}>
              <Link href={"/tracks/1"}>
                <Image
                  width={250}
                  height={150}
                  className={styles.sidebarImage}
                  src="/img/playlist01.png"
                  alt="day's playlist"
                />
              </Link>
            </div>
            <div className={styles.sidebarItem}>
              <Link href={"/tracks/2"}>
                <Image
                  width={250}
                  height={150}
                  className={styles.sidebarImage}
                  src="/img/playlist02.png"
                  alt="day's playlist"
                />
              </Link>
            </div>
            <div className={styles.sidebarItem}>
              <Link href={"/tracks/3"}>
                <Image
                  width={250}
                  height={150}
                  className={styles.sidebarImage}
                  src="/img/playlist03.png"
                  alt="day's playlist"
                />
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

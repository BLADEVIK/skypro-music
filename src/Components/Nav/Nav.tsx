"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "@components/Nav/Nav.module.css";
import classNames from "classnames";
import { useState } from "react";
import { useAppSelector } from "../../hooks";
import { getDataLocalStorageClear } from "../../store/features/authSlice";

export default function Nav() {
  const [navActive, setNavActive] = useState(false);

  const { userId } = useAppSelector((state) => state.auth);
  function NavBurger() {
    setNavActive(!navActive);
  }
  return (
    <nav className={classNames(styles.mainNav, styles.nav)}>
      <div className={classNames(styles.navLogo, styles.logo)}>
        <Link href="/tracks">
          <Image
            alt="Логотип"
            width={113}
            height={17}
            className={styles.logoImage}
            src="/img/logo.png"
          />
        </Link>
      </div>
      <div
        onClick={NavBurger}
        className={classNames(styles.navBurger, styles.burger)}
      >
        <span className={styles.burgerLine}></span>
        <span className={styles.burgerLine}></span>
        <span className={styles.burgerLine}></span>
      </div>
      {navActive ? (
        <div className={classNames(styles.navMenu, styles.menu)}>
          <ul className={styles.menuList}>
            <li className={styles.menuItem}>
              <Link href="/" className={styles.menuLink}>
                Главное
              </Link>
            </li>
            <Link href="/tracks/favorite">
              <li className={styles.menuItem}>Мой плейлист</li>
            </Link>
            <li className={styles.menuItem}>
              <Link onClick={getDataLocalStorageClear} href="/signin">
                {userId ? "Выйти" : "Войти"}
              </Link>
            </li>
          </ul>
        </div>
      ) : (
        <div></div>
      )}
    </nav>
  );
}

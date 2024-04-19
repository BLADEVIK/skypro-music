"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "../signin/page.module.css";
import classNames from "classnames";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";
import { getLogin } from "../../api/auth/authorization";

export default function SignIn() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string[]>([]);
  const navigate = useRouter();
  function handleLogin(e: FormEvent) {
    e.preventDefault();
    if ([login, password].includes("")) {
      return setError(["Заполните все поля"]);
    }
    getLogin({ email: login, password }).then((res) => {
      console.log(res);
      setError([]);

      if (res.data === undefined) {
        setError(["Пользователь с таким email или паролем не найден"]);
      }
      if (res.error === undefined) {
        navigate.push("/tracks");
      }
    });
  }
  return (
    <div className={styles.wrapper}>
      <div className={styles.containerEnter}>
        <div className={styles.modalBlock}>
          <form
            onSubmit={handleLogin}
            className={styles.modalFormLogin}
            action="#"
          >
            <a href="../">
              <div className={styles.modalLogo}>
                <Image
                  width={140}
                  height={21}
                  src="/img/logo_modal.png"
                  alt="Логотип"
                />
              </div>
            </a>
            <input
              onChange={(event) => setLogin(event.target.value)}
              value={login}
              className={classNames(styles.modalInput, styles.login)}
              type="text"
              name="login"
              placeholder="Почта"
            />
            <input
              onChange={(event) => setPassword(event.target.value)}
              value={password}
              className={classNames(styles.modalInput, styles.password)}
              type="password"
              name="password"
              placeholder="Пароль"
            />
            <button type="submit" className={styles.modalBtnEnter}>
              Войти
            </button>
            <Link href="/signup" className={styles.modalBtnSignup}>
              Зарегистрироваться
            </Link>
            {error.map((el, index) => (
              <p key={index} style={{ color: "red" }}>
                {el}
              </p>
            ))}
          </form>
        </div>
      </div>
    </div>
  );
}

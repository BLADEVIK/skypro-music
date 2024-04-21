"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "../signin/page.module.css";
import classNames from "classnames";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";
import { getLogin } from "../../api/auth/authorization";
import { getToken } from "../../api/token/token";
import { useAppDispatch } from "../../hooks";
import { setAuthState } from "../../store/features/authSlice";

export default function SignIn() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string[]>([]);
  const dispatch = useAppDispatch();
  const navigate = useRouter();
  function handleLogin(e: FormEvent) {
    e.preventDefault();
    if ([login, password].includes("")) {
      return setError(["Заполните все поля"]);
    }
    getLogin({ email: login, password }).then((res) => {
      setError([]);

      if (res.error) {
        return setError(["Пользователь с таким email или паролем не найден"]);
      }
      getToken({ email: login, password }).then((response) => {
        if (response.error || res.error) {
          return setError(["Пользователь с таким email или паролем не найден"]);
        }
        if (res.data && response.data) {
          dispatch(
            setAuthState({
              user: res.data.username,
              userId: res.data.id,
              access: response.data.access,
              refresh: response.data.refresh,
            })
          );
          navigate.push("/tracks");
        }
      });
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

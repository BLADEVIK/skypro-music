"use client";
import Image from "next/image";
import styles from "../signup/page.module.css";
import classNames from "classnames";
import { FormEvent, useState } from "react";
import { getRegister } from "../../api/auth/authorization";
import { useRouter } from "next/navigation";

export default function SignUp() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useRouter();
  function handleRegister(e: FormEvent) {
    e.preventDefault();
    if ([login, password, repeatPassword].includes("")) {
      return setError("Заполните все поля");
    }
    if (password !== repeatPassword) {
      return setError("Пароли не совпадают");
    }
    getRegister({ email: login, password, username: login })
      .then((res) => {
        // console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
    navigate.push("/signin");
  }
  return (
    <div className={styles.wrapper}>
      <div className={styles.containerSignup}>
        <div className={styles.modalBlock}>
          <form onSubmit={handleRegister} className={styles.modalFormLogin}>
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
              className={classNames(styles.modalInput, styles.passwordFirst)}
              type="password"
              name="password"
              placeholder="Пароль"
            />
            <input
              onChange={(event) => setRepeatPassword(event.target.value)}
              value={repeatPassword}
              className={classNames(styles.modalInput, styles.passwordDouble)}
              type="password"
              name="password"
              placeholder="Повторите пароль"
            />
            <button type="submit" className={styles.modalBtnSignupEnt}>
              Зарегистрироваться
            </button>
            <span style={{ color: "red" }}>{error}</span>
          </form>
        </div>
      </div>
    </div>
  );
}

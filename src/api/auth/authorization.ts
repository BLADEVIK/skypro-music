import { authPromise } from "./type";
// Регистрация нового пользователя
type getRegisterProps = {
  email: string;
  password: string;
  username: string;
};
type getLoginProps = {
  email: string;
  password: string;
};
export function getRegister({
  email,
  password,
  username,
}: getRegisterProps): Promise<authPromise> {
  return fetch("https://skypro-music-api.skyeng.tech/user/signup/", {
    method: "POST",
    body: JSON.stringify({
      email,
      password,
      username,
    }),
    headers: {
      "content-type": "application/json",
    },
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error("Данные не получены");
      }

      return res.json();
    })
    .then((res) => {
      return {
        error: undefined,
        data: res,
      };
    })
    .catch((error: Error) => {
      return { error: error.message, data: undefined };
    });
}

// Авторизация нового пользователя
export function getLogin({
  email,
  password,
}: getLoginProps): Promise<authPromise> {
  return fetch("https://skypro-music-api.skyeng.tech/user/login/", {
    method: "POST",
    body: JSON.stringify({
      email,
      password,
    }),
    headers: {
      "content-type": "application/json",
    },
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error("Данные не получены");
      }

      return res.json();
    })
    .then((res) => {
      return {
        error: undefined,
        data: res,
      };
    })
    .catch((error: Error) => {
      return { error: error.message, data: undefined };
    });
}

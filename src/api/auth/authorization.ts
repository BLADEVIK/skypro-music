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
  let isError = false;
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
      isError = res.status !== 201;
      return res.json();
    })
    .then((res) => {
      if (isError) {
        return {
          error: res,
          data: undefined,
        };
      }
      return {
        error: undefined,
        data: res,
      };
    });
}
// Авторизация нового пользователя
export function getLogin({
  email,
  password,
}: getLoginProps): Promise<authPromise> {
  let isError = false;
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
    isError = res.status !== 200;
    return res.json();
  })
  .then((res) => {
    if (isError) {
      return {
        error: res,
        data: undefined,
      };
    }
    return {
      error: undefined,
      data: res,
    };
  });
}

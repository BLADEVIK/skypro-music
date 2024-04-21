import { getTrackResponse } from "../../types";

// Получение списка избранных треков
export async function getLikedFavorite(
  userToken: string
): Promise<getTrackResponse> {
  return fetch(
    "https://skypro-music-api.skyeng.tech/catalog/track/favorite/all/",
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    }
  )
    .then((response) => {
      if (response.status === 400) {
        throw new Error("Неправильный email или пароль");
      }
      if (response.status === 401) {
        throw new Error("Пользователь не найден");
      }
      if (response.status === 500) {
        throw new Error("Ошибка сервера");
      }
      return response.json();
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
type likesResType = {
  error: undefined | string;
};
// Добавление трека в список избранных
export async function addFavorite(
  id: number,
  token: string
): Promise<likesResType> {
  return fetch(
    `https://skypro-music-api.skyeng.tech/catalog/track/${id}/favorite/`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  )
    .then((response) => {
      if (response.status === 400) {
        throw new Error("Ошибка добавления трека");
      }
      if (response.status === 401) {
        throw new Error("Ошибка получения токена");
      }
      return response.json();
    })
    .then(() => {
      return { error: undefined };
    })
    .catch((error) => {
      return { error: error.message };
    });
}
// Удаление трека из списка избранных
export async function deleteFavorite(id: string, token: string) {
  return fetch(
    `https://skypro-music-api.skyeng.tech/catalog/track/${id}/favorite/`,
    {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  ).then((response) => {
    if (response.status === 400) {
      throw new Error("Ошибка удаления трека");
    }
    if (response.status === 401) {
      throw new Error("Ошибка получения токена");
    }
    return response.json();
  });
}

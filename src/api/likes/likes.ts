export async function getLikedFavorite(userToken: string) {
  return fetch(
    "https://skypro-music-api.skyeng.tech/catalog/track/favorite/all/",
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    }
  ).then((response) => {
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
  });
}

export async function addFavorite(id: string) {
  return fetch(
    `https://skypro-music-api.skyeng.tech/catalog/track/${id}/favorite/`,
    {
      method: "POST",
      body: JSON.stringify({
        id,
      }),
      headers: {
        Authorization: `Bearer ${localStorage.getItem("userToken")}`,
      },
    }
  ).then((response) => {
    if (response.status === 400) {
      throw new Error("Ошибка добавления трека");
    }
    if (response.status === 401) {
      throw new Error("Ошибка получения токена");
    }
    return response.json();
  });
}

export async function deleteFavorite(id: string) {
  return fetch(
    `https://skypro-music-api.skyeng.tech/catalog/track/${id}/favorite/`,
    {
      method: "DELETE",
      body: JSON.stringify({
        id,
        
      }),
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("userToken")}`,
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

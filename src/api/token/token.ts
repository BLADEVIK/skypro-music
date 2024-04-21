export async function getToken({ email, password }: getTokenProps) {
    return fetch("https://skypro-music-api.skyeng.tech/user/token/", {
        method: "POST",
        body: JSON.stringify({
            email,
            password,
        }),
        headers: {
            "content-type": "application/json",
        },
    }).then((response) => {
        if (response.status === 400) {
            throw new Error("Неправильный email или пароль");
        };
        if (response.status === 401) {
            throw new Error("Пользователь не найден");
        };
        if (response.status === 500) {
            throw new Error("Ошибка сервера");
        };
        return response.json();
    });
};

export async function refreshToken(refresh: string) {
    return fetch("https://skypro-music-api.skyeng.tech/user/token/refresh/", {
        method: "POST",
        body: JSON.stringify({
            refresh: refresh,
        }),
        headers: {
            "content-type": "application/json",
        },
    }).then((response) => {
        if (response.status === 400) {
            throw new Error("В теле запроса не передан refresh токен");
        };
        if (response.status === 401) {
            throw new Error("Ошибка получения токена");
        };
        if (response.status === 500) {
            throw new Error("Ошибка сервера");
        };
        return response.json();
    });
};
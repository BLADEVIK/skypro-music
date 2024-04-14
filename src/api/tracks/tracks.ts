import { getTrackResponse, getTrackSectionResponse } from "../../types";
// Список всех треков
export function getTracks(): Promise<getTrackResponse> {
  return fetch("https://skypro-music-api.skyeng.tech/catalog/track/all/")
    .then((res) => {
      if (res.ok===!true) {
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
// Списки подборок треков по id
export function getTracksId(id:string): Promise<getTrackSectionResponse> {
  return fetch(`https://skypro-music-api.skyeng.tech/catalog/selection/${id}/`)
    .then((res) => {
      if (res.ok===!true) {
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
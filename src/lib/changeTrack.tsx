import { PlaylistStateType } from "../store/features/playlistSlice";
// Функция работы prev/next трека  песен
export function changeTrack(direction: number) {
    return (state: PlaylistStateType) => {
      const currentTracks = state.isShuffled
        ? state.shuffledPlaylist
        : state.playlist;
      let newIndex =
        currentTracks.findIndex((item) => item.id === state.currentTrack?.id) +
        direction;
      newIndex = (newIndex + currentTracks.length) % currentTracks.length;
      state.currentTrack = currentTracks[newIndex];
      state.isPlaying = true;
    };
  }
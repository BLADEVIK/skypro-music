import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { trackType } from "../../types";

type PlaylistStateType = {
  playlist: trackType[];
  currentTrack: null | trackType;
  isPlay: boolean;
  isShuffled: boolean;
  shuffledPlaylist: trackType[];
};
type setCurrentTrackType = {
  currentTrack: trackType;
  playlist: trackType[];
};
const initialState: PlaylistStateType = {
  playlist: [],
  currentTrack: null,
  isPlay: false,
  isShuffled: false,
  shuffledPlaylist: [],
};

const playlistSlice = createSlice({
  name: "playlist",
  initialState,
  reducers: {
    setCurrentTrack: (state, action: PayloadAction<setCurrentTrackType>) => {
      state.currentTrack = action.payload.currentTrack;
      state.playlist = action.payload.playlist;
      state.shuffledPlaylist = [...action.payload.playlist].sort(
        () => 0.5 - Math.random()
      );
    },
    nextTrack: (state) => {
      const playlist = state.isShuffled
        ? state.shuffledPlaylist
        : state.playlist;
      const currentTrackIndex = playlist.findIndex(
        (track) => track.id === state.currentTrack?.id
      );
      const newTrack = playlist[currentTrackIndex + 1];
      if (newTrack) {
        state.currentTrack = newTrack;
      }
    },
    prevTrack: (state) => {
      const playlist = state.isShuffled
        ? state.shuffledPlaylist
        : state.playlist;
      const currentTrackIndex = playlist.findIndex(
        (track) => track.id === state.currentTrack?.id
      );
      const newTrack = playlist[currentTrackIndex - 1];
      if (newTrack) {
        state.currentTrack = newTrack;
      }
    },
  },
});

export const { setCurrentTrack, nextTrack, prevTrack } = playlistSlice.actions;
export const playlistReducer = playlistSlice.reducer;

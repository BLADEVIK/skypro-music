import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { trackType } from "../../types";

type PlaylistStateType = {
  playlist: trackType[];
  currentTrack: null | trackType;
  isPlaying: boolean;
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
  isPlaying: false,
  isShuffled: false,
  shuffledPlaylist: [],
};

function changeTrack(direction: number) {
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
    setNextTrack: changeTrack(1),
    setPrevTrack: changeTrack(-1),

    setToggleShuffled: (state) => {
      state.isShuffled = !state.isShuffled;
    },
    setIsPlaying: (state, action: PayloadAction<boolean>) => {
      state.isPlaying = action.payload;
    },
  },
});

export const {
  setCurrentTrack,
  setNextTrack,
  setPrevTrack,
  setToggleShuffled,
  setIsPlaying,
} = playlistSlice.actions;
export const playlistReducer = playlistSlice.reducer;

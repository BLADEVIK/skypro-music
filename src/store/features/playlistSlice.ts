import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { trackType } from "../../types";
import { changeTrack } from "@lib/changeTrack";

export type PlaylistStateType = {
  playlist: trackType[];
  currentTrack: null | trackType;
  isPlaying: boolean;
  isShuffled: boolean;
  shuffledPlaylist: trackType[];
  filteredPlaylist: trackType[];
  activeFilters: activeFilters;
  playlistPage: trackType[];
};
type activeFilters = {
  author: Array<string>;
  release_date: null | string;
  genre: Array<string>;
  searchValue: string;
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
  filteredPlaylist: [],
  activeFilters: {
    author: [],
    release_date: null,
    genre: [],
    searchValue: "",
  },
  playlistPage: [],
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
    setNextTrack: changeTrack(1),
    setPrevTrack: changeTrack(-1),

    setToggleShuffled: (state) => {
      state.isShuffled = !state.isShuffled;
    },
    setIsPlaying: (state, action: PayloadAction<boolean>) => {
      state.isPlaying = action.payload;
    },
    setActiveFilter: (
      state,
      action: PayloadAction<{
        author?: Array<string>;
        release_date?: null | string;
        genre?: Array<string>;
        searchValue?: string;
      }>
    ) => {
      state.activeFilters = {
        author: action.payload.author || state.activeFilters.author,
        release_date: action.payload.release_date || null,
        genre: action.payload.genre || state.activeFilters.genre,
        searchValue:
          action.payload.searchValue || state.activeFilters.searchValue,
      };
      state.filteredPlaylist = state.playlistPage.filter((track) => {
        const isAuthors =
          state.activeFilters.author.length > 0
            ? state.activeFilters.author.includes(track.author)
            : true;
        const isGenres =
          state.activeFilters.genre.length > 0
            ? state.activeFilters.genre.includes(track.genre)
            : true;
        return isAuthors && isGenres
      });
      // state.playlistPage = playlist.filter(
      //   (item:any) =>
      //     item.name.toLowerCase().includes(searchValue.toLowerCase()) ||
      //     item.author.toLowerCase().includes(searchValue.toLowerCase())
      // );
          
    },
    setPlaylistPage: (state, action: PayloadAction<trackType[]>) => {
      state.playlistPage = action.payload;
    },
    setClearFilter: (state) => {
      state.filteredPlaylist = [];
      state.activeFilters = {
        author: [],
        release_date: null,
        genre: [],
        searchValue: "",
      };
    },
  },
});

export const {
  setCurrentTrack,
  setNextTrack,
  setPrevTrack,
  setToggleShuffled,
  setIsPlaying,
  setPlaylistPage,
  setActiveFilter,
  setClearFilter,
} = playlistSlice.actions;
export const playlistReducer = playlistSlice.reducer;

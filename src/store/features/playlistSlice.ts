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
  isActiveFilter: boolean;
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
  isActiveFilter: false,
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
        const isSearch = state.activeFilters.searchValue.length
          ? track.name
              .toLowerCase()
              .includes(state.activeFilters.searchValue.toLowerCase()) ||
            track.author
              .toLowerCase()
              .includes(state.activeFilters.searchValue.toLowerCase())
          : true;
        return isAuthors && isGenres && isSearch;
      });
      // state.filteredPlaylist = state.filteredPlaylist.filter(
      //   (item: trackType) =>
      //     item.name
      //       .toLowerCase()
      //       .includes(state.activeFilters.searchValue.toLowerCase()) ||
      //     item.author
      //       .toLowerCase()
      //       .includes(state.activeFilters.searchValue.toLowerCase())
      // );
      // state.isActiveFilter = true;
    },
    setPlaylistPage: (state, action: PayloadAction<trackType[]>) => {
      state.playlistPage = action.payload;
    },
    setClearFilter: (state) => {
      state.isActiveFilter = false;
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

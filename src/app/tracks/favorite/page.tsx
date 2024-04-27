"use client";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getLikedFavorite } from "../../../api/likes/likes";
import { useAppSelector } from "../../../hooks";
import {
  setClearFilter,
  setPlaylistPage,
} from "../../../store/features/playlistSlice";
import CenterBlock from "@components/CenterBlock/CenterBlock";
import MainSlideBar from "@components/MainSlideBar/MainSlideBar";

export default function PlaylistFavorite() {
  const { access } = useAppSelector((store) => store.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    getLikedFavorite(access).then((res) => {
      if (res.data) {
        dispatch(setPlaylistPage(res.data));
        dispatch(setClearFilter());
      }
      if (res.error) {
        alert(res.error);
      }
    });
  }, []);
  return (
    <>
      <CenterBlock isFilter={false} />
      <MainSlideBar isSideBar={false} />
    </>
  );
}

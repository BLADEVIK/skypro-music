"use client";
import CenterBlock from "@components/CenterBlock/CenterBlock";
import MainSlideBar from "@components/MainSlideBar/MainSlideBar";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getTracks } from "../../api/tracks/tracks";
import {
  setActiveFilter,
  setPlaylistPage,
} from "../../store/features/playlistSlice";
type mainType = {
  isFilter?: boolean;
  isSideBar?: boolean;
};
export default function Main({ isFilter = true, isSideBar = true }: mainType) {
  const dispatch = useDispatch();
  useEffect(() => {
    getTracks().then((res) => {
      if (res.data) {
        dispatch(setPlaylistPage(res.data));
        dispatch(setActiveFilter({ author: [] }));
      }
    });
  }, []);
  return (
    <>
      <CenterBlock isFilter={isFilter} />
      <MainSlideBar isSideBar={isSideBar} />
    </>
  );
}

"use client";
import styles from "../page.module.css";
import { useAppSelector } from "../../../hooks";
import { useDispatch } from "react-redux";
import { useEffect,useState } from "react";
import {
  setClearFilter,
  setPlaylistPage,
} from "../../../store/features/playlistSlice";
import CenterBlock from "@components/CenterBlock/CenterBlock";
import MainSlideBar from "@components/MainSlideBar/MainSlideBar";
import { getTracksId } from "../../../api/tracks/tracks";
type paramsIDType = {
  params: { id: string };
};
export default function PlaylistID({ params }: paramsIDType) {
  const [title,setTitle]=useState("")
  const dispatch = useDispatch();
  useEffect(() => {
    getTracksId(params.id).then((res) => {
      if(params.id==="1"){
        setTitle("Плейлист дня")
      }
      if(params.id==="2"){
        setTitle("100 танцевальных хитов")
      }
      if(params.id==="3"){
        setTitle("Инди-заряд")
      }
      if (res.data) {
        dispatch(setClearFilter());
        dispatch(setPlaylistPage(res.data.items));
      }
    });
  }, []);
  return (
    <>
      <main className={styles.main}>
       
        <CenterBlock title={title} isFilter={false} />
        <MainSlideBar isSideBar={false} />
      </main>
      <footer> </footer>
    </>
  );
}

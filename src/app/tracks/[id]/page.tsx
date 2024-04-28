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
  // const [title,setTitle]=useState("Треки")
  const dispatch = useDispatch();
  useEffect(() => {
    getTracksId(params.id).then((res) => {
      // if(params.id==="1"){
      //   setTitle("Лист1")
      // }
      // if(params.id==="2"){
      //   setTitle("Лист2")
      // }
      // if(params.id==="3"){
      //   setTitle("Лист3")
      // }
      if (res.data) {
        dispatch(setClearFilter());
        dispatch(setPlaylistPage(res.data.items));
      }
    });
  }, []);
  return (
    <>
      <main className={styles.main}>
       
        <CenterBlock isFilter={false} />
        <MainSlideBar isSideBar={false} />
      </main>
      <footer> </footer>
    </>
  );
}

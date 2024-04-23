import styles from "@components/PlayListItem/PlayListItem.module.css";
import classNames from "classnames";
import { trackType } from "../../types";
import { formatTime } from "@lib/formatTime";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { setCurrentTrack } from "../../store/features/playlistSlice";
import { addFavorite, deleteFavorite } from "../../api/likes/likes";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { RootState } from "../../store/store";
import { refreshToken } from "../../api/token/token";
import { setAuthState } from "../../store/features/authSlice";

type trackTypeProps = {
  item: trackType;

  playlist: trackType[];
  isCurrentTrack: boolean;
};
export default function PlayListItem({
  item,
  playlist,
  isCurrentTrack,
}: trackTypeProps) {
  const { isPlaying } = useAppSelector((state: RootState) => state.playlist);
  const auth = useAppSelector((state: RootState) => state.auth);
  const [isLike, setIsLike] = useState(false);
  const likeUser = item.stared_user
    ? item.stared_user.some((el) => el.id === auth.userId)
    : true;
  useEffect(() => {
    setIsLike(likeUser);
  }, []);
  const dispatch = useAppDispatch();
  const navigate = useRouter();
  function handleClick() {
    dispatch(setCurrentTrack({ currentTrack: item, playlist }));
  }
  function handleLike(id: number, isLikeTrack: boolean) {
    if (!auth.userId) {
      alert("Авторизуйтесь пожалуйста");
      navigate.push("/signin");
      return;
    }
    if (isLikeTrack) {
      deleteFavorite(id, auth.access).then((res) => {
        if (res.error === "401") {
          refreshToken(auth.refresh).then((resp) => {
            dispatch(setAuthState({ ...auth, access: resp.access }));
            addFavorite(id, resp.access);
            return;
          });
        }
        setIsLike(false);
        return;
      });
      // return;
    }
    addFavorite(id, auth.access).then((res) => {
      if (res.error === "401") {
        refreshToken(auth.refresh).then((resp) => {
          dispatch(setAuthState({ ...auth, access: resp.access }));
          addFavorite(id, resp.access);
          return;
        });
      }
      setIsLike(true);
    });
  }
  return (
    <div onClick={handleClick} className={styles.playlistItem}>
      <div className={classNames(styles.playlistTrack, styles.track)}>
        <div className={styles.trackTitle}>
          <div className={styles.trackTitleImage}>
            {isCurrentTrack ? (
              <div
                className={classNames(styles.trackImagePlaying, {
                  [styles.trackAnimation]: isPlaying,
                })}
              ></div>
            ) : (
              <svg className={styles.trackTitleSvg}>
                <use href="/img/icon/sprite.svg#icon-note"></use>
              </svg>
            )}
          </div>
          <div className={styles.trackTitleText}>
            <span className={styles.trackTitleLink}>
              {item.name} <span className={styles.trackTitleSpan}></span>
            </span>
          </div>
        </div>
        <div className={styles.trackAuthor}>
          <span className={styles.trackAuthorLink}>{item.author}</span>
        </div>
        <div className={styles.trackAlbum}>
          <span className={styles.trackAlbumLink}>{item.album}</span>
        </div>
        <div className={styles.trackTime}>
          <svg
            onClick={() => handleLike(item.id, isLike)}
            className={styles.trackTimeSvg}
          >
            {!isLike ? (
              <use href="/img/icon/sprite.svg#icon-like"></use>
            ) : (
              <use href="/img/icon/sprite.svg#icon-likePaint"></use>
            )}
          </svg>
          <span className={styles.trackTimeText}>
            {formatTime(item.duration_in_seconds)}
          </span>
        </div>
      </div>
    </div>
  );
}

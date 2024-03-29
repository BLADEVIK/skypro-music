import styles from "@components/PlayListItem/PlayListItem.module.css";
import classNames from "classnames";
import { trackType } from "../../types";
import { formatTime } from "@lib/formatTime";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { setCurrentTrack } from "../../store/features/playlistSlice";

type trackTypeProps = {
  item: trackType;
  onClick: () => void;
  playlist: trackType[];
  isCurrentTrack: boolean;
};
export default function PlayListItem({
  item,
  onClick,
  playlist,
  isCurrentTrack,
}: trackTypeProps) {
  // const { isPlay } = useAppSelector((state) => state.playlist);
  const dispatch = useAppDispatch();
  function handleClick() {
    onClick();
    dispatch(setCurrentTrack({ currentTrack: item, playlist }));
  }
  return (
    <div onClick={handleClick} className={styles.playlistItem}>
      <div className={classNames(styles.playlistTrack, styles.track)}>
        <div className={styles.trackTitle}>
          <div className={styles.trackTitleImage}>
            {isCurrentTrack ? (
              <div
                className={classNames(
                  styles.trackImagePlaying,
                  styles.trackAnimation 
                )}
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
          <svg className={styles.trackTimeSvg}>
            <use href="/img/icon/sprite.svg#icon-like"></use>
          </svg>
          <span className={styles.trackTimeText}>
            {formatTime(item.duration_in_seconds)}
          </span>
        </div>
      </div>
    </div>
  );
}

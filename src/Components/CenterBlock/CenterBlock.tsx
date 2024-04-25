import ContentPlaylist from "@components/ContentPlaylist/ContentPlaylist";
import classNames from "classnames";
import styles from "@components/CenterBlock/CenterBlock.module.css";
import FilterBlock from "@components/FilterBlock/FilterBlock";
import { useAppDispatch } from "../../hooks";
import { setActiveFilter } from "../../store/features/playlistSlice";
type centerBlockType = {
  isFilter: boolean;
};
export default function CenterBlock({isFilter}:centerBlockType) {
  const dispatch = useAppDispatch();
  return (
    <div className={classNames(styles.mainCenterBlock, styles.centerBlock)}>
      <div className={classNames(styles.centerBlockSearch, styles.search)}>
        <svg className={styles.searchSvg}>
          <use href="/img/icon/sprite.svg#icon-search"></use>
        </svg>
        <input
          className={styles.searchText}
          type="search"
          placeholder="Поиск"
          name="search"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            dispatch(
              setActiveFilter({
                author: [],
                genre: [],
                release_date: null,
                searchValue: event.target.value,
              })
            )
          }
        />
      </div>
      <h2 className={styles.centerBlockH2}>Треки</h2>
      {isFilter && <FilterBlock />}
      <div
        className={classNames(
          styles.centerBlockContent,
          styles.playlistContent
        )}
      >
        <div className={classNames(styles.contentTitle, styles.playlistTitle)}>
          <div className={classNames(styles.playlistTitleCol, styles.col01)}>
            Трек
          </div>
          <div className={classNames(styles.playlistTitleCol, styles.col02)}>
            Исполнитель
          </div>
          <div className={classNames(styles.playlistTitleCol, styles.col03)}>
            Альбом
          </div>
          <div className={classNames(styles.playlistTitleCol, styles.col04)}>
            <svg className={styles.playlistTitleSvg}>
              <use href="/img/icon/sprite.svg#icon-watch"></use>
            </svg>
          </div>
        </div>
        <ContentPlaylist />
      </div>
    </div>
  );
}

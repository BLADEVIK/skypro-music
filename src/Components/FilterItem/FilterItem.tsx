import styles from "./FilterItem.module.css";
type FilterList = {
  name: string;
  id: number;
};
type FilterItemProps = {
  filterList: string[];
  selectedFilters: string[];
  filterName: string;
  onClick: (itemName: string, filterName: string) => void;
};
export default function FilterItem({
  filterList,
  onClick,
  selectedFilters,
  filterName,
}: FilterItemProps) {
  return (
    <div className={styles.wrapList}>
      <ul className={styles.list}>
        {filterList.map((item, index) => (
          <li
            onClick={() => onClick(item,filterName )}
            key={index}
            className={
              selectedFilters.includes(item) ? styles.activeFilter : ""
            }
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

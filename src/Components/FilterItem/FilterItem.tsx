import styles from "./FilterItem.module.css";
type FilterList = {
  name: string;
  id: number;
};
type FilterItemProps = {
  filterList: string[];
  onClick: (itemName: string, filterName: string) => void;
};
export default function FilterItem({ filterList, onClick }: FilterItemProps) {
  return (
    <div className={styles.wrapList}>
      <ul className={styles.list}>
        {filterList.map((item, index) => (
          <li onClick={() => onClick(item,"authors")} key={index}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

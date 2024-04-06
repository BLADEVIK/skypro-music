import styles from "./FilterItem.module.css";
type FilterList = {
  name: string;
  id: number;
};
type FilterItemProps = {
  filterList: string[];
};
export default function FilterItem({ filterList }: FilterItemProps) {
  return (
    <div className={styles.wrapList}>
      <ul className={styles.list}>
        {filterList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

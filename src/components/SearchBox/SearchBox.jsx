import styles from "./SearchBox.module.css";

const SearchBox = ({ filter, setFilter }) => {
  return (
    <div className={styles.searchBox}>
      <label>Find contacts by name</label>
      <input
        type="text"
        value={filter}
        placeholder="Enter name"
        onChange={(e) => setFilter(e.target.value)}
      />
    </div>
  );
};

export default SearchBox;

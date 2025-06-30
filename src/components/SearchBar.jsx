import SearchIcon from "@mui/icons-material/Search";
import styles from "./SearchBar.module.css";

function SearchBar({ onSubmit, input, setInput }) {
  return (
    <div className={styles.searchBar}>
      <SearchIcon className={styles.icon} />
      <div className={styles.separator} />
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={input}
          placeholder="Type a word"
          onChange={(event) => setInput(event.target.value)}
        />
      </form>
    </div>
  );
}

export default SearchBar;

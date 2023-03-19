import styles from "../styles/home.module.scss";

type SearchProps = {
  onChange: any;
  onKeyUp: any,
  value: string
};

const Search = ({ onChange, onKeyUp, value }: SearchProps) => {
  return (
    <div>
      {" "}
      <input
        onChange={onChange}
        onKeyUp={onKeyUp}
        className={styles.search_field}
        type="search"
        placeholder="Search location"
        value={value}
      />
    </div>
  );
};

export default Search;

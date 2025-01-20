import "../styles/TodoSearch.css";

function TodoSearch({ searchValue, setSearchValue }) {
  return (
    <input
      className="TodoSearch"
      placeholder="Write here ..."
      value={searchValue}
      onChange={(event) => {
        setSearchValue(event.target.value);
      }}
    />
  );
}

export { TodoSearch };

import { useRef } from "react";

function SearchBar({ onSearchChange }) {
  const inputRef = useRef(null);

  function handleChange() {
    if (inputRef.current) {
      onSearchChange(inputRef.current.value);
    }
  }

  return (
    <div style={{ margin: "16px 0" }}>
      <label htmlFor="task-search">Search</label>
      <input
        id="task-search"
        type="search"
        ref={inputRef}
        placeholder="Search tasks..."
        onChange={handleChange}  // tests use fireEvent.change
        style={{ marginLeft: 8 }}
      />
    </div>
  );
}

export default SearchBar;

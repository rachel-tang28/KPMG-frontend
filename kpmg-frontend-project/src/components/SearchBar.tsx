import React, { useState } from "react";

function SearchBar({ onSearch }: any) {
  // Hold the query until "Search" is clicked
  const [queryHolder, setQueryHolder] = useState("");

  const handleChange = (event: any) => {
    setQueryHolder(event.target.value);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    onSearch(queryHolder);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={queryHolder}
        onChange={handleChange}
        placeholder="Enter firstname"
      />
      <span> </span>
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBar;

import { useState } from "react";
import "./App.css";
import DataTable from "./components/DataTable";
import SearchBar from "./components/SearchBar";
import { data } from "./data";

interface Item {
  id: number;
  first_name: string;
  last_name: string;
  role: string;
  division: string;
}

function App() {
  // Manage state of query
  const [query, setQuery] = useState("");

  // Called when user clciks "Search"
  const handleSearch = (term: string) => {
    setQuery(term);
  };

  // Filter by query (ensure search is case-insensitive)
  const searchResults = data.filter((item: Item) =>
    item.first_name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      <div className="App">
        <div>
          <h1>Employee List</h1>
        </div>
        <div className="container">
          <div className="searchbox">
            <span className="card">
              <SearchBar onSearch={handleSearch} />
            </span>
          </div>
          <div className="table">
            <DataTable data={searchResults} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

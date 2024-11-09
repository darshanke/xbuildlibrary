import "./App.css";
import { useEffect, useState } from "react";
import dictionary from "./dictionary.js";

function App() {
  const wordSearch = dictionary;
  const [details, setDetails] = useState([]);
  const [search, setSearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const value = wordSearch.filter(
        (item) => item.word.toLowerCase() === search.toLowerCase()
      );

      if (value.length === 0) {
        setDetails([{ meaning: "Word not found in the dictionary." }]);
      } else {
        setDetails(value);
      }
    } catch (e) {
      setDetails([{ meaning: "Word not found in the dictionary." }]);
    }
  };

  useEffect(() => {
    console.log(details);
  }, [details]);

  return (
    <div className="App">
      <h1>Dictionary App</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search for a word"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <h3 style={{ textAlign: "center" }}>Definition:</h3>
      <p>
        {details.length > 0
          ? details.map((item) => item.meaning).join(" ")
          : "Word not found in the dictionary."}
      </p>
    </div>
  );
}

export default App;

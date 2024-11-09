import "./App.css";
import { useEffect, useState } from "react";
import dictionary from "./dictionary.js";

function App() {
  const wordSearch = dictionary;
  const [deatils, setDetails] = useState([]);
  const [search, setSearch] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const value = wordSearch.filter(
        (item) => item.word.toLowerCase() === search.toLowerCase()
      );
      console.log(value);
      if (!value) {
        setDetails([{ meaning: "Word not found in the dictionary." }]);
      }
      setDetails(value);
    } catch (e) {
      setDetails([{ meaning: "Word not found in the dictionary." }]);
    }
  };
useEffect(()=>{
console.log(deatils)
},[deatils])
  return (
    <div className="App">
      <h1>Dictionary App</h1>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <input
          type="text"
          placeholder="Search for a word"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <h3 style={{textAlign:'center'}}>Definiton : </h3>
      {deatils.length>0?deatils.map((item)=> <p style={{fontWeight: '200'}}>{item.meaning}</p>
      ):<p>Word not found in the dictionary.</p> }
    </div>
  );
}

export default App;

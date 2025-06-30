import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import WordDefinition from "./components/WordDefinition";
import "./App.css";

function App() {
  const [word, setWord] = useState("");
  const [submittedWord, setSubmittedWord] = useState("");
  const [definition, setDefinition] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (submittedWord !== "") {
      setIsLoading(true);
      fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${submittedWord}`)
        .then(async (response) => {
          const data = await response.json();

          if (response.status === 404) {
            console.log("404 detected");
            setDefinition("missing");
            return null;
          }

          return data;
        })
        .then((data) => {
          if (data) {
            setDefinition(data[0]);
          }
        })
        .catch((error) => console.log("Error fetching definition:", error))
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [submittedWord]);

  function handleSearch(event) {
    event.preventDefault();
    setSubmittedWord(word);
  }

  return (
    <div className="container">
      <SearchBar onSubmit={handleSearch} input={word} setInput={setWord} />
      {isLoading && <span className="loader"></span>}
      {!isLoading && definition === "missing" && <p>Word not found</p>}
      {!isLoading && definition && definition !== "missing" && (
        <WordDefinition content={definition} />
      )}
    </div>
  );
}

export default App;

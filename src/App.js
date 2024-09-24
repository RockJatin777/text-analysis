import React, { useState } from 'react';

import './App.css'

function App() {
  const [text, setText] = useState('');
  const [searchStr, setSearchStr] = useState('');
  const [replaceStr, setReplaceStr] = useState('');

  // Handler for text input
  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  // Function to count unique words
  const getUniqueWordCount = () => {
    const words = text.toLowerCase().match(/\b\w+\b/g);  // Matches words
    const uniqueWords = new Set(words);
    return uniqueWords.size;
  };

  // Function to count characters excluding spaces and punctuation
  const getCharCount = () => {
    return text.replace(/[^a-zA-Z0-9]/g, '').length;  // Only keeps letters and numbers
  };

  // Handle string replacement
  const handleReplace = () => {
    const updatedText = text.replaceAll(searchStr, replaceStr);
    setText(updatedText);
  };

  return (
    <>
    <h1 className='app-heading'>Text Analyzer </h1>
    <div className="text-analyzer">
      <textarea
        value={text}
        onChange={handleTextChange}
        placeholder="Type here..."
        rows="10"
        cols="50"
      ></textarea>
      <div className="statistics">
        <p>Unique Words: {getUniqueWordCount()}</p>
        <p>Character Count (Excluding spaces and punctuation): {getCharCount()}</p>
      </div>
      <div className="replacement">
        <input
          type="text"
          placeholder="String to search"
          value={searchStr}
          onChange={(e) => setSearchStr(e.target.value)}
        />
        <input
          type="text"
          placeholder="String to replace with"
          value={replaceStr}
          onChange={(e) => setReplaceStr(e.target.value)}
        />
        <button onClick={handleReplace}>Replace All</button>
      </div>
    </div>
    </>
  );
}

export default App;

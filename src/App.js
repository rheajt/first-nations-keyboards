import React, { useState } from 'react';
import './App.css';
import languages from './languages';

function App() {
  const [language, setLanguage] = useState('ojibwe');
  const [text, setText] = useState('');
  const [message, setMessage] = useState('');

  let counter;

  const changeText = ({ target }) => {
    setText(target.value);
    startCounter(languages[language][target.value.toLowerCase()]);
  };

  const startCounter = char => {
    clearTimeout(counter);
    counter = setTimeout(() => addToMessage(char), 1000);
  };

  const addToMessage = char => {
    if (char !== undefined) {
      setMessage(message + char);
    }
    setText('');
  };

  const changeLanguage = ({ target }) => {
    setLanguage(target.value);
  };

  return (
    <div className="container">
      <div className="info">
        <input onChange={changeText} value={text} />
        <select onChange={changeLanguage} value={language}>
          {Object.keys(languages).map(key => (
            <option key={key} value={key}>
              {key}
            </option>
          ))}
        </select>
      </div>
      <div className="result">{languages[language][text]}</div>
      <div className="keyboard">{message}</div>
    </div>
  );
}

export default App;

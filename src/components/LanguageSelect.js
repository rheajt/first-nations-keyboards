import React, { useContext } from 'react';
import languages from '../languages';
import { KeyboardContext } from '../context';
import { languageSelect } from '../styles/language.module.scss';

export default function LanguageSelect() {
  const {
    state: { text, language },
    openSidebar,
    changeLanguage,
  } = useContext(KeyboardContext);

  return (
    <div className={languageSelect}>
      <p>{languages[language][text]}</p>
      <select onChange={changeLanguage} value={language}>
        {Object.keys(languages).map(key => (
          <option key={key} value={key}>
            {key}
          </option>
        ))}
      </select>
      <button onClick={openSidebar}>?</button>
    </div>
  );
}

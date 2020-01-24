import React, { createContext, useReducer, useState } from 'react';
import languages from '../languages';

export const KeyboardContext = createContext();

const KeyboardReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE_TEXT': {
      return { ...state, text: action.text };
    }

    case 'CHANGE_LANGUAGE': {
      return { ...state, language: action.language };
    }

    case 'ADD_TO_MESSAGE':
      return { ...state, message: state.message + action.char };

    case 'OPEN_SIDEBAR': {
      return { ...state, sidebarOpen: true };
    }

    case 'CLOSE_SIDEBAR': {
      return { ...state, sidebarOpen: false };
    }

    default:
      return state;
  }
};

const initialState = {
  text: '',
  message: '',
  language: 'ojibwe',
  sidebarOpen: false,
};

const KeyboardContextProvider = props => {
  const [state, dispatch] = useReducer(KeyboardReducer, initialState);
  const [counter, setCounter] = useState(null);

  const changeText = ({ target }) => {
    dispatch({ type: 'CHANGE_TEXT', text: target.value });
    startCounter(languages[state.language][target.value.toLowerCase()]);
  };

  const startCounter = char => {
    clearTimeout(counter);
    const timeout = setTimeout(() => {
      if (char !== undefined) {
        dispatch({ type: 'ADD_TO_MESSAGE', char });
      }
      dispatch({ type: 'CHANGE_TEXT', text: '' });
    }, 2000);

    setCounter(timeout);
  };

  const changeLanguage = ({ target }) => {
    dispatch({ type: 'CHANGE_LANGUAGE', language: target.value });
  };

  const openSidebar = () => {
    dispatch({ type: 'OPEN_SIDEBAR' });
  };

  const closeSidebar = () => {
    dispatch({ type: 'CLOSE_SIDEBAR' });
  };

  return (
    <KeyboardContext.Provider
      value={{ openSidebar, closeSidebar, changeText, changeLanguage, state }}
    >
      {props.children}
    </KeyboardContext.Provider>
  );
};

export default KeyboardContextProvider;

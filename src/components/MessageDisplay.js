import React, { useContext } from 'react';
import { KeyboardContext } from '../context';
import { messageDisplay } from '../styles/message-display.module.scss';

function MessageDisplay() {
  const {
    state: { message },
  } = useContext(KeyboardContext);
  return (
    <div className={messageDisplay}>
      {message}
      <span>|</span>
    </div>
  );
}

export default MessageDisplay;

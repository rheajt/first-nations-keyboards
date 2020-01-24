import React, { useContext } from 'react';
import { KeyboardContext } from '../context';
import { inputBox } from '../styles/input-box.module.scss';

export default function InputBox() {
  const {
    state: { text },
    changeText,
  } = useContext(KeyboardContext);

  return (
    <div className={inputBox}>
      <input onChange={changeText} value={text} placeholder="Type here..." />
    </div>
  );
}

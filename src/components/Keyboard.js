import React, { useState } from 'react';
import Keyboard from 'react-simple-keyboard';
import 'react-simple-keyboard/build/css/index.css';

function SimpleKeyboard({ setText }) {
  // const [text, setText] = useState('');
  const onChange = input => {
    console.log('Input changed', input);
    setText(text => input);
  };

  const onKeyPress = button => {
    console.log('Button pressed', button);
    setText(button);
  };

  return <Keyboard onChange={onChange} onKeyPress={onKeyPress} />;
}

export default SimpleKeyboard;

import React from 'react';

import LanguageSelect from './components/LanguageSelect';
import MessageDisplay from './components/MessageDisplay';
import Layout from './components/Layout';
import InputBox from './components/InputBox';

import { input, select, message } from './styles/container.module.scss';

function App() {
  return (
    <Layout>
      <div className={input}>
        <InputBox />
      </div>

      <div className={select}>
        <LanguageSelect />
      </div>

      <div className={message}>
        <MessageDisplay />
      </div>
    </Layout>
  );
}

export default App;

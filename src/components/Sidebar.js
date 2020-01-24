import React, { useContext } from 'react';
import { sidebar, open } from '../styles/sidebar.module.scss';
import { KeyboardContext } from '../context';
import languages from '../languages';

function Sidebar() {
  const {
    state: { sidebarOpen, language },
    closeSidebar,
  } = useContext(KeyboardContext);

  return (
    <div
      className={`${sidebar} ${sidebarOpen ? `${open}` : ''}`}
      onClick={closeSidebar}
    >
      <button onClick={closeSidebar}>close</button>
      <pre>{JSON.stringify(languages[language], null, 2)}</pre>
    </div>
  );
}

export default Sidebar;

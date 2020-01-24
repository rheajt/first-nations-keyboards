import React from 'react';
import { container } from '../styles/container.module.scss';
import KeyboardContextProvider from '../context';
import Sidebar from './Sidebar';

export default function Layout({ children }) {
  return (
    <KeyboardContextProvider>
      <div className={container}>{children}</div>
      <Sidebar />
    </KeyboardContextProvider>
  );
}

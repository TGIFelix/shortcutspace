import React from 'react';
import ReactDOM from 'react-dom';
import { TerminalContextProvider } from "react-terminal";
import App from './App';
import './fonts/JetBrainsMono-Regular.ttf'
import "./style.css"

const rootElement = document.getElementById("root");
ReactDOM.render(
  <TerminalContextProvider>
    <App />
  </TerminalContextProvider>,
  rootElement
);

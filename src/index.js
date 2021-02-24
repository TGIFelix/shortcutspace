import React from 'react';
import ReactDOM from 'react-dom';
import "./style.css"
import { TerminalContextProvider } from "react-terminal";
import App from './App';

const rootElement = document.getElementById("root");
ReactDOM.render(
  <TerminalContextProvider>
    <App />
  </TerminalContextProvider>,
  rootElement
);

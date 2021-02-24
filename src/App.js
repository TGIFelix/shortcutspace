import React, {lazy, Suspense} from 'react';
import "./App.css";
import { ReactTerminal } from "react-terminal";
import {importMDX} from 'mdx.macro';


export default function App() {
  const Vim = lazy(() => importMDX('./shortcuts/vim.mdx'))
  const Emacs = lazy(() => importMDX('./shortcuts/emacs.mdx'))
  const Macos = lazy(() => importMDX('./shortcuts/macos.mdx'))
  const Vscode = lazy(() => importMDX('./shortcuts/vscode.mdx'))


  const commands = {
    help: <div>
      <ul>
        <li><b>help</b> [show this helpfull message]</li>
        <li><b>clear</b> [clear screen]</li>
        <li><b>shortcuts</b> [List shortcuts]</li>
        <li><b>tgifelix</b> [open authors website]</li>
      </ul>
    </div>,
    shortcuts: <div>
      <ul>
        <li><b>vscode</b></li>
        <li><b>emacs</b></li>
        <li><b>vim</b></li>
        <li><b>macos</b></li>
      </ul>
    </div>,
    vim: <div>
            <Suspense fallback={<div>Loading...</div>}>
              <Vim />
            </Suspense>
          </div>,
    emacs:  <div>
          <Suspense fallback={<div>Loading...</div>}>
            <Emacs />
          </Suspense>
        </div>,
    vscode:  <div>
    <Suspense fallback={<div>Loading...</div>}>
      <Vscode />
    </Suspense>
  </div>,
    macos: <div>
    <Suspense fallback={<div>Loading...</div>}>
      <Macos />
    </Suspense>
  </div>,
    tgifelix: <a href="https://www.tgifelix.com" target="_blank" rel="noreferrer">tgifelix.com</a>
  };

  const welcomeMessage = (
    <div class="logo">
      <span>
        ███████╗██╗  ██╗ ██████╗ ██████╗ ████████╗ ██████╗██╗   ██╗████████╗<br />
        ██╔════╝██║  ██║██╔═══██╗██╔══██╗╚══██╔══╝██╔════╝██║   ██║╚══██╔══╝<br />
        ███████╗███████║██║   ██║██████╔╝   ██║   ██║     ██║   ██║   ██║   <br />
        ╚════██║██╔══██║██║   ██║██╔══██╗   ██║   ██║     ██║   ██║   ██║   <br />
        ███████║██║  ██║╚██████╔╝██║  ██║   ██║   ╚██████╗╚██████╔╝   ██║   <br />
        ╚══════╝╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═╝   ╚═╝    ╚═════╝ ╚═════╝    ╚═╝   <br />
      <br />
        ███████╗██████╗  █████╗  ██████╗███████╗<br />
        ██╔════╝██╔══██╗██╔══██╗██╔════╝██╔════╝<br />
        ███████╗██████╔╝███████║██║     █████╗  <br />
        ╚════██║██╔═══╝ ██╔══██║██║     ██╔══╝  <br />
        ███████║██║     ██║  ██║╚██████╗███████╗<br />
        ╚══════╝╚═╝     ╚═╝  ╚═╝ ╚═════╝╚══════╝<br />
      <br />
        Welcome to Shortcut.Space! Type 'help' for available commands.
      <br />
      </span>
    </div>
);

  return (
    <div className="App">
      <ReactTerminal welcomeMessage={welcomeMessage} commands={commands} theme="dracula" prompt=">"  showControlButtons={true}/>
    </div>
  );
}

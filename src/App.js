import React, {lazy, Suspense} from 'react'
import "./style.css"
import { ReactTerminal } from "react-terminal"
import {importMDX} from 'mdx.macro'


export default function App() {
  // import markdown docs
  const Header = lazy(() => importMDX('./docs/header.mdx'))
  const Vim = lazy(() => importMDX('./docs/vim.mdx'))
  const About = lazy(() => importMDX('./docs/about.mdx'))
  const Contribute = lazy(() => importMDX('./docs/contribute.mdx'))
  const Emacs = lazy(() => importMDX('./docs/emacs.mdx'))
  const Macos = lazy(() => importMDX('./docs/macos.mdx'))
  const Vscode = lazy(() => importMDX('./docs/vscode.mdx'))
  const Help = lazy(() => importMDX('./docs/help.mdx'))
  const Ls = lazy(() => importMDX('./docs/ls.mdx'))
  const Template = lazy(() => importMDX('./docs/template.mdx'))



  // Welcome Message
  const welcomeMessage = (
    <div class="header">
      <span>
        <Suspense fallback={<div>Loading...</div>}>
          <Header />
        </Suspense>
      </span>
    </div>
  );

 // Terminal commands
  const commands = {
    contribute:
      <Suspense fallback={<div>Loading...</div>}>
        <Contribute />
      </Suspense>,
    help:
      <Suspense fallback={<div>Loading...</div>}>
        <Help />
      </Suspense>,
    about:
      <Suspense fallback={<div>Loading...</div>}>
        <About />
      </Suspense>,
    ls:
      <Suspense fallback={<div>Loading...</div>}>
        <Ls />
      </Suspense>,
    vim:
      <Suspense fallback={<div>Loading...</div>}>
        <Vim />
      </Suspense>,
    emacs:
      <Suspense fallback={<div>Loading...</div>}>
        <Emacs />
      </Suspense>,
    vscode:
      <Suspense fallback={<div>Loading...</div>}>
        <Vscode />
    </Suspense>,
    macos:
      <Suspense fallback={<div>Loading...</div>}>
        <Macos />
      </Suspense>,
    template:
      <Suspense fallback={<div>Loading...</div>}>
        <Template />
      </Suspense>,
    tgifelix: <a href="https://www.tgifelix.com" target="_blank" rel="noreferrer">www.tgifelix.com</a>,
    source: <a href="https://github.com/TGIFelix/shortcutspace" target="_blank" rel="noreferrer">github.com/tgifelix/shortcutspace</a>,
  };

  // PROMPT
  return (
    <div className="term">
      <ReactTerminal welcomeMessage={welcomeMessage} commands={commands} theme="dracula" prompt="❯" showControlButtons={true} errorMessage="Command not found"/>
    </div>
  );
}

import React, {lazy, Suspense} from 'react'
import { ReactTerminal } from "react-terminal"
import {importMDX} from 'mdx.macro'
import './fonts/JetBrainsMono-Regular.ttf'
import "./style.css"

export default function App() {
  // import components
  const Header = lazy(() => importMDX('./lib/header.mdx'))
  const About = lazy(() => importMDX('./lib/about.mdx'))
  const Contribute = lazy(() => importMDX('./lib/contribute.mdx')) 
  const Help = lazy(() => importMDX('./lib/help.mdx'))
  const Ls = lazy(() => importMDX('./lib/ls.mdx'))

  // import docs
  const Vim = lazy(() => importMDX('./docs/vim.mdx'))
  const Emacs = lazy(() => importMDX('./docs/emacs.mdx'))
  const Macos = lazy(() => importMDX('./docs/macos.mdx'))
  const Vscode = lazy(() => importMDX('./docs/vscode.mdx'))


  // Welcome Message
  const welcomeMessage = (
    <div className="header">
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
    tgifelix: <a href="https://www.tgifelix.com" target="_blank" rel="noreferrer">www.tgifelix.com</a>,
    source: <a href="https://github.com/TGIFelix/shortcutspace" target="_blank" rel="noreferrer">github.com/tgifelix/shortcutspace</a>,
  };

  // Terminal
  return (
    <div className="app">
      <ReactTerminal
      welcomeMessage={welcomeMessage}
      commands={commands}
      prompt="❯" 
      showControlButtons={true}
      errorMessage="Command not found"
      themes={{
        draculaTheme: {
          themeBGColor: "#282a36",
          themeToolbarColor: "#282a36",
          themeColor: "#f8f8f2",
          themePromptColor: "#ff79c6"
        }
      }}
      theme="draculaTheme"/>
    </div>
  );
}

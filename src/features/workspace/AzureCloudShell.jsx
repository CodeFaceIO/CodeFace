import React, { useState, useRef, useEffect } from 'react';
import { Terminal } from 'xterm';
import { FitAddon } from 'xterm-addon-fit';
import { WebLinksAddon } from 'xterm-addon-web-links';
import { SearchAddon } from 'xterm-addon-search';
import { useEffectOnce } from 'react-use';
import parse from 'shlex';

import 'xterm/css/xterm.css';

const getFileContent = (filename) => {};

const COMMANDS = {
  echo: (args, stdout) => {
    stdout(args.join(' '));
  },
  ls: (args, stdout, stderr) => {
    const files = ['index.js', 'styles.css', 'images', 'docs'];
    stdout(files.join('\n'));
  },
  cat: (args, stdout, stderr) => {
    const fileName = args[0];
    const fileContent = getFileContent(fileName);
    if (fileContent) {
      stdout(fileContent);
    } else {
      stderr(`cat: ${fileName}: No such file or directory`);
    }
  },
};

function AzureCloudShell() {
  const [terminal, setTerminal] = useState(null);
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);

  const terminalRef = useRef(null);

  // Initialize the terminal object and add necessary addons
  useEffect(() => {
    const term = new Terminal({
      fontFamily: 'monospace',
      fontSize: 14,
    });

    const fitAddon = new FitAddon();
    term.loadAddon(fitAddon);
    term.loadAddon(new WebLinksAddon());
    term.loadAddon(new SearchAddon());

    setTerminal(term);
  }, []);

  // Focus the terminal input when the component mounts
  useEffectOnce(() => {
    if (terminal) {
      terminal.focus();
    }
  });

  // Attach the terminal object to the DOM
  useEffect(() => {
    if (terminal && terminalRef.current) {
      terminal.open(terminalRef.current);
      terminal.onData(handleInput);
      terminal.focus();
    }
  }, [terminal]);

  // Scroll to the bottom of the terminal output when new input is entered
  useEffect(() => {
    if (terminal) {
      const { rows } = terminal;
      terminal.scrollToBottom();
      terminal.scrollLines(rows - 1);
    }
  }, [input]);

  // Handle user input and execute commands
  function handleInput(data) {
    if (data.charCodeAt(0) === 13) {
      // User pressed enter
      const command = input.trim();
      setHistory([...history, command]);
      setHistoryIndex(-1);
      setInput('');

      const [commandName, ...args] = parse(command);
      const cmd = COMMANDS[commandName];
      if (cmd) {
        const stdout = (output) => terminal.writeln(output);
        const stderr = (error) => terminal.writeln(`ERROR: ${error}`);
        cmd(args, stdout, stderr);
      } else {
        terminal.writeln(`bash: ${commandName}: command not found`);
      }
    } else if (data.charCodeAt(0) === 127) {
      // User pressed backspace
      setInput(input.slice(0, -1));
    } else if (data.charCodeAt(0) === 27) {
      // User pressed an arrow key
      if (data.charCodeAt(2) === 65 && historyIndex < history.length - 1) {
        // User pressed up arrow
        setHistoryIndex(historyIndex + 1);
        setInput(history[history.length - 1]);
      } else if (data.charCodeAt(2) === 66 && historyIndex > -1) {
        // User pressed down arrow
        if (historyIndex === 0) {
          setInput('');
        } else {
          setHistoryIndex(historyIndex - 1);
          setInput(history[historyIndex]);
        }
      }
    } else {
      // User entered a character
      setInput(input + data);
    }
  }

  function getFileContent(fileName) {
    switch (fileName) {
      case 'index.js':
        return `import React from 'react';

function App() {
return <h1>Hello, World!</h1>;
}

export default App;
; case 'styles.css': return h1 {
color: blue;
}; case 'README.md': return # My Project

This is a demo project to showcase the features of the web shell component.`;
      default:
        return null;
    }
  }

  return <div ref={terminalRef} style={{ width: '100%', height: '300px' }}></div>;
}

export default AzureCloudShell;

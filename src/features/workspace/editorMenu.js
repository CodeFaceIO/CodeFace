// vs code menu and submenu with functionallity
export const editorMenu = [
  {
    label: 'File',
    submenu: [
      {
        label: 'New File',
        accelerator: 'CmdOrCtrl+N',
        click: () => {
          console.log('New File');
        },
      },
      {
        label: 'Open File',
        accelerator: 'CmdOrCtrl+O',
        click: () => {
          console.log('Open File');
        },
      },
      {
        label: 'Save File',
        accelerator: 'CmdOrCtrl+S',
        click: () => {
          console.log('Save File');
        },
      },
      {
        label: 'Save As',
        accelerator: 'CmdOrCtrl+Shift+S',
        click: () => {
          console.log('Save As');
        },
      },
      {
        label: 'Close File',
        accelerator: 'CmdOrCtrl+W',
        click: () => {
          console.log('Close File');
        },
      },
      {
        label: 'Exit',
        accelerator: 'CmdOrCtrl+Q',
        click: () => {
          console.log('Exit');
        },
      },
    ],
  },
  {
    label: 'Edit',
    submenu: [
      {
        label: 'Undo',
        accelerator: 'CmdOrCtrl+Z',
        click: () => {
          console.log('Undo');
        },
      },
      {
        label: 'Redo',
        accelerator: 'CmdOrCtrl+Shift+Z',
        click: () => {
          console.log('Redo');
        },
      },
      {
        label: 'Cut',
        accelerator: 'CmdOrCtrl+X',
        click: () => {
          console.log('Cut');
        },
      },
      {
        label: 'Copy',
        accelerator: 'CmdOrCtrl+C',
        click: () => {
          console.log('Copy');
        },
      },
      {
        label: 'Paste',
        accelerator: 'CmdOrCtrl+V',
        click: () => {
          console.log('Paste');
        },
      },
      {
        label: 'Select All',
        accelerator: 'CmdOrCtrl+A',
        click: () => {
          console.log('Select All');
        },
      },
    ],
  },
  {
    label: 'Selection',
    submenu: [
      {
        label: 'Select All',
        accelerator: 'CmdOrCtrl+A',
        click: () => {
          console.log('Select All');
        },
      },
      {
        label: 'Select Line',
        accelerator: 'CmdOrCtrl+L',
        click: () => {
          console.log('Select Line');
        },
      },
      {
        label: 'Select Word',
        accelerator: 'CmdOrCtrl+D',
        click: () => {
          console.log('Select Word');
        },
      },
      {
        label: 'Select Scope',
        accelerator: 'CmdOrCtrl+Shift+D',
        click: () => {
          console.log('Select Scope');
        },
      },
      {
        label: 'Expand Selection',
        accelerator: 'CmdOrCtrl+E',
        click: () => {
          console.log('Expand Selection');
        },
      },
      {
        label: 'Shrink Selection',
        accelerator: 'CmdOrCtrl+Shift+E',
        click: () => {
          console.log('Shrink Selection');
        },
      },
      {
        label: 'Select Next Occurrence',
        accelerator: 'CmdOrCtrl+K',
        click: () => {
          console.log('Select Next Occurrence');
        },
      },
      {
        label: 'Select All Occurrences',
        accelerator: 'CmdOrCtrl+Shift+K',
        click: () => {
          console.log('Select All Occurrences');
        },
      },
      {
        label: 'Select Next Find Match',
        accelerator: 'CmdOrCtrl+G',
        click: () => {
          console.log('Select Next Find Match');
        },
      },
      {
        label: 'Select Previous Find Match',
        accelerator: 'CmdOrCtrl+Shift+G',
        click: () => {
          console.log('Select Previous Find Match');
        },
      },
      {
        label: 'Select to Bracket',
        accelerator: 'CmdOrCtrl+Shift+\\',
        click: () => {
          console.log('Select to Bracket');
        },
      },
      {
        label: 'Select to Begining',
        accelerator: 'CmdOrCtrl+Shift+[',
        click: () => {
          console.log('Select to Begining');
        },
      },
      {
        label: 'Select to End',
        accelerator: 'CmdOrCtrl+Shift+]',
        click: () => {
          console.log('Select to End');
        },
      },
      {
        label: 'Select to Begining of Line',
        accelerator: 'CmdOrCtrl+Shift+{',
        click: () => {
          console.log('Select to Begining of Line');
        },
      },
      {
        label: 'Select to End of Line',
        accelerator: 'CmdOrCtrl+Shift+}',
        click: () => {
          console.log('Select to End of Line');
        },
      },
      {
        label: 'Select to Begining of File',
        accelerator: 'CmdOrCtrl+Shift+Home',
        click: () => {
          console.log('Select to Begining of File');
        },
      },
      {
        label: 'View',
        submenu: [
          {
            label: 'Toggle Full Screen',
            accelerator: (() => {
              if (process.platform === 'darwin') {
                return 'Ctrl+Command+F';
              }
              return 'F11';
            })(),
            click: (item, focusedWindow) => {
              if (focusedWindow) {
                focusedWindow.setFullScreen(!focusedWindow.isFullScreen());
              }
            },
          },
          {
            label: 'Toggle Developer Tools',
            accelerator: (() => {
              if (process.platform === 'darwin') {
                return 'Alt+Command+I';
              }
              return 'Ctrl+Shift+I';
            })(),
            click: (item, focusedWindow) => {
              if (focusedWindow) {
                focusedWindow.toggleDevTools();
              }
            },
          },
        ],
      },
      {
        label: 'Window',
        role: 'window',
        submenu: [
          {
            label: 'Minimize',
            accelerator: 'CmdOrCtrl+M',
            role: 'minimize',
          },
          {
            label: 'Close',
            accelerator: 'CmdOrCtrl+W',
            role: 'close',
          },
        ],
      },
      {
        label: 'Help',
        role: 'help',
        submenu: [
          {
            label: 'Learn More',
            click() {
              console.log('Learn More');
            },
          },
        ],
      },
    ],
  },
];

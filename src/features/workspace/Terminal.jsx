import Terminal from 'terminal-in-react';
import pseudoFileSystemPlugin from 'terminal-in-react-pseudo-file-system-plugin';
import NodeEvalPlugin from 'terminal-in-react-node-eval-plugin';
import ViPlugin from 'terminal-in-react-vi-plugin';

const FileSystemPlugin = pseudoFileSystemPlugin();
const TerminalApp = () => {
  const showMsg = () => 'Hello World';

  return (
    <div
      style={{
        height: '100%!important',
        width: '100%!important',
      }}
    >
      <Terminal
        watchConsoleLogging
        color="purple"
        backgroundColor="black"
        barColor="#0E1217"
        style={{ fontWeight: 'bold', fontSize: '1em', width: '100%', height: '100%', minHeight: '200px%!important' }}
        closedTitle="OOPS! You closed the window."
        closedMessage="Click on the icon to reopen."
        shortcuts={{
          'win,linux': {
            'ctrl + b': 'echo we are special',
          },
          win: {
            'ctrl + a': 'echo hi windows',
          },
          darwin: {
            'cmd + a': 'echo hi mac',
          },
          linux: {
            'ctrl + a': 'echo hi linux',
          },
        }}
        plugins={[
          FileSystemPlugin,
          {
            class: NodeEvalPlugin,
            config: {
              filesystem: FileSystemPlugin.displayName,
            },
          },
          {
            class: ViPlugin,
            config: {
              filesystem: FileSystemPlugin.displayName,
            },
          },
        ]}
        commands={{
          'open-google': () => window.open('https://www.google.com/', '_blank'),
          showmsg: showMsg,
          popup: () => alert('Terminal in React'),
          'type-text': (args, print, runCommand) => {
            const text = args.slice(1).join(' ');
            print('');
            for (let i = 0; i < text.length; i += 1) {
              setTimeout(() => {
                runCommand(`edit-line ${text.slice(0, i + 1)}`);
              }, 100 * i);
            }
          },
        }}
        commandPassThrough={(cmd) => `-PassedThrough:${cmd}: command not found`}
        descriptions={{
          'open-google': 'opens google.com',
          showmsg: 'shows a message',
          alert: 'alert',
          popup: 'alert',
        }}
        msg="You can write anything here. Example - Hello! My name is Foo and I like Bar."
      />
    </div>
  );
};

export default TerminalApp;

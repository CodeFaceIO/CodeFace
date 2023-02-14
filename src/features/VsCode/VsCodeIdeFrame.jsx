/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/iframe-has-title */
import { useEffect, useState } from 'react';

const VsCodeIdeFrame = () => {
  const [vsCodeSessions, setVsCodeSessions] = useState([]);
  const [activeSession, setActiveSession] = useState(null);

  const fetchUserAccessToken = async () => {
    let user = await fetch('https://localhost:8080');
    return await user.json();
  };
  useEffect(() => {
    async function loadVsCodeSessions() {
      const userAccessToken = await fetchUserAccessToken(); // fetch the user's access token from your backend

      try {
        const response = await fetch('/api/vscode/list', {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${userAccessToken}`,
            'Content-Type': 'application/json',
          },
        });

        const sessionData = await response.json();
        setVsCodeSessions(sessionData);
        setActiveSession(sessionData[0]);
      } catch (error) {
        console.error('Failed to load VS Code sessions', error);
      }
    }

    loadVsCodeSessions();
  }, []);

  async function createVsCodeSession() {
    const userAccessToken = await fetchUserAccessToken(); // fetch the user's access token from your backend

    try {
      const response = await fetch('/api/vscode/create', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${userAccessToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          extensions: ['ms-python.python', 'ms-vscode-remote.remote-ssh'], // add any extensions you want to include
        }),
      });

      const sessionData = await response.json();
      setVsCodeSessions([...vsCodeSessions, sessionData]);
      setActiveSession(sessionData);
    } catch (error) {
      console.error('Failed to create VS Code session', error);
    }
  }

  async function saveCode(code) {
    const userAccessToken = await fetchUserAccessToken(); // fetch the user's access token from your backend

    try {
      await fetch('/api/code/save', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${userAccessToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          session_id: activeSession.id,
          code,
        }),
      });
    } catch (error) {
      console.error('Failed to save code', error);
    }
  }

  if (vsCodeSessions.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {/*<ul>*/}
      {/*	{vsCodeSessions.map(( session ) => (*/}
      {/*		<li key={session.id}>*/}
      {/*			<button onClick={() => setActiveSession(session)}>Switch to session {session.id}</button>*/}
      {/*		</li>*/}
      {/*	))}*/}
      {/*	<li>*/}
      {/*		<button onClick={createVsCodeSession}>Create new session</button>*/}
      {/*	</li>*/}
      {/*</ul>*/}
      {/*{activeSession &&}*/}
      <iframe src={'https://vscode.dev/'} allow="fullscreen"></iframe>
      {/*<CodeEditor onSave={saveCode} />*/}
    </div>
  );
};

function CodeEditor({ onSave }) {
  const [code, setCode] = useState('');

  function handleSave() {
    onSave(code);
  }

  return (
    <div>
      <textarea value={code} onChange={(event) => setCode(event.target.value)} ></textarea>
      <button onClick={handleSave}>Save code</button>
    </div>
  );
}

export default VsCodeIdeFrame;
import React, { useEffect, useState } from 'react';
import { Console, Hook, Unhook } from 'console-feed';

const LogsContainer = () => {
  const [logs, setLogs] = useState([]);
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    Hook(window.console, (log) => setLogs((currLogs) => [...currLogs, log]), false);
    Hook(window.console, (log) => setErrors((currErrors) => [...currErrors, log]));
    return () => Unhook(window.console);
  }, []);

  return (
    <div style={{ height: '100%', overflow: 'scroll' }}>
      <Console logs={logs} errors={errors} styles={{ color: 'red' }} variant="dark" />
    </div>
  );
};

export default LogsContainer;

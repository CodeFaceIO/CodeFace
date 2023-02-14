import React, { useState } from 'react';
import styles from './fileexplorer.module.css';

const FileExplorer = () => {
  const [files, setFiles] = useState([]);

  const handleFileUpload = (event) => {
    const uploadedFiles = event.target.files;
    const newFiles = Array.from(uploadedFiles).map((file) => ({
      name: file.name,
      size: file.size,
      type: file.type,
    }));
    setFiles((prevFiles) => [...prevFiles, ...newFiles]);
  };

  return (
    <div className={styles.fileExplorer}>
      <div className={styles.fileExplorerHeader}>
        <h3>File Explorer</h3>
        <input type="file" multiple onChange={handleFileUpload} />
      </div>
      <div className={styles.fileExplorerBody}>
        {files.map((file, index) => (
          <div key={index} className={styles.fileExplorerItem}>
            <p>Name: {file.name}</p>
            <p>Size: {file.size}</p>
            <p>Type: {file.type}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FileExplorer;

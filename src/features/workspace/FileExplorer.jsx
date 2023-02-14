import React, { useRef, useState } from "react";
import Dropzone from "react-dropzone";
import JSZip from "jszip";
import { saveAs } from "file-saver";

const FileExplorer = () => {
	const [folders, setFolders] = useState([]);
	const inputRef = useRef();
	
	const handleSelectFolder = () => {
		inputRef.current.click();
	};
	
	const handleDrop = ( acceptedFiles ) => {
		const uploadFolders = acceptedFiles
			.filter(( file ) => file.type === "application/x-directory")
			.map(( file ) => {
				return {
					folder: file,
					folderName: file.name,
					children: []
				};
			});
		setFolders(( prevFolders ) => [...prevFolders, ...uploadFolders]);
	};
	
	const handleRemoveFolder = ( folderName, parentFolderName ) => {
		setFolders(( prevFolders ) => {
			const newFolders = prevFolders.map(( folder ) => {
				if (folder.folderName === parentFolderName) {
					return {
						...folder,
						children: folder.children.filter(( child ) => child.folderName !== folderName)
					};
				} else {
					return folder;
				}
			});
			return newFolders.filter(( folder ) => folder.folderName !== folderName);
		});
	};
	
	const handleDisplayFiles = ( folderName, files ) => {
		setFolders(( prevFolders ) => {
			const newFolders = prevFolders.map(( folder ) => {
				if (folder.folderName === folderName) {
					return {
						...folder,
						files: files
					};
				} else {
					return folder;
				}
			});
			return newFolders;
		});
	};
	
	const handleDownloadFolder = async ( folderName ) => {
		const zip = new JSZip();
		const folder = folders.find(( folder ) => folder.folderName === folderName);
		
		const addFileToZip = async ( filePath, file ) => {
			return new Promise(( resolve, reject ) => {
				const reader = new FileReader();
				reader.onload = () => {
					const arrayBuffer = reader.result;
					zip.file(filePath, arrayBuffer, { binary: true });
					resolve();
				};
				reader.readAsArrayBuffer(file);
			});
		};
		
		const addFolderToZip = async ( folderName, files ) => {
			await Promise.all(
				files.map(( file ) => {
					const filePath = `${folderName}/${file.name}`;
					return file.type === "application/x-directory"
						? addFolderToZip(filePath, file.children)
						: addFileToZip(filePath, file.folder);
				})
			);
		};
		
		await addFolderToZip(folderName, folder.children);
		
		zip.generateAsync({ type: "blob" }).then(( content ) => {
			saveAs(content, `${folderName}.zip`);
		});
	};
	
	function renderFolder( folder, parentFolderName = "" ) {
		return (
			<div key={folder.folderName}>
				<span>{folder.folderName}</span>
				<button onClick={() => handleRemoveFolder(folder.folderName, parentFolderName)}>Remove</button>
				{folder.files && folder.files.length > 0 && (
					<div style={{ paddingLeft: "10px", backgroundColor: "red" }}>
						{folder.files.map(( file ) => (
							<div key={file.name}>
								<span>{file.name}</span>
							</div>
						))}
					</div>
				)}
				{folder.children && folder.children.length > 0 && (
					<div style={{ paddingLeft: "10px" }}>
						{folder.children.map(( childFolder ) => renderFolder(childFolder, folder.folderName))}
					</div>
				)}
				{folder.children && folder.children.length && (
					<div style={{ paddingLeft: "10px" }}>
						<Dropzone onDrop={( acceptedFiles ) => handleUploadFiles(folder.folderName, acceptedFiles)}>
							{( { getRootProps, getInputProps } ) => (
								<div {...getRootProps()}>
									<input {...getInputProps()} />
									<div>Drag and drop files here, or click to select files</div>
								</div>
							)}
						</Dropzone>
					</div>
				)}
				{folder.children && folder.children.length > 0 && (
					<div style={{ paddingLeft: "10px" }}>
						<button onClick={() => handleDownloadFolder(folder.folderName)}>Download as ZIP</button>
					</div>
				)}
				<div style={{ paddingLeft: "10px" }}>Total files: {countFiles(folder)}</div>
			</div>
		);
	}
	
	const countFiles = ( folder ) => {
		let totalFiles = 0;
		if (folder.files && folder.files.length > 0) {
			totalFiles += folder.files.length;
		}
		if (folder.children && folder.children.length > 0) {
			folder.children.forEach(( child ) => {
				totalFiles += countFiles(child);
			});
		}
		return totalFiles;
	};
	
	const handleUploadFiles = ( folderName, acceptedFiles ) => {
		setFolders(( prevFolders ) => {
			const newFolders = prevFolders.map(( folder ) => {
				if (folder.folderName === folderName) {
					const newFiles = acceptedFiles
						.filter(( file ) => file.type !== "application/x-directory")
						.map(( file ) => {
							return {
								name: file.name,
								file: file
							};
						});
					return {
						...folder,
						files: folder.files ? [...folder.files, ...newFiles] : newFiles
					};
				} else {
					return folder;
				}
			});
			return newFolders;
		});
	};
	
	return (
		<div>
			<button onClick={handleSelectFolder}>Add Folder</button>
			<input
				type="file"
				webkitdirectory=""
				mozdirectory=""
				ref={inputRef}
				style={{ display: "none" }}
				onChange={( e ) => handleDrop(e.target.files)}
			/>
			{folders.map(( folder ) => renderFolder(folder))}
		</div>
	);
};

export default FileExplorer;

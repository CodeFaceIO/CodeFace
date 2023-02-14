// @ts-nocheck
import { useState } from "react";

function SourceControl() {
	const [commitMessage, setCommitMessage] = useState("");
	const [branchName, setBranchName] = useState("main");
	const [files, setFiles] = useState([]);
	
	const handleCommitMessageChange = ( event ) => {
		setCommitMessage(event.target.value);
	};
	
	const handleBranchNameChange = ( event ) => {
		setBranchName(event.target.value);
	};
	
	const handleFileUpload = ( event ) => {
		const newFiles = Array.from(event.target.files);
		setFiles([...files, ...newFiles]);
	};
	
	const handleCommit = () => {
		// Run Git commit command with the given commit message
		// and add all the files that have been staged for commit
		console.log(`Committing changes with message "${commitMessage}"...`);
		
		// Clear the commit message and files array after the commit is complete
		setCommitMessage("");
		setFiles([]);
	};
	
	const handleBranchCreation = () => {
		// Run Git branch creation command with the given branch name
		console.log(`Creating new branch "${branchName}"...`);
		
		// Clear the branch name field after the branch is created
		setBranchName("main");
	};
	
	return (
		<div>
			<h2>Source Control</h2>
			<div>
				<input type="text" placeholder="Commit message" value={commitMessage} onChange={handleCommitMessageChange} />
				<button onClick={handleCommit}>Commit</button>
			</div>
			<div>
				<input type="text" placeholder="Branch name" value={branchName} onChange={handleBranchNameChange} />
				<button onClick={handleBranchCreation}>Create branch</button>
			</div>
			<div>
				<input type="file" onChange={handleFileUpload} multiple />
				<ul>
					{files.map(( file ) => (
						<li key={file.name}>{file.name}</li>
					))}
				</ul>
			</div>
		</div>
	);
}

export default SourceControl;

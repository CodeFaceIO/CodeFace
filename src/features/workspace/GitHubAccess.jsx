import React, { useState } from "react";
import axios from "axios";

const GitHubAccess = () => {
	const [username, setUsername] = useState("");
	const [repos, setRepos] = useState([]);
	
	const handleSubmit = async ( e ) => {
		e.preventDefault();
		
		try {
			const response = await axios.get(`https://api.github.com/users/${username}/repos`);
			setRepos(response.data);
		} catch (error) {
			console.error(error);
		}
	};
	
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<label>
					GitHub username:
					<input type="text" value={username} onChange={( e ) => setUsername(e.target.value)} />
				</label>
				<button type="submit">Submit</button>
			</form>
			{repos.map(( repo ) => (
				<div key={repo.id}>{repo.name}</div>
			))}
		</div>
	);
};

export default GitHubAccess;

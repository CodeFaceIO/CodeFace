import React, { useState } from "react";
import { FaChevronDown, FaChevronRight, FaGithub, FaSearch } from "react-icons/fa";

function VsCodeSidebarComponent() {
	// sample file and folder data
	const [files, setFiles] = useState({
		id: "root",
		name: "Project Root",
		type: "folder",
		children: [
			{
				id: "1",
				name: "src",
				type: "folder",
				children: [
					{ id: "2", name: "index.js", type: "file" },
					{ id: "3", name: "App.js", type: "file" },
					{
						id: "4",
						name: "components",
						type: "folder",
						children: [
							{ id: "5", name: "Header.js", type: "file" },
							{ id: "6", name: "Footer.js", type: "file" }
						]
					}
				]
			},
			{
				id: "7",
				name: "public",
				type: "folder",
				children: [{ id: "8", name: "index.html", type: "file" }]
			},
			{ id: "9", name: "README.md", type: "file" }
		]
	});
	
	// state for tracking which folders are expanded
	const [expandedFolders, setExpandedFolders] = useState([]);
	
	// state for tracking search query
	const [searchQuery, setSearchQuery] = useState("");
	
	// state for tracking which extension categories are expanded
	const [expandedExtensions, setExpandedExtensions] = useState([]);
	
	// state for tracking the active extension category
	const [activeExtension, setActiveExtension] = useState("");
	
	// state for tracking which repository is selected
	const [selectedRepo, setSelectedRepo] = useState("");
	
	// recursive function to render a tree of folders and files
	const renderFileTree = ( node, level = 0 ) => {
		if (node.type === "file") {
			return (
				<li key={node.id} onClick={() => onFileClick(node)}>
					{node.name}
				</li>
			);
		} else if (node.type === "folder") {
			const isExpanded = expandedFolders.includes(node.id);
			return (
				<li key={node.id}>
					<div className="folder" onClick={() => handleFolderClick(node)}>
						{isExpanded ? <FaChevronDown /> : <FaChevronRight />}
						<span>{node.name}</span>
					</div>
					{isExpanded &&
						<ul className="file-tree">{node.children.map(( child ) => renderFileTree(child, level + 1))}</ul>}
				</li>
			);
		}
	};
	
	// handle folder click to toggle expanded state
	const handleFolderClick = ( folder ) => {
		if (expandedFolders.includes(folder.id)) {
			setExpandedFolders(expandedFolders.filter(( id ) => id !== folder.id));
		} else {
			setExpandedFolders([...expandedFolders, folder.id]);
			onFolderClick(folder);
		}
	};
	
	/// handle search input change
	const handleSearchChange = ( event ) => {
		setSearchQuery(event.target.value);
	};
	// handle search form submission
	const handleSearchSubmit = ( event ) => {
		event.preventDefault();
		onSearch(searchQuery);
	};
	// handle extension category click to toggle expanded state
	const handleExtensionCategoryClick = ( category ) => {
		if (expandedExtensions.includes(category)) {
			setExpandedExtensions(expandedExtensions.filter((categoryName => categoryName !== category));
		} else {
			setExpandedExtensions([...expandedExtensions, category]);
		}
	};

// handle repository click to select it
	const handleRepositoryClick = repo => {
		setSelectedRepo(repo);
		onRepositorySelected(repo);
	};
	
	return (
		<div className="sidebar">
			<div className="sidebar-header">
				<div className="search">
					<form onSubmit={handleSearchSubmit}>
						<input type="text" placeholder="Search" value={searchQuery} onChange={handleSearchChange} />
						<button type="submit">
							<FaSearch />
						</button>
					</form>
				</div>
			</div>
			<ul className="file-tree">{renderFileTree(files)}</ul>
			<div className="sidebar-header">
				<div className="extensions">
					<div className="extension-header">Extensions</div>
					<ul className="extension-categories">
						{Object.entries(extensions).map(( [categoryName, category] ) => (
							<li key={categoryName} className={expandedExtensions.includes(categoryName) ? "expanded" : ""}>
								<div className="extension-category" onClick={() => handleExtensionCategoryClick(categoryName)}>
									{categoryName}
								</div>
								{expandedExtensions.includes(categoryName) && (
									<ul className="extension-list">
										{category.map(extension => (
											<li
												key={extension.id}
												className={extension.id === activeExtension ? "active" : ""}
												onClick={() => setActiveExtension(extension.id)}
											>
												{extension.name}
											</li>
										))}
									</ul>
								)}
							</li>
						))}
					</ul>
				</div>
			</div>
			<div className="sidebar-header">
				<div className="source-control">
					<div className="source-control-header">Source Control</div>
					<ul className="repository-list">
						{repositories.map(repository => (
							<li key={repository.id} className={repository.id === selectedRepo ? "selected" : ""}
									onClick={() => handleRepositoryClick(repository.id)}>
								<FaGithub />
								{repository.name}
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
}

export default VsCodeSidebarComponent;


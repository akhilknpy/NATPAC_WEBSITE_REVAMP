// ProjectManager.js
import React, { useState, useEffect } from 'react';
import './admincss/ResearchProj.css';
import { Link } from 'react-router-dom';

function ResearchProjects() {
    const [projects, setProjects] = useState([]);
    const [projName, setProjName] = useState('');
    const [projImage, setProjImage] = useState(null); // For handling the image upload
    const [projDescription, setProjDescription] = useState('');
    const [projType, setProjType] = useState(''); // New state for project type
    const [editingProjectId, setEditingProjectId] = useState(null);

    // Fetch projects from the backend
    const fetchProjects = async () => {
        const response = await fetch('http://localhost:3000/resproj/');
        const data = await response.json();
        setProjects(data);
    };

    useEffect(() => {
        fetchProjects();
    }, []);

    // Handle form submission for creating/updating a project
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('projName', projName);
        formData.append('projDescription', projDescription);
        formData.append('projType', projType); // Append projType to form data
        if (projImage) formData.append('projImage', projImage); // Append image file

        if (editingProjectId) {
            // Update project 
            await fetch(`http://localhost:3000/resproj/updateproj/${editingProjectId}`, {
                method: 'PUT',
                body: formData,
            });
            setEditingProjectId(null);
        } else {
            // Create new project
            await fetch('http://localhost:3000/resproj/addproj', {
                method: 'POST',
                body: formData,
            });
        }

        // Clear form fields
        setProjName('');
        setProjImage(null);
        setProjDescription('');
        setProjType(''); // Clear projType

        // Refresh project list
        fetchProjects();
    };

    // Handle edit button click
    const handleEdit = (project) => {
        setProjName(project.projName);
        setProjImage(null); // Reset image input field
        setProjDescription(project.projDescription);
        setProjType(project.projType); // Set projType for editing
        setEditingProjectId(project._id);
    };

    // Handle delete button click
    const handleDelete = async (id) => {
        await fetch(`http://localhost:3000/resproj/deleteproj/${id}`, { method: 'DELETE' });
        fetchProjects(); // Refresh project list after deletion
    };

    return (
       
        <div className="container">
            <div className='home-navigation'><Link to='/AdminHome'>Home</Link></div>
            <h1>Project Management</h1>
            

            {/* Form for adding/updating project */}
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Project Name"
                    value={projName}
                    onChange={(e) => setProjName(e.target.value)}
                    required
                    className="form-input"
                />
                <input
                    type="text"
                    placeholder="Project Type" // Input for projType
                    value={projType}
                    onChange={(e) => setProjType(e.target.value)}
                    required
                    className="form-input"
                />
                <input
                    type="file"
                    onChange={(e) => setProjImage(e.target.files[0])}
                    className="form-input"
                />
                <textarea
                    placeholder="Project Description"
                    value={projDescription}
                    onChange={(e) => setProjDescription(e.target.value)}
                    className="form-input"
                ></textarea>
                <button type="submit" className="form-button">
                    {editingProjectId ? 'Update Project' : 'Add Project'}
                </button>
            </form>

            {/* List of projects with edit/delete options */}
            <div className="project-list">
                {projects.map((project) => (
                    <div key={project._id} className="project-card">

                        {project.imagePath && (
                            <img
                                src={`http://localhost:3000${project.imagePath}`}
                                alt={project.imageName} // Display the image using imagePath
                                className="project-image"
                            />
                        )}
                        <div className='image-data'>
                            <h3>{project.projName}</h3>
                            <h4>Type: {project.projType}</h4>
                            <p>{project.projDescription}</p>
                        </div>
                        <button onClick={() => handleEdit(project)} className="edit-button">
                            Edit
                        </button>
                        <button onClick={() => handleDelete(project._id)} className="delete-button">
                            Delete
                        </button>
                    </div>
                ))}
            </div>

            {/* Carousel for images */}
            <div className="carousel-container">
                {projects.map((project) => (
                    <img
                        key={project._id}
                        src={`http://localhost:3000${project.imagePath}`}
                        alt={project.imageName}
                        className="carousel-image"
                    />
                ))}
            </div>
        </div>
    );
}

export default ResearchProjects;

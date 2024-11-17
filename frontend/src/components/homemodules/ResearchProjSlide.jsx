import React, { useState, useEffect } from 'react';
import '../admin/admincss/ResearchProj.css';
import { Link } from 'react-router-dom';


const ResearchProjSlide = () => {

    const [projects, setProjects] = useState([]);

    // Fetch projects from the backend
    const fetchProjects = async () => {
        const response = await fetch('http://localhost:3000/resproj/');
        const data = await response.json();
        setProjects(data);
    };

    useEffect(() => {
        fetchProjects();
    }, []);

    return (
        <>
            <div className='home-proj-head'>
                
                <div>View All Projects</div>

                <div className="carousel-container">

                    {projects.map((project) => (
                        <div key={project._id} style={{ justifyItems: 'center' }}>
                            <img

                                src={`http://localhost:3000${project.imagePath}`}
                                alt={project.imageName}
                                className="carousel-image"
                            />
                            <h3>{project.projName}</h3>
                        </div>
                    ))}

                </div>
            </div>
        </>
    )
}

export default ResearchProjSlide
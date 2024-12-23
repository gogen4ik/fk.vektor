import React, { useState } from 'react';
import './PhotoAlbum.css';
import { projects } from './imageLoader'; // Импорт проектов для фото

function PhotoAlbum() {
    const [openProject, setOpenProject] = useState(null);

    const toggleProject = (projectName) => {
        setOpenProject(openProject === projectName ? null : projectName);
    };

    return (
        <div className="photo-album">
            <h2>Фотоальбомы</h2>
            {projects.map((project) => (
                <div key={project.name}>
                    <h3 onClick={() => toggleProject(project.name)} className="project-title">
                        {project.name}
                    </h3>
                    {openProject === project.name && (
                        <div className="photo-grid">
                            {project.images.map((src, index) => (
                                <div key={index} className="photo-item">
                                    <img src={src} alt={`Фото ${index + 1}`} />
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}

export default PhotoAlbum;

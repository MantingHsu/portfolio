// src/Projects.js
import React, { useState } from 'react';
import './Projects.css';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

// SAVONA
import savona1 from './project_images/savona1.png';
import savona2 from './project_images/savona2.png';
import savona3 from './project_images/savona3.png';
import savona4 from './project_images/savona4.png';

// ALFRED
import alfred1 from './project_images/alfred1.png';
import alfred2 from './project_images/alfred2.png';
import alfred3 from './project_images/alfred3.png';
import alfred4 from './project_images/alfred4.png';

// STRADELLA
import stradella1 from './project_images/2020 STRADELLA_01.jpg';
import stradella2 from './project_images/2020 STRADELLA_03.jpg';
import stradella3 from './project_images/2020 STRADELLA_46.jpg';

//JASPER//
import jasper1 from './project_images/jasper1.png';
import jasper2 from './project_images/jasper2.png';
import jasper3 from './project_images/jasper3.png';
import jasper4 from './project_images/jasper4.png';

//JOURNEY OF LIFE//
import journey1 from './project_images/journey1.png';
import journey2 from './project_images/journey2.png';
import journey3 from './project_images/journey3.png';
import journey4 from './project_images/journey4.png';
import journey5 from './project_images/journey5.png';

//RIDGELINE//
import ridgeline1 from './project_images/ridgeline1.png';
import ridgeline from './project_images/ridgeline.png';
import ridgeline5 from './project_images/ridgeline5.png';
import ridgeline3 from './project_images/ridgeline3.png';
import ridgeline4 from './project_images/ridgeline4.png';
const projects = [
  {
    title: 'Savona',
    images: [savona1, savona2, savona3, savona4],
  },
  {
    title: 'Alfred',
    images: [alfred1, alfred2, alfred3, alfred4],
  },
  {
    title: 'Stradella',
    images: [stradella1, stradella2, stradella3],
  },
  {
    title: 'Jasper',
    images: [jasper1, jasper2, jasper3, jasper4],
  },
  {
    title: 'Journey of Life',
    images: [journey1, journey2, journey3, journey4, journey5],
  },
  {
    title: 'Ridgeline', 
    images: [ridgeline1, ridgeline, ridgeline5, ridgeline3, ridgeline4],
  },
];

function Projects() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImages, setCurrentImages] = useState([]);
  const [photoIndex, setPhotoIndex] = useState(0);

  const openLightbox = (images) => {
    const formatted = images.map((src) => ({ src }));
    setCurrentImages(formatted);
    setPhotoIndex(0);
    setLightboxOpen(true);
  };

  return (
    <div className="projects-container">
      <h2 className="projects-title">Projects</h2>

      <div className="project-grid">
        {projects.map((project, index) => (
          <div
            className="project-card"
            key={index}
            onClick={() => openLightbox(project.images)}
          >
            <h3 className="project-card-title">{project.title}</h3>
            <div className="project-tile">
              <img
                src={project.images[0]} // ✅ Only the first image is shown
                alt={`${project.title} thumbnail`}
                className="project-image"
              />
            </div>
          </div>
        ))}
      </div>

      {lightboxOpen && (
        <Lightbox
          open={lightboxOpen}
          close={() => setLightboxOpen(false)}
          slides={currentImages}
          index={photoIndex}
          on={{ view: ({ index }) => setPhotoIndex(index) }}
        />
      )}
    </div>
  );
}

export default Projects;

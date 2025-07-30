// src/Projects.js
import React, { useState } from 'react';
import './Projects.css';
import Lightbox from 'react-awesome-lightbox';
import 'react-awesome-lightbox/build/style.css';

import savona1 from './project_images/savona1.png';
import savona2 from './project_images/savona2.png';
import savona3 from './project_images/savona3.png';
import savona4 from './project_images/savona4.png';

import alfred1 from './project_images/alfred1.png';
import alfred2 from './project_images/alfred2.png';
import alfred3 from './project_images/alfred3.png';
import alfred4 from './project_images/alfred4.png';

import stradella1 from './project_images/2020 STRADELLA_01.jpg';
import stradella2 from './project_images/2020 STRADELLA_03.jpg';
import stradella3 from './project_images/2020 STRADELLA_46.jpg';

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
];

function Projects() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImages, setCurrentImages] = useState([]);
  const [photoIndex, setPhotoIndex] = useState(0);

  const openLightbox = (images, index) => {
    setCurrentImages(images.map((img) => ({ url: img }))); // format required by react-awesome-lightbox
    setPhotoIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="projects-container">
      <h2>Projects</h2>
      {projects.map((project, pIndex) => (
        <div className="project-block" key={pIndex}>
          <h3 className="project-title">{project.title}</h3>
          <div className="project-gallery">
            {project.images.map((img, iIndex) => (
              <img
                key={iIndex}
                src={img}
                alt={`${project.title} ${iIndex + 1}`}
                onClick={() => openLightbox(project.images, iIndex)}
                className="project-image"
              />
            ))}
          </div>
        </div>
      ))}

      {lightboxOpen && (
        <Lightbox
          images={currentImages}
          startIndex={photoIndex}
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </div>
  );
}

export default Projects;

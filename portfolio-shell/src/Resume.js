// src/Resume.js
import React from 'react';
import profilePic from './project_images/resume.jpg';
import './Resume.css';

const Resume = () => (
  <div className="resume-container">
    <div className="resume-header">
      <img src={profilePic} alt="Manting Hsu" className="resume-photo" />
      <h1>Manting Hsu</h1>
      <p className="resume-subtitle">Interior Designer | Space Planner | 3D Visualizer</p>
    </div>

    <section>
      <h2>Professional Experience</h2>
      <div className="resume-section">
        <h3>Senior Interior Designer – DI Group</h3>
        <p><em>Jan 2022 – Present | Los Angeles, CA</em></p>
        <ul>
          <li>Lead end-to-end interior design projects—from concept development to final installation—ensuring alignment with client goals, timelines, and budgets.</li>
          <li>Collaborate with architects, engineers, and consultants to deliver cohesive design solutions for luxury residential and boutique commercial environments.</li>
          <li>Oversee space planning, FF&E selection, millwork design, and construction documentation; deliver detailed drawing sets and photorealistic renderings using Revit, SketchUp, and Enscape.</li>
          <li>Direct client presentations and material reviews, maintaining clear communication and managing expectations across all project phases.</li>
          <li>Mentor junior designers, fostering a collaborative studio culture and promoting design excellence.</li>
          <li>Stay current with emerging trends, materials, and technologies to ensure innovative and timeless interiors.</li>
        </ul>

        <h3>Junior Interior Designer – Primior</h3>
        <p><em>Aug 2020 – Dec 2021 | Los Angeles, CA</em></p>
        <ul>
          <li>Supported design development for residential and commercial projects.</li>
          <li>Managed showroom inventory and vendor catalogs.</li>
          <li>Assisted with sourcing, presentations, and job site coordination.</li>
        </ul>

        <h3>Assistant Project Manager – COOPER-TILES Green Building</h3>
        <p><em>Mar 2016 – Dec 2018 | Kaohsiung, Taiwan</em></p>
        <ul>
          <li>Produced high-quality renderings with V-ray and LightUp.</li>
          <li>Designed brochures and digital ads with InDesign and Photoshop.</li>
          <li>Maintained showroom operations and supplier communication.</li>
        </ul>
      </div>
    </section>

    <section>
  <h2>Design Projects</h2>
  <ul className="project-list">
    <li>
      <strong>Virtual Design Charette – IIDA SoCal:</strong> Reimagined Pershing Square focused on urban wellness and engagement.
    </li>
    <li>
      <strong>Cofer Residential Staging:</strong> Refreshed home with nature-toned palettes and curated finishes.
    </li>
    <li>
      <strong>IDEC Competition:</strong> Designed a modular container inspired by Navajo culture and desert topography.
    </li>
  </ul>
</section>


    <section>
      <h2>Education</h2>
      <div style={{ marginBottom: '1rem' }}>
    <p><strong>DBA – Westcliff University</strong> (2025 – In Progress)</p>
    <p><em>Focus:</em> Business Strategy and Organizational Leadership</p>
  </div>

  <div style={{ marginBottom: '1rem' }}>
    <p><strong>MBA – Westcliff University</strong> (2023 – 2025)</p>
    <p><em>Second Major:</em> Web Page, Digital/Multimedia and Information Resources Design </p>
  </div>
      <p><strong>Bachelor of Interior Design</strong> — California State University, Northridge (May 2022)</p>
      <p><em>Key Courses:</em> Studio I–IV, Creative Expression, Textiles, Design Communication</p>
    </section>

    <section>
      <h2>Skills</h2>
      <ul className="two-column-list">
      <li>AutoCAD</li>
      <li>SketchUp</li>
      <li>Revit</li>
      <li>Enscape</li>
      <li>Photoshop</li>
      <li>InDesign</li>
      <li>Illustrator</li>
      <li>MS Office</li>
      <li>Strategic Planning</li>
      <li>Organizational Leadership</li>
      <li>Digital Marketing</li>
      <li>UI/UX Design</li>
      </ul>
    </section>

    <section>
      <h2>Languages</h2>
      <ul>
        <li>Mandarin – Fluent</li>
        <li>English – Fluent</li>
      </ul>
    </section>

    <section>
      <h2>Leadership</h2>
      <p>Vice President, IIDA SoCal Chapter – CSUN Campus (2020 – 2022)</p>
    </section>

    <section>
      <h2>Objective</h2>
      <p>
        To collaborate with innovative design studios on meaningful residential and commercial interiors while applying both creative and technical expertise to deliver impactful environments.
      </p>
    </section>
  </div>
);

export default Resume;

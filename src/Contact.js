// src/Contact.js
import React from 'react';

const Contact = () => (
  <main>
    <h2>Contact</h2>
    <p>If you'd like to connect or discuss a design project, feel free to reach out.</p>

    <ul style={{ listStyle: 'none', paddingLeft: 0, margin: '2rem 0' }}>
      <li style={{ marginBottom: '1rem' }}>
        <strong>Email:</strong>{' '}
        <a href="mailto:tinghsu920724@gmail.com">tinghsu920724@gmail.com</a>
      </li>
      <li>
        <strong>LinkedIn:</strong>{' '}
        <a
          href="https://www.linkedin.com/in/manting-hsu/"
          target="_blank"
          rel="noopener noreferrer"
        >
          linkedin.com/in/manting-hsu
        </a>
      </li>
    </ul>

    <p>Looking forward to hearing from you.</p>
  </main>
);

export default Contact;

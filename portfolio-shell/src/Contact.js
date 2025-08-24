// src/Contact.js
import React from 'react';

const Contact = () => (
  <main>
    <h2>Contact</h2>
    <p>I’m open to new opportunities and collaborations in the interior design industry. Feel free to reach out.</p>

    <ul className="contact-list">
      <li>
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
    <p>
      I look forward to connecting with you!
    </p>
  </main>
);

export default Contact;

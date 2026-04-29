"use client";
import React from 'react';
import { personalInfo } from '@/data';

const Footer = () => {
  return (
    <footer style={{ background: '#000', padding: '5rem 0', borderTop: '1px solid #1a1a1a', textAlign: 'center' }}>
      <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem', alignItems: 'center' }}>
        <h2 style={{ fontSize: '16px', color: '#fff' }}>{personalInfo.name}</h2>
        <p style={{ fontSize: '16px', color: '#3f3f46' }}>
          Full-Stack Developer
        </p>
        <p style={{ fontSize: '15px', color: '#3f3f46' }}>
          © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { projects } from '@/data';

const Projects = () => {
  return (
    <section id="projects" style={{ padding: '8rem 0', borderTop: '1px solid #1a1a1a' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1rem' }}>Featured Projects</h2>
          <p style={{ color: 'var(--secondary)', fontSize: '14px', maxWidth: '500px', margin: '0 auto' }}>
            A selection of projects that demonstrate my expertise in full-stack development and DevOps.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
        }}>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              style={{ background: '#000', border: '1px solid #111', borderRadius: '12px', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
            >
              <div style={{ width: '100%', aspectRatio: '16/9', overflow: 'hidden', borderBottom: '1px solid #111' }}>
                <img
                  src={project.image}
                  alt={project.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>

              <div style={{ padding: '1.5rem', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                  <h3 style={{ fontSize: '18px', fontWeight: 800 }}>{project.title}</h3>
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <a href={project.codeLink} style={{ color: 'var(--secondary)' }}><Github size={18} /></a>
                    <a href={project.demoLink} style={{ color: 'var(--secondary)' }}><ExternalLink size={18} /></a>
                  </div>
                </div>

                <p style={{ color: 'var(--secondary)', fontSize: '14px', marginBottom: '1.5rem', lineHeight: 1.6, flexGrow: 1 }}>
                  {project.description}
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {project.technologies.map((tech, i) => (
                    <span key={i} style={{ fontSize: '10px', fontWeight: 800, textTransform: 'uppercase', color: '#555', background: '#111', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

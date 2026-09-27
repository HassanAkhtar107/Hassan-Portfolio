"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, X, CheckCircle2, Briefcase, Layers } from 'lucide-react';
import { projects } from '@/data';
import ProjectDetailModal from './ProjectDetailModel';

/*  Projects Section   */
const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <>
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
                style={{
                  background: '#000', border: '1px solid #111', borderRadius: '12px',
                  overflow: 'hidden', display: 'flex', flexDirection: 'column',
                  transition: 'border-color 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = '#222'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = '#111'; }}
              >
                <div style={{ width: '100%', aspectRatio: '16/9', overflow: 'hidden', borderBottom: '1px solid #111' }}>
                  <img
                    src={project.image}
                    alt={project.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease' }}
                    onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.05)'; }}
                    onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; }}
                  />
                </div>

                <div style={{ padding: '1.5rem', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                  {/* <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}> */}
                  <h3 style={{ fontSize: '18px', fontWeight: 800, marginBottom: '1rem' }}>{project.title}</h3>
                  {/* </div> */}

                  <p style={{ color: 'var(--secondary)', fontSize: '14px', marginBottom: '1.25rem', lineHeight: 1.6, flexGrow: 1 }}>
                    {project.description}
                  </p>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.25rem' }}>
                    {project.technologies.map((tech, i) => (
                      <span key={i} style={{ fontSize: '10px', fontWeight: 800, textTransform: 'uppercase', color: '#555', background: '#111', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Details Button */}
                  <button
                    onClick={() => setSelectedProject(project)}
                    style={{
                      width: '100%',
                      padding: '0.6rem 1rem',
                      background: 'transparent',
                      border: '1px solid #222',
                      borderRadius: '8px',
                      color: '#a1a1aa',
                      fontSize: '13px',
                      fontWeight: 600,
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.4rem',
                      transition: 'all 0.2s',
                      letterSpacing: '0.03em',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.background = 'rgba(167,139,250,0.08)';
                      e.currentTarget.style.borderColor = 'rgba(167,139,250,0.4)';
                      e.currentTarget.style.color = '#a78bfa';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.background = 'transparent';
                      e.currentTarget.style.borderColor = '#222';
                      e.currentTarget.style.color = '#a1a1aa';
                    }}
                  >
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <line x1="12" y1="16" x2="12" y2="12" />
                      <line x1="12" y1="8" x2="12.01" y2="8" />
                    </svg>
                    View Details
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedProject && (
        <ProjectDetailModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </>
  );
};

export default Projects;

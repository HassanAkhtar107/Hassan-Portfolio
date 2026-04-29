"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';
import { experience } from '@/data';

const Experience = () => {
  return (
    <section id="experience" style={{ padding: '8rem 0', borderTop: '1px solid #1a1a1a' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1rem' }}>Experience</h2>
          <p style={{ color: 'var(--secondary)', fontSize: '14px', maxWidth: '500px', margin: '0 auto' }}>
            A journey through my professional career in software engineering.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '800px', margin: '0 auto' }}>
          {experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              style={{ background: '#000', border: '1px solid #111', borderRadius: '12px', padding: '1.5rem' }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                <div>
                  <h3 style={{ fontSize: '18px', fontWeight: 800, marginBottom: '0.25rem' }}>{exp.title}</h3>
                  <div style={{ fontSize: '14px', color: 'var(--secondary)', fontWeight: 500 }}>{exp.company}</div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: '11px', fontWeight: 700, color: 'var(--secondary)', textTransform: 'uppercase', marginBottom: '0.25rem', display: 'flex', alignItems: 'center', gap: '0.4rem', justifyContent: 'flex-end' }}>
                    <Calendar size={12} /> {exp.period}
                  </div>
                  <div style={{ fontSize: '11px', fontWeight: 500, color: '#555', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '0.4rem', justifyContent: 'flex-end' }}>
                    <MapPin size={12} /> {exp.location}
                  </div>
                </div>
              </div>

              <p style={{ fontSize: '14px', color: 'var(--secondary)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                {exp.description}
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {exp.technologies.map((tech, i) => (
                  <span key={i} style={{ fontSize: '10px', fontWeight: 700, textTransform: 'uppercase', color: '#666', border: '1px solid #222', padding: '0.15rem 0.5rem', borderRadius: '4px' }}>
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

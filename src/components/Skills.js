"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Code, Layers, Palette, Settings } from 'lucide-react';
import { skills } from '@/data';

const iconMap = {
  code: <Code size={18} />,
  layers: <Layers size={18} />,
  palette: <Palette size={18} />,
  settings: <Settings size={18} />
};

const Skills = () => {
  return (
    <section id="skills" style={{ padding: '8rem 0', borderTop: '1px solid #1a1a1a' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1rem' }}>Technical Skills</h2>
          <p style={{ color: 'var(--secondary)', fontSize: '14px', maxWidth: '500px', margin: '0 auto' }}>
            Comprehensive expertise across modern development stack with focus on scalable web applications.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
          {skills.map((skillGroup, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              style={{ background: '#000', border: '1px solid #111', borderRadius: '12px', padding: '1.5rem' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                <div style={{ width: '32px', height: '32px', borderRadius: '6px', background: '#111', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
                  {iconMap[skillGroup.icon]}
                </div>
                <h3 style={{ fontSize: '14px', fontWeight: 700 }}>{skillGroup.category}</h3>
              </div>
              
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {skillGroup.items.map((skill, i) => (
                  <span key={i} className="badge">
                    {skill}
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

export default Skills;

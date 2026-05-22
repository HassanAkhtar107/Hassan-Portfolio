"use client";
import { motion } from 'framer-motion';
import { Download, Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '@/data';

const Hero = () => {
  return (
    <section id="home" className="section-padding" style={{ minHeight: '90vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 2fr', gap: '4rem', alignItems: 'center', maxWidth: '1100px', margin: '0 auto', padding: '0 2rem' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p style={{ fontSize: '50px' }}>Hello, I'm {personalInfo.name} <br /></p>
          <br />
          <p className="text-secondary" style={{ marginBottom: '10px', maxWidth: '480px', fontSize: '20px', lineHeight: '1.5' }}>{personalInfo.description}</p>
          <p className="text-secondary" style={{ marginBottom: '40px', maxWidth: '480px', fontSize: '16px', lineHeight: '1.5' }}>{personalInfo.description1}</p>

          <div style={{ display: 'flex', gap: '16px', marginBottom: '48px' }}>
            <a href={personalInfo.resumeUrl} className="btn btn-primary" download="Muhammad_Hassan_Akhtar_CV.pdf">
              <Download size={18} />
              Download Resume
            </a>
            <a href="#projects" className="btn btn-outline">
              View My Work
            </a>
          </div>

          <div style={{ display: 'flex', gap: '12px' }}>
            {[
              { icon: <Github size={20} />, href: personalInfo.github },
              { icon: <Linkedin size={20} />, href: personalInfo.linkedin },
            ].map((social, i) => (
              <a
                key={i}
                href={social.href}
                style={{
                  width: '35px',
                  height: '35px',
                  borderRadius: '50%',
                  border: '2px solid var(--border)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  transition: 'all 0.2s',
                }}
                onMouseOver={(e) => { e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = '#555'; }}
                onMouseOut={(e) => { e.currentTarget.style.color = 'var(--secondary)'; e.currentTarget.style.borderColor = 'var(--border)'; }}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{ display: 'flex', justifyContent: 'flex-end', position: 'relative' }}
        >
          <div style={{
            width: '350px',
            height: '350px',
            borderRadius: '50%',
            overflow: 'hidden',
            border: '4px solid var(--border)',
            boxShadow: '0 20px 40px rgba(25, 24, 24, 0.3)'
          }}>
            <img
              src="/images/Profile.jpg"
              alt={personalInfo.name}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
        </motion.div>
      </div>

      <div className="container" style={{ marginTop: '50px', display: 'flex', gap: '64px', }}>
        {personalInfo.stats.map((stat, i) => (
          <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <div style={{ fontSize: '25px', fontWeight: 400, color: '#fff', letterSpacing: '-0.02em' }}>{stat.value}</div>
            <div style={{ fontSize: '10px', fontWeight: 400, color: 'var(--secondary)', textTransform: 'uppercase', letterSpacing: '0.2em' }}>{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;

"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, X, CheckCircle2, Briefcase, Layers } from 'lucide-react';
import { projects } from '@/data';

const ProjectDetailModal = ({ project, onClose }) => {
    // Prevent body scroll while modal is open
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => { document.body.style.overflow = ''; };
    }, []);

    return (
        <AnimatePresence>
            {/* Backdrop */}
            <motion.div
                key="backdrop"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                onClick={onClose}
                style={{
                    position: 'fixed', inset: 0, zIndex: 1000,
                    background: 'rgba(0,0,0,0.85)',
                    backdropFilter: 'blur(6px)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    padding: '1.5rem',
                }}
            >
                {/* Modal Card */}
                <motion.div
                    key="modal"
                    initial={{ opacity: 0, scale: 0.93, y: 30 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.93, y: 30 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    onClick={(e) => e.stopPropagation()}
                    className="hide-scrollbar"
                    style={{
                        background: 'linear-gradient(135deg, #0f0f11 0%, #111115 100%)',
                        border: '1px solid #222228',
                        borderRadius: '20px',
                        width: '100%',
                        maxWidth: '680px',
                        maxHeight: '88vh',
                        overflowY: 'auto',
                        position: 'relative',
                        boxShadow: '0 40px 80px -20px rgba(0,0,0,0.9), 0 0 0 1px rgba(255,255,255,0.04)',
                    }}
                >
                    {/* Hero Image */}
                    <div style={{ position: 'relative', width: '100%', aspectRatio: '16/8', overflow: 'hidden', borderRadius: '20px 20px 0 0' }}>
                        <img
                            src={project.image}
                            alt={project.title}
                            style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.7)' }}
                        />
                        {/* Gradient overlay */}
                        <div style={{
                            position: 'absolute', inset: 0,
                            background: 'linear-gradient(to bottom, transparent 30%, #0f0f11 100%)',
                        }} />
                        {/* Title over image */}
                        <div style={{ position: 'absolute', bottom: '1.25rem', left: '1.75rem', right: '3.5rem' }}>
                            <h2 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#fff', lineHeight: 1.2, marginBottom: '0.4rem' }}>
                                {project.title}
                            </h2>
                            {project.role && (
                                <span style={{
                                    display: 'inline-flex', alignItems: 'center', gap: '0.35rem',
                                    fontSize: '11px', fontWeight: 700, textTransform: 'uppercase',
                                    letterSpacing: '0.08em', color: '#a78bfa',
                                    background: 'rgba(167,139,250,0.12)', border: '1px solid rgba(167,139,250,0.25)',
                                    padding: '0.25rem 0.65rem', borderRadius: '99px',
                                }}>
                                    <Briefcase size={10} /> {project.role}
                                </span>
                            )}
                        </div>
                        {/* Close button */}
                        <button
                            onClick={onClose}
                            style={{
                                position: 'absolute', top: '1rem', right: '1rem',
                                background: 'rgba(0,0,0,0.6)', border: '1px solid rgba(255,255,255,0.1)',
                                borderRadius: '50%', width: '36px', height: '36px',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                color: '#fff', cursor: 'pointer', transition: 'all 0.2s',
                                backdropFilter: 'blur(4px)',
                            }}
                            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.15)'; }}
                            onMouseLeave={e => { e.currentTarget.style.background = 'rgba(0,0,0,0.6)'; }}
                        >
                            <X size={16} />
                        </button>
                    </div>

                    {/* Body */}
                    <div style={{ padding: '1.75rem' }}>

                        {/* ── About This Project ───────────────────── */}
                        <div style={{ marginBottom: '1.5rem' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="12" cy="12" r="10" /><line x1="12" y1="16" x2="12" y2="12" /><line x1="12" y1="8" x2="12.01" y2="8" />
                                </svg>
                                <span style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#a78bfa' }}>
                                    About This Project
                                </span>
                            </div>
                            <p style={{ color: '#c4c4c8', fontSize: '14.5px', lineHeight: 1.8, margin: 0 }}>
                                {project.detailDescription}
                            </p>
                        </div>

                        {/* Tech Stack */}
                        <div style={{ marginBottom: '1.75rem' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.85rem' }}>
                                <Layers size={14} color="#a78bfa" />
                                <span style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#a78bfa' }}>
                                    Tech Stack
                                </span>
                            </div>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
                                {project.technologies.map((tech, i) => (
                                    <span key={i} style={{
                                        fontSize: '11px', fontWeight: 700, textTransform: 'uppercase',
                                        color: '#d4d4d8', background: 'rgba(255,255,255,0.05)',
                                        border: '1px solid rgba(255,255,255,0.08)',
                                        padding: '0.3rem 0.7rem', borderRadius: '6px',
                                    }}>
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Divider */}
                        <div style={{ height: '1px', background: 'linear-gradient(to right, transparent, #222228, transparent)', marginBottom: '1.75rem' }} />

                        {/* My Contributions */}
                        {project.contribution && (
                            <div style={{ marginBottom: '1.75rem' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                                    <CheckCircle2 size={14} color="#34d399" />
                                    <span style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#34d399' }}>
                                        My Contributions
                                    </span>
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                    {project.contribution.map((point, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.15 + i * 0.07 }}
                                            style={{
                                                display: 'flex', gap: '0.85rem', alignItems: 'flex-start',
                                                background: 'rgba(52,211,153,0.04)',
                                                border: '1px solid rgba(52,211,153,0.1)',
                                                borderRadius: '10px', padding: '0.85rem 1rem',
                                            }}
                                        >
                                            <div style={{
                                                width: '6px', height: '6px', borderRadius: '50%',
                                                background: '#34d399', marginTop: '6px', flexShrink: 0,
                                            }} />
                                            <p style={{ fontSize: '13.5px', color: '#d4d4d8', lineHeight: 1.6 }}>{point}</p>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Action Buttons */}
                        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                            {project.demoLink !== '#' && (
                                <a
                                    href={project.demoLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                                        padding: '0.65rem 1.25rem',
                                        background: 'linear-gradient(135deg, #7c3aed, #6d28d9)',
                                        color: '#fff', borderRadius: '10px',
                                        fontSize: '13px', fontWeight: 600, textDecoration: 'none',
                                        border: '1px solid rgba(167,139,250,0.3)',
                                        transition: 'all 0.2s',
                                        boxShadow: '0 4px 14px -4px rgba(124,58,237,0.5)',
                                    }}
                                    onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 20px -4px rgba(124,58,237,0.6)'; }}
                                    onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 4px 14px -4px rgba(124,58,237,0.5)'; }}
                                >
                                    <ExternalLink size={14} /> Live Demo
                                </a>
                            )}
                            {project.codeLink !== '#' && (
                                <a
                                    href={project.codeLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                                        padding: '0.65rem 1.25rem',
                                        background: 'transparent', color: '#a1a1aa',
                                        border: '1px solid #27272a', borderRadius: '10px',
                                        fontSize: '13px', fontWeight: 600, textDecoration: 'none',
                                        transition: 'all 0.2s',
                                    }}
                                    onMouseEnter={e => { e.currentTarget.style.borderColor = '#3f3f46'; e.currentTarget.style.color = '#fff'; }}
                                    onMouseLeave={e => { e.currentTarget.style.borderColor = '#27272a'; e.currentTarget.style.color = '#a1a1aa'; }}
                                >
                                    <Github size={14} /> Source Code
                                </a>
                            )}
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default ProjectDetailModal;

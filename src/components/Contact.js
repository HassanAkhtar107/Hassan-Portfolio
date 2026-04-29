"use client";
import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { personalInfo } from '@/data';

const Contact = () => {
  const [result, setResult] = React.useState("");
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "b113dba1-cdcd-4b4e-aa7a-8debd3e5737b");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Message sent successfully! I'll get back to you soon.");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.log("Error", error);
      setResult("Failed to send message. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" style={{ padding: '8rem 0', borderTop: '1px solid #1a1a1a', background: '#000' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '1rem', letterSpacing: '-0.02em' }}>Let's Work Together</h2>
          <p style={{ color: 'var(--secondary)', fontSize: '16px', maxWidth: '600px', textAlign: 'center', margin: '0 auto' }}>
            Ready to bring your next project to life? Let's discuss how my expertise in full-stack development can help achieve your goals.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'start' }}>
          {/* Left Column: Contact Info Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {[
              { icon: <Mail size={20} />, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
              { icon: <Phone size={20} />, label: 'Phone', value: personalInfo.phone, href: `tel:${personalInfo.phone}` },
              { icon: <MapPin size={20} />, label: 'Location', value: personalInfo.location, href: '#' }
            ].map((item, i) => (
              <a
                key={i}
                href={item.href}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1.5rem',
                  background: '#111',
                  border: '1px solid #27272a',
                  padding: '1.5rem',
                  borderRadius: '16px',
                  textDecoration: 'none',
                  transition: 'all 0.2s'
                }}
              >
                <div style={{ color: 'var(--secondary)' }}>
                  {item.icon}
                </div>
                <div>
                  <div style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', color: '#71717a', marginBottom: '4px', letterSpacing: '0.05em' }}>{item.label}</div>
                  <div style={{ fontSize: '15px', fontWeight: 600, color: '#fff' }}>{item.value}</div>
                </div>
              </a>
            ))}
          </div>

          {/* Right Column: Contact Form */}
          <div style={{ background: '#111', border: '1px solid #27272a', padding: '2rem', borderRadius: '16px' }}>
            <h3 style={{ fontSize: '14px', fontWeight: 700, textTransform: 'uppercase', color: '#fff', marginBottom: '2rem', letterSpacing: '0.05em' }}>Send a Message</h3>
            <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }} onSubmit={onSubmit}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label style={{ fontSize: '12px', fontWeight: 600, color: '#a1a1aa' }}>Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Your Name"
                    style={{ background: '#18181b', border: '1px solid #27272a', borderRadius: '8px', padding: '0.8rem 1rem', color: '#fff', outline: 'none', fontSize: '14px' }}
                  />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label style={{ fontSize: '12px', fontWeight: 600, color: '#a1a1aa' }}>Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="your@email.com"
                    style={{ background: '#18181b', border: '1px solid #27272a', borderRadius: '8px', padding: '0.8rem 1rem', color: '#fff', outline: 'none', fontSize: '14px' }}
                  />
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label style={{ fontSize: '12px', fontWeight: 600, color: '#a1a1aa' }}>Message</label>
                <textarea
                  rows={5}
                  name="message"
                  required
                  placeholder="How can I help you?"
                  style={{ background: '#18181b', border: '1px solid #27272a', borderRadius: '8px', padding: '0.8rem 1rem', color: '#fff', outline: 'none', fontSize: '14px', resize: 'none' }}
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                style={{
                  background: isSubmitting ? '#a1a1aa' : '#fff',
                  color: '#000',
                  padding: '1rem',
                  borderRadius: '8px',
                  fontWeight: 700,
                  fontSize: '15px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.75rem',
                  marginTop: '1rem',
                  border: 'none',
                  cursor: isSubmitting ? 'not-allowed' : 'pointer',
                  opacity: isSubmitting ? 0.7 : 1
                }}
              >
                <Send size={18} />
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>

              {result && (
                <p style={{
                  marginTop: '1rem',
                  fontSize: '14px',
                  color: result.includes('successfully') ? '#4ade80' : '#f87171',
                  textAlign: 'center'
                }}>
                  {result}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

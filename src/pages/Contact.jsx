import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div style={{ backgroundColor: 'white' }}>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content text-center">
            <h1 className="hero-title">Contact Us</h1>
            <p className="hero-subtitle">
              Get in touch with us for bookings, inquiries, or any assistance you need
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section">
        <div className="container">
          <div className="grid grid-2" style={{ gap: '3rem' }}>
            {/* Contact Information */}
            <div>
              <h2 style={{ fontSize: '2rem', fontWeight: '800', color: 'var(--gray-900)', marginBottom: '2rem' }}>
                Get In Touch
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <Phone style={{ height: '1.5rem', width: '1.5rem', color: 'var(--primary-600)', marginTop: '0.25rem' }} />
                  <div>
                    <h3 style={{ fontWeight: '600', color: 'var(--gray-900)', marginBottom: '0.25rem' }}>Phone</h3>
                    <p style={{ color: 'var(--gray-600)', marginBottom: '0.25rem' }}>021 100 5126</p>
                    <p style={{ fontSize: '0.875rem', color: 'var(--gray-500)' }}>Call center open daily</p>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <Mail style={{ height: '1.5rem', width: '1.5rem', color: 'var(--primary-600)', marginTop: '0.25rem' }} />
                  <div>
                    <h3 style={{ fontWeight: '600', color: 'var(--gray-900)', marginBottom: '0.25rem' }}>Email</h3>
                    <p style={{ color: 'var(--gray-600)', marginBottom: '0.25rem' }}>Info@apmwesterncape.com</p>
                    <p style={{ fontSize: '0.875rem', color: 'var(--gray-500)' }}>We respond within 10 minutes</p>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <MapPin style={{ height: '1.5rem', width: '1.5rem', color: 'var(--primary-600)', marginTop: '0.25rem' }} />
                  <div>
                    <h3 style={{ fontWeight: '600', color: 'var(--gray-900)', marginBottom: '0.25rem' }}>Head Office</h3>
                    <p style={{ color: 'var(--gray-600)', marginBottom: '0.25rem' }}>Old Marine Drive, Cape Town</p>
                    <p style={{ fontSize: '0.875rem', color: 'var(--gray-500)' }}>Main office and terminal</p>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <Clock style={{ height: '1.5rem', width: '1.5rem', color: 'var(--primary-600)', marginTop: '0.25rem' }} />
                  <div>
                    <h3 style={{ fontWeight: '600', color: 'var(--gray-900)', marginBottom: '0.25rem' }}>Operating Hours</h3>
                    <p style={{ color: 'var(--gray-600)', marginBottom: '0.25rem' }}>Monday - Sunday: 07:30 - 19:00</p>
                    <p style={{ fontSize: '0.875rem', color: 'var(--gray-500)' }}>Booking and customer service</p>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div style={{ 
                marginTop: '2rem', 
                padding: '1.5rem', 
                backgroundColor: 'var(--primary-50)', 
                borderRadius: '0.5rem' 
              }}>
                <h3 style={{ 
                  fontWeight: '600', 
                  color: 'var(--gray-900)', 
                  marginBottom: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}>
                  <MessageCircle style={{ height: '1.25rem', width: '1.25rem', color: 'var(--primary-600)' }} />
                  Quick Actions
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <a 
                    href="tel:021-100-5126" 
                    className="btn btn-primary"
                    style={{ textDecoration: 'none', textAlign: 'center' }}
                  >
                    Call Now for Bookings
                  </a>
                  <a 
                    href="mailto:Info@apmwesterncape.com"
                    className="btn btn-outline"
                    style={{ textDecoration: 'none', textAlign: 'center' }}
                  >
                    Send Email
                  </a>
                </div>
              </div>

              {/* Office Locations */}
              <div style={{ 
                marginTop: '2rem', 
                padding: '1.5rem', 
                backgroundColor: 'var(--gray-50)', 
                borderRadius: '0.5rem' 
              }}>
                <h3 style={{ 
                  fontWeight: '600', 
                  color: 'var(--gray-900)', 
                  marginBottom: '1rem'
                }}>
                  Our Office Locations
                </h3>
                <div style={{ fontSize: '0.875rem', color: 'var(--gray-600)', lineHeight: '1.6' }}>
                  <p><strong>Cape Town:</strong> Old Marine Drive</p>
                  <p><strong>Queenstown:</strong> Queenstown Station</p>
                  <p><strong>East London:</strong> East London Station</p>
                  <p><strong>Port Elizabeth:</strong> Port Elizabeth Station</p>
                  <p><strong>King William's Town:</strong> King William's Town Station</p>
                  <p><strong>Mthatha:</strong> Mthatha Station</p>
                  <p><strong>Johannesburg:</strong> 8Park Station</p>
                </div>
                <a 
                  href="/booking#offices"
                  className="btn btn-outline btn-small"
                  style={{ textDecoration: 'none', marginTop: '1rem', display: 'inline-block' }}
                >
                  View All Offices
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 style={{ fontSize: '2rem', fontWeight: '800', color: 'var(--gray-900)', marginBottom: '2rem' }}>
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div className="grid grid-2" style={{ gap: '1.5rem' }}>
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="Your full name"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email" className="form-label">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                <div className="grid grid-2" style={{ gap: '1.5rem' }}>
                  <div className="form-group">
                    <label htmlFor="phone" className="form-label">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="Your phone number"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="subject" className="form-label">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="form-select"
                    >
                      <option value="">Select a subject</option>
                      <option value="booking">Booking Inquiry</option>
                      <option value="schedule">Schedule Information</option>
                      <option value="complaint">Complaint</option>
                      <option value="compliment">Compliment</option>
                      <option value="lost-found">Lost & Found</option>
                      <option value="group-booking">Group Booking</option>
                      <option value="refund">Refund Request</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="message" className="form-label">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="form-textarea"
                    placeholder="Please provide details about your inquiry..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary btn-large"
                  style={{ 
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem'
                  }}
                >
                  <Send size={20} />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Contact Information */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 style={{ fontSize: '2.5rem', fontWeight: '800', color: 'var(--gray-900)', marginBottom: '1rem' }}>
              More Ways to Reach Us
            </h2>
            <p style={{ fontSize: '1.25rem', color: 'var(--gray-600)' }}>
              Choose the method that works best for you
            </p>
          </div>
          
          <div className="grid grid-3">
            <div className="card text-center">
              <Phone style={{ height: '3rem', width: '3rem', color: 'var(--primary-600)', margin: '0 auto 1rem' }} />
              <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '1rem' }}>Call Center</h3>
              <p style={{ color: 'var(--gray-600)', marginBottom: '1rem' }}>
                Speak directly with our customer service team for immediate assistance
              </p>
              <a href="tel:021-100-5126" className="btn btn-outline">
                021 100 5126
              </a>
            </div>
            
            <div className="card text-center">
              <Mail style={{ height: '3rem', width: '3rem', color: 'var(--primary-600)', margin: '0 auto 1rem' }} />
              <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '1rem' }}>Email Support</h3>
              <p style={{ color: 'var(--gray-600)', marginBottom: '1rem' }}>
                Send us an email and we'll respond within 24 hours
              </p>
              <a href="mailto:Info@apmwesterncape.com" className="btn btn-outline">
                Send Email
              </a>
            </div>
            
            <div className="card text-center">
              <MapPin style={{ height: '3rem', width: '3rem', color: 'var(--primary-600)', margin: '0 auto 1rem' }} />
              <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '1rem' }}>Visit Our Offices</h3>
              <p style={{ color: 'var(--gray-600)', marginBottom: '1rem' }}>
                Get face-to-face assistance at any of our 7 office locations
              </p>
              <a href="/booking#offices" className="btn btn-outline">
                Find Offices
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="section" style={{ backgroundColor: 'var(--primary-900)', color: 'white' }}>
        <div className="container text-center">
          <h2 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '1rem' }}>
            Need Immediate Assistance?
          </h2>
          <p style={{ fontSize: '1.125rem', color: 'var(--primary-200)', marginBottom: '2rem' }}>
            Our team is available daily from 05:00 to 20:00
          </p>
          <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href="tel:021-100-5126"
              className="btn btn-secondary"
              style={{ textDecoration: 'none' }}
            >
              <Phone size={20} />
              <span>Call Now: 021 100 5126</span>
            </a>
            <a
              href="mailto:Info@apmwesterncape.com"
              className="btn btn-outline"
              style={{ color: 'white', borderColor: 'white', textDecoration: 'none' }}
            >
              <Mail size={20} />
              <span>Email Us</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
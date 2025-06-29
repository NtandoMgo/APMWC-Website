import { Link } from 'react-router-dom';
import { Bus, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Clock } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content grid grid-4">
          {/* Company Info */}
          <div style={{ gridColumn: 'span 2' }}>
            <Link to="/" className="logo" style={{ marginBottom: '1rem' }}>
              <Bus style={{ height: '2rem', width: '2rem', color: 'var(--primary-400)' }} />
              <div>
                <span style={{ color: 'var(--primary-400)' }}>APM</span>
                <span style={{ color: 'var(--secondary-400)' }}>WC</span>
              </div>
            </Link>
            <p style={{ color: 'var(--gray-300)', marginBottom: '1rem', maxWidth: '400px' }}>
              African People Mover Western Cape has been connecting communities across South Africa for over a decade. 
              We provide safe, reliable, and comfortable long-distance bus services.
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <a href="#" style={{ color: 'var(--gray-400)', transition: 'color 0.3s ease' }}>
                <Facebook size={20} />
              </a>
              <a href="#" style={{ color: 'var(--gray-400)', transition: 'color 0.3s ease' }}>
                <Twitter size={20} />
              </a>
              <a href="#" style={{ color: 'var(--gray-400)', transition: 'color 0.3s ease' }}>
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h3 className="footer-title">Quick Links</h3>
            <ul style={{ listStyle: 'none' }}>
              <li><Link to="/" className="footer-link">Home</Link></li>
              <li><Link to="/about" className="footer-link">About Us</Link></li>
              <li><Link to="/routes" className="footer-link">Routes</Link></li>
              <li><Link to="/services" className="footer-link">Services</Link></li>
              <li><Link to="/fleet" className="footer-link">Our Fleet</Link></li>
              <li><Link to="/contact" className="footer-link">Contact</Link></li>
              <li><Link to="/booking" className="footer-link" style={{ color: 'var(--secondary-400)' }}>Book Now</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h3 className="footer-title">Contact Info</h3>
            <ul style={{ listStyle: 'none' }}>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', marginBottom: '0.75rem' }}>
                <Phone size={16} style={{ color: 'var(--primary-400)', marginTop: '0.25rem', flexShrink: 0 }} />
                <div>
                  <p style={{ color: 'var(--gray-300)' }}>021 100 5126</p>
                  <p style={{ fontSize: '0.875rem', color: 'var(--gray-400)' }}>Call Center</p>
                </div>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', marginBottom: '0.75rem' }}>
                <Mail size={16} style={{ color: 'var(--primary-400)', marginTop: '0.25rem', flexShrink: 0 }} />
                <div>
                  <p style={{ color: 'var(--gray-300)' }}>Info@apmwesterncape.com</p>
                  <p style={{ fontSize: '0.875rem', color: 'var(--gray-400)' }}>General Inquiries</p>
                </div>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', marginBottom: '0.75rem' }}>
                <MapPin size={16} style={{ color: 'var(--primary-400)', marginTop: '0.25rem', flexShrink: 0 }} />
                <div>
                  <p style={{ color: 'var(--gray-300)' }}>Old marine drive</p>
                  <p style={{ color: 'var(--gray-300)' }}>Cape Town, 8000</p>
                </div>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <Clock size={16} style={{ color: 'var(--primary-400)', marginTop: '0.25rem', flexShrink: 0 }} />
                <div>
                  <p style={{ color: 'var(--gray-300)' }}>Daily: 07:30 - 19:00</p>
                  <p style={{ fontSize: '0.875rem', color: 'var(--gray-400)' }}>Operating Hours</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Routes Summary */}
        {/* <div style={{ borderTop: '1px solid var(--gray-800)', marginTop: '2rem', paddingTop: '2rem' }}>
          <h3 className="footer-title">Our Routes</h3>
          <div className="grid grid-2">
            <div style={{ backgroundColor: 'var(--gray-800)', borderRadius: '0.5rem', padding: '1rem' }}>
              <h4 style={{ fontWeight: '600', color: 'var(--primary-400)', marginBottom: '0.5rem' }}>Cape Town ↔ Mthatha</h4>
              <p style={{ fontSize: '0.875rem', color: 'var(--gray-300)' }}>
                Monday, Wednesday, Friday, Sunday departures
              </p>
              <p style={{ fontSize: '0.875rem', color: 'var(--gray-400)' }}>
                Via Port Elizabeth & East London
              </p>
            </div>
            <div style={{ backgroundColor: 'var(--gray-800)', borderRadius: '0.5rem', padding: '1rem' }}>
              <h4 style={{ fontWeight: '600', color: 'var(--primary-400)', marginBottom: '0.5rem' }}>Cape Town ↔ Pretoria</h4>
              <p style={{ fontSize: '0.875rem', color: 'var(--gray-300)' }}>
                Tuesday, Thursday, Saturday departures
              </p>
              <p style={{ fontSize: '0.875rem', color: 'var(--gray-400)' }}>
                Via Kimberley, Bloemfontein & Johannesburg
              </p>
            </div>
          </div>
        </div> */}

        {/* Bottom Bar */}
        <div className="footer-bottom flex-between">
          <div style={{ fontSize: '0.875rem', color: 'var(--gray-400)' }}>
            <p>&copy; {currentYear} African People Mover Western Cape. All rights reserved.</p>
          </div>
          <div style={{ display: 'flex', gap: '1.5rem', fontSize: '0.875rem', color: 'var(--gray-400)' }}>
            <a href="#" className="footer-link">Privacy Policy</a>
            <a href="#" className="footer-link">Terms of Service</a>
            <a href="#" className="footer-link">Safety Guidelines</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
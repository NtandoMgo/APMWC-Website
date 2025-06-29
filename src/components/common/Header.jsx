import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Bus, Phone, MapPin } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Routes', href: '/routes' },
    { name: 'Services', href: '/services' },
    { name: 'Fleet', href: '/fleet' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="header">
      {/* Top contact bar */}
      <div className="header-top">
        <div className="container flex-between">
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '1rem', 
            fontSize: '0.875rem',
            flexWrap: 'wrap',
            justifyContent: 'center'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
              <Phone size={14} />
              <span>021 100 5126</span>
            </div>
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '0.25rem',
              textAlign: 'center'
            }}>
              <MapPin size={14} />
              <span style={{ 
                display: 'inline',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis'
              }}>
                <span className="mobile-hide">Cape Town • Mthatha • Queenstown • East London • King Williams Town • Port Elizabeth • JHB • PTA</span>
                <span className="mobile-show" style={{ display: 'none' }}>7 Locations Nationwide</span>
              </span>
            </div>
          </div>
          <Link 
            to="/booking" 
            className="btn btn-secondary btn-small"
          >
            Book Now
          </Link>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="header-main">
        <div className="container flex-between">
          {/* Logo */}
          <Link to="/" className="logo">
            <Bus style={{ height: '2rem', width: '2rem', color: 'var(--primary-600)' }} />
            <div>
              <span className="logo-primary">APM</span>
              <span className="logo-secondary">WC</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="nav">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`nav-link ${isActive(item.href) ? 'active' : ''}`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="mobile-menu">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="mobile-menu-btn"
              aria-label="Toggle mobile menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="mobile-nav">
            <div className="nav">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`nav-link ${isActive(item.href) ? 'active' : ''}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/booking"
                className="btn btn-secondary"
                onClick={() => setIsMenuOpen(false)}
                style={{ marginTop: '1rem' }}
              >
                Book Now
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
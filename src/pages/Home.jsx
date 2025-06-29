import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Clock, Shield, Users, Star, Bus, Phone, Mail, Award, CheckCircle } from 'lucide-react';

const Home = () => {
  const routes = [
    {
      id: 1,
      from: "Cape Town",
      to: "Mthatha", 
      duration: "12 hours",
      price: "450",
      stops: ["Port Elizabeth", "East London"],
      schedule: "Mon, Wed, Fri, Sun"
    },
    {
      id: 2,
      from: "Cape Town", 
      to: "Pretoria",
      duration: "14 hours", 
      price: "520",
      stops: ["Kimberley", "Bloemfontein", "Johannesburg"],
      schedule: "Tue, Thu, Sat"
    }
  ];

  const features = [
    {
      icon: <Shield style={{ height: '3rem', width: '3rem', color: 'var(--primary-600)' }} />,
      title: "Safe & Reliable",
      description: "Professional drivers with excellent safety records and modern, well-maintained buses"
    },
    {
      icon: <Clock style={{ height: '3rem', width: '3rem', color: 'var(--primary-600)' }} />,
      title: "On-Time Service", 
      description: "Punctual departures and arrivals you can count on with 99.5% on-time performance"
    },
    {
      icon: <Users style={{ height: '3rem', width: '3rem', color: 'var(--primary-600)' }} />,
      title: "Comfortable Journey",
      description: "Modern buses with comfortable seating, air conditioning, and onboard amenities"
    },
    {
      icon: <Star style={{ height: '3rem', width: '3rem', color: 'var(--primary-600)' }} />,
      title: "Excellent Service",
      description: "Friendly staff committed to your travel experience with 4.8/5 customer rating"
    }
  ];

  const stats = [
    { number: "11+", label: "Years of Service", icon: <Award size={24} /> },
    { number: "500K+", label: "Happy Customers", icon: <Users size={24} /> },
    { number: "99.5%", label: "On-Time Performance", icon: <Clock size={24} /> },
    { number: "4.8/5", label: "Customer Rating", icon: <Star size={24} /> }
  ];

  const testimonials = [
    {
      name: "Sarah Mthembu",
      location: "Cape Town",
      text: "APMWC has been my go-to transport for visiting family in Mthatha. Always reliable and comfortable!"
    },
    {
      name: "David Johnson", 
      location: "Johannesburg",
      text: "Excellent service from Cape Town to Pretoria. The buses are modern and the staff is very professional."
    },
    {
      name: "Nomsa Dlamini",
      location: "East London", 
      text: "Safe travels every time. I trust APMWC for all my long-distance journeys."
    }
  ];

  return (
    <div style={{ backgroundColor: 'white' }}>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content text-center">
            <h1 className="hero-title">
              Your Journey,
              <span className="text-accent"> Our Priority</span>
            </h1>
            <p className="hero-subtitle">
              Connecting Cape Town to Mthatha and Pretoria with safe, reliable, and comfortable long-distance bus services for over 8 years.
            </p>
            <div className="hero-cta">
              <Link
                to="/booking"
                className="btn btn-secondary btn-large"
                style={{ minWidth: '200px' }}
              >
                <span>Book Your Journey</span>
                <ArrowRight size={20} />
              </Link>
              <Link
                to="/routes"
                className="btn btn-outline btn-large"
                style={{ color: 'white', borderColor: 'white', minWidth: '200px' }}
              >
                View Routes & Schedules
              </Link>
            </div>
            
            {/* Quick Contact */}
            <div style={{ 
              marginTop: '3rem', 
              display: 'flex', 
              justifyContent: 'center', 
              gap: '2rem', 
              flexWrap: 'wrap',
              fontSize: '1.125rem'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary-100)' }}>
                <Phone size={20} />
                <span>021 100 5126</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary-100)' }}>
                <Mail size={20} />
                <span>Info@apmwesterncape.com</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section style={{ backgroundColor: 'white', padding: '3rem 0', marginTop: '-2rem', position: 'relative', zIndex: 10 }}>
        <div className="container">
          <div style={{
            background: 'white',
            borderRadius: '1rem',
            padding: '2rem',
            boxShadow: 'var(--shadow-xl)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '2rem'
          }}>
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'center', 
                  marginBottom: '0.5rem',
                  color: 'var(--primary-600)'
                }}>
                  {stat.icon}
                </div>
                <div style={{ fontSize: '2.5rem', fontWeight: '800', color: 'var(--primary-600)', marginBottom: '0.25rem' }}>
                  {stat.number}
                </div>
                <div style={{ color: 'var(--gray-600)', fontWeight: '500' }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Routes Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 style={{ fontSize: '3rem', fontWeight: '800', color: 'var(--gray-900)', marginBottom: '1rem' }}>
              Our Routes
            </h2>
            <p style={{ fontSize: '1.25rem', color: 'var(--gray-600)', maxWidth: '600px', margin: '0 auto' }}>
              Connecting major cities across South Africa with modern, comfortable buses
            </p>
          </div>
          
          <div className="grid grid-2" style={{ maxWidth: '900px', margin: '0 auto' }}>
            {routes.map((route) => (
              <div key={route.id} className="card" style={{ position: 'relative', overflow: 'hidden' }}>
                {/* Route Header */}
                <div style={{ 
                  background: 'linear-gradient(135deg, var(--primary-600), var(--primary-700))',
                  color: 'white',
                  padding: '1.5rem',
                  margin: '-1.5rem -1.5rem 1.5rem -1.5rem',
                  borderRadius: '0.75rem 0.75rem 0 0'
                }}>
                  <div className="flex-between">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                      <Bus style={{ height: '2rem', width: '2rem' }} />
                      <div>
                        <h3 style={{ fontSize: '1.5rem', fontWeight: '700', margin: 0 }}>
                          {route.from} → {route.to}
                        </h3>
                        <div style={{ display: 'flex', alignItems: 'center', marginTop: '0.25rem', opacity: 0.9 }}>
                          <Clock size={16} style={{ marginRight: '0.25rem' }} />
                          <span>{route.duration}</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div style={{ fontSize: '2.5rem', fontWeight: '800' }}>
                        R{route.price}
                      </div>
                      <div style={{ fontSize: '0.875rem', opacity: 0.9 }}>per person</div>
                    </div>
                  </div>
                </div>
                
                {/* Route Details */}
                <div style={{ marginBottom: '1.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', color: 'var(--gray-600)', marginBottom: '0.75rem' }}>
                    <MapPin size={18} style={{ marginRight: '0.5rem', color: 'var(--primary-600)' }} />
                    <span style={{ fontWeight: '600' }}>Route Stops:</span>
                  </div>
                  <div style={{ color: 'var(--gray-700)', marginBottom: '1rem' }}>
                    {route.stops.join(' • ')}
                  </div>
                  
                  <div style={{ display: 'flex', alignItems: 'center', color: 'var(--gray-600)', marginBottom: '0.5rem' }}>
                    <Clock size={18} style={{ marginRight: '0.5rem', color: 'var(--primary-600)' }} />
                    <span style={{ fontWeight: '600' }}>Schedule:</span>
                  </div>
                  <div style={{ color: 'var(--gray-700)', marginBottom: '1.5rem' }}>
                    {route.schedule}
                  </div>
                </div>
                
                <Link
                  to="/booking"
                  className="btn btn-primary"
                  style={{ width: '100%' }}
                >
                  Book This Route
                </Link>
              </div>
            ))}
          </div>
          
          <div className="text-center" style={{ marginTop: '3rem' }}>
            <Link to="/routes" className="btn btn-outline btn-large">
              View All Routes & Schedules
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 style={{ fontSize: '3rem', fontWeight: '800', color: 'var(--gray-900)', marginBottom: '1rem' }}>
              Why Choose APMWC?
            </h2>
            <p style={{ fontSize: '1.25rem', color: 'var(--gray-600)', maxWidth: '600px', margin: '0 auto' }}>
              Your comfort and safety are our top priorities every step of the journey
            </p>
          </div>
          
          <div className="grid grid-2" style={{ gap: '3rem' }}>
            {features.map((feature, index) => (
              <div key={index} style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                <div style={{ 
                  backgroundColor: 'var(--primary-50)', 
                  borderRadius: '1rem', 
                  padding: '1rem',
                  flexShrink: 0
                }}>
                  {feature.icon}
                </div>
                <div>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--gray-900)', marginBottom: '0.75rem' }}>
                    {feature.title}
                  </h3>
                  <p style={{ color: 'var(--gray-600)', fontSize: '1.125rem', lineHeight: 1.6 }}>
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 style={{ fontSize: '3rem', fontWeight: '800', color: 'var(--gray-900)', marginBottom: '1rem' }}>
              What We Offer
            </h2>
            <p style={{ fontSize: '1.25rem', color: 'var(--gray-600)' }}>
              Comprehensive services for your travel needs
            </p>
          </div>
          
          <div className="grid grid-3">
            <div className="card text-center">
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🚌</div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1rem' }}>Modern Fleet</h3>
              <p style={{ color: 'var(--gray-600)' }}>
                Latest model buses with air conditioning, reclining seats, and entertainment systems
              </p>
            </div>
            
            <div className="card text-center">
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📱</div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1rem' }}>Easy Booking</h3>
              <p style={{ color: 'var(--gray-600)' }}>
                Book online, by phone, or at our terminal with flexible payment options
              </p>
            </div>
            
            <div className="card text-center">
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎧</div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1rem' }}>24/7 Support</h3>
              <p style={{ color: 'var(--gray-600)' }}>
                Round-the-clock customer support for any assistance you need
              </p>
            </div>
          </div>
          
          <div className="text-center" style={{ marginTop: '3rem' }}>
            <Link to="/services" className="btn btn-primary btn-large">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 style={{ fontSize: '3rem', fontWeight: '800', color: 'var(--gray-900)', marginBottom: '1rem' }}>
              What Our Customers Say
            </h2>
            <p style={{ fontSize: '1.25rem', color: 'var(--gray-600)' }}>
              Real experiences from real passengers
            </p>
          </div>
          
          <div className="grid grid-3">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card" style={{ position: 'relative' }}>
                <div style={{ 
                  fontSize: '4rem', 
                  color: 'var(--primary-200)', 
                  position: 'absolute',
                  top: '-1rem',
                  left: '1rem',
                  lineHeight: 1,
                  fontFamily: 'serif'
                }}>
                  "
                </div>
                <p style={{ 
                  color: 'var(--gray-700)', 
                  fontSize: '1.125rem', 
                  marginBottom: '1.5rem',
                  paddingTop: '1rem',
                  fontStyle: 'italic'
                }}>
                  {testimonial.text}
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div style={{
                    width: '3rem',
                    height: '3rem',
                    borderRadius: '50%',
                    backgroundColor: 'var(--primary-100)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.25rem',
                    fontWeight: '600',
                    color: 'var(--primary-600)'
                  }}>
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div style={{ fontWeight: '600', color: 'var(--gray-900)' }}>
                      {testimonial.name}
                    </div>
                    <div style={{ color: 'var(--gray-600)', fontSize: '0.875rem' }}>
                      {testimonial.location}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section" style={{ backgroundColor: 'var(--primary-900)', color: 'white' }}>
        <div className="container text-center">
          <h2 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '1rem' }}>
            Ready to Travel?
          </h2>
          <p style={{ fontSize: '1.5rem', color: 'var(--primary-200)', marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem' }}>
            Book your seat today and experience comfortable, reliable long-distance travel across South Africa
          </p>
          
          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '3rem' }}>
            <Link
              to="/booking"
              className="btn btn-secondary btn-large"
              style={{ minWidth: '200px' }}
            >
              Book Your Journey
            </Link>
            <Link
              to="/contact"
              className="btn btn-outline btn-large"
              style={{ color: 'white', borderColor: 'white', minWidth: '200px' }}
            >
              Contact Us
            </Link>
          </div>
          
          {/* Quick Benefits */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
            gap: '2rem',
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
              <CheckCircle size={20} style={{ color: 'var(--secondary-400)' }} />
              <span>Instant Confirmation</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
              <CheckCircle size={20} style={{ color: 'var(--secondary-400)' }} />
              <span>Flexible Cancellation</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
              <CheckCircle size={20} style={{ color: 'var(--secondary-400)' }} />
              <span>24/7 Customer Support</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
              <CheckCircle size={20} style={{ color: 'var(--secondary-400)' }} />
              <span>Safe & Reliable</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
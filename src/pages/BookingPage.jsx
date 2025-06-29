import { ExternalLink, MapPin, Phone, Clock, CreditCard, Building, Users } from 'lucide-react';

const BookingPage = () => {
  const offices = [
    {
      city: "Cape Town",
      address: "Old marine drive, Cape Town",
      phone: "021 100 5126",
      hours: "Mon-Sun: 05:00 - 20:00"
    },
    {
      city: "Queenstown", 
      address: "Queenstown station",
      phone: "021 100 5126",
      hours: "Mon-Sun: 08:00 - 18:00"
    },
    {
      city: "East London",
      address: "East London station",
      phone: "021 100 5126", 
      hours: "Mon-Sun: 08:00 - 19:00"
    },
    {
      city: "Port Elizabeth",
      address: "Port Elizabeth station",
      phone: "021 100 5126",
      hours: "Mon-Sun: 08:00 - 20:00"
    },
    {
      city: "King William's Town",
      address: "King William's Town station", 
      phone: "021 100 5126",
      hours: "Mon-Sun: 07:00 - 17:00"
    },
    {
      city: "Mthatha",
      address: "Mthatha station",
      phone: "021 100 5126",
      hours: "Mon-Sun: 09:00 - 16:00"
    },
    {
      city: "Johannesburg",
      address: "8park station, Johannesburg CBD",
      phone: "021 100 5126",
      hours: "Mon-Sun: 06:00 - 20:00"
    }
  ];

  return (
    <div style={{ backgroundColor: 'white' }}>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content text-center">
            <h1 className="hero-title">Book Your Journey</h1>
            <p className="hero-subtitle">
              Reserve your seat with APMWC through our trusted booking partners or visit one of our convenient office locations
            </p>
          </div>
        </div>
      </section>

      {/* Booking Options */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 style={{ fontSize: '2.5rem', fontWeight: '800', color: 'var(--gray-900)', marginBottom: '1rem' }}>
              How to Book
            </h2>
            <p style={{ fontSize: '1.25rem', color: 'var(--gray-600)' }}>
              Choose the most convenient booking method for you
            </p>
          </div>

          <div className="grid grid-2" style={{ gap: '3rem', maxWidth: '900px', margin: '0 auto' }}>
            {/* Online Booking */}
            <div className="card" style={{ textAlign: 'center', position: 'relative' }}>
              <div style={{ 
                background: 'linear-gradient(135deg, var(--primary-600), var(--primary-700))',
                color: 'white',
                padding: '1.5rem',
                margin: '-1.5rem -1.5rem 1.5rem -1.5rem',
                borderRadius: '0.75rem 0.75rem 0 0'
              }}>
                <CreditCard style={{ height: '3rem', width: '3rem', margin: '0 auto 1rem' }} />
                <h3 style={{ fontSize: '1.5rem', fontWeight: '700', margin: 0 }}>
                  Book Online with Computicket
                </h3>
              </div>
              
              <div style={{ marginBottom: '2rem' }}>
                <p style={{ color: 'var(--gray-600)', marginBottom: '1.5rem', fontSize: '1.125rem' }}>
                  Quick, secure, and convenient online booking through our trusted partner
                </p>
                
                <div style={{ marginBottom: '2rem' }}>
                  <h4 style={{ fontWeight: '600', marginBottom: '1rem', color: 'var(--gray-900)' }}>Benefits:</h4>
                  <ul style={{ listStyle: 'none', textAlign: 'left', maxWidth: '300px', margin: '0 auto' }}>
                    <li style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem', color: 'var(--gray-700)' }}>
                      <div style={{ width: '6px', height: '6px', backgroundColor: 'var(--primary-600)', borderRadius: '50%', marginRight: '0.75rem' }}></div>
                      Instant confirmation
                    </li>
                    <li style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem', color: 'var(--gray-700)' }}>
                      <div style={{ width: '6px', height: '6px', backgroundColor: 'var(--primary-600)', borderRadius: '50%', marginRight: '0.75rem' }}></div>
                      Secure payment options
                    </li>
                    <li style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem', color: 'var(--gray-700)' }}>
                      <div style={{ width: '6px', height: '6px', backgroundColor: 'var(--primary-600)', borderRadius: '50%', marginRight: '0.75rem' }}></div>
                      24/7 booking availability
                    </li>
                    <li style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem', color: 'var(--gray-700)' }}>
                      <div style={{ width: '6px', height: '6px', backgroundColor: 'var(--primary-600)', borderRadius: '50%', marginRight: '0.75rem' }}></div>
                      Email & SMS confirmations
                    </li>
                  </ul>
                </div>
              </div>
              
              <a
                href="https://computicket.com/travel/bus/booking"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary btn-large"
                style={{ 
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  textDecoration: 'none',
                  width: '100%',
                  justifyContent: 'center'
                }}
              >
                <span>Book on Computicket</span>
                <ExternalLink size={20} />
              </a>
            </div>

            {/* Office Booking */}
            <div className="card" style={{ textAlign: 'center' }}>
              <div style={{ 
                background: 'linear-gradient(135deg, var(--secondary-500), var(--secondary-600))',
                color: 'white',
                padding: '1.5rem',
                margin: '-1.5rem -1.5rem 1.5rem -1.5rem',
                borderRadius: '0.75rem 0.75rem 0 0'
              }}>
                <Building style={{ height: '3rem', width: '3rem', margin: '0 auto 1rem' }} />
                <h3 style={{ fontSize: '1.5rem', fontWeight: '700', margin: 0 }}>
                  Visit Our Offices
                </h3>
              </div>
              
              <div style={{ marginBottom: '2rem' }}>
                <p style={{ color: 'var(--gray-600)', marginBottom: '1.5rem', fontSize: '1.125rem' }}>
                  Personal service and assistance at any of our convenient locations
                </p>
                
                <div style={{ marginBottom: '2rem' }}>
                  <h4 style={{ fontWeight: '600', marginBottom: '1rem', color: 'var(--gray-900)' }}>Benefits:</h4>
                  <ul style={{ listStyle: 'none', textAlign: 'left', maxWidth: '300px', margin: '0 auto' }}>
                    <li style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem', color: 'var(--gray-700)' }}>
                      <div style={{ width: '6px', height: '6px', backgroundColor: 'var(--secondary-500)', borderRadius: '50%', marginRight: '0.75rem' }}></div>
                      Face-to-face assistance
                    </li>
                    <li style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem', color: 'var(--gray-700)' }}>
                      <div style={{ width: '6px', height: '6px', backgroundColor: 'var(--secondary-500)', borderRadius: '50%', marginRight: '0.75rem' }}></div>
                      Cash payment accepted
                    </li>
                    <li style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem', color: 'var(--gray-700)' }}>
                      <div style={{ width: '6px', height: '6px', backgroundColor: 'var(--secondary-500)', borderRadius: '50%', marginRight: '0.75rem' }}></div>
                      Local language support
                    </li>
                    <li style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem', color: 'var(--gray-700)' }}>
                      <div style={{ width: '6px', height: '6px', backgroundColor: 'var(--secondary-500)', borderRadius: '50%', marginRight: '0.75rem' }}></div>
                      Route advice & information
                    </li>
                  </ul>
                </div>
              </div>
              
              <a
                href="#offices"
                className="btn btn-primary btn-large"
                style={{ 
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  textDecoration: 'none',
                  width: '100%',
                  justifyContent: 'center'
                }}
              >
                <span>Find Nearest Office</span>
                <MapPin size={20} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section id="offices" className="section bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 style={{ fontSize: '2.5rem', fontWeight: '800', color: 'var(--gray-900)', marginBottom: '1rem' }}>
              Our Office Locations
            </h2>
            <p style={{ fontSize: '1.25rem', color: 'var(--gray-600)' }}>
              Visit any of our {offices.length} conveniently located offices across South Africa
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '2rem' }}>
            {offices.map((office, index) => (
              <div key={index} className="card">
                <div style={{ marginBottom: '1rem' }}>
                  <h3 style={{ 
                    fontSize: '1.5rem', 
                    fontWeight: '700', 
                    color: 'var(--primary-600)', 
                    marginBottom: '0.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}>
                    <MapPin size={20} />
                    {office.city}
                  </h3>
                </div>
                
                <div style={{ marginBottom: '1rem' }}>
                  <p style={{ color: 'var(--gray-700)', marginBottom: '0.75rem' }}>
                    <strong>Address:</strong><br />
                    {office.address}
                  </p>
                  
                  <p style={{ 
                    color: 'var(--gray-700)', 
                    marginBottom: '0.75rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}>
                    <Phone size={16} />
                    <strong>{office.phone}</strong>
                  </p>
                  
                  <p style={{ 
                    color: 'var(--gray-600)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}>
                    <Clock size={16} />
                    {office.hours}
                  </p>
                </div>
                
                <a
                  href="tel:021-100-5126"
                  className="btn btn-outline"
                  style={{ width: '100%', textAlign: 'center' }}
                >
                  Call This Office
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 style={{ fontSize: '2.5rem', fontWeight: '800', color: 'var(--gray-900)', marginBottom: '1rem' }}>
              Booking Information
            </h2>
          </div>
          
          <div className="grid grid-3">
            <div className="card text-center">
              <Users style={{ height: '3rem', width: '3rem', color: 'var(--primary-600)', margin: '0 auto 1rem' }} />
              <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '1rem' }}>Group Bookings</h3>
              <p style={{ color: 'var(--gray-600)', marginBottom: '1rem' }}>
                Special rates available for groups of 10 or more passengers
              </p>
              <a href="tel:021-100-5126" className="btn btn-outline">
                Call for Group Rates
              </a>
            </div>
            
            <div className="card text-center">
              <Clock style={{ height: '3rem', width: '3rem', color: 'var(--primary-600)', margin: '0 auto 1rem' }} />
              <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '1rem' }}>Advance Booking</h3>
              <p style={{ color: 'var(--gray-600)', marginBottom: '1rem' }}>
                Book up to 60 days in advance to secure your preferred travel dates
              </p>
              <a href="https://computicket.com/travel/bus/booking" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                Book in Advance
              </a>
            </div>
            
            <div className="card text-center">
              <Phone style={{ height: '3rem', width: '3rem', color: 'var(--primary-600)', margin: '0 auto 1rem' }} />
              <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '1rem' }}>Phone Booking</h3>
              <p style={{ color: 'var(--gray-600)', marginBottom: '1rem' }}>
                Call our customer service team for assistance with your booking
              </p>
              <a href="tel:021-100-5126" className="btn btn-outline">
                021 100 5126
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Banking Details */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="text-center mb-8">
            <h2 style={{ fontSize: '2.5rem', fontWeight: '800', color: 'var(--gray-900)', marginBottom: '1rem' }}>
              Payment Information
            </h2>
            <p style={{ fontSize: '1.25rem', color: 'var(--gray-600)' }}>
              For direct bank transfers and deposits
            </p>
          </div>
          
          <div style={{ maxWidth: '500px', margin: '0 auto' }}>
            <div className="card" style={{ textAlign: 'center' }}>
              <div style={{ 
                background: 'linear-gradient(135deg, var(--primary-600), var(--primary-700))',
                color: 'white',
                padding: '1.5rem',
                margin: '-1.5rem -1.5rem 1.5rem -1.5rem',
                borderRadius: '0.75rem 0.75rem 0 0'
              }}>
                <CreditCard style={{ height: '3rem', width: '3rem', margin: '0 auto 1rem' }} />
                <h3 style={{ fontSize: '1.5rem', fontWeight: '700', margin: 0 }}>
                  Banking Details
                </h3>
              </div>
              
              <div style={{ textAlign: 'left', marginBottom: '2rem' }}>
                <div style={{ marginBottom: '1rem', padding: '1rem', backgroundColor: 'var(--gray-50)', borderRadius: '0.5rem' }}>
                  <strong style={{ color: 'var(--gray-700)' }}>Account Name:</strong><br />
                  <span style={{ fontSize: '1.125rem', color: 'var(--gray-900)' }}>Alpha Coachliner (PTY) LTD</span>
                </div>
                
                <div style={{ marginBottom: '1rem', padding: '1rem', backgroundColor: 'var(--gray-50)', borderRadius: '0.5rem' }}>
                  <strong style={{ color: 'var(--gray-700)' }}>Account Number:</strong><br />
                  <span style={{ fontSize: '1.125rem', color: 'var(--gray-900)', fontFamily: 'monospace' }}>62845374313</span>
                </div>
                
                <div style={{ marginBottom: '1rem', padding: '1rem', backgroundColor: 'var(--gray-50)', borderRadius: '0.5rem' }}>
                  <strong style={{ color: 'var(--gray-700)' }}>Bank:</strong><br />
                  <span style={{ fontSize: '1.125rem', color: 'var(--gray-900)' }}>First National Bank (FNB)</span>
                </div>
                
                <div style={{ padding: '1rem', backgroundColor: 'var(--secondary-50)', borderRadius: '0.5rem', border: '1px solid var(--secondary-200)' }}>
                  <strong style={{ color: 'var(--secondary-800)' }}>Important:</strong><br />
                  <span style={{ fontSize: '0.875rem', color: 'var(--secondary-700)' }}>
                    Please use your cellphone number as payment reference. Email proof of payment to Info@apmwesterncape.com
                  </span>
                </div>
              </div>
              
              <a
                href="mailto:Info@apmwesterncape.com"
                className="btn btn-primary"
                style={{ width: '100%', textDecoration: 'none' }}
              >
                Send Proof of Payment
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="section" style={{ backgroundColor: 'var(--primary-900)', color: 'white' }}>
        <div className="container text-center">
          <h2 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '1rem' }}>
            Need Help with Your Booking?
          </h2>
          <p style={{ fontSize: '1.125rem', color: 'var(--primary-200)', marginBottom: '2rem' }}>
            Our customer service team is here to assist you
          </p>
          <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href="tel:021-100-5126"
              className="btn btn-secondary"
              style={{ textDecoration: 'none' }}
            >
              <Phone size={20} />
              <span>Call: 021 100 5126</span>
            </a>
            <a
              href="mailto:Info@apmwesterncape.com"
              className="btn btn-outline"
              style={{ color: 'white', borderColor: 'white', textDecoration: 'none' }}
            >
              <span>Email: Info@apmwesterncape.com</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BookingPage;
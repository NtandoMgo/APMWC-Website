import { Shield, Users, Award, Target, Heart, Zap } from 'lucide-react';
import { companyInfo } from '../data/company';

const About = () => {
  const stats = [
    { label: 'Years of Service', value: companyInfo.stats.yearsOfService, icon: Award },
    { label: 'Customers Served', value: companyInfo.stats.customersServed, icon: Users },
    { label: 'Routes Operated', value: companyInfo.stats.routesOperated, icon: Target },
    { label: 'Fleet Size', value: companyInfo.stats.fleetSize, icon: Shield },
  ];

  const values = [
    { name: 'Safety First', icon: Shield, description: 'Your safety is our top priority in everything we do' },
    { name: 'Customer Focus', icon: Heart, description: 'We put our customers at the center of our service' },
    { name: 'Reliability', icon: Zap, description: 'Consistent, dependable service you can count on' },
    { name: 'Community Connection', icon: Users, description: 'Connecting communities across South Africa' },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About APMWC</h1>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Connecting communities across South Africa with safe, reliable, and comfortable transportation services
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-6">
                {companyInfo.description}
              </p>
              <p className="text-gray-600 mb-6">
                Founded in {companyInfo.established}, we have grown from a small local service to one of the most trusted long-distance bus operators in the Western Cape. Our commitment to excellence has made us the preferred choice for thousands of travelers.
              </p>
              <div className="flex items-center space-x-4">
                <div className="h-1 w-16 bg-blue-600"></div>
                <span className="text-gray-400 text-sm">Established {companyInfo.established}</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-6 bg-blue-50 rounded-lg">
                  <stat.icon className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600">{companyInfo.mission}</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600">{companyInfo.vision}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{value.name}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
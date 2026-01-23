import React, { useEffect } from 'react';
import { 
  Eye, 
  Target, 
  Award,
  MapPin,
  Phone,
  Mail,
  Clock,
  Users,
  Building2,
  Heart,
  TrendingUp
} from 'lucide-react';

interface AboutPageProps {
  scrollToContact?: boolean;
}

export function AboutPage({ scrollToContact = false }: AboutPageProps) {
  useEffect(() => {
    if (scrollToContact) {
      setTimeout(() => {
        document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, [scrollToContact]);

  const coreValues = [
    {
      icon: Heart,
      title: 'Compassion',
      description: 'Serving our constituents with empathy and genuine care for their welfare and well-being.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Delivering high-quality public service through continuous improvement and innovation.'
    },
    {
      icon: Users,
      title: 'Integrity',
      description: 'Upholding honesty, accountability, and transparency in all government operations.'
    },
    {
      icon: TrendingUp,
      title: 'Progress',
      description: 'Promoting sustainable development and economic growth for the community.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Page Header */}
      <div className="bg-[#003366] text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">About LGU San Fernando</h1>
          <p className="text-xl text-gray-200 max-w-3xl">
            Committed to transparent governance and excellence in public service
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        
        {/* About Municipality Section */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#003366] mb-6">
                About the Municipality
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The Local Government Unit of San Fernando, Camarines Sur is a progressive municipality dedicated to serving its constituents with integrity, transparency, and excellence. As a key component of the provincial governance structure, we are committed to improving the quality of life of our residents through responsive leadership and effective public service delivery.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our local government operates under the principles of good governance, ensuring that every program, project, and service is designed to benefit the community and promote inclusive development. We work closely with national government agencies, the provincial government, and various stakeholders to implement initiatives that address the needs of our people.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Through strategic planning, community participation, and continuous innovation, LGU San Fernando strives to be a model of effective local governance in the Bicol Region and throughout the Philippines.
              </p>
            </div>
            <div className="relative">
              <div className="rounded-lg overflow-hidden shadow-xl">
              </div>
            </div>
          </div>
        </section>

        {/* Mission and Vision Section */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Vision */}
            <div className="bg-gradient-to-br from-[#003366] to-[#004488] text-white rounded-lg p-8 shadow-lg">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mb-4">
                <Eye size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-100 leading-relaxed">
                A progressive, peaceful, and prosperous San Fernando where every resident enjoys quality life through sustainable development, inclusive governance, and empowered communities working together towards a shared future of growth and opportunity.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-gradient-to-br from-[#00bfff] to-[#00a3e0] text-white rounded-lg p-8 shadow-lg">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mb-4">
                <Target size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-100 leading-relaxed">
                To deliver responsive, transparent, and efficient public service to all constituents through good governance, strategic development programs, and collaborative partnerships, ensuring equitable access to resources and opportunities for all residents of San Fernando.
              </p>
            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#003366] mb-3">
              Our Core Values
            </h2>
            <div className="w-24 h-1 bg-[#00bfff] mx-auto mb-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The principles that guide our governance and service delivery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value, index) => (
              <div
                key={index}
                className="bg-white border-2 border-gray-200 rounded-lg p-6 text-center hover:border-[#00bfff] hover:shadow-lg transition-all"
              >
                <div className="w-16 h-16 bg-[#00bfff] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="text-[#00bfff]" size={28} />
                </div>
                <h3 className="font-bold text-[#003366] mb-3 text-lg">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Functions and Responsibilities */}
        <section className="mb-16 bg-gray-50 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-[#003366] mb-6">
            Functions and Responsibilities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-bold text-[#003366] mb-3 flex items-center gap-2">
                <Building2 size={20} className="text-[#00bfff]" />
                Governance and Administration
              </h4>
              <ul className="space-y-2 text-gray-700 ml-7">
                <li>• Implementation of national and local policies</li>
                <li>• Delivery of basic services to constituents</li>
                <li>• Revenue generation and fiscal management</li>
                <li>• Maintenance of peace and order</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-[#003366] mb-3 flex items-center gap-2">
                <Users size={20} className="text-[#00bfff]" />
                Community Development
              </h4>
              <ul className="space-y-2 text-gray-700 ml-7">
                <li>• Social welfare and development programs</li>
                <li>• Infrastructure and public works projects</li>
                <li>• Environmental protection initiatives</li>
                <li>• Economic development and livelihood support</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Contact Information Section */}
        <section id="contact-section" className="mb-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#003366] mb-3">
              Contact Information
            </h2>
            <div className="w-24 h-1 bg-[#00bfff] mx-auto mb-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Get in touch with our local government unit
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-white border border-gray-200 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-[#00bfff] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="text-[#00bfff]" size={24} />
              </div>
              <h4 className="font-bold text-[#003366] mb-2">Address</h4>
              <p className="text-sm text-gray-600">
                Municipal Hall<br />
                San Fernando<br />
                Camarines Sur<br />
                Philippines
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-[#00bfff] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="text-[#00bfff]" size={24} />
              </div>
              <h4 className="font-bold text-[#003366] mb-2">Phone</h4>
              <p className="text-sm text-gray-600 mb-2">
                Trunk Line:<br />
                (054) XXX-XXXX
              </p>
              <p className="text-sm text-gray-600">
                Mobile:<br />
                +63 XXX XXX XXXX
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-[#00bfff] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="text-[#00bfff]" size={24} />
              </div>
              <h4 className="font-bold text-[#003366] mb-2">Email</h4>
              <p className="text-sm text-gray-600 mb-2">
                Official Email:<br />
                lgu.sanfernando@gov.ph
              </p>
              <p className="text-sm text-gray-600">
                Support:<br />
                info@sanfernando.gov.ph
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-[#00bfff] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="text-[#00bfff]" size={24} />
              </div>
              <h4 className="font-bold text-[#003366] mb-2">Office Hours</h4>
              <p className="text-sm text-gray-600 mb-2">
                Monday - Friday<br />
                8:00 AM - 5:00 PM
              </p>
              <p className="text-sm text-gray-600">
                Lunch Break:<br />
                12:00 PM - 1:00 PM
              </p>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="bg-gray-200 rounded-lg p-12 text-center">
            <MapPin className="mx-auto mb-4 text-gray-400" size={48} />
            <h4 className="font-bold text-gray-600 mb-2">Location Map</h4>
            <p className="text-gray-500">
              Interactive map will be displayed here showing the exact location of the Municipal Hall
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

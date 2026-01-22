import React, { useState } from 'react';
import { 
  FileText, 
  Briefcase, 
  Building2, 
  Users, 
  Heart, 
  GraduationCap,
  Scale,
  Home,
  Leaf,
  Clock,
  CheckCircle,
  X,
  HandHeart
} from 'lucide-react';

interface Service {
  id: number;
  title: string;
  category: string;
  description: string;
  requirements: string[];
  processingTime: string;
  icon: React.ElementType;
}

export function ServicesPage() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const services: Service[] = [
    // Civil Services
    {
      id: 1,
      title: 'Birth Certificate',
      category: 'Civil Services',
      description: 'Request for certified true copy of birth certificate registered in San Fernando.',
      requirements: [
        'Valid government-issued ID',
        'Payment of documentary stamp tax',
        'Completed application form',
        'Authorization letter (if representative)'
      ],
      processingTime: '3-5 business days',
      icon: FileText
    },
    {
      id: 2,
      title: 'Marriage Certificate',
      category: 'Civil Services',
      description: 'Request for certified true copy of marriage certificate.',
      requirements: [
        'Valid government-issued ID',
        'Payment of documentary stamp tax',
        'Marriage details (date, names)',
        'Authorization letter (if representative)'
      ],
      processingTime: '3-5 business days',
      icon: FileText
    },
    {
      id: 3,
      title: 'Death Certificate',
      category: 'Civil Services',
      description: 'Request for certified true copy of death certificate.',
      requirements: [
        'Valid government-issued ID of requester',
        'Payment of documentary stamp tax',
        'Death details',
        'Proof of relationship to deceased'
      ],
      processingTime: '3-5 business days',
      icon: FileText
    },
    {
      id: 4,
      title: 'Community Tax Certificate (Cedula)',
      category: 'Civil Services',
      description: 'Issuance of community tax certificate for individuals and corporations.',
      requirements: [
        'Valid government-issued ID',
        'Income tax return (for corporate)',
        'Payment of community tax',
        'Proof of residency'
      ],
      processingTime: 'Same day',
      icon: FileText
    },

    // Business Services
    {
      id: 5,
      title: 'Business Permit (New)',
      category: 'Business Services',
      description: 'Application for new business permit and license to operate.',
      requirements: [
        'DTI or SEC Registration',
        'Barangay clearance',
        'Fire safety inspection certificate',
        'Sanitary permit',
        'Proof of business location',
        'Payment of fees and taxes'
      ],
      processingTime: '7-10 business days',
      icon: Briefcase
    },
    {
      id: 6,
      title: 'Business Permit Renewal',
      category: 'Business Services',
      description: 'Annual renewal of existing business permit.',
      requirements: [
        'Previous business permit',
        'Barangay clearance',
        'Fire safety inspection certificate',
        'Sanitary permit',
        'Payment of annual fees'
      ],
      processingTime: '3-5 business days',
      icon: Briefcase
    },

    // Building & Construction
    {
      id: 7,
      title: 'Building Permit',
      category: 'Building & Construction',
      description: 'Application for construction or renovation of structures.',
      requirements: [
        'Land title or proof of ownership',
        'Building plans (sealed by licensed engineer/architect)',
        'Tax declaration',
        'Barangay clearance',
        'Locational clearance',
        'Payment of permit fees'
      ],
      processingTime: '15-20 business days',
      icon: Building2
    },
    {
      id: 8,
      title: 'Occupancy Permit',
      category: 'Building & Construction',
      description: 'Certificate of occupancy for completed structures.',
      requirements: [
        'Building permit',
        'Certificate of final inspection',
        'As-built plans',
        'Payment of fees'
      ],
      processingTime: '10-15 business days',
      icon: Home
    },

    // Social Services
    {
      id: 9,
      title: 'Senior Citizen ID',
      category: 'Social Services',
      description: 'Issuance of senior citizen identification card.',
      requirements: [
        'Birth certificate or valid ID showing age (60+)',
        '2x2 ID photo',
        'Barangay certificate',
        'Proof of residency'
      ],
      processingTime: '5-7 business days',
      icon: Heart
    },
    {
      id: 10,
      title: 'PWD ID',
      category: 'Social Services',
      description: 'Issuance of person with disability identification card.',
      requirements: [
        'Medical certificate',
        'Birth certificate',
        '2x2 ID photo',
        'Barangay certificate',
        'Proof of residency'
      ],
      processingTime: '5-7 business days',
      icon: Heart
    },
    {
      id: 11,
      title: 'Financial Assistance',
      category: 'Social Services',
      description: 'Application for various social welfare assistance programs.',
      requirements: [
        'Valid ID',
        'Barangay certificate of indigency',
        'Supporting documents (medical, etc.)',
        'DSWD assessment form'
      ],
      processingTime: '10-15 business days',
      icon: Heart
    },

    // Educational Services
    {
      id: 12,
      title: 'Scholarship Program',
      category: 'Educational Services',
      description: 'Application for municipal scholarship grants.',
      requirements: [
        'Certificate of grades (previous semester)',
        'Certificate of enrollment',
        'Certificate of indigency',
        'Birth certificate',
        'Valid ID',
        'Barangay clearance'
      ],
      processingTime: '15-20 business days',
      icon: GraduationCap
    },

    // Legal & Clearances
    {
      id: 13,
      title: 'Municipal Clearance',
      category: 'Legal & Clearances',
      description: 'Issuance of municipal clearance certificate.',
      requirements: [
        'Valid government-issued ID',
        'Barangay clearance',
        'Cedula',
        'Payment of clearance fee',
        'Purpose of clearance'
      ],
      processingTime: '1-3 business days',
      icon: Scale
    },

    // Environmental Services
    {
      id: 14,
      title: 'Garbage Collection Request',
      category: 'Environmental Services',
      description: 'Request for special garbage collection service.',
      requirements: [
        'Barangay certification',
        'Valid ID',
        'Payment of collection fee (if applicable)'
      ],
      processingTime: '3-5 business days',
      icon: Leaf
    }
  ];

  const categories = Array.from(new Set(services.map(s => s.category)));

  return (
    <div className="min-h-screen bg-white">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-[#003366] via-[#004d7a] to-[#003366] text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(45deg, white 25%, transparent 25%), linear-gradient(-45deg, white 25%, transparent 25%)',
            backgroundSize: '20px 20px'
          }}></div>
        </div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-3 mb-6">
              <HandHeart className="text-[#FFD700]" size={48} />
              <h1 className="text-5xl md:text-6xl font-bold drop-shadow-lg">Serve</h1>
            </div>
            <p className="text-2xl mb-6 text-white/95 drop-shadow-md">
              Dedicated to Serving the People of San Fernando
            </p>
            <p className="text-lg text-white/90 max-w-3xl mx-auto drop-shadow-md">
              Access essential municipal services, offices, and programs designed to serve our community with excellence.
            </p>
          </div>
        </div>
      </div>

      {/* Services Content */}
      <div className="container mx-auto px-4 py-12">
        {categories.map((category, catIndex) => (
          <div key={category} className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <div className={`w-12 h-1 bg-gradient-to-r ${
                catIndex % 4 === 0 ? 'from-[#FFD700] to-[#F0E68C]' :
                catIndex % 4 === 1 ? 'from-[#00CED1] to-[#20B2AA]' :
                catIndex % 4 === 2 ? 'from-[#003366] to-[#004d7a]' :
                'from-[#17a2b8] to-[#00CED1]'
              }`}></div>
              <h2 className="text-3xl font-bold text-[#003366]">
                {category}
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services
                .filter(service => service.category === category)
                .map((service, idx) => {
                  const colorClass = idx % 4 === 0 ? 'from-[#FFD700] to-[#F0E68C]' :
                    idx % 4 === 1 ? 'from-[#00CED1] to-[#20B2AA]' :
                    idx % 4 === 2 ? 'from-[#003366] to-[#004d7a]' :
                    'from-[#17a2b8] to-[#00CED1]';
                  return (
                    <div
                      key={service.id}
                      className="bg-white border-2 border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all hover:border-[#00CED1]"
                    >
                      <div className={`bg-gradient-to-r ${colorClass} p-6`}>
                        <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mb-4 shadow-md">
                          <service.icon className="text-[#003366]" size={28} />
                        </div>
                        <h3 className="font-bold text-white mb-2 text-xl drop-shadow-md">
                          {service.title}
                        </h3>
                      </div>
                      <div className="p-6">
                        <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                          {service.description}
                        </p>
                        <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                          <Clock size={16} />
                          <span>{service.processingTime}</span>
                        </div>
                        <button
                          onClick={() => setSelectedService(service)}
                          className="w-full bg-gradient-to-r from-[#00CED1] to-[#20B2AA] text-white py-3 px-4 rounded-xl font-bold hover:shadow-lg transition-all"
                        >
                          View Requirements
                        </button>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        ))}
      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="sticky top-0 bg-gradient-to-r from-[#003366] to-[#004d7a] text-white p-6 rounded-t-2xl">
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-[#FFD700] rounded-xl flex items-center justify-center shadow-lg">
                    <selectedService.icon className="text-[#003366]" size={32} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold drop-shadow-md">{selectedService.title}</h3>
                    <p className="text-[#FFD700] font-semibold">{selectedService.category}</p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedService(null)}
                  className="text-white hover:bg-white/20 rounded-lg p-2 transition-colors"
                >
                  <X size={24} />
                </button>
              </div>
            </div>

            <div className="p-6">
              <div className="mb-6">
                <h4 className="font-bold text-[#003366] mb-2 text-lg">Description</h4>
                <p className="text-gray-700 leading-relaxed">{selectedService.description}</p>
              </div>

              <div className="mb-6">
                <h4 className="font-bold text-[#003366] mb-3 text-lg">Requirements</h4>
                <ul className="space-y-2">
                  {selectedService.requirements.map((req, index) => (
                    <li key={index} className="flex gap-3">
                      <CheckCircle className="text-[#00CED1] flex-shrink-0 mt-0.5" size={20} />
                      <span className="text-gray-700">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6 p-4 bg-gradient-to-r from-[#FFD700]/10 to-[#F0E68C]/10 rounded-xl border-2 border-[#FFD700]/20">
                <div className="flex items-center gap-3 text-[#003366]">
                  <Clock size={24} className="text-[#FFD700]" />
                  <div>
                    <p className="font-bold text-lg">Processing Time</p>
                    <p className="text-gray-700">{selectedService.processingTime}</p>
                  </div>
                </div>
              </div>

              <button className="w-full bg-gradient-to-r from-[#00CED1] to-[#20B2AA] text-white py-4 px-6 rounded-xl font-bold hover:shadow-xl transition-all">
                Apply for This Service
              </button>

              <p className="text-sm text-gray-500 text-center mt-4">
                Please visit the Municipal Hall to process this service
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
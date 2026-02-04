import React from 'react';
import beachImage from '../assets/sfbeach.jpg';
import mountainImage from '../assets/isarog.jpg';
import heritageImage from '../assets/heritage.jpg';
import fiesta from '../assets/fiesta2.jpg';
import { 
  MapPin, 
  Palmtree, 
  Camera,
  Heart,
  Mountain,
  Waves,
  Sun,
  Users,
  Phone,
  Mail,
  Clock,
  Building2,
  Award,
  TrendingUp
} from 'lucide-react';


export function ExplorePage() {
  const attractions = [
    {
      id: 1,
      name: 'San Fernando Beach',
      category: 'Beach',
      description: 'Crystal clear waters and pristine white sand beaches perfect for swimming and relaxation.',
      image: beachImage,
      icon: Waves,
      color: 'from-[#00CED1] to-[#20B2AA]'
    },
    {
      id: 2,
      name: 'Mount Isarog Views',
      category: 'Nature',
      description: 'Breathtaking views of the majestic Mount Isarog and surrounding natural landscapes.',
      image: mountainImage,
      icon: Mountain,
      color: 'from-[#FFD700] to-[#F0E68C]'
    },
    {
      id: 3,
      name: 'Heritage Sites',
      category: 'Culture',
      description: 'Historical landmarks and cultural heritage sites showcasing San Fernando\'s rich history.',
      image: heritageImage,
      icon: Building2,
      color: 'from-[#003366] to-[#004d7a]'
    },
    {
      id: 4,
      name: 'Fiesta Celebrations',
      category: 'Events',
      description: 'Vibrant festivals and cultural celebrations featuring local traditions and community spirit.',
      image: fiesta,
      icon: Heart,
      color: 'from-[#17a2b8] to-[#00CED1]'
    }
  ];

  const municipalityFacts = [
    {
      icon: Users,
      label: 'Population',
      value: '42,000+',
      color: 'from-[#FFD700] to-[#F0E68C]'
    },
    {
      icon: MapPin,
      label: 'Barangays',
      value: '29',
      color: 'from-[#00CED1] to-[#20B2AA]'
    },
    {
      icon: TrendingUp,
      label: 'Land Area',
      value: '155 km²',
      color: 'from-[#003366] to-[#004d7a]'
    },
    {
      icon: Award,
      label: 'Founded',
      value: '1583',
      color: 'from-[#17a2b8] to-[#00CED1]'
    }
  ];

const barangays = [
  'Alianza', 'Beberon', 'Bical', 'Bocal', 'Bonifacio', 
  'Buenavista', 'Calascagas', 'Cotmo', 'Daculang Tubig', 
  'Del Pilar', 'Gñaran', 'Grijalvo', 'Lupi', 'Maragñi', 
  'Pamukid', 'Pinamasagan', 'Pipian', 'Planza', 'Rizal', 
  'San Joaquin', 'Santa Cruz', 'Tagpocol'
];
<<<<<<< HEAD

=======
>>>>>>> d523490cca4b784ccb17095174a89433360e3ec1
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#00CED1] via-[#20B2AA] to-[#17a2b8] text-white py-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '30px 30px'
          }}></div>
        </div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-3 mb-6">
              <Palmtree className="text-white" size={48} />
              <h1 className="text-5xl md:text-6xl font-bold drop-shadow-lg">
                Explore
              </h1>
            </div>
            <p className="text-2xl mb-6 text-white/95 drop-shadow-md">
              Discover the Beauty and Rich Culture of San Fernando
            </p>
            <p className="text-lg text-white/90 max-w-3xl mx-auto drop-shadow-md">
              Explore our municipality's stunning attractions, vibrant culture, and warm community spirit.
            </p>
          </div>
        </div>
      </section>

      {/* Municipality Facts */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {municipalityFacts.map((fact, index) => (
            <div key={index} className={`bg-gradient-to-br ${fact.color} rounded-2xl p-6 text-center shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2`}>
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-md">
                <fact.icon className="text-[#003366]" size={32} />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2 drop-shadow-md">
                {fact.value}
              </div>
              <div className="text-sm text-white/90 font-semibold">
                {fact.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About San Fernando */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold text-[#003366] mb-6">
              About San Fernando, Camarines Sur
            </h2>
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed text-left">
              <p>
                San Fernando is a first-class municipality in the province of Camarines Sur, Philippines. Located in the Bicol Region, 
                our municipality is known for its rich agricultural lands, beautiful coastal areas, and warm, hospitable people.
              </p>
              <p>
                With a history dating back to 1583, San Fernando has evolved into a progressive municipality while maintaining its 
                cultural heritage and traditions. The town is strategically located near Mount Isarog, offering stunning natural 
                landscapes and opportunities for eco-tourism.
              </p>
              <p>
                Our 29 barangays work together under the leadership of the local government to provide excellent services and create 
                opportunities for all residents. San Fernando is committed to sustainable development, environmental protection, and 
                improving the quality of life for all its citizens.
              </p>
            </div>
          </div>

          {/* KUSOG Values */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg border-2 border-[#FFD700]/20">
              <div className="w-20 h-20 bg-gradient-to-br from-[#FFD700] to-[#F0E68C] rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="text-[#003366]" size={36} />
              </div>
              <h3 className="font-bold text-[#003366] mb-2 text-xl">Strength</h3>
              <p className="text-gray-600 text-sm">A strong and capable community</p>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg border-2 border-[#00CED1]/20">
              <div className="w-20 h-20 bg-gradient-to-br from-[#00CED1] to-[#20B2AA] rounded-full flex items-center justify-center mx-auto mb-4">
                <Mountain className="text-white" size={36} />
              </div>
              <h3 className="font-bold text-[#003366] mb-2 text-xl">Resilience</h3>
              <p className="text-gray-600 text-sm">Overcoming challenges together</p>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg border-2 border-[#003366]/20">
              <div className="w-20 h-20 bg-gradient-to-br from-[#003366] to-[#004d7a] rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-white" size={36} />
              </div>
              <h3 className="font-bold text-[#003366] mb-2 text-xl">Unity</h3>
              <p className="text-gray-600 text-sm">One community, one vision</p>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg border-2 border-[#17a2b8]/20">
              <div className="w-20 h-20 bg-gradient-to-br from-[#17a2b8] to-[#00CED1] rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-white" size={36} />
              </div>
              <h3 className="font-bold text-[#003366] mb-2 text-xl">Progress</h3>
              <p className="text-gray-600 text-sm">Moving forward together</p>
            </div>
          </div>
        </div>
      </section>

     {/* Tourist Attractions */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-4">
            <Camera className="text-[#00CED1]" size={32} />
            <h2 className="text-4xl font-bold text-[#003366]">
              Discover San Fernando
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our municipality's most beautiful destinations and experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {attractions.map((attraction) => (
            <div
              key={attraction.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
            >
              {/* Image area */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={attraction.image}
                  alt={attraction.name}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div
                  className={`absolute top-4 right-4 bg-gradient-to-r ${attraction.color} text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg`}
                >
                  {attraction.category}
                </div>
              </div>

              {/* Text content */}
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className={`w-12 h-12 bg-gradient-to-br ${attraction.color} rounded-xl flex items-center justify-center`}
                  >
                    <attraction.icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-[#003366]">
                    {attraction.name}
                  </h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  {attraction.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Barangays Section */}
      <section className="bg-gradient-to-br from-[#FFD700] via-[#F0E68C] to-[#FFD700] py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#003366] mb-4">
              Our 29 Barangays
            </h2>
            <p className="text-lg text-[#003366]/80 max-w-2xl mx-auto">
              San Fernando is composed of 29 vibrant barangays, each contributing to our municipality's strength and unity
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
            {barangays.map((barangay, index) => (
              <div key={index} className="bg-white rounded-xl p-4 text-center shadow-md hover:shadow-xl transition-all hover:scale-105">
                <div className="w-10 h-10 bg-gradient-to-br from-[#00CED1] to-[#20B2AA] rounded-full flex items-center justify-center mx-auto mb-2">
                  <MapPin className="text-white" size={20} />
                </div>
                <p className="text-sm font-semibold text-[#003366]">
                  {barangay}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section id="contact-section" className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#003366] mb-4">
              Visit San Fernando
            </h2>
            <p className="text-xl text-gray-600">
              Plan your visit and get in touch with us
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-[#00CED1] to-[#20B2AA] rounded-2xl p-8 text-white text-center shadow-xl">
              <MapPin className="mx-auto mb-4" size={40} />
              <h3 className="font-bold mb-2 text-xl">Location</h3>
              <p className="text-white/90">
                Municipal Hall<br />
                San Fernando<br />
                Camarines Sur, Philippines
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#FFD700] to-[#F0E68C] rounded-2xl p-8 text-[#003366] text-center shadow-xl">
              <Phone className="mx-auto mb-4" size={40} />
              <h3 className="font-bold mb-2 text-xl">Contact</h3>
              <p>
                (054) XXX-XXXX<br />
                lgu.sanfernando@gov.ph
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#003366] to-[#004d7a] rounded-2xl p-8 text-white text-center shadow-xl">
              <Clock className="mx-auto mb-4" size={40} />
              <h3 className="font-bold mb-2 text-xl">Office Hours</h3>
              <p className="text-white/90">
                Monday - Friday<br />
                8:00 AM - 5:00 PM
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

import React, { useState } from 'react';
import { 
  Megaphone, 
  Calendar, 
  AlertCircle,
  Newspaper,
  Camera,
  Filter,
  Heart,
  Briefcase,
  Building2,
  Users,
  Trophy,
  Lightbulb
} from 'lucide-react';

import fiestaImage from '../assets/fiesta.png';

export function InformPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Updates', icon: Newspaper },
    { id: 'events', label: 'Events', icon: Calendar },
    { id: 'announcements', label: 'Announcements', icon: Megaphone },
    { id: 'health', label: 'Health', icon: Heart },
    { id: 'business', label: 'Business', icon: Briefcase },
    { id: 'community', label: 'Community', icon: Users }
  ];

  const announcements = [
    {
      id: 1,
      title: 'Happy Fiesta - Brgy. Pinamasagan',
      category: 'events',
      type: 'Event',
      date: 'January 18-19, 2026',
      description: 'Join us in celebrating the annual fiesta of Barangay Pinamasagan with cultural activities, food fair, and community programs. Greetings from Hon. Betty Ann Kristine Danabar-Fulgentes, Municipal Mayor.',
      image: fiestaImage,
      color: 'from-[#FFD700] to-[#F0E68C]',
      priority: 'featured'
    },
    {
      id: 2,
      title: 'New Infrastructure Projects Announcement',
      category: 'announcements',
      type: 'Development',
      date: 'January 20, 2026',
      description: 'The municipality announces major infrastructure development initiatives including road improvements, public facilities enhancement, and water system upgrades across all barangays.',
      color: 'from-[#00CED1] to-[#20B2AA]',
      priority: 'high'
    },
    {
      id: 3,
      title: 'Free Health Services Program this Month',
      category: 'health',
      type: 'Health Advisory',
      date: 'January 18, 2026',
      description: 'Municipal Health Center offers free medical consultations, health screenings, and medicines for all residents. Schedule your appointment at the health office.',
      color: 'from-[#003366] to-[#004d7a]',
      priority: 'high'
    },
    {
      id: 4,
      title: 'Business Permit Renewal Deadline Reminder',
      category: 'business',
      type: 'Business Notice',
      date: 'January 15, 2026',
      description: 'Annual business permit renewal is now open. All business owners must submit renewal applications before the January 31, 2026 deadline to avoid penalties.',
      color: 'from-[#17a2b8] to-[#00CED1]',
      priority: 'normal'
    },
    {
      id: 5,
      title: 'Youth Skills Training Program Registration',
      category: 'community',
      type: 'Program Update',
      date: 'January 12, 2026',
      description: 'Registration now open for the Youth Skills Development Program offering free technical and vocational training. Limited slots available.',
      color: 'from-[#FFD700] to-[#F0E68C]',
      priority: 'normal'
    },
    {
      id: 6,
      title: 'Senior Citizens Monthly Pension Distribution',
      category: 'announcements',
      type: 'Social Welfare',
      date: 'January 10, 2026',
      description: 'Senior citizens are reminded to claim their monthly pension at the Municipal Social Welfare Office. Bring valid IDs and senior citizen cards.',
      color: 'from-[#003366] to-[#004d7a]',
      priority: 'normal'
    },
    {
      id: 7,
      title: 'Community Clean-Up Drive This Weekend',
      category: 'community',
      type: 'Community Event',
      date: 'January 8, 2026',
      description: 'Join the municipal-wide clean-up and tree planting activity. Volunteers needed in all barangays. Free snacks and certificates will be provided.',
      color: 'from-[#00CED1] to-[#20B2AA]',
      priority: 'normal'
    },
    {
      id: 8,
      title: 'New Building Permit Requirements',
      category: 'announcements',
      type: 'Policy Update',
      date: 'January 5, 2026',
      description: 'Updated requirements for building permit applications now in effect. Check with the Municipal Engineer\'s Office for the complete list.',
      color: 'from-[#17a2b8] to-[#00CED1]',
      priority: 'normal'
    },
    {
      id: 9,
      title: 'Scholarship Application Period Opens',
      category: 'announcements',
      type: 'Education',
      date: 'January 3, 2026',
      description: 'Municipal scholarship program for Academic Year 2026-2027 is now accepting applications. Available for high school and college students.',
      color: 'from-[#FFD700] to-[#F0E68C]',
      priority: 'normal'
    }
  ];

  const upcomingEvents = [
    {
      date: 'Jan 25',
      title: 'Job Fair 2026',
      location: 'Municipal Gymnasium'
    },
    {
      date: 'Jan 28',
      title: 'Farmers Consultation Meeting',
      location: 'Agriculture Office'
    },
    {
      date: 'Feb 1',
      title: 'Youth Leadership Summit',
      location: 'Municipal Hall'
    },
    {
      date: 'Feb 5',
      title: 'Health and Wellness Fair',
      location: 'Town Plaza'
    }
  ];

  const filteredAnnouncements = selectedCategory === 'all' 
    ? announcements 
    : announcements.filter(a => a.category === selectedCategory);

  const featuredAnnouncement = announcements.find(a => a.priority === 'featured');

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#17a2b8] via-[#00CED1] to-[#20B2AA] text-white py-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
            backgroundSize: '24px 24px'
          }}></div>
        </div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-3 mb-6">
              <Megaphone className="text-white" size={48} />
              <h1 className="text-5xl md:text-6xl font-bold drop-shadow-lg">
                Inform
              </h1>
            </div>
            <p className="text-2xl mb-6 text-white/95 drop-shadow-md">
              Stay Updated with the Latest News & Announcements
            </p>
            <p className="text-lg text-white/90 max-w-3xl mx-auto drop-shadow-md">
              Get the latest information about municipal activities, programs, events, and important announcements from San Fernando.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Announcement */}
      {featuredAnnouncement && (
        <section className="container mx-auto px-4 py-12">
          <div className="bg-gradient-to-r from-[#FFD700] to-[#F0E68C] rounded-3xl overflow-hidden shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 mb-4 w-fit">
                  <Trophy className="text-[#003366]" size={20} />
                  <span className="bg-[#003366] text-[#FFD700] px-4 py-1 rounded-full text-sm font-bold">
                    FEATURED EVENT
                  </span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-[#003366] mb-4">
                  {featuredAnnouncement.title}
                </h2>
                <div className="flex items-center gap-3 mb-6">
                  <Calendar className="text-[#003366]" size={20} />
                  <span className="text-lg text-[#003366] font-semibold">
                    {featuredAnnouncement.date}
                  </span>
                </div>
                <p className="text-lg text-[#003366]/90 mb-6 leading-relaxed">
                  {featuredAnnouncement.description}
                </p>
                <div className="bg-[#003366] text-[#FFD700] px-6 py-3 rounded-xl w-fit font-bold">
                  Don't Miss This Event!
                </div>
              </div>
              <div className="relative h-[400px] lg:h-auto">
                <img 
                  src={featuredAnnouncement.image} 
                  alt={featuredAnnouncement.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Category Filter */}
      <section className="bg-gray-50 py-8 sticky top-[72px] z-40 border-b-2 border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 overflow-x-auto pb-2">
            <Filter className="text-[#003366] flex-shrink-0" size={24} />
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold whitespace-nowrap transition-all ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-[#00CED1] to-[#20B2AA] text-white shadow-lg'
                    : 'bg-white text-[#003366] hover:bg-gray-100 border-2 border-gray-200'
                }`}
              >
                <category.icon size={18} />
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Announcements Grid */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Announcements Column */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-bold text-[#003366]">
                {selectedCategory === 'all' ? 'All Updates' : categories.find(c => c.id === selectedCategory)?.label}
              </h2>
              <span className="text-sm text-gray-500">
                {filteredAnnouncements.length} updates
              </span>
            </div>

            {filteredAnnouncements.filter(a => a.priority !== 'featured').map((announcement) => (
              <div key={announcement.id} className="bg-white border-2 border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all hover:border-[#00CED1]">
                <div className={`bg-gradient-to-r ${announcement.color} p-6`}>
                  <div className="flex items-start justify-between mb-3">
                    <span className="bg-white/90 backdrop-blur-sm text-[#003366] px-4 py-1 rounded-full text-sm font-bold">
                      {announcement.type}
                    </span>
                    {announcement.priority === 'high' && (
                      <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                        <AlertCircle className="text-red-600" size={16} />
                        <span className="text-xs font-bold text-red-600">IMPORTANT</span>
                      </div>
                    )}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3 drop-shadow-md">
                    {announcement.title}
                  </h3>
                  <div className="flex items-center gap-2 text-white/90">
                    <Calendar size={16} />
                    <span className="text-sm font-semibold">{announcement.date}</span>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 leading-relaxed">
                    {announcement.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Upcoming Events */}
            <div className="bg-gradient-to-br from-[#003366] to-[#004d7a] rounded-2xl p-6 text-white shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <Calendar className="text-[#FFD700]" size={28} />
                <h3 className="text-2xl font-bold">
                  Upcoming Events
                </h3>
              </div>
              <div className="space-y-4">
                {upcomingEvents.map((event, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all">
                    <div className="flex gap-4">
                      <div className="bg-[#FFD700] text-[#003366] rounded-lg px-3 py-2 text-center flex-shrink-0">
                        <div className="text-lg font-bold leading-none">{event.date.split(' ')[1]}</div>
                        <div className="text-xs font-semibold">{event.date.split(' ')[0]}</div>
                      </div>
                      <div>
                        <h4 className="font-bold text-white mb-1">{event.title}</h4>
                        <p className="text-sm text-white/80">{event.location}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Important Reminders */}
            <div className="bg-gradient-to-br from-[#FFD700] to-[#F0E68C] rounded-2xl p-6 shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <AlertCircle className="text-[#003366]" size={28} />
                <h3 className="text-2xl font-bold text-[#003366]">
                  Important Reminders
                </h3>
              </div>
              <ul className="space-y-3 text-[#003366]">
                <li className="flex items-start gap-2">
                  <span className="text-[#003366] mt-1">•</span>
                  <span className="text-sm">Business permit renewal deadline: January 31, 2026</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#003366] mt-1">•</span>
                  <span className="text-sm">Municipal office hours: Monday-Friday, 8:00 AM - 5:00 PM</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#003366] mt-1">•</span>
                  <span className="text-sm">Free health services available at the Municipal Health Center</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#003366] mt-1">•</span>
                  <span className="text-sm">Report emergencies to the Municipal Disaster Risk Reduction Office</span>
                </li>
              </ul>
            </div>

            {/* Subscribe Section */}
            <div className="bg-gradient-to-br from-[#00CED1] to-[#20B2AA] rounded-2xl p-6 text-white shadow-xl">
              <Newspaper className="text-white mb-4" size={32} />
              <h3 className="text-xl font-bold mb-3">
                Stay Informed
              </h3>
              <p className="text-sm text-white/90 mb-4">
                Get the latest updates and announcements delivered to you
              </p>
              <button className="w-full bg-white text-[#00CED1] py-3 rounded-xl font-bold hover:bg-[#FFD700] hover:text-[#003366] transition-all">
                Subscribe to Updates
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

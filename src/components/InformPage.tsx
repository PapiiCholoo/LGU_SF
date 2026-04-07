import React, { useState } from 'react';
import {
  Megaphone,
  Calendar,
  AlertCircle,
  Newspaper,
  Filter,
  Trophy,
  Briefcase,
  Building2,
  Users,
  Lightbulb,
  Heart
} from 'lucide-react';
import { HeroCarousel } from './HeroCarousel';
import { useContent } from '../contexts/ContentContext';

const IconMap: Record<string, any> = {
  Megaphone, Calendar, AlertCircle, Newspaper, Filter, Trophy, Briefcase, Building2, Users, Lightbulb, Heart
};

export function InformPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const { content } = useContent();
  const c = content.inform;

  const categories = [
    { id: 'all', label: 'All Updates', icon: Newspaper },
    { id: 'events', label: 'Events', icon: Calendar },
    { id: 'announcements', label: 'Announcements', icon: Megaphone },
    { id: 'health', label: 'Health', icon: Heart },
    { id: 'business', label: 'Business', icon: Briefcase },
    { id: 'community', label: 'Community', icon: Users }
  ];

  const filteredAnnouncements = selectedCategory === 'all'
    ? c.announcements
    : c.announcements?.filter((a: any) => a.category === selectedCategory);

  const featuredAnnouncement = c.announcements?.find((a: any) => a.priority === 'featured');

  return (
    <div>
      {/* Hero Section */}
      <HeroCarousel
        pageId="inform"
        title={c.title}
        subtitle={c.subtitle}
        description={c.description}
        icon={Megaphone}
        defaultImages={c.heroImages || []}
      />

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
                  className="w-full h-full object-contain"
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
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold whitespace-nowrap transition-all ${selectedCategory === category.id
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
                {selectedCategory === 'all' ? 'All Updates' : categories.find(cat => cat.id === selectedCategory)?.label}
              </h2>
              <span className="text-sm text-gray-500">
                {filteredAnnouncements?.length || 0} updates
              </span>
            </div>

            {filteredAnnouncements?.filter((a: any) => a.priority !== 'featured').map((announcement: any) => (
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
                {c.upcomingEvents?.map((event: any, index: number) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all">
                    <div className="flex gap-4">
                      <div className="bg-[#FFD700] text-[#003366] rounded-lg px-3 py-2 text-center flex-shrink-0">
                        <div className="text-lg font-bold leading-none">{event.date.split(' ')[1] || event.date}</div>
                        <div className="text-xs font-semibold">{event.date.split(' ')[0] || ''}</div>
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
                {c.reminders?.map((reminder: string, index: number) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-[#003366] mt-1">•</span>
                    <span className="text-sm">{reminder}</span>
                  </li>
                ))}
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

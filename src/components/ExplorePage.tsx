import React from 'react';
import { HeroCarousel } from './HeroCarousel';
import { useContent } from '../contexts/ContentContext';
import {
  MapPin,
  Palmtree,
  Camera,
  Heart,
  Mountain,
  Waves,
  Users,
  Phone,
  Clock,
  Building2,
  Award,
  TrendingUp
} from 'lucide-react';

const IconMap: Record<string, any> = {
  MapPin, Palmtree, Camera, Heart, Mountain, Waves, Users,
  Phone, Clock, Building2, Award, TrendingUp
};

export function ExplorePage() {
  const { content } = useContent();
  const c = content.explore;

  return (
    <div>
      {/* Hero Section */}
      <HeroCarousel
        pageId="explore"
        title={c.title}
        subtitle={c.subtitle}
        description={c.description}
        icon={Palmtree}
        defaultImages={c.heroImages || []}
      />

      {/* Municipality Facts */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {c.municipalityFacts?.map((fact: any, index: number) => {
            const IconComp = IconMap[fact.iconType] || Users;
            return (
              <div key={index} className={`bg-gradient-to-br ${fact.color} rounded-2xl p-6 text-center shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2`}>
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-md">
                  <IconComp className="text-[#003366]" size={32} />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2 drop-shadow-md">
                  {fact.value}
                </div>
                <div className="text-sm text-white/90 font-semibold">
                  {fact.label}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* About San Fernando */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#003366] mb-6">
              About San Fernando, Camarines Sur
            </h2>
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed text-left">
              {c.aboutText?.map((p: string, i: number) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>

          {/* KUSOG Values (Shared or Duplicate, leaving hardcoded if not in explore context, wait, KUSOG is on home page. I can omit KUSOG here or borrow from content.home.kusogValues) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {content.home.kusogValues?.map((val: any, idx: number) => {
              const IconComp = IconMap[val.iconType] || TrendingUp;
              return (
                <div key={idx} className={`text-center p-6 bg-white rounded-2xl shadow-lg border-2 border-${val.colorClass.split(' ')[0].replace('from-', '')}/20`}>
                  <div className={`w-20 h-20 bg-gradient-to-br ${val.colorClass} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <IconComp className={val.colorClass.includes('FFD700') ? 'text-[#003366]' : 'text-white'} size={36} />
                  </div>
                  <h3 className="font-bold text-[#003366] mb-2 text-xl">{val.title}</h3>
                  <p className="text-gray-600 text-sm">{val.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tourist Attractions */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-4">
            <Camera className="text-[#00CED1]" size={32} />
            <h2 className="text-3xl md:text-4xl font-bold text-[#003366]">
              Discover San Fernando
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our municipality's most beautiful destinations and experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {c.attractions?.map((attraction: any) => {
            const IconComp = IconMap[attraction.iconType] || Camera;
            return (
              <div
                key={attraction.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={attraction.image}
                    alt={attraction.name}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className={`absolute top-4 right-4 bg-gradient-to-r ${attraction.color} text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg`}>
                    {attraction.category}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`w-12 h-12 bg-gradient-to-br ${attraction.color} rounded-xl flex items-center justify-center`}>
                      <IconComp className="text-white" size={24} />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-[#003366]">
                      {attraction.name}
                    </h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    {attraction.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Barangays Section */}
      <section className="bg-gradient-to-br from-[#FFD700] via-[#F0E68C] to-[#FFD700] py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#003366] mb-4">
              Our {c.barangays?.length || 22} Barangays
            </h2>
            <p className="text-lg text-[#003366]/80 max-w-2xl mx-auto">
              San Fernando is composed of vibrant barangays, each contributing to our municipality's strength and unity
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
            {c.barangays?.map((barangay: string, index: number) => (
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
            <h2 className="text-3xl md:text-4xl font-bold text-[#003366] mb-4">
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

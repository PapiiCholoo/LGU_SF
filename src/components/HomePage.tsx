import React from 'react';
import {
  Sparkles,
  HandHeart,
  Megaphone,
  ArrowRight,
  TrendingUp,
  Award,
  Shield,
  Building2,
  Users,
  Heart,
  Briefcase,
  FileText,
  GraduationCap,
  Palmtree,
  Newspaper,
  Lightbulb
} from 'lucide-react';
import { HeroCarousel } from './HeroCarousel';
import { useContent } from '../contexts/ContentContext';

const IconMap: Record<string, any> = {
  Sparkles, HandHeart, Megaphone, ArrowRight, TrendingUp, Award, Shield,
  Building2, Users, Heart, Briefcase, FileText, GraduationCap, Palmtree,
  Newspaper, Lightbulb
};

type Page = 'home' | 'transform' | 'explore' | 'serve' | 'inform';

interface HomePageProps {
  onNavigate: (page: Page) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const { content } = useContent();
  const c = content.home;

  return (
    <div>
      <HeroCarousel
        pageId="home"
        title={c.title}
        subtitle={c.subtitle}
        description={c.description}
        icon={Palmtree}
        defaultImages={c.heroImages || []}
      />

      {/* Four Key Sections Grid */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Transform */}
          <button
            onClick={() => onNavigate('transform')}
            className="group bg-gradient-to-br from-[#FFD700] to-[#F0E68C] rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 text-left border-2 border-white"
          >
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-md">
              <Sparkles className="text-[#FFD700]" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-[#003366] mb-3">Transform</h3>
            <p className="text-[#003366]/80 mb-4">Updates, programs, and development initiatives transforming our community</p>
            <div className="flex items-center text-[#003366] font-semibold">
              Learn More <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" size={20} />
            </div>
          </button>

          {/* Explore */}
          <button
            onClick={() => onNavigate('explore')}
            className="group bg-gradient-to-br from-[#00CED1] to-[#20B2AA] rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 text-left border-2 border-white"
          >
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-md">
              <Palmtree className="text-[#00CED1]" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Explore</h3>
            <p className="text-white/90 mb-4">Tourism destinations and rich information about San Fernando</p>
            <div className="flex items-center text-white font-semibold">
              Discover More <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" size={20} />
            </div>
          </button>

          {/* Serve */}
          <button
            onClick={() => onNavigate('serve')}
            className="group bg-gradient-to-br from-[#003366] to-[#004d7a] rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 text-left border-2 border-white"
          >
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-md">
              <HandHeart className="text-[#003366]" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Serve</h3>
            <p className="text-white/90 mb-4">LGU services, offices, citizen's charter, and organizational structure</p>
            <div className="flex items-center text-white font-semibold">
              View Services <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" size={20} />
            </div>
          </button>

          {/* Inform */}
          <button
            onClick={() => onNavigate('inform')}
            className="group bg-gradient-to-br from-[#17a2b8] to-[#00CED1] rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 text-left border-2 border-white"
          >
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-md">
              <Megaphone className="text-[#17a2b8]" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Inform</h3>
            <p className="text-white/90 mb-4">Latest announcements and updates about municipal activities</p>
            <div className="flex items-center text-white font-semibold">
              Read Updates <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" size={20} />
            </div>
          </button>
        </div>
      </section>

      {/* Featured Event - Fiesta Banner */}
      {c.featuredEvent && (
        <section className="container mx-auto px-4 py-12">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <img
              src={c.featuredEvent.image}
              alt={c.featuredEvent.title}
              className="w-full h-[400px] md:h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent">
              <div className="container mx-auto px-8 py-12 h-full flex flex-col justify-center max-w-2xl">
                <div className="bg-[#FFD700] text-[#003366] inline-block px-4 py-2 rounded-full text-sm font-bold mb-4 w-fit">
                  {c.featuredEvent.tag}
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-white drop-shadow-md">
                  {c.featuredEvent.title}
                </h2>
                <p className="text-xl md:text-2xl text-[#FFD700] font-bold mb-2 drop-shadow-lg">
                  {c.featuredEvent.subtitle}
                </p>
                <p className="text-xl text-white mb-6 drop-shadow-lg">
                  {c.featuredEvent.date}
                </p>
                <p className="text-lg text-white/90 mb-2 drop-shadow-md">
                  {c.featuredEvent.greetings}
                </p>
                <p className="text-xl text-white font-semibold drop-shadow-lg">
                  {c.featuredEvent.mayorName}
                </p>
                <p className="text-lg text-[#00CED1] italic drop-shadow-md">
                  {c.featuredEvent.mayorTitle}
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Latest Updates & Announcements */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-12 h-1 bg-gradient-to-r from-transparent to-[#00CED1]"></div>
              <Newspaper className="text-[#00CED1]" size={32} />
              <div className="w-12 h-1 bg-gradient-to-l from-transparent to-[#00CED1]"></div>
            </div>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-black ">
              Latest Updates & Announcements
            </h2>
            <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
              Stay informed with the latest news and developments from San Fernando
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {c.latestUpdates?.map((update: any, idx: number) => {
              const IconComp = IconMap[update.iconType] || Lightbulb;
              return (
                <div key={idx} className="bg-white border-2 border-[#00CED1]/20 rounded-2xl p-6 hover:shadow-xl transition-all hover:border-[#00CED1]">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 ${update.colorClass2} rounded-lg flex items-center justify-center`}>
                      <IconComp className={update.colorClass2.includes('FFD700') ? 'text-[#003366]' : 'text-white'} size={20} />
                    </div>
                    <span className={`bg-gradient-to-r ${update.colorClass1} ${update.colorClass1.includes('FFD700') ? 'text-[#003366]' : 'text-white'} text-xs px-3 py-1 rounded-full font-bold`}>
                      {update.tag}
                    </span>
                  </div>
                  <h3 className="font-bold text-[#003366] mb-3 text-xl">
                    {update.title}
                  </h3>
                  <p className="text-sm text-gray-500 mb-3">
                    {update.date}
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    {update.description}
                  </p>
                </div>
              )
            })}
          </div>

          <div className="text-center">
            <button
              onClick={() => onNavigate('inform')}
              className="bg-gradient-to-r from-[#00CED1] to-[#20B2AA] text-white px-8 py-4 rounded-xl font-bold hover:shadow-xl transition-all inline-flex items-center gap-2"
            >
              View All Announcements
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* KUSOG Values Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-black ">
            KUSOG San Fernando Values
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Building our community on the foundations of strength, resilience, unity, and progress
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {c.kusogValues?.map((val: any, idx: number) => {
            const IconComp = IconMap[val.iconType] || TrendingUp;
            return (
              <div key={idx} className="text-center group">
                <div className={`w-24 h-24 bg-gradient-to-br ${val.colorClass} rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                  <IconComp className={val.colorClass.includes('FFD700') ? 'text-[#003366]' : 'text-white'} size={48} />
                </div>
                <h3 className="font-bold text-[#003366] mb-3 text-xl">
                  {val.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {val.desc}
                </p>
              </div>
            )
          })}
        </div>
      </section>
    </div>
  );
} 

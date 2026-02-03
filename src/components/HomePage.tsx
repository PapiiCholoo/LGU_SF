import React, { useEffect, useState } from 'react';
import { 
  Sparkles,
  MapPin,
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
  Camera,
  Newspaper,
  Lightbulb
} from 'lucide-react';
import fiestaImage from '../assets/fiesta.png';
import heroBg from '../assets/hero_bg.jpg';
import { BackendStatus } from './backend/BackendStatus';
import { UserDirectory } from './backend/UserDirectory';

type Page = 'home' | 'transform' | 'explore' | 'serve' | 'inform';

interface HomePageProps {
  onNavigate: (page: Page) => void;
  
}


export function HomePage({ onNavigate }: HomePageProps) {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    
<div>
  <section className="relative text-white overflow-hidden h-[120vh]">
    
    {/* Parallax Background */}
    <div
      className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110 will-change-transform"
      style={{
        backgroundImage: `url(${heroBg})`,
        transform: `translateY(${offsetY * 0.4}px)`
      }}
    />

    <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>


    {/* Dark blur for readability */}
    <div className="absolute inset-0 bg-black/60 backdrop-blur-md -z-10"></div>

    {/* Brand color atmosphere */}
    <div className="absolute inset-0 bg-gradient-to-br from-[#00CED1]/30 via-[#20B2AA]/25 to-[#FFD700]/20"></div>




    {/* Pattern Overlay (your dotted texture) */} 
    <div className="absolute inset-0 opacity-10">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}
      ></div>
    </div>

    {/* Content */}
    <div className="relative container mx-auto px-4 py-20 md:py-32">
      <div className="text-center max-w-4xl mx-auto">
        <div className="mb-6">
          <div className="inline-block bg-white/10 backdrop-blur-md px-6 py-2 rounded-full border border-white/30 shadow-lg">
            <p className="text-sm md:text-base font-semibold italic text-white drop-shadow-lg">
              KUSOG San Fernando
            </p>
          </div>
        </div>

        <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.7)]">
          Strength. Resilience. Unity. Progress.
        </h2>

        <p className="text-xl md:text-2xl mb-8 text-white/95 drop-shadow-md leading-relaxed max-w-3xl mx-auto">
          Official Website of the Municipality of San Fernando, Camarines Sur
        </p>

        <p className="text-lg md:text-xl mb-10 text-white/90 max-w-2xl mx-auto">
          Building a stronger community through transparent governance, innovation, and dedicated public service.
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <button
            onClick={() => onNavigate('serve')}
            className="bg-[#FFD700] text-[#003366] px-8 py-4 rounded-xl font-bold hover:bg-[#F0E68C] transition-all shadow-xl hover:shadow-2xl inline-flex items-center gap-2 text-lg border-2 border-white/30"
          >
            Explore Services
            <ArrowRight size={24} />
          </button>

          <button
            onClick={() => onNavigate('explore')}
            className="bg-white/20 backdrop-blur-sm text-white border-2 border-white px-8 py-4 rounded-xl font-bold hover:bg-white/30 transition-all shadow-xl inline-flex items-center gap-2 text-lg"
          >
            Discover San Fernando
            <MapPin size={24} />
          </button>
        </div>
      </div>
    </div>

        {/* Decorative wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z" fill="white"/>
          </svg>
        </div>
      </section>

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
            <h3 className="text-2xl font-bold text-[#003366] mb-3">
              Transform
            </h3>
            <p className="text-[#003366]/80 mb-4">
              Updates, programs, and development initiatives transforming our community
            </p>
            <div className="flex items-center text-[#003366] font-semibold">
              Learn More
              <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" size={20} />
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
            <h3 className="text-2xl font-bold text-white mb-3">
              Explore
            </h3>
            <p className="text-white/90 mb-4">
              Tourism destinations and rich information about San Fernando
            </p>
            <div className="flex items-center text-white font-semibold">
              Discover More
              <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" size={20} />
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
            <h3 className="text-2xl font-bold text-white mb-3">
              Serve
            </h3>
            <p className="text-white/90 mb-4">
              LGU services, offices, citizen's charter, and organizational structure
            </p>
            <div className="flex items-center text-white font-semibold">
              View Services
              <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" size={20} />
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
            <h3 className="text-2xl font-bold text-white mb-3">
              Inform
            </h3>
            <p className="text-white/90 mb-4">
              Latest announcements and updates about municipal activities
            </p>
            <div className="flex items-center text-white font-semibold">
              Read Updates
              <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" size={20} />
            </div>
          </button>
        </div>
      </section>

      {/* Featured Event - Fiesta Banner */}
      <section className="container mx-auto px-4 py-12">
        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
          <img 
            src={fiestaImage} 
            alt="Happy Fiesta - Brgy. Pinamasagan" 
            className="w-full h-[400px] md:h-[500px] object-contain"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent">
            <div className="container mx-auto px-8 py-12 h-full flex flex-col justify-center max-w-2xl">
              <div className="bg-[#FFD700] text-[#003366] inline-block px-4 py-2 rounded-full text-sm font-bold mb-4 w-fit">
                FEATURED EVENT
              </div>
              <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.7)]">
                Happy Fiesta!
              </h2>
              <p className="text-2xl text-[#FFD700] font-bold mb-2 drop-shadow-lg">
                Brgy. Pinamasagan
              </p>
              <p className="text-xl text-white mb-6 drop-shadow-lg">
                January 18-19, 2026
              </p>
              <p className="text-lg text-white/90 mb-2 drop-shadow-md">
                Greetings from:
              </p>
              <p className="text-xl text-white font-semibold drop-shadow-lg">
                Hon. Betty Ann Kristine Danabar-Fulgentes
              </p>
              <p className="text-lg text-[#00CED1] italic drop-shadow-md">
                Municipal Mayor
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Updates & Announcements */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-12 h-1 bg-gradient-to-r from-transparent to-[#00CED1]"></div>
              <Newspaper className="text-[#00CED1]" size={32} />
              <div className="w-12 h-1 bg-gradient-to-l from-transparent to-[#00CED1]"></div>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-black drop-shadow-[0_4px_20px_rgba(0,0,0,0.7)]">
              Latest Updates & Announcements
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Stay informed with the latest news and developments from San Fernando
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white border-2 border-[#00CED1]/20 rounded-2xl p-6 hover:shadow-xl transition-all hover:border-[#00CED1]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#FFD700] rounded-lg flex items-center justify-center">
                  <Lightbulb className="text-[#003366]" size={20} />
                </div>
                <span className="bg-gradient-to-r from-[#FFD700] to-[#F0E68C] text-[#003366] text-xs px-3 py-1 rounded-full font-bold">
                  DEVELOPMENT
                </span>
              </div>
              <h3 className="font-bold text-[#003366] mb-3 text-xl">
                New Infrastructure Projects 2026
              </h3>
              <p className="text-sm text-gray-500 mb-3">
                January 20, 2026
              </p>
              <p className="text-gray-700 leading-relaxed">
                San Fernando announces major infrastructure development initiatives including road improvements and public facilities.
              </p>
            </div>

            <div className="bg-white border-2 border-[#00CED1]/20 rounded-2xl p-6 hover:shadow-xl transition-all hover:border-[#00CED1]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#00CED1] rounded-lg flex items-center justify-center">
                  <Heart className="text-white" size={20} />
                </div>
                <span className="bg-gradient-to-r from-[#00CED1] to-[#20B2AA] text-white text-xs px-3 py-1 rounded-full font-bold">
                  HEALTH
                </span>
              </div>
              <h3 className="font-bold text-[#003366] mb-3 text-xl">
                Free Health Services Program
              </h3>
              <p className="text-sm text-gray-500 mb-3">
                January 18, 2026
              </p>
              <p className="text-gray-700 leading-relaxed">
                Municipal health center offers free medical consultations and health screenings for all residents this month.
              </p>
            </div>

            <div className="bg-white border-2 border-[#00CED1]/20 rounded-2xl p-6 hover:shadow-xl transition-all hover:border-[#00CED1]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#003366] rounded-lg flex items-center justify-center">
                  <Briefcase className="text-white" size={20} />
                </div>
                <span className="bg-gradient-to-r from-[#003366] to-[#004d7a] text-white text-xs px-3 py-1 rounded-full font-bold">
                  BUSINESS
                </span>
              </div>
              <h3 className="font-bold text-[#003366] mb-3 text-xl">
                Business Permit Renewal Reminder
              </h3>
              <p className="text-sm text-gray-500 mb-3">
                January 15, 2026
              </p>
              <p className="text-gray-700 leading-relaxed">
                Annual business permit renewal is now open. Submit your applications before the January 31 deadline.
              </p>
            </div>
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
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-black drop-shadow-[0_4px_20px_rgba(0,0,0,0.7)]">
            KUSOG San Fernando Values
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Building our community on the foundations of strength, resilience, unity, and progress
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center group">
            <div className="w-24 h-24 bg-gradient-to-br from-[#FFD700] to-[#F0E68C] rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform">
              <TrendingUp className="text-[#003366]" size={48} />
            </div>
            <h3 className="font-bold text-[#003366] mb-3 text-xl">
              Strength
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Building a robust and capable local government that serves with power and purpose
            </p>
          </div>

          <div className="text-center group">
            <div className="w-24 h-24 bg-gradient-to-br from-[#00CED1] to-[#20B2AA] rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform">
              <Shield className="text-white" size={48} />
            </div>
            <h3 className="font-bold text-[#003366] mb-3 text-xl">
              Resilience
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Adapting and thriving through challenges with unwavering determination
            </p>
          </div>

          <div className="text-center group">
            <div className="w-24 h-24 bg-gradient-to-br from-[#003366] to-[#004d7a] rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform">
              <Users className="text-white" size={48} />
            </div>
            <h3 className="font-bold text-[#003366] mb-3 text-xl">
              Unity
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Working together as one community towards shared goals and prosperity
            </p>
          </div>

          <div className="text-center group">
            <div className="w-24 h-24 bg-gradient-to-br from-[#17a2b8] to-[#00CED1] rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform">
              <Award className="text-white" size={48} />
            </div>
            <h3 className="font-bold text-[#003366] mb-3 text-xl">
              Progress
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Continuously advancing and improving for a better future for all
            </p>
          </div>
        </div>
      </section>

      {/* Quick Access Services */}
      <section className="bg-gradient-to-br from-[#00CED1] via-[#20B2AA] to-[#17a2b8] py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.7)]">
              Quick Access to Services
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto drop-shadow-md">
              Essential municipal services at your fingertips
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { icon: FileText, label: 'Documents', color: 'from-[#FFD700] to-[#F0E68C]' },
              { icon: Briefcase, label: 'Business', color: 'from-[#003366] to-[#004d7a]' },
              { icon: Building2, label: 'Building', color: 'from-[#FFD700] to-[#F0E68C]' },
              { icon: Users, label: 'Community', color: 'from-[#003366] to-[#004d7a]' },
              { icon: Heart, label: 'Social', color: 'from-[#FFD700] to-[#F0E68C]' },
              { icon: GraduationCap, label: 'Education', color: 'from-[#003366] to-[#004d7a]' }
            ].map((service, index) => (
              <button
                key={index}
                onClick={() => onNavigate('serve')}
                className="bg-white rounded-2xl p-6 hover:shadow-2xl transition-all transform hover:-translate-y-2 group"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform shadow-md`}>
                  <service.icon className="text-white" size={28} />
                </div>
                <p className="font-bold text-[#003366] text-sm">
                  {service.label}
                </p>
              </button>
            ))}
          </div>

          <div className="text-center mt-10">
            <button
              onClick={() => onNavigate('serve')}
              className="bg-white text-[#00CED1] px-10 py-4 rounded-xl font-bold hover:bg-[#FFD700] hover:text-[#003366] transition-all shadow-xl text-lg inline-flex items-center gap-2"
            >
              View All Services
              <ArrowRight size={24} />
            </button>
          </div>
        </div>
      </section>

      {/* Live backend integration */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 space-y-10">
          <div className="text-center">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-black drop-shadow-[0_4px_20px_rgba(0,0,0,0.7)]">Connected Services</h2>
            
            <p className="text-gray-600 max-w-2xl mx-auto">
              These blocks are powered by the Node.js + MySQL API. Use them to verify the deployment and manage sample users in your database.
            </p>
            <br></br>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <BackendStatus />
            <UserDirectory />
          </div>

        </div>
      </section>
    </div>
  );
} 

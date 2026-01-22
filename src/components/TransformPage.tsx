import React from 'react';
import { 
  Lightbulb, 
  TrendingUp, 
  Wrench, 
  Users,
  Building2,
  Leaf,
  Heart,
  GraduationCap,
  ArrowRight,
  Calendar,
  CheckCircle
} from 'lucide-react';

export function TransformPage() {
  const developmentProjects = [
    {
      id: 1,
      title: 'Municipal Road Network Improvement',
      category: 'Infrastructure',
      status: 'Ongoing',
      progress: 65,
      description: 'Comprehensive road rehabilitation and expansion across 12 barangays to improve accessibility and transportation.',
      budget: '₱45,000,000',
      timeline: 'January 2026 - December 2026',
      color: 'from-[#FFD700] to-[#F0E68C]'
    },
    {
      id: 2,
      title: 'Sustainable Agriculture Program',
      category: 'Agriculture',
      status: 'Active',
      progress: 80,
      description: 'Supporting local farmers with modern farming techniques, equipment subsidies, and market access programs.',
      budget: '₱18,000,000',
      timeline: 'October 2025 - September 2026',
      color: 'from-[#00CED1] to-[#20B2AA]'
    },
    {
      id: 3,
      title: 'Digital Governance Initiative',
      category: 'Technology',
      status: 'Planning',
      progress: 30,
      description: 'Implementing online services and digital platforms for more efficient and transparent government operations.',
      budget: '₱12,000,000',
      timeline: 'March 2026 - March 2027',
      color: 'from-[#003366] to-[#004d7a]'
    },
    {
      id: 4,
      title: 'Youth Skills Development Center',
      category: 'Education',
      status: 'Planning',
      progress: 20,
      description: 'Establishing a training center to provide youth with technical and vocational skills for employment.',
      budget: '₱25,000,000',
      timeline: 'June 2026 - June 2027',
      color: 'from-[#17a2b8] to-[#00CED1]'
    }
  ];

  const programs = [
    {
      icon: Heart,
      title: 'Health for All Program',
      description: 'Free medical consultations, medicines, and health screenings for all residents',
      beneficiaries: '5,000+ residents',
      color: 'bg-gradient-to-br from-[#FFD700] to-[#F0E68C]'
    },
    {
      icon: GraduationCap,
      title: 'Education Assistance',
      description: 'Scholarship programs and educational support for deserving students',
      beneficiaries: '800+ students',
      color: 'bg-gradient-to-br from-[#00CED1] to-[#20B2AA]'
    },
    {
      icon: Leaf,
      title: 'Green San Fernando',
      description: 'Environmental protection and tree planting initiatives across the municipality',
      beneficiaries: '50,000+ trees planted',
      color: 'bg-gradient-to-br from-[#003366] to-[#004d7a]'
    },
    {
      icon: Users,
      title: 'Livelihood Programs',
      description: 'Skills training and business capital support for local entrepreneurs',
      beneficiaries: '1,200+ families',
      color: 'bg-gradient-to-br from-[#17a2b8] to-[#00CED1]'
    }
  ];

  const updates = [
    {
      date: 'January 22, 2026',
      title: 'New Municipal Gymnasium Construction Begins',
      description: 'Groundbreaking ceremony held for the new multi-purpose sports facility that will serve the youth and sports programs.'
    },
    {
      date: 'January 20, 2026',
      title: 'Solar Street Lights Installation Complete',
      description: 'All 15 barangays now have solar-powered street lights, enhancing safety and reducing energy costs.'
    },
    {
      date: 'January 18, 2026',
      title: 'Water System Upgrade Reaches 80% Completion',
      description: 'The improved water distribution system will provide clean water access to 3,000 additional households.'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#FFD700] via-[#F0E68C] to-[#FFD700] text-[#003366] py-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(45deg, #003366 25%, transparent 25%), linear-gradient(-45deg, #003366 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #003366 75%), linear-gradient(-45deg, transparent 75%, #003366 75%)',
            backgroundSize: '20px 20px',
            backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px'
          }}></div>
        </div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-3 mb-6">
              <Lightbulb className="text-[#003366]" size={48} />
              <h1 className="text-5xl md:text-6xl font-bold">
                Transform
              </h1>
            </div>
            <p className="text-2xl mb-6 text-[#003366]/90">
              Building a Better San Fernando Through Innovation & Development
            </p>
            <p className="text-lg text-[#003366]/80 max-w-3xl mx-auto">
              Discover the programs, projects, and initiatives that are transforming our municipality into a progressive and sustainable community.
            </p>
          </div>
        </div>
      </section>

      {/* Development Projects */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#003366] mb-4">
            Major Development Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Infrastructure and development initiatives transforming San Fernando
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {developmentProjects.map((project) => (
            <div key={project.id} className="bg-white border-2 border-gray-200 rounded-2xl overflow-hidden hover:shadow-2xl transition-all">
              <div className={`bg-gradient-to-r ${project.color} p-6`}>
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <span className={`text-xs px-3 py-1 rounded-full font-bold ${
                      project.status === 'Ongoing' ? 'bg-white/90 text-[#003366]' : 
                      project.status === 'Active' ? 'bg-white/90 text-[#00CED1]' : 
                      'bg-white/70 text-[#003366]'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  <span className="text-xs bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-white font-semibold">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <div className="mt-4">
                  <div className="flex justify-between text-sm text-white/90 mb-2">
                    <span>Progress</span>
                    <span className="font-bold">{project.progress}%</span>
                  </div>
                  <div className="w-full bg-white/30 rounded-full h-3">
                    <div 
                      className="bg-white rounded-full h-3 transition-all shadow-md"
                      style={{ width: `${project.progress}%` }}
                    ></div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {project.description}
                </p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-gray-500 mb-1">Budget</p>
                    <p className="font-bold text-[#003366]">{project.budget}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 mb-1">Timeline</p>
                    <p className="font-bold text-[#003366]">{project.timeline}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Community Programs */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#003366] mb-4">
              Active Community Programs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Empowering residents through dedicated social programs and initiatives
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programs.map((program, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all">
                <div className={`${program.color} p-8 text-center`}>
                  <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                    <program.icon className="text-[#003366]" size={40} />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-[#003366] mb-3 text-xl text-center">
                    {program.title}
                  </h3>
                  <p className="text-gray-700 mb-4 text-center leading-relaxed">
                    {program.description}
                  </p>
                  <div className="bg-gradient-to-r from-[#00CED1] to-[#20B2AA] text-white text-center py-2 px-4 rounded-lg">
                    <p className="text-sm font-bold">{program.beneficiaries}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Updates */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#003366] mb-4">
            Development Updates
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Latest progress on our transformation initiatives
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {updates.map((update, index) => (
            <div key={index} className="bg-white border-l-4 border-[#00CED1] rounded-r-2xl p-6 shadow-lg hover:shadow-xl transition-all">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#FFD700] to-[#F0E68C] rounded-xl flex items-center justify-center">
                    <CheckCircle className="text-[#003366]" size={24} />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <Calendar className="text-[#00CED1]" size={16} />
                    <span className="text-sm text-gray-500">{update.date}</span>
                  </div>
                  <h3 className="font-bold text-[#003366] mb-2 text-xl">
                    {update.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {update.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-[#00CED1] via-[#20B2AA] to-[#17a2b8] py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6 drop-shadow-lg">
            Join Us in Building a Better San Fernando
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto drop-shadow-md">
            Your participation and support help us create lasting positive change in our community
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="bg-[#FFD700] text-[#003366] px-8 py-4 rounded-xl font-bold hover:bg-white transition-all shadow-xl inline-flex items-center gap-2">
              Get Involved
              <ArrowRight size={20} />
            </button>
            <button className="bg-white/20 backdrop-blur-sm border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white/30 transition-all shadow-xl inline-flex items-center gap-2">
              View All Projects
              <TrendingUp size={20} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

import React from 'react';
import {
  Lightbulb,
  Users,
  Leaf,
  Heart,
  GraduationCap,
  Calendar,
  CheckCircle,
  TrendingUp,
  ArrowRight
} from 'lucide-react';
import { HeroCarousel } from './HeroCarousel';
import { useContent } from '../contexts/ContentContext';

const IconMap: Record<string, any> = {
  Lightbulb, Users, Leaf, Heart, GraduationCap, Calendar, CheckCircle, TrendingUp, ArrowRight
};

export function TransformPage() {
  const { content } = useContent();
  const c = content.transform;

  return (
    <div>
      {/* Hero Section */}
      <HeroCarousel
        pageId="transform"
        title={c.title}
        subtitle={c.subtitle}
        description={c.description}
        icon={Lightbulb}
        defaultImages={c.heroImages || []}
      />

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
          {c.developmentProjects?.map((project: any) => (
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
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
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
            <h2 className="text-3xl md:text-4xl font-bold text-[#003366] mb-4">
              Active Community Programs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Empowering residents through dedicated social programs and initiatives
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {c.programs?.map((program: any, index: number) => {
              const IconComp = IconMap[program.iconType] || Heart;
              return (
                <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all">
                  <div className={`${program.color} p-8 text-center`}>
                    <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                      <IconComp className="text-[#003366]" size={40} />
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
              );
            })}
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
          {c.updates?.map((update: any, index: number) => (
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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 drop-shadow-lg">
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

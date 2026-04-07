import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import {
  FileText,
  Briefcase,
  Building2,
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
import { HeroCarousel } from './HeroCarousel';
import { useContent } from '../contexts/ContentContext';

interface Service {
  id: number;
  title: string;
  category: string;
  description: string;
  requirements: string[];
  processingTime: string;
  iconType?: string;
}

const IconMap: Record<string, any> = {
  FileText, Briefcase, Building2, Heart, GraduationCap, Scale, Home, Leaf
};

export function ServicesPage() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const { content } = useContent();
  const c = content.serve;

  useEffect(() => {
    if (selectedService) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedService]);

  const categories = Array.from(new Set(c.services?.map((s: any) => s.category) || []));

  return (
    <div className="min-h-screen bg-white">
      {/* Page Header */}
      <HeroCarousel
        pageId="serve"
        title={c.title}
        subtitle={c.subtitle}
        description={c.description}
        icon={HandHeart}
        defaultImages={c.heroImages || []}
      />

      {/* Services Content */}
      <div className="container mx-auto px-4 py-12">
        {categories.map((category: any, catIndex: number) => (
          <div key={category} className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <div className={`w-12 h-1 bg-gradient-to-r ${catIndex % 4 === 0 ? 'from-[#FFD700] to-[#F0E68C]' :
                catIndex % 4 === 1 ? 'from-[#00CED1] to-[#20B2AA]' :
                  catIndex % 4 === 2 ? 'from-[#003366] to-[#004d7a]' :
                    'from-[#17a2b8] to-[#00CED1]'
                }`}></div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#003366]">
                {category}
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {c.services
                ?.filter((service: any) => service.category === category)
                .map((service: any, idx: number) => {
                  const colorClass = idx % 4 === 0 ? 'from-[#FFD700] to-[#F0E68C]' :
                    idx % 4 === 1 ? 'from-[#00CED1] to-[#20B2AA]' :
                      idx % 4 === 2 ? 'from-[#003366] to-[#004d7a]' :
                        'from-[#17a2b8] to-[#00CED1]';
                  const IconComp = IconMap[service.iconType || ''] || FileText;
                  
                  return (
                    <div
                      key={service.id}
                      className="bg-white border-2 border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all hover:border-[#00CED1]"
                    >
                      <div className={`bg-gradient-to-r ${colorClass} p-6`}>
                        <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mb-4 shadow-md">
                          <IconComp className="text-[#003366]" size={28} />
                        </div>
                        <h3 className="font-bold text-white mb-2 text-lg md:text-xl drop-shadow-md">
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
      {selectedService && createPortal(
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="sticky top-0 bg-gradient-to-r from-[#003366] to-[#004d7a] text-white p-6 rounded-t-2xl">
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-[#FFD700] rounded-xl flex items-center justify-center shadow-lg">
                    {(() => {
                      const SelectedIconComp = IconMap[selectedService.iconType || ''] || FileText;
                      return <SelectedIconComp className="text-[#003366]" size={32} />
                    })()}
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold drop-shadow-md">{selectedService.title}</h3>
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
                  {selectedService.requirements?.map((req: string, index: number) => (
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

              <button
                onClick={() => {
                  import('jspdf').then(({ jsPDF }) => {
                    const doc = new jsPDF();

                    // Header
                    doc.setFontSize(16);
                    doc.setFont("helvetica", "bold");
                    doc.text("LGU SAN FERNANDO - APPLICATION FORM", 105, 20, { align: "center" });

                    doc.setFontSize(12);
                    doc.setFont("helvetica", "normal");

                    // Service Details
                    doc.text(`Service: ${selectedService.title}`, 20, 40);
                    doc.text(`Category: ${selectedService.category}`, 20, 50);

                    // Instructions
                    doc.setFont("helvetica", "bold");
                    doc.text("Please complete the following details:", 20, 70);

                    // Form Fields
                    doc.setFont("helvetica", "normal");
                    doc.text("Full Name:", 20, 90);
                    doc.line(50, 90, 190, 90);

                    doc.text("Address:", 20, 105);
                    doc.line(45, 105, 190, 105);

                    doc.text("Contact Number:", 20, 120);
                    doc.line(60, 120, 190, 120);

                    doc.text("Email Address:", 20, 135);
                    doc.line(55, 135, 190, 135);

                    doc.text("Date of Birth:", 20, 150);
                    doc.line(50, 150, 190, 150);

                    // Requirements section
                    doc.setFont("helvetica", "bold");
                    doc.text("Requirements to be attached with this form:", 20, 170);

                    doc.setFont("helvetica", "normal");
                    selectedService.requirements?.forEach((req: string, idx: number) => {
                      // Checkbox
                      doc.rect(20, 178 + (idx * 10), 5, 5);
                      // Requirement text
                      doc.text(req, 30, 183 + (idx * 10));
                    });

                    // Footer / Signature
                    const signatureY = 190 + ((selectedService.requirements?.length || 0) * 10) + 20;
                    doc.text("I hereby certify that the information provided above is true and correct.", 20, signatureY);

                    doc.line(20, signatureY + 30, 90, signatureY + 30);
                    doc.text("Signature over Printed Name", 25, signatureY + 35);

                    doc.line(130, signatureY + 30, 190, signatureY + 30);
                    doc.text("Date", 155, signatureY + 35);

                    // Save the PDF
                    doc.save(`${selectedService.title.replace(/\s+/g, '_')}_Application_Form.pdf`);
                  });
                }}
                className="w-full bg-gradient-to-r from-[#00CED1] to-[#20B2AA] text-white py-4 px-6 rounded-xl font-bold hover:shadow-xl transition-all"
              >
                Download application form (PDF)
              </button>

              <p className="text-sm text-gray-500 text-center mt-4">
                Please visit the Municipal Hall to process this service after completing the form
              </p>
            </div>
          </div>
        </div>,
        document.body
      )}

    </div>
  );
}
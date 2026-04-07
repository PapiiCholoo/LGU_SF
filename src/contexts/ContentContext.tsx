import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

// We import default images as base strings so they resolve via Vite's asset pipeline initially.
// For dynamic edits, users will put actual URLs (e.g., https://...)
import heroBg from '../assets/hero_bg.jpg';
import sfbeach from '../assets/sfbeach.jpg';
import isarog from '../assets/isarog.jpg';
import fiesta2 from '../assets/fiesta2.jpg';
import fiesta from '../assets/fiesta.png';
import heritageImage from '../assets/heritage.jpg';

export interface PageContent {
  title: string;
  subtitle: string;
  description: string;
  [key: string]: any;
}

export interface ContentState {
  home: PageContent;
  serve: PageContent;
  explore: PageContent;
  inform: PageContent;
  transform: PageContent;
}

const defaultContent: ContentState = {
  home: {
    title: "San Fernando",
    subtitle: "Gateway to the Isarog Wonders",
    description: "Experience the rich heritage, vibrant culture, and natural beauty of our beloved municipality.",
    heroImages: [heroBg, isarog, sfbeach, fiesta2],
    featuredEvent: {
      tag: "FEATURED EVENT",
      title: "Happy Fiesta!",
      subtitle: "Brgy. Pinamasagan",
      date: "January 18-19, 2026",
      greetings: "Greetings from:",
      mayorName: "Hon. Betty Ann Kristine Danabar-Fulgentes",
      mayorTitle: "Municipal Mayor",
      image: fiesta
    },
    latestUpdates: [
      {
        tag: "DEVELOPMENT",
        title: "New Infrastructure Projects 2026",
        date: "January 20, 2026",
        description: "San Fernando announces major infrastructure development initiatives including road improvements and public facilities.",
        iconType: "Lightbulb",
        colorClass1: "from-[#FFD700] to-[#F0E68C]",
        colorClass2: "bg-[#FFD700]"
      },
      {
        tag: "HEALTH",
        title: "Free Health Services Program",
        date: "January 18, 2026",
        description: "Municipal health center offers free medical consultations and health screenings for all residents this month.",
        iconType: "Heart",
        colorClass1: "from-[#00CED1] to-[#20B2AA]",
        colorClass2: "bg-[#00CED1]"
      },
      {
        tag: "BUSINESS",
        title: "Business Permit Renewal Reminder",
        date: "January 15, 2026",
        description: "Annual business permit renewal is now open. Submit your applications before the January 31 deadline.",
        iconType: "Briefcase",
        colorClass1: "from-[#003366] to-[#004d7a]",
        colorClass2: "bg-[#003366]"
      }
    ],
    kusogValues: [
      { title: "Strength", desc: "Building a robust and capable local government that serves with power and purpose", iconType: "TrendingUp", colorClass: "from-[#FFD700] to-[#F0E68C]" },
      { title: "Resilience", desc: "Adapting and thriving through challenges with unwavering determination", iconType: "Shield", colorClass: "from-[#00CED1] to-[#20B2AA]" },
      { title: "Unity", desc: "Working together as one community towards shared goals and prosperity", iconType: "Users", colorClass: "from-[#003366] to-[#004d7a]" },
      { title: "Progress", desc: "Continuously advancing and improving for a better future for all", iconType: "Award", colorClass: "from-[#17a2b8] to-[#00CED1]" }
    ]
  },
  serve: {
    title: "Serve",
    subtitle: "Dedicated to Serving the People of San Fernando",
    description: "Access essential municipal services, offices, and programs designed to serve our community with excellence.",
    heroImages: [heroBg, sfbeach],
    services: [
      {
        id: 1, title: 'Birth Certificate', category: 'Civil Services', description: 'Request for certified true copy of birth certificate registered in San Fernando.',
        requirements: ['Valid government-issued ID', 'Payment of documentary stamp tax', 'Completed application form', 'Authorization letter (if representative)'], processingTime: '3-5 business days', iconType: 'FileText'
      },
      {
        id: 2, title: 'Marriage Certificate', category: 'Civil Services', description: 'Request for certified true copy of marriage certificate.',
        requirements: ['Valid government-issued ID', 'Payment of documentary stamp tax', 'Marriage details (date, names)', 'Authorization letter (if representative)'], processingTime: '3-5 business days', iconType: 'FileText'
      },
      {
        id: 3, title: 'Death Certificate', category: 'Civil Services', description: 'Request for certified true copy of death certificate.',
        requirements: ['Valid government-issued ID of requester', 'Payment of documentary stamp tax', 'Death details', 'Proof of relationship to deceased'], processingTime: '3-5 business days', iconType: 'FileText'
      },
      {
        id: 5, title: 'Business Permit (New)', category: 'Business Services', description: 'Application for new business permit and license to operate.',
        requirements: ['DTI or SEC Registration', 'Barangay clearance', 'Fire safety inspection certificate', 'Sanitary permit', 'Proof of business location', 'Payment of fees and taxes'], processingTime: '7-10 business days', iconType: 'Briefcase'
      },
      {
        id: 7, title: 'Building Permit', category: 'Building & Construction', description: 'Application for construction or renovation of structures.',
        requirements: ['Land title or proof of ownership', 'Building plans (sealed by licensed engineer/architect)', 'Tax declaration', 'Barangay clearance', 'Locational clearance', 'Payment of permit fees'], processingTime: '15-20 business days', iconType: 'Building2'
      },
      {
        id: 9, title: 'Senior Citizen ID', category: 'Social Services', description: 'Issuance of senior citizen identification card.',
        requirements: ['Birth certificate or valid ID showing age (60+)', '2x2 ID photo', 'Barangay certificate', 'Proof of residency'], processingTime: '5-7 business days', iconType: 'Heart'
      },
      {
        id: 12, title: 'Scholarship Program', category: 'Educational Services', description: 'Application for municipal scholarship grants.',
        requirements: ['Certificate of grades (previous semester)', 'Certificate of enrollment', 'Certificate of indigency', 'Birth certificate', 'Valid ID', 'Barangay clearance'], processingTime: '15-20 business days', iconType: 'GraduationCap'
      },
      {
        id: 13, title: 'Municipal Clearance', category: 'Legal & Clearances', description: 'Issuance of municipal clearance certificate.',
        requirements: ['Valid government-issued ID', 'Barangay clearance', 'Cedula', 'Payment of clearance fee', 'Purpose of clearance'], processingTime: '1-3 business days', iconType: 'Scale'
      },
      {
        id: 14, title: 'Garbage Collection Request', category: 'Environmental Services', description: 'Request for special garbage collection service.',
        requirements: ['Barangay certification', 'Valid ID', 'Payment of collection fee (if applicable)'], processingTime: '3-5 business days', iconType: 'Leaf'
      }
    ]
  },
  explore: {
    title: "Explore",
    subtitle: "Discover the Beauty and Rich Culture of San Fernando",
    description: "Explore our municipality's stunning attractions, vibrant culture, and warm community spirit.",
    heroImages: [sfbeach, isarog, heritageImage, fiesta2],
    attractions: [
      { id: 1, name: 'San Fernando Beach', category: 'Beach', description: 'Crystal clear waters and pristine white sand beaches perfect for swimming and relaxation.', image: sfbeach, iconType: 'Waves', color: 'from-[#00CED1] to-[#20B2AA]' },
      { id: 2, name: 'Mount Isarog Views', category: 'Nature', description: 'Breathtaking views of the majestic Mount Isarog and surrounding natural landscapes.', image: isarog, iconType: 'Mountain', color: 'from-[#FFD700] to-[#F0E68C]' },
      { id: 3, name: 'Heritage Sites', category: 'Culture', description: 'Historical landmarks and cultural heritage sites showcasing San Fernando\'s rich history.', image: heritageImage, iconType: 'Building2', color: 'from-[#003366] to-[#004d7a]' },
      { id: 4, name: 'Fiesta Celebrations', category: 'Events', description: 'Vibrant festivals and cultural celebrations featuring local traditions and community spirit.', image: fiesta2, iconType: 'Heart', color: 'from-[#17a2b8] to-[#00CED1]' }
    ],
    municipalityFacts: [
      { iconType: 'Users', label: 'Population', value: '42,000+', color: 'from-[#FFD700] to-[#F0E68C]' },
      { iconType: 'MapPin', label: 'Barangays', value: '22', color: 'from-[#00CED1] to-[#20B2AA]' },
      { iconType: 'TrendingUp', label: 'Land Area', value: '155 km²', color: 'from-[#003366] to-[#004d7a]' },
      { iconType: 'Award', label: 'Founded', value: '1583', color: 'from-[#17a2b8] to-[#00CED1]' }
    ],
    barangays: ['Alianza', 'Beberon', 'Bical', 'Bocal', 'Bonifacio', 'Buenavista', 'Calascagas', 'Cotmo', 'Daculang Tubig', 'Del Pilar', 'Gñaran', 'Grijalvo', 'Lupi', 'Maragñi', 'Pamukid', 'Pinamasagan', 'Pipian', 'Planza', 'Rizal', 'San Joaquin', 'Santa Cruz', 'Tagpocol'],
    aboutText: [
      "San Fernando is a first-class municipality in the province of Camarines Sur, Philippines. Located in the Bicol Region, our municipality is known for its rich agricultural lands, beautiful coastal areas, and warm, hospitable people.",
      "With a history dating back to 1583, San Fernando has evolved into a progressive municipality while maintaining its cultural heritage and traditions. The town is strategically located near Mount Isarog, offering stunning natural landscapes and opportunities for eco-tourism.",
      "Our 22 barangays work together under the leadership of the local government to provide excellent services and create opportunities for all residents. San Fernando is committed to sustainable development, environmental protection, and improving the quality of life for all its citizens."
    ]
  },
  inform: {
    title: "Inform",
    subtitle: "Stay Updated with the Latest News & Announcements",
    description: "Get the latest information about municipal activities, programs, events, and important announcements from San Fernando.",
    heroImages: [fiesta],
    announcements: [
      { id: 1, title: 'Happy Fiesta - Brgy. Pinamasagan', category: 'events', type: 'Event', date: 'January 18-19, 2026', description: 'Join us in celebrating the annual fiesta...', image: fiesta, color: 'from-[#FFD700] to-[#F0E68C]', priority: 'featured' },
      { id: 2, title: 'New Infrastructure Projects Announcement', category: 'announcements', type: 'Development', date: 'January 20, 2026', description: 'The municipality announces major infrastructure development initiatives...', color: 'from-[#00CED1] to-[#20B2AA]', priority: 'high' }
    ],
    upcomingEvents: [
      { date: 'Jan 25', title: 'Job Fair 2026', location: 'Municipal Gymnasium' },
      { date: 'Jan 28', title: 'Farmers Consultation Meeting', location: 'Agriculture Office' }
    ],
    reminders: [
      "Business permit renewal deadline: January 31, 2026",
      "Municipal office hours: Monday-Friday, 8:00 AM - 5:00 PM",
      "Free health services available at the Municipal Health Center",
      "Report emergencies to the Municipal Disaster Risk Reduction Office"
    ]
  },
  transform: {
    title: "Transform",
    subtitle: "Building a Better San Fernando Through Innovation & Development",
    description: "Discover the programs, projects, and initiatives that are transforming our municipality into a progressive and sustainable community.",
    heroImages: [heroBg, isarog],
    developmentProjects: [
      { id: 1, title: 'Municipal Road Network Improvement', category: 'Infrastructure', status: 'Ongoing', progress: 65, description: 'Comprehensive road rehabilitation...', budget: '₱45,000,000', timeline: 'Jan 2026 - Dec 2026', color: 'from-[#FFD700] to-[#F0E68C]' },
      { id: 2, title: 'Sustainable Agriculture Program', category: 'Agriculture', status: 'Active', progress: 80, description: 'Supporting local farmers...', budget: '₱18,000,000', timeline: 'Oct 2025 - Sep 2026', color: 'from-[#00CED1] to-[#20B2AA]' }
    ],
    programs: [
      { iconType: 'Heart', title: 'Health for All Program', description: 'Free medical consultations, medicines...', beneficiaries: '5,000+ residents', color: 'bg-gradient-to-br from-[#FFD700] to-[#F0E68C]' },
      { iconType: 'GraduationCap', title: 'Education Assistance', description: 'Scholarship programs...', beneficiaries: '800+ students', color: 'bg-gradient-to-br from-[#00CED1] to-[#20B2AA]' }
    ],
    updates: [
      { date: 'January 22, 2026', title: 'New Municipal Gymnasium Construction Begins', description: 'Groundbreaking ceremony held...' },
      { date: 'January 20, 2026', title: 'Solar Street Lights Installation Complete', description: 'All 15 barangays now have solar-powered street lights...' }
    ]
  }
};

interface ContentContextType {
  content: ContentState;
  updatePageContent: (pageKey: keyof ContentState, newContent: PageContent) => void;
}

const ContentContext = createContext<ContentContextType | undefined>(undefined);

export function ContentProvider({ children }: { children: ReactNode }) {
  const [content, setContent] = useState<ContentState>(defaultContent);

  useEffect(() => {
    const storedContent = localStorage.getItem('lgu_sf_content');
    if (storedContent) {
      try {
        const parsed = JSON.parse(storedContent);
        setContent(prev => ({ ...prev, ...parsed }));
      } catch (e) {
        console.error("Failed to parse stored content", e);
      }
    }
  }, []);

  const updatePageContent = (pageKey: keyof ContentState, newContent: PageContent) => {
    setContent(prev => {
      const updated = { ...prev, [pageKey]: newContent };
      localStorage.setItem('lgu_sf_content', JSON.stringify(updated));
      return updated;
    });
  };

  return (
    <ContentContext.Provider value={{ content, updatePageContent }}>
      {children}
    </ContentContext.Provider>
  );
}

export function useContent() {
  const context = useContext(ContentContext);
  if (context === undefined) {
    throw new Error('useContent must be used within a ContentProvider');
  }
  return context;
}

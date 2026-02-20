
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

interface FooterProps {
  onNavigate?: (page: any) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-slate-900 text-white mt-16 border-t-8 border-[var(--color-brand-turquoise)]">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-[var(--color-brand-khaki)]">
              Republic of the Philippines
            </h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              Official website of the Local Government Unit of San Fernando, Camarines Sur.
              Committed to transparent governance and excellent public service.
            </p>
            <p className="text-sm font-semibold text-[var(--color-brand-aqua)] mt-4 italic">
              KUSOG San Fernando
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-[#FFD700]">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-gray-300 hover:text-[#00CED1] transition-colors">
                  Freedom of Information
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-[#00CED1] transition-colors">
                  Transparency Seal
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-[#00CED1] transition-colors">
                  Citizen's Charter
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-[#00CED1] transition-colors">
                  Accessibility Statement
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-[#00CED1] transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>


          {/* Internal Systems (CMS) */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-[var(--color-brand-khaki)]">
              Internal Systems
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => onNavigate?.('admin-executive')}
                  className="text-gray-300 hover:text-[var(--color-brand-aqua)] transition-colors text-left"
                >
                  Executive Portal (CMS)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate?.('admin-legislative')}
                  className="text-gray-300 hover:text-[var(--color-brand-aqua)] transition-colors text-left"
                >
                  Legislative Portal (CMS)
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-[#FFD700]">
              Contact Information
            </h3>
            <div className="space-y-3 text-sm text-gray-300">
              <div className="flex gap-3">
                <MapPin className="flex-shrink-0 mt-1 text-[#00CED1]" size={16} />
                <p>
                  Municipal Hall, San Fernando<br />
                  Camarines Sur, Philippines
                </p>
              </div>
              <div className="flex gap-3 items-center">
                <Phone className="flex-shrink-0 text-[#00CED1]" size={16} />
                <p>(054) XXX-XXXX</p>
              </div>
              <div className="flex gap-3 items-center">
                <Mail className="flex-shrink-0 text-[#00CED1]" size={16} />
                <p>officeofthemayor@sanfernandocamsur.gov.ph</p>
              </div>
              <div className="flex gap-3">
                <Clock className="flex-shrink-0 mt-1 text-[#00CED1]" size={16} />
                <p>
                  Monday - Friday<br />
                  8:00 AM - 5:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* Bottom Bar */}
      <div className="bg-[#002244] py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-2 text-sm text-gray-400 text-center lg:text-left">
            <p>
              © 2026 Local Government Unit of San Fernando, Camarines Sur. All rights reserved.
            </p>
            <p className="text-xs">
              Government Website Template Design (GWTD) Compliant
            </p>
          </div>
        </div>
      </div>

      {/* Top Government Banner */}
      <div className="bg-[#002244] py-1">
        <div className="container mx-auto px-4">
          <p className="text-xs text-center text-gray-300">
            Republic of the Philippines
          </p>
        </div>
      </div>
    </footer>
  );
}
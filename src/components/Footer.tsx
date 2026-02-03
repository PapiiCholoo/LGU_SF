import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#003366] to-[#004d7a] text-white mt-16">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-[#FFD700]">
              Republic of the Philippines
            </h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              Official website of the Local Government Unit of San Fernando, Camarines Sur.
              Committed to transparent governance and excellent public service.
            </p>
            <p className="text-sm font-semibold text-[#00CED1] mt-4 italic">
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
                <p>lgu.sanfernando@gov.ph</p>
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
          <div className="flex flex-col md:flex-row justify-between items-center gap-2 text-sm text-gray-400">
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
"use client";

import React from "react";
import NextImage from "next/image";
import { Phone, Mail, MapPin, Heart } from "lucide-react";

export default function Footer() {
  // Use African Pride logo consistently across all pages
  const logoInfo = {
    src: "/images/Africans-pride-logo-horizontal.png",
    alt: "African Pride"
  };

  return (
    <footer className="bg-mist border-t border-nude">
      <div className="max-w-7xl mx-auto px-8 lg:px-16 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="mb-6">
              <NextImage
                src={logoInfo.src}
                alt={logoInfo.alt}
                width={280}
                height={84}
                className="h-24 w-auto object-contain"
              />
            </div>
            <p className="font-manrope text-stone mb-8 max-w-md leading-relaxed">
              A central and unifying platform celebrating African Identity, Creativity, and Community through fashion and philanthropy
            </p>
            
            {/* WhatsApp Contact */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-charcoal flex items-center justify-center sharp-edges">
                  <Phone className="w-4 h-4 text-pearl" />
                </div>
                <a 
                  href="https://wa.me/447376712695" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="font-manrope text-ash hover:text-charcoal transition-colors"
                >
                  +44 7376 712 695
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-charcoal flex items-center justify-center sharp-edges">
                  <Mail className="w-4 h-4 text-pearl" />
                </div>
                <a 
                  href="mailto:info@africanspride.com"
                  className="font-manrope text-ash hover:text-charcoal transition-colors"
                >
                  info@africanspride.com
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-ash flex items-center justify-center sharp-edges">
                  <MapPin className="w-4 h-4 text-pearl" />
                </div>
                <span className="font-manrope text-ash">United Kingdom</span>
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-syne text-lg font-bold text-charcoal mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="/african-sushi-wear" className="font-manrope text-stone hover:text-charcoal transition-colors">
                  African Sushi Wear
                </a>
              </li>
              <li>
                <a href="/rujeko" className="font-manrope text-stone hover:text-charcoal transition-colors">
                  Rujeko Fabrics
                </a>
              </li>
              <li>
                <a href="/foundation" className="font-manrope text-stone hover:text-charcoal transition-colors">
                  Munyaradzwe Foundation
                </a>
              </li>
              <li>
                <a href="/contact" className="font-manrope text-stone hover:text-charcoal transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          {/* Collections */}
          <div>
            <h3 className="font-syne text-lg font-bold text-charcoal mb-6">Collections</h3>
            <ul className="space-y-3">
              <li>
                <span className="font-manrope text-stone">Premium Streetwear</span>
              </li>
              <li>
                <span className="font-manrope text-stone">Heritage Fabrics</span>
              </li>
              <li>
                <span className="font-manrope text-stone">Clan Totems</span>
              </li>
              <li>
                <span className="font-manrope text-stone">Cultural Designs</span>
              </li>
              <li>
                <span className="font-manrope text-stone">Limited Editions</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-nude pt-8 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="font-manrope text-stone text-sm mb-4 md:mb-0">
              © 2025 African Pride. All rights reserved.
            </p>
            <div className="flex items-center space-x-2 text-sm">
              <span className="font-manrope text-stone">Made with</span>
              <Heart className="w-4 h-4 text-african-gold" />
              <span className="font-manrope text-stone">in <strong>Zimbabwe</strong></span>
            </div>
          </div>
        </div>
        
        {/* Statement */}
        <div className="text-center pt-6">
          <p className="font-syne text-lg text-stone">Dream, Create, Celebrate</p>
        </div>
      </div>
    </footer>
  );
} 
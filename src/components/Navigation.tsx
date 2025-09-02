"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import NextImage from "next/image";
import { usePathname } from "next/navigation";
import { 
  Navbar, 
  NavbarBrand, 
  NavbarContent, 
  NavbarItem, 
  NavbarMenuToggle, 
  NavbarMenu, 
  NavbarMenuItem,
  Button
} from "@heroui/react";
import { ArrowRight } from "lucide-react";

const navigationItems = [
  { name: "Home", href: "/" },
  { name: "African Sushi Wear", href: "/african-sushi-wear" },
  { name: "Rujeko", href: "/rujeko" },
  { name: "Munyaradzwe Foundation", href: "/foundation" },
  { name: "Contact Us", href: "/contact" },
];

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const isRujekoPage = pathname === "/rujeko";
  const isFoundationPage = pathname === "/foundation";
  const isContactPage = pathname === "/contact";

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getNavbarStyles = () => {
    if (isRujekoPage || isFoundationPage || isContactPage) {
      return isScrolled 
        ? "bg-pearl/95 border-b border-nude" 
        : "bg-transparent";
    }
    
    if (!isHomePage) {
      return isScrolled 
        ? "bg-pearl/95 border-b border-nude" 
        : "bg-transparent";
    }
    
    return isScrolled 
      ? "bg-pearl/95 border-b border-nude" 
      : "bg-transparent";
  };

  const getTextStyles = () => {
    if (isRujekoPage || isFoundationPage || isContactPage) {
      return "text-charcoal";
    }
    
    if (!isHomePage) {
      return isScrolled ? "text-charcoal" : "text-white";
    }
    
    return isScrolled ? "text-charcoal" : "text-white";
  };



  const getMenuToggleStyles = () => {
    if (isRujekoPage || isFoundationPage || isContactPage) {
      return "text-charcoal";
    }
    
    if (!isHomePage) {
      return isScrolled ? "text-charcoal" : "text-white";
    }
    
    return isScrolled ? "text-charcoal" : "text-white";
  };

  return (
    <Navbar 
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className={`${getNavbarStyles()} sharp-edges fixed top-0 z-[100] transition-all duration-300`}
      maxWidth="full"
      height="80px"
    >
      {/* Brand */}
      <NavbarContent>
        <NavbarBrand>
          <Link href="/" className="flex items-center space-x-3">
            {isRujekoPage ? (
              <div className="h-12 flex items-center justify-center ml-4">
                <Image 
                  src="/images/rujeko-logo.png" 
                  alt="Rujeko" 
                  width={48}
                  height={48}
                  className="h-12 w-auto object-contain"
                />
              </div>
            ) : (
              <>
                <div className="h-12 flex items-center">
                  <NextImage
                    src={`/images/${
                      isFoundationPage ? "MUNYARADZWE-LOGO.png" :
                      isRujekoPage ? "Africans-pride-logo-horizontal.png" :
                      isContactPage ? "Africans-pride-logo-horizontal.png" :
                      !isHomePage ? (isScrolled ? "Africans-pride-logo-horizontal.png" : "Africans-pride-logo-white-text.png") :
                      isScrolled ? "Africans-pride-logo-horizontal.png" : "Africans-pride-logo-white-text.png"
                    }`}
                    alt={isFoundationPage ? "Munyaradzwe Foundation" : isRujekoPage ? "Rujeko" : "African Pride"}
                    width={180}
                    height={48}
                    className="h-12 w-auto object-contain transition-all duration-300"
                  />
                </div>
              </>
            )}
          </Link>
        </NavbarBrand>
      </NavbarContent>

      {/* Desktop Navigation */}
      <NavbarContent className="hidden lg:flex gap-8" justify="center">
        {navigationItems.map((item) => (
          <NavbarItem key={item.name}>
            <Link
              href={item.href}
              className={`font-manrope text-sm font-medium transition-all duration-300 relative group ${
                pathname === item.href
                  ? getTextStyles()
                  : `${isRujekoPage || isFoundationPage || isContactPage ? "text-stone hover:text-charcoal" : !isHomePage ? (isScrolled ? "text-stone hover:text-charcoal" : "text-white/80 hover:text-white") : isScrolled ? "text-stone hover:text-charcoal" : "text-white/80 hover:text-white"}`
              }`}
            >
              {item.name}
              <span className={`absolute -bottom-1 left-0 h-0.5 transition-all duration-300 ${
                isRujekoPage || isFoundationPage || isContactPage ? "bg-charcoal" : !isHomePage ? (isScrolled ? "bg-charcoal" : "bg-white") : isScrolled ? "bg-charcoal" : "bg-white"
              } ${pathname === item.href ? "w-full" : "w-0 group-hover:w-full"}`} />
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      {/* Contact Button */}
      <NavbarContent justify="end">
        <div className="hidden lg:block">
          <Button
            as={Link}
            href="/contact"
            className={`font-manrope font-medium px-6 py-2 transition-all sharp-edges ${
              isRujekoPage || isFoundationPage || isContactPage ? "bg-charcoal text-pearl hover:bg-ash" : !isHomePage ? (isScrolled ? "bg-charcoal text-pearl hover:bg-ash" : "bg-white text-charcoal hover:bg-gray-100") : 
              isScrolled ? "bg-charcoal text-pearl hover:bg-ash" : "bg-white text-charcoal hover:bg-gray-100"
            }`}
          >
            Get In Touch
          </Button>
        </div>
        
        {/* Mobile menu toggle */}
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className={`lg:hidden ${getMenuToggleStyles()} transition-colors duration-300`}
        />
      </NavbarContent>

      {/* Mobile Menu */}
      <NavbarMenu className={`pt-8 sharp-edges border-t transition-all duration-300 ${
        isRujekoPage || isFoundationPage || isContactPage ? "bg-pearl/95 border-nude" : !isHomePage ? (isScrolled ? "bg-pearl/95 border-nude" : "bg-black/90 border-white/30") : 
        isScrolled ? "bg-pearl/95 border-nude" : "bg-black/90 border-white/30"
      }`}>
        <div className="space-y-2">
          {navigationItems.map((item, index) => (
            <NavbarMenuItem key={`${item.name}-${index}`} className="transform transition-all duration-200 hover:translate-x-2">
              <Link
                href={item.href}
                className={`w-full font-manrope text-lg py-4 px-4 rounded-lg border-b border-transparent transition-all duration-200 relative group ${
                  pathname === item.href
                    ? `font-semibold ${getTextStyles()} ${isRujekoPage || isFoundationPage || isContactPage ? "bg-charcoal/5" : isScrolled ? "bg-charcoal/5" : "bg-white/10"}`
                    : `${isRujekoPage || isFoundationPage || isContactPage ? "text-stone hover:text-charcoal hover:bg-mist" : !isHomePage ? (isScrolled ? "text-stone hover:text-charcoal hover:bg-mist" : "text-white hover:text-white hover:bg-white/10") : isScrolled ? "text-stone hover:text-charcoal hover:bg-mist" : "text-white hover:text-white hover:bg-white/10"}`
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="relative z-10">{item.name}</span>
                {pathname === item.href && (
                  <div className={`absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 ${
                    isRujekoPage || isFoundationPage || isContactPage ? "bg-charcoal" : !isHomePage ? (isScrolled ? "bg-charcoal" : "bg-white") : isScrolled ? "bg-charcoal" : "bg-white"
                  } rounded-r transition-all duration-200`} />
                )}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
        
        <NavbarMenuItem className="pt-8 pb-4">
          <Button
            as={Link}
            href="/contact"
            className={`w-full font-manrope font-medium py-4 transition-all sharp-edges group relative overflow-hidden ${
              isRujekoPage || isFoundationPage || isContactPage ? "bg-charcoal text-pearl hover:bg-ash" : !isHomePage ? (isScrolled ? "bg-charcoal text-pearl hover:bg-ash" : "bg-white text-charcoal hover:bg-gray-100") : 
              isScrolled ? "bg-charcoal text-pearl hover:bg-ash" : "bg-white text-charcoal hover:bg-gray-100"
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              Get In Touch
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-pearl/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
          </Button>
        </NavbarMenuItem>

        {/* Mobile Menu Footer */}
        <div className={`pt-6 pb-4 mt-6 border-t transition-colors duration-300 ${
          isRujekoPage || isFoundationPage ? "border-nude" : !isHomePage ? (isScrolled ? "border-nude" : "border-white/30") : isScrolled ? "border-nude" : "border-white/30"
        }`}>
          <div className="text-center">
            <p className={`text-sm font-manrope transition-colors duration-300 ${
              isRujekoPage || isFoundationPage ? "text-stone" : !isHomePage ? (isScrolled ? "text-stone" : "text-white/70") : isScrolled ? "text-stone" : "text-white/70"
            }`}>
              Taste the Vision. Live the Legacy.
            </p>
          </div>
        </div>
      </NavbarMenu>
    </Navbar>
  );
} 
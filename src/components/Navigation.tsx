"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
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
  { name: "Garikai Munyaradzwe Fund", href: "/foundation" },
  { name: "Events", href: "/events" },
  { name: "Contact Us", href: "/contact" },
];

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const isRujekoPage = pathname === "/rujeko";

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getNavbarStyles = () => {
    if (!isHomePage) {
      return isScrolled 
        ? "bg-pearl/95 backdrop-blur-md border-b border-nude" 
        : "bg-transparent";
    }
    
    return isScrolled 
      ? "bg-pearl/95 backdrop-blur-md border-b border-nude" 
      : "bg-transparent";
  };

  const getTextStyles = () => {
    if (!isHomePage) {
      return "text-charcoal";
    }
    
    return isScrolled ? "text-charcoal" : "text-pearl";
  };

  const getBrandStyles = () => {
    if (!isHomePage) {
      return "bg-charcoal text-pearl";
    }
    
    return isScrolled ? "bg-charcoal text-pearl" : "bg-pearl text-charcoal";
  };

  const getMenuToggleStyles = () => {
    if (!isHomePage) {
      return "text-charcoal";
    }
    
    return isScrolled ? "text-charcoal" : "text-pearl";
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
                <div className={`w-12 h-12 ${getBrandStyles()} flex items-center justify-center sharp-edges transition-all duration-300`}>
                  <span className="font-syne font-bold text-xl">AP</span>
                </div>
                <div className="flex flex-col">
                  <span className={`font-syne text-xl font-bold ${getTextStyles()} transition-colors duration-300`}>
                    African Pride
                  </span>
                  <span className={`text-xs font-manrope transition-colors duration-300 ${
                    !isHomePage ? "text-stone" : isScrolled ? "text-stone" : "text-pearl/70"
                  }`}>
                    Taste the Vision. Live the Legacy.
                  </span>
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
                  : `${!isHomePage ? "text-stone hover:text-charcoal" : isScrolled ? "text-stone hover:text-charcoal" : "text-pearl/80 hover:text-pearl"}`
              }`}
            >
              {item.name}
              <span className={`absolute -bottom-1 left-0 h-0.5 transition-all duration-300 ${
                !isHomePage ? "bg-charcoal" : isScrolled ? "bg-charcoal" : "bg-pearl"
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
              !isHomePage ? "bg-charcoal text-pearl hover:bg-ash" : 
              isScrolled ? "bg-charcoal text-pearl hover:bg-ash" : "bg-pearl text-charcoal hover:bg-mist"
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
        !isHomePage ? "bg-pearl/95 backdrop-blur-md border-nude" : 
        isScrolled ? "bg-pearl/95 backdrop-blur-md border-nude" : "bg-pearl/90 backdrop-blur-lg border-pearl/30"
      }`}>
        <div className="space-y-2">
          {navigationItems.map((item, index) => (
            <NavbarMenuItem key={`${item.name}-${index}`} className="transform transition-all duration-200 hover:translate-x-2">
              <Link
                href={item.href}
                className={`w-full font-manrope text-lg py-4 px-4 rounded-lg border-b border-transparent transition-all duration-200 relative group ${
                  pathname === item.href
                    ? `font-semibold ${getTextStyles()} bg-charcoal/5`
                    : `${!isHomePage ? "text-stone hover:text-charcoal hover:bg-mist" : isScrolled ? "text-stone hover:text-charcoal hover:bg-mist" : "text-ash hover:text-charcoal hover:bg-pearl/50"}`
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="relative z-10">{item.name}</span>
                {pathname === item.href && (
                  <div className={`absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 ${
                    !isHomePage ? "bg-charcoal" : isScrolled ? "bg-charcoal" : "bg-charcoal"
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
              !isHomePage ? "bg-charcoal text-pearl hover:bg-ash" : 
              isScrolled ? "bg-charcoal text-pearl hover:bg-ash" : "bg-charcoal text-pearl hover:bg-ash"
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
          !isHomePage ? "border-nude" : isScrolled ? "border-nude" : "border-pearl/30"
        }`}>
          <div className="text-center">
            <p className={`text-sm font-manrope transition-colors duration-300 ${
              !isHomePage ? "text-stone" : isScrolled ? "text-stone" : "text-ash"
            }`}>
              Taste the Vision. Live the Legacy.
            </p>
          </div>
        </div>
      </NavbarMenu>
    </Navbar>
  );
} 
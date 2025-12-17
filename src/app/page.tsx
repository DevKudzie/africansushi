"use client";

import { Button } from "@heroui/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Layout from "@/components/Layout";
import { useState, useEffect } from "react";

const heroSlides = [
  {
    title: "AFRICAN",
    subtitle: "PRIDE",
    description: "Taste the Vision. Live the Legacy.",
    image: "/images/Model Pics/cut/AS Wear 1.jpg",
    cta: "Discover Collection",
    href: "/african-sushi-wear"
  },
  {
    title: "PREMIUM",
    subtitle: "HERITAGE",
    description: "Authentic African craftsmanship meets modern luxury.",
    image: "/images/Model Pics/cut/AS Wear 2.jpg",
    cta: "Explore Fabrics",
    href: "/rujeko"
  },
  {
    title: "LEGACY",
    subtitle: "CONTINUES",
    description: "Honoring Garry Mapanzure through meaningful impact.",
    image: "/images/Model Pics/cut/AS Wear 3.jpg",
    cta: "Support Foundation",
    href: "/foundation"
  }
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  return (
    <Layout>
      {/* Full-Screen Hero Slider */}
      <section className="relative h-screen overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-transform duration-1000 ease-in-out ${
              index === currentSlide ? 'translate-x-0' : 
              index < currentSlide ? '-translate-x-full' : 'translate-x-full'
            }`}
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover object-top"
                priority={index === 0}
              />
              {/* Enhanced Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-charcoal/60 via-charcoal/40 to-charcoal/20" />
              <div className="absolute inset-0 bg-charcoal/20" />
            </div>

            {/* Content - Better Centered */}
            <div className="relative z-10 h-full mt-8 flex items-center">
              <div className="w-full px-8 lg:px-16 max-w-7xl mx-auto">
                <div className="max-w-2xl">
                  <h1 className="font-heading text-5xl lg:text-7xl xl:text-8xl font-bold text-pearl leading-none">
                    {slide.title}
                  </h1>
                  <h2 className="font-manrope text-2xl lg:text-3xl xl:text-5xl font-light text-pearl/90 mb-6 leading-tight">
                    {slide.subtitle}
                  </h2>
                  <p className="font-manrope text-xl lg:text-2xl text-pearl/80 mb-8 leading-relaxed max-w-lg">
                    {slide.description}
                  </p>
                  <Button
                    as={Link}
                    href={slide.href}
                    size="lg"
                    className="bg-pearl text-charcoal font-manrope font-semibold px-8 py-6 text-lg hover:bg-charcoal hover:text-pearl transition-all duration-300 sharp-edges"
                  >
                    {slide.cta}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation - Bottom Right Corner */}
        <div className="absolute bottom-8 right-8 z-20 flex space-x-3">
          <button
            onClick={prevSlide}
            className="w-14 h-14 bg-pearl/20 hover:bg-pearl/40 backdrop-blur-sm transition-all sharp-edges flex items-center justify-center group"
          >
            <ChevronLeft className="w-7 h-7 text-pearl transition-transform group-hover:scale-110" />
          </button>
          <button
            onClick={nextSlide}
            className="w-14 h-14 bg-pearl/20 hover:bg-pearl/40 backdrop-blur-sm transition-all sharp-edges flex items-center justify-center group"
          >
            <ChevronRight className="w-7 h-7 text-pearl transition-transform group-hover:scale-110" />
          </button>
        </div>



        {/* Slide Indicators - Bottom Left */}
        <div className="absolute bottom-8 left-8 z-20 flex space-x-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-12 h-1 transition-all sharp-edges ${
                index === currentSlide ? 'bg-pearl' : 'bg-pearl/40'
              }`}
            />
          ))}
        </div>
      </section>

      {/* About Section - Mixed Layout with Symmetry */}
      <section className="pt-32 pb-20 bg-pearl">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          {/* Header */}
          <div className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
              <div>
                <h2 className="font-syne text-5xl lg:text-6xl font-bold text-charcoal mb-6 leading-none underline">
                  Our <em className="font-manrope">Legacy</em>
                </h2>
              </div>
              <div>
                <p className="font-manrope text-xl text-stone leading-relaxed">
                  African Pride is more than a brand—it&apos;s a <strong>movement</strong> that celebrates African heritage, 
                  creativity, and the power of giving back. Born from the vision of <em>Garry Mapanzure</em>.
                </p>
              </div>
            </div>
          </div>

          {/* Symmetric Section - Brand Showcase */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* African Sushi Wear */}
            <div className="premium-card sharp-edges p-8 h-80 relative overflow-hidden group">
              <div className="absolute inset-0">
                <Image
                  src="/images/design-refresh-adding-personal-style-to-plain-hoodies-6189170.webp"
                  alt="African Sushi Wear"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-charcoal/40 group-hover:bg-charcoal/60 transition-colors duration-300" />
              </div>
              <div className="relative z-10 h-full flex flex-col justify-end">
                <h3 className="font-syne text-3xl font-bold text-pearl mb-3">
                  African Sushi Wear
                </h3>
                <p className="font-manrope text-pearl/90 mb-6 leading-relaxed">
                  Premium streetwear that tells the story of <em>sacrifice</em>, creativity, and African spirit.
                </p>
                <Button
                  as={Link}
                  href="/african-sushi-wear"
                  className="bg-pearl text-charcoal font-semibold px-6 py-3 hover:bg-charcoal hover:text-pearl transition-all sharp-edges w-fit"
                >
                  Shop Collection
                </Button>
              </div>
            </div>

            {/* Rujeko Fabrics */}
            <div className="premium-card sharp-edges p-8 h-80 relative overflow-hidden group">
              <div className="absolute inset-0">
                <Image
                  src="/images/Rujeko-fabric.jpg"
                  alt="Rujeko Fabrics"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-charcoal/40 group-hover:bg-charcoal/60 transition-colors duration-300" />
              </div>
              <div className="relative z-10 h-full flex flex-col justify-end">
                <h3 className="font-syne text-3xl font-bold text-pearl mb-3">
                  Rujeko Fabrics
                </h3>
                <p className="font-manrope text-pearl/90 mb-6 leading-relaxed">
                  <strong>Radiance</strong> woven in heritage. Authentic African fabrics celebrating traditions.
                </p>
                <Button
                  as={Link}
                  href="/rujeko"
                  className="bg-pearl text-charcoal font-semibold px-6 py-3 hover:bg-charcoal hover:text-pearl transition-all sharp-edges w-fit"
                >
                  Explore Fabrics
                </Button>
              </div>
            </div>
          </div>

          {/* Middle Section - Kiki Delicacy and Foundation */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Kiki Delicacy */}
            <div className="premium-card sharp-edges p-8 h-80 relative overflow-hidden group">
              <div className="absolute inset-0">
                <Image
                  src="/images/Kiki Delicacy/Kiki delicacy 7.jpg"
                  alt="Kiki Delicacy"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-charcoal/40 group-hover:bg-charcoal/60 transition-colors duration-300" />
              </div>
              <div className="relative z-10 h-full flex flex-col justify-end">
                <h3 className="font-syne text-3xl font-bold text-pearl mb-3">
                  Kiki Delicacy
                </h3>
                <p className="font-manrope text-pearl/90 mb-6 leading-relaxed">
                  Catering with a <em>personal touch</em>. Delicious meals crafted with care and attention to detail.
                </p>
                <Button
                  as={Link}
                  href="/contact"
                  className="bg-pearl text-charcoal font-semibold px-6 py-3 hover:bg-charcoal hover:text-pearl transition-all sharp-edges w-fit"
                >
                  Contact Us
                </Button>
              </div>
            </div>
            
            <div className="premium-card sharp-edges p-8 bg-mist h-80 flex flex-col">
              <h3 className="font-syne text-2xl font-bold text-charcoal mb-4">
                Munyaradzwe <em className="font-manrope">Foundation</em>
              </h3>
              <p className="font-manrope text-stone mb-6 leading-relaxed flex-grow">
                &ldquo;<strong>Be Comforted</strong>&rdquo; — Our charity foundation spreads comfort and support to the 
                most vulnerable members of our community.
              </p>
              <Button
                as={Link}
                href="/foundation"
                className="bg-charcoal text-pearl font-semibold px-6 py-3 hover:bg-ash sharp-edges w-fit"
              >
                Support Foundation
              </Button>
            </div>
          </div>

          {/* Artisan Excellence Card */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12">
            <div className="lg:col-span-2 relative h-64">
              <Image
                src="/images/kiki-silver-dress.jpg"
                alt="Craftsmanship"
                fill
                className="object-cover sharp-edges"
              />
              <div className="absolute inset-0 bg-charcoal/50" />
              <div className="absolute bottom-8 left-8 text-pearl max-w-sm">
                <h3 className="font-syne text-3xl font-bold mb-3">RUJEKO RWAKO</h3>
                <p className="font-manrope text-pearl/90">
                  Assisting you with crafting the perfect traditional outfit tailored to your style, culture, and occasion.
                </p>
              </div>
            </div>
            
            <div className="premium-card sharp-edges p-8 bg-charcoal text-pearl h-64 flex flex-col justify-center">
              <blockquote className="font-syne text-base lg:text-lg font-light mb-4 leading-relaxed italic">
                &ldquo;True success is measured not just by what we achieve, but by how many lives we touch along the way.&rdquo;
              </blockquote>
              <cite className="font-manrope text-xs text-pearl/70">— African Pride Philosophy</cite>
            </div>
            
            
            <div className="premium-card sharp-edges h-64 relative overflow-hidden group">
              <Image
                src="/images/1200x630bb.jpg"
                alt="Garry Mapanzure – NOVUS album cover"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-charcoal/30 group-hover:bg-charcoal/50 transition-colors duration-300" />
              <div className="absolute bottom-6 left-6 text-pearl">
                <h4 className="font-syne text-xl font-bold">Legacy: The Impact of His Achievements</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-charcoal text-pearl">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-syne text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Ready to Experience African Pride
              </h2>
              <p className="font-manrope text-lg text-pearl/80 leading-relaxed">
                Join us in celebrating heritage, supporting communities, and wearing our stories.
              </p>
            </div>
            <div className="space-y-4">
              <Button
                as={Link}
                href="/african-sushi-wear"
                size="lg"
                className="w-full bg-pearl text-charcoal font-manrope font-semibold px-8 py-6 text-lg hover:bg-mist sharp-edges"
              >
                Shop Collection
              </Button>
              <Button
                as={Link}
                href="/contact"
                variant="bordered"
                size="lg"
                className="w-full border-pearl text-pearl hover:bg-pearl hover:text-charcoal font-manrope px-8 py-6 text-lg sharp-edges"
              >
                Get In Touch
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

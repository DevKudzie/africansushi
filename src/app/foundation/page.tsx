"use client";

import { Button, Card, CardBody, Image, Chip } from "@heroui/react";
import Layout from "@/components/Layout";
import { toast } from "react-hot-toast";

const impactStats = [
  {
    number: "40+",
    label: "Children Supported",
    description: "At Kudakwashe Care Home"
  },
  {
    number: "500+",
    label: "Meals Provided",
    description: "To homeless individuals"
  },
  {
    number: "100+",
    label: "Families Helped",
    description: "Through various programs"
  },
  {
    number: "15+",
    label: "Schools Reached",
    description: "Through educational initiatives"
  }
];

const programs = [
  {
    id: 1,
    title: "Kudakwashe Care Home Support",
    description: "Regular visits and donations to support 40 children cared for by three incredible women.",
    image: "/images/gal-1.jpg",
    impact: "40 children supported",
    status: "Ongoing",
    category: "Child Care",
    longDescription: "Our flagship program provides ongoing support to Kudakwashe Care Home, where three dedicated women care for 40 children. We provide essential supplies, educational materials, and regular support to ensure these children have the foundation they need for a bright future."
  },
  {
    id: 2,
    title: "Homeless Outreach Program",
    description: "Providing meals, clothing, and hygiene products to those living on the streets.",
    image: "/images/gal-3.jpg",
    impact: "500+ meals provided",
    status: "Active",
    category: "Homeless Support",
    longDescription: "Every week, our volunteers prepare and distribute meals to homeless individuals throughout the community. Beyond food, we provide clothing, hygiene products, and most importantly, dignity and hope to those who need it most."
  },
  {
    id: 3,
    title: "Educational Scholarship Fund",
    description: "Supporting underprivileged students with school fees, uniforms, and educational materials.",
    image: "/images/gal-4.jpg",
    impact: "50+ students supported",
    status: "Active",
    category: "Education",
    longDescription: "Education is the foundation of opportunity. Our scholarship fund ensures that financial circumstances don't prevent talented students from pursuing their dreams. We cover school fees, uniforms, books, and other essential educational materials."
  },
  {
    id: 4,
    title: "Community Health Initiative",
    description: "Providing basic healthcare services and health education to underserved communities.",
    image: "/images/gal-5.jpg",
    impact: "200+ people reached",
    status: "Expanding",
    category: "Healthcare",
    longDescription: "Working with local healthcare providers, we bring basic medical services and health education to communities that lack access to proper healthcare. Prevention, early intervention, and health literacy are our focus areas."
  },
  {
    id: 5,
    title: "Skills Development Program",
    description: "Teaching practical skills to help people become self-sufficient and improve their livelihoods.",
    image: "/images/gal-6.jpg",
    impact: "75+ people trained",
    status: "Growing",
    category: "Skills Training",
    longDescription: "We believe in empowering people with practical skills that lead to sustainable livelihoods. Our programs include vocational training, business skills, and entrepreneurship support to help individuals build better futures for themselves and their families."
  }
];

const handleDonation = () => {
  const message = "Hi! I'd like to make a donation to the Munyaradzwe Foundation. Please provide me with donation options and methods.";
  const whatsappUrl = `https://wa.me/263123456789?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, '_blank');
  toast.success('Redirecting to WhatsApp for donation information...');
};

const handleVolunteer = () => {
  const message = "Hi! I'm interested in volunteering with the Munyaradzwe Foundation. Please tell me about volunteer opportunities.";
  const whatsappUrl = `https://wa.me/263123456789?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, '_blank');
  toast.success('Redirecting to WhatsApp for volunteer information...');
};

export default function Foundation() {
  return (
    <Layout>
      {/* Hero Section - Neutral with Green Accent */}
      <section className="pt-32 pb-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="text-center mb-16">
            <h1 className="font-syne text-5xl lg:text-7xl font-bold text-gray-900 mb-6 tracking-tight">
              Munyaradzwe Foundation
            </h1>
            <p className="text-2xl text-gray-700 mb-4 max-w-3xl mx-auto font-light">
              Be Comforted
            </p>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Honoring Garry Mapanzure&apos;s legacy through meaningful community impact. 
              Together, we bring comfort, hope, and opportunity to those who need it most.
            </p>
          </div>

          {/* Impact Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {impactStats.map((stat, index) => (
              <Card key={index} className="bg-white border border-gray-200 hover:border-emerald-400 text-center sharp-edges transition-all duration-300">
                <CardBody className="p-6">
                  <div className="font-syne text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                    {stat.number}
                  </div>
                  <h3 className="font-syne text-lg font-bold text-gray-800 mb-1">
                    {stat.label}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {stat.description}
                  </p>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Foundation Story */}
      <section className="py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-syne text-4xl font-bold text-green-900 mb-6">
                Our Mission
              </h2>
              <div className="space-y-4 text-green-800 leading-relaxed">
                <p>
                  The Munyaradzwe Foundation was established to honor the memory and values of 
                  Garry Mapanzure, embodying his spirit of giving back and supporting those in need. 
                  &ldquo;Munyaradzwe&rdquo; means &ldquo;be comforted&rdquo; in Shona, reflecting our commitment to bringing 
                  comfort and hope to vulnerable communities.
                </p>
                <p>
                  Our work focuses on the most vulnerable members of society - children in care homes, 
                  homeless individuals, struggling families, and those lacking access to education and 
                  healthcare. We believe that everyone deserves dignity, opportunity, and hope.
                </p>
                <p>
                  Through sustainable programs and community partnerships, we&apos;re building a legacy 
                  that extends far beyond charity - we&apos;re creating lasting change that empowers 
                  communities to thrive.
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/gal-25.jpg"
                alt="Foundation Work"
                className="w-full h-96 object-cover sharp-edges border border-green-200"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-20 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="text-center mb-16">
            <h2 className="font-syne text-4xl font-bold text-emerald-900 mb-6">
              Our Programs
            </h2>
            <p className="text-xl text-emerald-700 max-w-3xl mx-auto">
              Making a difference through focused, sustainable initiatives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program) => (
              <Card key={program.id} className="bg-white border border-emerald-200 hover:border-emerald-400 transition-all duration-300 sharp-edges">
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Chip
                      size="sm"
                      className="bg-emerald-900 text-white font-syne text-xs tracking-wide sharp-edges"
                    >
                      {program.status}
                    </Chip>
                  </div>
                </div>
                <CardBody className="p-6">
                  <div className="mb-3">
                    <Chip
                      size="sm"
                      className="bg-emerald-100 text-emerald-800 border border-emerald-300 sharp-edges"
                    >
                      {program.category}
                    </Chip>
                  </div>
                  
                  <h3 className="font-syne text-xl font-bold text-emerald-900 mb-2 leading-tight">
                    {program.title}
                  </h3>
                  
                  <p className="text-emerald-700 text-sm mb-4 leading-relaxed">
                    {program.description}
                  </p>
                  
                  <div className="mb-4">
                    <span className="font-syne font-bold text-emerald-900 text-sm">
                      Impact: {program.impact}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <Button
                      className="w-full bg-emerald-900 text-white font-syne px-4 py-2 text-sm tracking-wide hover:bg-emerald-800 transition-all duration-200 sharp-edges"
                      onClick={() => {
                        const message = `Hi! I'd like to learn more about the ${program.title} program and how I can get involved.`;
                        window.open(`https://wa.me/263123456789?text=${encodeURIComponent(message)}`, '_blank');
                      }}
                    >
                      Learn More
                    </Button>
                    <Button
                      variant="bordered"
                      className="w-full border-emerald-300 text-emerald-800 hover:bg-emerald-100 font-syne px-4 py-2 text-sm tracking-wide transition-all duration-200 sharp-edges"
                      onClick={handleDonation}
                    >
                      Support This Program
                    </Button>
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How to Help */}
      <section className="py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="text-center mb-16">
            <h2 className="font-syne text-4xl font-bold text-green-900 mb-6">
              How You Can Help
            </h2>
            <p className="text-xl text-green-700 max-w-3xl mx-auto">
              Every contribution makes a difference in someone&apos;s life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white border border-green-200 text-center sharp-edges">
              <CardBody className="p-8">
                <h3 className="font-syne text-2xl font-bold text-green-900 mb-4">
                  Donate
                </h3>
                <p className="text-green-700 mb-6 leading-relaxed">
                  Your financial contributions help us provide essential services 
                  and expand our reach to help more people in need.
                </p>
                <Button
                  onClick={handleDonation}
                  className="bg-green-900 text-white font-syne px-6 py-3 tracking-wide hover:bg-green-800 transition-all duration-200 sharp-edges"
                >
                  Make a Donation
                </Button>
              </CardBody>
            </Card>

            <Card className="bg-white border border-green-200 text-center sharp-edges">
              <CardBody className="p-8">
                <h3 className="font-syne text-2xl font-bold text-green-900 mb-4">
                  Volunteer
                </h3>
                <p className="text-green-700 mb-6 leading-relaxed">
                  Share your time and skills with us. Whether it&apos;s helping with 
                  programs or administrative tasks, your time is valuable.
                </p>
                <Button
                  onClick={handleVolunteer}
                  className="bg-green-900 text-white font-syne px-6 py-3 tracking-wide hover:bg-green-800 transition-all duration-200 sharp-edges"
                >
                  Become a Volunteer
                </Button>
              </CardBody>
            </Card>

            <Card className="bg-white border border-green-200 text-center sharp-edges">
              <CardBody className="p-8">
                <h3 className="font-syne text-2xl font-bold text-green-900 mb-4">
                  Partner
                </h3>
                <p className="text-green-700 mb-6 leading-relaxed">
                  Join us as a corporate partner or community organization. 
                  Together, we can amplify our impact and reach more people.
                </p>
                <Button
                  onClick={() => {
                    const message = "Hi! I'm interested in exploring partnership opportunities with the Munyaradzwe Foundation. Please provide more information.";
                    window.open(`https://wa.me/263123456789?text=${encodeURIComponent(message)}`, '_blank');
                  }}
                  className="bg-green-900 text-white font-syne px-6 py-3 tracking-wide hover:bg-green-800 transition-all duration-200 sharp-edges"
                >
                  Explore Partnership
                </Button>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-emerald-100">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <h2 className="font-syne text-4xl font-bold text-emerald-900 mb-12 text-center">
            Our Values
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <h3 className="font-syne text-xl font-bold text-emerald-900 mb-4">
                Dignity
              </h3>
              <p className="text-emerald-800 leading-relaxed">
                Every person deserves to be treated with respect and dignity, 
                regardless of their circumstances. We approach our work with humility and compassion.
              </p>
            </div>
            
            <div className="text-center p-6">
              <h3 className="font-syne text-xl font-bold text-emerald-900 mb-4">
                Sustainability
              </h3>
              <p className="text-emerald-800 leading-relaxed">
                We focus on creating lasting change rather than temporary fixes. 
                Our programs are designed to empower communities and build long-term resilience.
              </p>
            </div>
            
            <div className="text-center p-6">
              <h3 className="font-syne text-xl font-bold text-emerald-900 mb-4">
                Transparency
              </h3>
              <p className="text-emerald-800 leading-relaxed">
                We believe in complete transparency about our work, funding, and impact. 
                Our supporters deserve to know exactly how their contributions make a difference.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-emerald-900">
        <div className="max-w-7xl mx-auto px-8 lg:px-16 text-center">
          <h2 className="font-syne text-4xl font-bold text-white mb-6">
            Join Our Mission
          </h2>
          <p className="text-xl text-emerald-200 mb-8 leading-relaxed">
            Together, we can bring comfort and hope to those who need it most.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={handleDonation}
              className="bg-white text-emerald-900 font-syne px-8 py-3 tracking-wide hover:bg-emerald-50 transition-all duration-200 sharp-edges"
            >
              Make a Donation
            </Button>
            <Button
              variant="bordered"
              onClick={handleVolunteer}
              className="border-white text-white hover:bg-white hover:text-emerald-900 font-syne px-8 py-3 tracking-wide transition-all duration-200 sharp-edges"
            >
              Volunteer With Us
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
} 
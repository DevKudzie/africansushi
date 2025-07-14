"use client";

import { Button, Card, CardBody, Image, Chip } from "@heroui/react";
import Layout from "@/components/Layout";
import { toast } from "react-hot-toast";

const impactStats = [
  {
    number: "40",
    label: "Children at Kudakwashe Care Home",
    description: "Receiving ongoing support"
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
    description: "Our flagship program providing ongoing support to 40 children cared for by three incredible women. We provide essential supplies, educational materials, and regular visits.",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop&crop=center",
    impact: "40 children supported",
    status: "Ongoing",
    category: "Child Care"
  },
  {
    id: 2,
    title: "Homeless Outreach Program",
    description: "Providing meals, clothing, and hygiene products to those living on the streets. We also connect them with resources for longer-term housing and support.",
    image: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=800&h=600&fit=crop&crop=center",
    impact: "500+ meals provided",
    status: "Active",
    category: "Homeless Support"
  },
  {
    id: 3,
    title: "Single Parent Support",
    description: "Assisting single mothers and fathers facing challenges in caring for their children through donations, outreach programs, and empowerment initiatives.",
    image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=800&h=600&fit=crop&crop=center",
    impact: "50+ families supported",
    status: "Active",
    category: "Family Support"
  },
  {
    id: 4,
    title: "Elderly Care Initiative",
    description: "Caring for senior citizens who are no longer able to care for themselves, providing comfort, companionship, and practical support in their daily lives.",
    image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&h=600&fit=crop&crop=center",
    impact: "30+ elderly supported",
    status: "Expanding",
    category: "Elder Care"
  },
  {
    id: 5,
    title: "Educational Youth Empowerment",
    description: "Partnering with schools and universities to create volunteer opportunities and leadership development programs for young people eager to make a difference.",
    image: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=800&h=600&fit=crop&crop=center",
    impact: "200+ youth engaged",
    status: "Growing",
    category: "Youth Development"
  },
  {
    id: 6,
    title: "Community Development",
    description: "Building stronger communities through workshops, social awareness campaigns, and initiatives that foster a culture of kindness and volunteerism.",
    image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&h=600&fit=crop&crop=center",
    impact: "10+ communities reached",
    status: "Active",
    category: "Community Building"
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
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="text-center mb-16">
            <h1 className="font-syne text-5xl lg:text-7xl font-bold text-gray-900 mb-6 tracking-tight">
              MUNYARADZWE Foundation
            </h1>
            <p className="text-2xl text-gray-700 mb-4 max-w-3xl mx-auto font-light">
              Be Comforted
            </p>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              A charity organization dedicated to spreading comfort, kindness, and support to the most vulnerable members of our community.
            </p>
          </div>

          {/* Impact Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {impactStats.map((stat, index) => (
              <Card key={index} className="bg-white border border-gray-200 hover:border-emerald-400 text-center transition-all duration-300" style={{ boxShadow: 'none' }}>
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

      {/* Foundation Story with Image */}
      <section className="py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-syne text-4xl font-bold text-green-900 mb-6">
                Our Mission
              </h2>
              <div className="space-y-4 text-green-800 leading-relaxed">
                <p>
                  The MUNYARADZWE Foundation is a charity organization dedicated to spreading comfort, kindness, and support to the most vulnerable members of our community. Our name, MUNYARADZWE, meaning "be comforted," embodies the essence of what we do.
                </p>
                <p>
                  Our mission is simple yet powerful: To provide comfort, support, and hope to those who need it most, and to inspire others to join us in making the world a better place. We believe that it is a true blessing to give.
                </p>
                <p>
                  We are committed to addressing the immediate needs of the underprivileged, the homeless, and the abandoned, but we also seek long-term solutions by fostering a culture of kindness, giving, and volunteerism.
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1593113598332-cd288d649433?w=800&h=500&fit=crop&crop=center"
                alt="Foundation Mission"
                className="w-full h-80 object-cover border border-green-200"
                style={{ boxShadow: 'none' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Honoring Garry Mapanzure with Two Vertical Images */}
      <section className="py-20 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="grid grid-cols-2 gap-4">
              <div className="relative">
                <Image
                  src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=600&fit=crop&crop=center"
                  alt="African Children at Care Home"
                  className="w-full h-96 object-cover border border-emerald-200"
                  style={{ boxShadow: 'none' }}
                />
              </div>
              <div className="relative">
                <Image
                  src="https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=400&h=600&fit=crop&crop=center"
                  alt="African Community Care"
                  className="w-full h-96 object-cover border border-emerald-200"
                  style={{ boxShadow: 'none' }}
                />
              </div>
            </div>
            <div>
              <h2 className="font-syne text-4xl font-bold text-emerald-900 mb-6">
                Honoring the Legacy of Garry Mapanzure
              </h2>
              <div className="space-y-4 text-emerald-800 leading-relaxed">
                <p>
                  This year, we had the honor of celebrating the life and vision of Garry Mapanzure, a visionary whose mission was to inspire kindness and spread love. In his memory, we dedicated a special day to serve and connect with those in need.
                </p>
                <p>
                  One of the highlights of this celebration was our visit to Kudakwashe Care Home, where we donated heartfelt gifts to 40 children, all of whom are cared for by three incredible women. It was a day filled with love, joy, and human connection.
                </p>
                <p>
                  Garry's legacy continues to inspire us as we expand our mission, working tirelessly to bring comfort and hope to even more individuals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="text-center mb-16">
            <h2 className="font-syne text-4xl font-bold text-gray-900 mb-6">
              Our Programs
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Making a difference through focused, sustainable initiatives that address the needs of our most vulnerable community members.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program) => (
              <Card key={program.id} className="bg-white border border-gray-200 hover:border-emerald-400 transition-all duration-300" style={{ boxShadow: 'none' }}>
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Chip
                      size="sm"
                      className="bg-emerald-900 text-white font-syne text-xs tracking-wide"
                      style={{ boxShadow: 'none' }}
                    >
                      {program.status}
                    </Chip>
                  </div>
                </div>
                <CardBody className="p-6">
                  <div className="mb-3">
                    <Chip
                      size="sm"
                      className="bg-emerald-100 text-emerald-800 border border-emerald-300"
                      style={{ boxShadow: 'none' }}
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
                      className="w-full bg-emerald-900 text-white font-syne px-4 py-2 text-sm tracking-wide hover:bg-emerald-800 transition-all duration-200"
                      style={{ boxShadow: 'none' }}
                      onClick={() => {
                        const message = `Hi! I'd like to learn more about the ${program.title} program and how I can get involved.`;
                        window.open(`https://wa.me/263123456789?text=${encodeURIComponent(message)}`, '_blank');
                      }}
                    >
                      Learn More
                    </Button>
                    <Button
                      variant="bordered"
                      className="w-full border-emerald-300 text-emerald-800 hover:bg-emerald-100 font-syne px-4 py-2 text-sm tracking-wide transition-all duration-200"
                      style={{ boxShadow: 'none' }}
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

      {/* Who We Serve */}
      <section className="py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="text-center mb-16">
            <h2 className="font-syne text-4xl font-bold text-green-900 mb-6">
              Who We Serve
            </h2>
            <p className="text-xl text-green-700 max-w-3xl mx-auto">
              The MUNYARADZWE Foundation is driven by a deep sense of empathy and care for the most vulnerable members of our community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-syne text-xl font-bold text-green-900 mb-2">
                    Underprivileged Children
                  </h3>
                  <p className="text-green-800 leading-relaxed">
                    We provide food, clothing, educational support, and emotional care to children in orphanages, care homes, and disadvantaged communities.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-syne text-xl font-bold text-green-900 mb-2">
                    Single Parents
                  </h3>
                  <p className="text-green-800 leading-relaxed">
                    Many parents, particularly single mothers, face immense challenges in caring for their children. We offer assistance through donations, outreach programs, and empowerment initiatives.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-syne text-xl font-bold text-green-900 mb-2">
                    The Homeless
                  </h3>
                  <p className="text-green-800 leading-relaxed">
                    We provide meals, clothing, and hygiene products to those living on the streets. We also connect them with resources for longer-term housing and support.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-syne text-xl font-bold text-green-900 mb-2">
                    The Elderly
                  </h3>
                  <p className="text-green-800 leading-relaxed">
                    We care for senior citizens who are no longer able to care for themselves, providing them with comfort, companionship, and practical support in their daily lives.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Youth Empowerment with Image */}
      <section className="py-20 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-syne text-4xl font-bold text-emerald-900 mb-6">
                Empowering the Youth
              </h2>
              <div className="space-y-4 text-emerald-800 leading-relaxed">
                <p>
                  The MUNYARADZWE Foundation believes that the future belongs to the youth. That's why we are reaching out to educational institutions—schools, colleges, and universities—to empower young people who are eager to make a difference in the world.
                </p>
                <p>
                  Through partnerships with schools and universities, we create volunteer opportunities, provide leadership development platforms, and organize social awareness workshops that educate students on the importance of empathy, kindness, and social responsibility.
                </p>
                <p>
                  By investing in the youth today, we are building a stronger, kinder, and more compassionate tomorrow.
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=800&h=500&fit=crop&crop=center"
                alt="African Youth Empowerment"
                className="w-full h-80 object-cover border border-emerald-200"
                style={{ boxShadow: 'none' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* How to Help */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="text-center mb-16">
            <h2 className="font-syne text-4xl font-bold text-gray-900 mb-6">
              How You Can Get Involved
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Together, we can change lives. The MUNYARADZWE Foundation is built on the principle of collective effort.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-white border border-gray-200 text-center" style={{ boxShadow: 'none' }}>
              <CardBody className="p-8">
                <h3 className="font-syne text-2xl font-bold text-gray-900 mb-4">
                  Donate
                </h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Your financial contribution will help fund our programs and outreach efforts. Every donation has the power to change a life.
                </p>
                <Button
                  onClick={handleDonation}
                  className="bg-gray-900 text-white font-syne px-6 py-3 tracking-wide hover:bg-gray-800 transition-all duration-200"
                  style={{ boxShadow: 'none' }}
                >
                  Make a Donation
                </Button>
              </CardBody>
            </Card>

            <Card className="bg-white border border-gray-200 text-center" style={{ boxShadow: 'none' }}>
              <CardBody className="p-8">
                <h3 className="font-syne text-2xl font-bold text-gray-900 mb-4">
                  Volunteer
                </h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Join our team of passionate volunteers and contribute your time to help those in need at local events and programs.
                </p>
                <Button
                  onClick={handleVolunteer}
                  className="bg-gray-900 text-white font-syne px-6 py-3 tracking-wide hover:bg-gray-800 transition-all duration-200"
                  style={{ boxShadow: 'none' }}
                >
                  Become a Volunteer
                </Button>
              </CardBody>
            </Card>

            <Card className="bg-white border border-gray-200 text-center" style={{ boxShadow: 'none' }}>
              <CardBody className="p-8">
                <h3 className="font-syne text-2xl font-bold text-gray-900 mb-4">
                  Sponsor
                </h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Partner with us to sponsor events, programs, or initiatives. Together, we can make a lasting impact in our community.
                </p>
                <Button
                  onClick={() => {
                    const message = "Hi! I'm interested in becoming a sponsor for the Munyaradzwe Foundation. Please provide more information.";
                    window.open(`https://wa.me/263123456789?text=${encodeURIComponent(message)}`, '_blank');
                  }}
                  className="bg-gray-900 text-white font-syne px-6 py-3 tracking-wide hover:bg-gray-800 transition-all duration-200"
                  style={{ boxShadow: 'none' }}
                >
                  Become a Sponsor
                </Button>
              </CardBody>
            </Card>

            <Card className="bg-white border border-gray-200 text-center" style={{ boxShadow: 'none' }}>
              <CardBody className="p-8">
                <h3 className="font-syne text-2xl font-bold text-gray-900 mb-4">
                  Spread the Word
                </h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Help raise awareness about our mission by sharing our message with your friends, family, and social networks.
                </p>
                <Button
                  onClick={() => {
                    const message = "Hi! I'd like to learn more about how I can help spread awareness about the Munyaradzwe Foundation.";
                    window.open(`https://wa.me/263123456789?text=${encodeURIComponent(message)}`, '_blank');
                  }}
                  className="bg-gray-900 text-white font-syne px-6 py-3 tracking-wide hover:bg-gray-800 transition-all duration-200"
                  style={{ boxShadow: 'none' }}
                >
                  Share Our Mission
                </Button>
              </CardBody>
            </Card>
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
            Together, we can ensure that no one is left behind, and that everyone has the chance to feel comforted, loved, and cared for.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={handleDonation}
              className="bg-white text-emerald-900 font-syne px-8 py-3 tracking-wide hover:bg-emerald-50 transition-all duration-200"
              style={{ boxShadow: 'none' }}
            >
              Make a Donation
            </Button>
            <Button
              variant="bordered"
              onClick={handleVolunteer}
              className="border-white text-white hover:bg-white hover:text-emerald-900 font-syne px-8 py-3 tracking-wide transition-all duration-200"
              style={{ boxShadow: 'none' }}
            >
              Volunteer With Us
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
} 
"use client";

import { Button, Card, CardBody, Image, Chip } from "@heroui/react";
import Layout from "@/components/Layout";
import { toast } from "react-hot-toast";
import { useEffect, useState, useRef } from "react";

// Counter component for animated numbers
const CountUpNumber = ({ target, suffix = "", duration = 2000 }: { target: number; suffix?: string; duration?: number }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const countRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number | null = null;
    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(easeOutQuart * target);
      
      setCount(currentCount);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }, [isVisible, target, duration]);

  return (
    <div ref={countRef} className="font-syne text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
      {count}{suffix}
    </div>
  );
};

const impactStats = [
  {
    number: 40,
    suffix: "",
    label: "Children Supported",
    description: "At Kudakwashe Care Home"
  },
  {
    number: 500,
    suffix: "+",
    label: "Meals Provided",
    description: "To homeless individuals"
  },
  {
    number: 100,
    suffix: "+",
    label: "Families Helped",
    description: "Through various programs"
  },
  {
    number: 15,
    suffix: "+",
    label: "Schools Reached",
    description: "Through educational initiatives"
  }
];

const programs = [
  {
    id: 1,
    title: "Kudakwashe Care Home Support",
    description: "Our flagship program providing ongoing support to 40 children cared for by three incredible women. We provide essential supplies, educational materials, and regular visits.",
    image: "/images/annie-spratt-cVEOh_JJmEE-unsplash.jpg",
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
    image: "/images/portrait-mother-her-baby_1048944-29857217.avif",
    impact: "50+ families supported",
    status: "Active",
    category: "Family Support"
  },
  {
    id: 4,
    title: "Elderly Care Initiative",
    description: "Caring for senior citizens who are no longer able to care for themselves, providing comfort, companionship, and practical support in their daily lives.",
    image: "/images/2149352026.jpg",
    impact: "30+ elderly supported",
    status: "Expanding",
    category: "Elder Care"
  },
  {
    id: 5,
    title: "Educational Youth Empowerment",
    description: "Partnering with schools and universities to create volunteer opportunities and leadership development programs for young people eager to make a difference.",
    image: "/images/2148892566 (1).jpg",
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
  const message = "Hi! I&apos;d like to make a donation to the Munyaradzwe Foundation. Please provide me with donation options and methods.";
  const whatsappUrl = `https://wa.me/447376712695?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, '_blank');
  toast.success('Redirecting to WhatsApp for donation information...');
};

const handleVolunteer = () => {
  const message = "Hi! I&apos;m interested in volunteering with the Munyaradzwe Foundation. Please tell me about volunteer opportunities.";
  const whatsappUrl = `https://wa.me/447376712695?text=${encodeURIComponent(message)}`;
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
            <h1 className="font-heading text-5xl lg:text-7xl font-bold text-gray-900 mb-2 tracking-tight">Welcome to the MUNYARADZWE Foundation</h1>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              The MUNYARADZWE Foundation is a charitable organization committed to providing comfort and support to the most vulnerable in society. The name “MUNYARADZWE,” meaning “be comforted,” reflects its mission to assist the homeless, abandoned children, and isolated elderly individuals through acts of kindness and practical aid. The foundation believes in the power of giving to transform lives.
            </p>
          </div>

          {/* Impact Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {impactStats.map((stat, index) => (
              <Card key={index} className="bg-white border border-gray-200 hover:border-emerald-400 text-center transition-all duration-300 h-full" style={{ boxShadow: 'none' }}>
                <CardBody className="p-6 flex flex-col justify-center min-h-[140px]">
                  <CountUpNumber target={stat.number} suffix={stat.suffix} duration={2000} />
                  <h3 className="font-syne text-lg font-bold text-gray-800 mb-1 leading-tight">
                    {stat.label}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
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
                  Our mission is to bring comfort, hope, and support to those most in need, while inspiring a culture of kindness and volunteerism. This year, we're expanding our outreach by collaborating with educational institutions to engage youth in charitable initiatives, leadership, and community service—planting seeds for a more compassionate future.
                </p>
                <p>
                  The MUNYARADZWE Foundation is about more than aid—it's about fostering a world where everyone feels supported and valued. Your support helps us extend our reach and deepen our impact. Join us in creating a more compassionate and inclusive future.
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

      {/* Leadership Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="text-center mb-16">
            <h2 className="font-syne text-4xl font-bold text-gray-900 mb-6">
              Our Leadership Team
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              A brilliant and vibrant team of young professionals who share a passion for service and transformation.
            </p>
          </div>

          {/* Team Members Grid - Including Christabel */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Christabel - Founder */}
            <Card className="bg-white border border-gray-200 hover:border-emerald-400 transition-all duration-300" style={{ boxShadow: 'none' }}>
              <div className="relative aspect-square overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-emerald-100 to-emerald-200 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-emerald-600 rounded-full mx-auto mb-3 flex items-center justify-center">
                      <span className="text-white text-xl font-bold">C</span>
                    </div>
                    <p className="text-emerald-800 font-syne text-sm">Founder & Head</p>
                  </div>
                </div>
              </div>
              <CardBody className="p-6">
                <h4 className="font-syne text-xl font-bold text-gray-900 mb-2">
                  Christabel
                </h4>
                <p className="text-emerald-700 font-semibold text-sm mb-3">
                  Founder & Philanthropist
                </p>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Christabel, the founder and head of the Foundation, is a philanthropist and welfare activist with a strong passion for community impact. Her academic background in Financial Accounting and Real Estate has been redirected toward ensuring communities gain access to fair funding and improved welfare.
                </p>
              </CardBody>
            </Card>
            {/* Bruce Hwenga */}
            <Card className="bg-white border border-gray-200 hover:border-emerald-400 transition-all duration-300" style={{ boxShadow: 'none' }}>
              <div className="relative aspect-square overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-blue-600 rounded-full mx-auto mb-3 flex items-center justify-center">
                      <span className="text-white text-xl font-bold">BH</span>
                    </div>
                    <p className="text-blue-800 font-syne text-sm">Social Engagement</p>
                  </div>
                </div>
              </div>
              <CardBody className="p-6">
                <h4 className="font-syne text-xl font-bold text-gray-900 mb-2">
                  Bruce Hwenga
                </h4>
                <p className="text-emerald-700 font-semibold text-sm mb-3">
                  Social Engagement & Motivational Speaker
                </p>
                <p className="text-gray-700 text-sm leading-relaxed">
                  An award-winning speaker and a distinguished member of the Maycdo Under 30 Fellowship (2020), Bruce is also listed in the 2025 Africa Emerging Brands. His powerful voice and leadership in youth engagement are key assets to the Foundation's outreach.
                </p>
              </CardBody>
            </Card>

            {/* Ralph Mare */}
            <Card className="bg-white border border-gray-200 hover:border-emerald-400 transition-all duration-300" style={{ boxShadow: 'none' }}>
              <div className="relative aspect-square overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-purple-600 rounded-full mx-auto mb-3 flex items-center justify-center">
                      <span className="text-white text-xl font-bold">RM</span>
                    </div>
                    <p className="text-purple-800 font-syne text-sm">Media & Engagement</p>
                  </div>
                </div>
              </div>
              <CardBody className="p-6">
                <h4 className="font-syne text-xl font-bold text-gray-900 mb-2">
                  Ralph Mare
                </h4>
                <p className="text-emerald-700 font-semibold text-sm mb-3">
                  Social Engagement & Media
                </p>
                <p className="text-gray-700 text-sm leading-relaxed">
                  A vibrant spirit dedicated to community building, Ralph uses his tertiary education and media expertise to drive awareness and connection through storytelling and digital engagement.
                </p>
              </CardBody>
            </Card>

            {/* Elaine Rutendo Mafemba */}
            <Card className="bg-white border border-gray-200 hover:border-emerald-400 transition-all duration-300" style={{ boxShadow: 'none' }}>
              <div className="relative aspect-square overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-pink-100 to-pink-200 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-pink-600 rounded-full mx-auto mb-3 flex items-center justify-center">
                      <span className="text-white text-xl font-bold">EM</span>
                    </div>
                    <p className="text-pink-800 font-syne text-sm">Administration</p>
                  </div>
                </div>
              </div>
              <CardBody className="p-6">
                <h4 className="font-syne text-xl font-bold text-gray-900 mb-2">
                  Elaine Rutendo Mafemba
                </h4>
                <p className="text-emerald-700 font-semibold text-sm mb-3">
                  Welfare & Administration
                </p>
                <p className="text-gray-700 text-sm leading-relaxed">
                  With a degree in Banking and Finance, Elaine plays a vital role in managing welfare logistics and administrative systems to ensure smooth operations across programs.
                </p>
              </CardBody>
            </Card>

            {/* Linda */}
            <Card className="bg-white border border-gray-200 hover:border-emerald-400 transition-all duration-300" style={{ boxShadow: 'none' }}>
              <div className="relative aspect-square overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-teal-100 to-teal-200 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-teal-600 rounded-full mx-auto mb-3 flex items-center justify-center">
                      <span className="text-white text-xl font-bold">L</span>
                    </div>
                    <p className="text-teal-800 font-syne text-sm">Welfare & Provision</p>
                  </div>
                </div>
              </div>
              <CardBody className="p-6">
                <h4 className="font-syne text-xl font-bold text-gray-900 mb-2">
                  Linda
                </h4>
                <p className="text-emerald-700 font-semibold text-sm mb-3">
                  Welfare & Provision
                </p>
                <p className="text-gray-700 text-sm leading-relaxed">
                  A highly qualified professional in Community Development, Linda holds a Master's in Human Rights, Peace and Development and a PhD in Social and Behavioural Sciences. Her extensive academic and practical knowledge enriches our efforts in human welfare and rights-based development.
                </p>
              </CardBody>
            </Card>

            {/* Chido Gutsa */}
            <Card className="bg-white border border-gray-200 hover:border-emerald-400 transition-all duration-300" style={{ boxShadow: 'none' }}>
              <div className="relative aspect-square overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-orange-600 rounded-full mx-auto mb-3 flex items-center justify-center">
                      <span className="text-white text-xl font-bold">CG</span>
                    </div>
                    <p className="text-orange-800 font-syne text-sm">Engagement</p>
                  </div>
                </div>
              </div>
              <CardBody className="p-6">
                <h4 className="font-syne text-xl font-bold text-gray-900 mb-2">
                  Chido Gutsa
                </h4>
                <p className="text-emerald-700 font-semibold text-sm mb-3">
                  Engagement & Provision
                </p>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Chido brings hands-on knowledge in financial management, holding a Diploma in Accounting. She supports engagement initiatives while ensuring effective resource allocation and transparency.
                </p>
              </CardBody>
            </Card>
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
                  src="/images/gal-4.jpg"
                  alt="African Children at Care Home"
                  className="w-full h-96 object-cover border border-emerald-200"
                  style={{ boxShadow: 'none' }}
                />
              </div>
              <div className="relative">
                <Image
                  src="/images/gal-1.jpg"
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
                  Garry&apos;s legacy continues to inspire us as we expand our mission, working tirelessly to bring comfort and hope to even more individuals.
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
                      const message = `Hi! I&apos;d like to learn more about the ${program.title} program and how I can get involved.`;
                      window.open(`https://wa.me/447376712695?text=${encodeURIComponent(message)}`, '_blank');
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
              The Munyaradzwe Foundation is driven by a deep sense of empathy and care for the most vulnerable members of our community.
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

      {/* Youth Empowerment - Kindness Starts with You */}
      <section className="py-20 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="text-center mb-16">
            <h2 className="font-syne text-4xl font-bold text-emerald-900 mb-6">
              Empowering the Youth: Kindness Starts with You
            </h2>
            <p className="text-xl text-emerald-700 max-w-4xl mx-auto">
              At the MUNYARADZWE Foundation, we believe that young people have the power to change the world—not someday, but right now.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="space-y-4 text-emerald-800 leading-relaxed">
                <p>
                  That's why we're working with schools, colleges, and universities to help students step into purpose through kindness, leadership, and community service.
                </p>
                <p>
                  Whether it's helping children in need, supporting the elderly, or leading awareness campaigns, we're giving young people the tools and support to make a real difference in their own communities.
                </p>
                <p>
                  We're not just teaching charity—we're building confidence, empathy, and courage.
                </p>
                <p>
                  This movement is inspired by the life of Garry Mapanzure, a young visionary who believed in spreading love and light. His legacy reminds us that one person really can spark change. Now, we're passing that torch to the next generation.
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

          {/* Call to Action for Youth */}
          <div className="bg-emerald-900 rounded-2xl p-12 text-center mb-16">
            <h3 className="font-syne text-3xl font-bold text-white mb-6">
              If you're a student, teacher, or youth leader—this is your invitation to join us.
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-emerald-100">
                <h4 className="font-syne text-xl font-bold mb-2">Volunteer</h4>
                <p>Join our programs and make a direct impact</p>
              </div>
              <div className="text-emerald-100">
                <h4 className="font-syne text-xl font-bold mb-2">Lead a Project</h4>
                <p>Design and implement your own community initiative</p>
              </div>
              <div className="text-emerald-100">
                <h4 className="font-syne text-xl font-bold mb-2">Be the Reason</h4>
                <p>Someone feels seen, heard, and loved</p>
              </div>
            </div>
            <p className="text-emerald-200 text-lg mb-6">
              Because comfort begins with connection. And that connection begins with you.
            </p>
            <Button
              onClick={() => {
                const message = "Hi! I'm a young person interested in joining the MUNYARADZWE Foundation youth programs. Please tell me how I can get involved.";
                window.open(`https://wa.me/447376712695?text=${encodeURIComponent(message)}`, '_blank');
              }}
              className="bg-white text-emerald-900 font-syne px-8 py-3 tracking-wide hover:bg-emerald-50 transition-all duration-200"
              style={{ boxShadow: 'none' }}
            >
              Join the Movement
            </Button>
          </div>

          {/* Creating Changemakers */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1529390079861-591de354faf5?w=800&h=500&fit=crop&crop=center"
                alt="Youth Leadership Development"
                className="w-full h-80 object-cover border border-emerald-200"
                style={{ boxShadow: 'none' }}
              />
            </div>
            <div>
              <h3 className="font-syne text-3xl font-bold text-emerald-900 mb-6">
                Creating Changemakers: What's Next
              </h3>
              <div className="space-y-4 text-emerald-800 leading-relaxed">
                <p>
                  Our goal is not just to involve youth in our programs but to equip them to design and lead their own community projects, from neighborhood contributions to care home partnerships to youth mental health awareness drives.
                </p>
                <div className="bg-white p-6 rounded-lg border border-emerald-200">
                  <h4 className="font-syne text-xl font-bold text-emerald-900 mb-4">In 2025 and beyond, we aim to:</h4>
                  <ul className="space-y-3 text-emerald-800">
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Launch Youth Programs where students represent MUNYARADZWE in their schools and communities</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Offer certification and mentorship for youth volunteers to build their portfolios and grow their confidence</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Host Annual Youth Summits to bring together young leaders across the country to collaborate, share, and dream together</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Together We Empower */}
          <div className="mt-16 text-center">
            <h3 className="font-syne text-3xl font-bold text-emerald-900 mb-6">
              Together, We Empower
            </h3>
            <div className="max-w-4xl mx-auto space-y-4 text-emerald-800 leading-relaxed">
              <p>
                When we empower the youth, we don't just give them opportunities—we give them purpose. We show them that they matter. That their voices count. That they have the power to be a light in someone else's darkness.
              </p>
              <p>
                The MUNYARADZWE Foundation calls upon educators, parents, mentors, and communities to join us in this mission. Let's raise a generation that is bold enough to care, wise enough to lead, and kind enough to serve.
              </p>
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
              Together, we can change lives. The Munyaradzwe Foundation is built on the principle of collective effort.
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
                                    const message = "Hi! I&apos;m interested in becoming a sponsor for the Munyaradzwe Foundation. Please provide more information.";
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
                                    const message = "Hi! I&apos;d like to learn more about how I can help spread awareness about the Munyaradzwe Foundation.";
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
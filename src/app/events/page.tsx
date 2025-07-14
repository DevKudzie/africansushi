"use client";

import { Button, Card, CardBody, CardHeader, Image, Chip } from "@heroui/react";
import { Calendar, MapPin, Clock, Users, Ticket, MessageCircle, Star, Heart } from "lucide-react";
import Link from "next/link";
import Layout from "@/components/Layout";
import { toast } from "react-hot-toast";

interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  image: string;
  category: string;
  price: string;
  capacity: string;
  highlights: string[];
  type: "upcoming" | "past";
}

const upcomingEvents: Event[] = [
  {
    id: 1,
    title: "African Sushi Wear Collection Launch",
    date: "March 15, 2025",
    time: "6:00 PM - 10:00 PM",
    location: "Harare Fashion Week Venue",
    description: "Join us for the exclusive launch of our latest African Sushi Wear collection. Experience premium streetwear that tells the story of sacrifice and cultural fusion.",
    image: "/images/thumbnail_G on W front .jpg",
    category: "Fashion Launch",
    price: "Free Entry",
    capacity: "200 people",
    highlights: ["New Collection Reveal", "Live Music", "Cultural Performances", "Networking"],
    type: "upcoming"
  },
  {
    id: 2,
    title: "Rujeko Heritage Fabric Exhibition",
    date: "April 20, 2025",
    time: "10:00 AM - 6:00 PM",
    location: "National Gallery of Zimbabwe",
    description: "Discover the beauty of Zimbabwean heritage through our Rujeko fabric collection. Learn about clan totems, cultural significance, and traditional craftsmanship.",
    image: "/images/rujeko-logo.png",
    category: "Cultural Exhibition",
    price: "Free Entry",
    capacity: "500 people",
    highlights: ["Fabric Showcase", "Cultural Education", "Traditional Crafts", "Artist Talks"],
    type: "upcoming"
  },
  {
    id: 3,
    title: "Munyaradzwe Foundation Charity Gala",
    date: "May 10, 2025",
    time: "7:00 PM - 11:00 PM",
    location: "Rainbow Towers Hotel",
    description: "An elegant evening of giving back. Join us for our annual charity gala supporting underprivileged children, the homeless, and elderly community members.",
    image: "/images/gal-1.jpg",
    category: "Charity Event",
    price: "$50 per person",
    capacity: "300 people",
    highlights: ["Fundraising Dinner", "Auction", "Impact Stories", "Entertainment"],
    type: "upcoming"
  },
  {
    id: 4,
    title: "Youth Empowerment Workshop",
    date: "June 5, 2025",
    time: "9:00 AM - 4:00 PM",
    location: "University of Zimbabwe",
    description: "Empowering the next generation through leadership development, volunteer opportunities, and social awareness programs.",
    image: "/images/gal-3.jpg",
    category: "Educational",
    price: "Free for Students",
    capacity: "150 students",
    highlights: ["Leadership Training", "Volunteer Opportunities", "Mentorship", "Career Guidance"],
    type: "upcoming"
  }
];

const pastEvents = [
  {
    id: 5,
    title: "Garry Mapanzure Memorial Day",
    date: "December 15, 2024",
    location: "Kudakwashe Care Home",
    description: "A special day dedicated to honoring Garry's legacy through community service and spreading kindness.",
    image: "/images/gal-4.jpg",
    category: "Memorial",
    impact: "40 children received gifts",
    highlights: ["Community Service", "Gift Distribution", "Memorial Ceremony", "Celebration of Life"],
    type: "past"
  },
  {
    id: 6,
    title: "African Sushi Wear Pop-up Store",
    date: "November 20, 2024",
    location: "Avondale Shopping Centre",
    description: "Our first pop-up store showcasing the African Sushi Wear collection to the public.",
    image: "/images/thumbnail_G on B front .jpg",
    category: "Fashion",
    impact: "200+ customers served",
    highlights: ["Product Showcase", "Customer Engagement", "Brand Awareness", "Sales Success"],
    type: "past"
  },
  {
    id: 7,
    title: "Rujeko Cultural Workshop",
    date: "October 10, 2024",
    location: "Chitungwiza Arts Centre",
    description: "Educational workshop about Zimbabwean clan totems and traditional fabric significance.",
    image: "/images/gal-5.jpg",
    category: "Cultural",
    impact: "100+ participants educated",
    highlights: ["Cultural Education", "Traditional Crafts", "Community Engagement", "Heritage Preservation"],
    type: "past"
  },
  {
    id: 8,
    title: "Homeless Outreach Program",
    date: "September 25, 2024",
    location: "Harare Central",
    description: "Monthly outreach program providing meals, clothing, and hygiene products to homeless individuals.",
    image: "/images/gal-6.jpg",
    category: "Charity",
    impact: "150+ meals provided",
    highlights: ["Meal Distribution", "Clothing Donations", "Hygiene Kits", "Community Support"],
    type: "past"
  }
];

const handleRSVP = (event: Event) => {
  const message = `Hi! I'd like to RSVP for the "${event.title}" event on ${event.date}. Please provide more details about registration and any requirements.`;
  const whatsappUrl = `https://wa.me/263123456789?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, '_blank');
  toast.success('Redirecting to WhatsApp for RSVP...');
};

const handleEventInquiry = () => {
  const message = `Hi! I'd like to inquire about hosting an event or partnership opportunity with African Pride. Please provide more information about collaboration possibilities.`;
  const whatsappUrl = `https://wa.me/263123456789?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, '_blank');
  toast.success('Redirecting to WhatsApp for event inquiry...');
};

export default function Events() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-zinc-50 overflow-hidden">
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="font-syne text-4xl sm:text-5xl lg:text-6xl font-bold text-zinc-900 mb-6">
              Our Events
            </h1>
            <p className="text-xl text-zinc-700 mb-4 max-w-3xl mx-auto">
              Celebrating Culture, Fashion, and Community Impact
            </p>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto leading-relaxed">
              Join us for exclusive fashion launches, cultural exhibitions, charity galas, 
              and community outreach events that honor Garry Mapanzure&apos;s legacy.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={handleEventInquiry}
              size="lg"
              className="bg-gradient-to-r from-african-gold to-african-orange text-black font-semibold px-8 py-3 hover:scale-105 transition-transform"
              endContent={<MessageCircle className="w-5 h-5" />}
            >
              Host an Event with Us
            </Button>
            <Button
              as={Link}
              href="/contact"
              variant="bordered"
              size="lg"
              className="border-african-gold text-african-gold hover:bg-african-gold hover:text-black px-8 py-3 transition-all"
            >
              Get Event Updates
            </Button>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-white mb-6">
              Upcoming <span className="text-gradient">Events</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Don&apos;t miss these exciting upcoming events. RSVP now to secure your spot!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {upcomingEvents.map((event) => (
              <Card key={event.id} className="bg-black/50 border border-african-gold/20 hover:border-african-gold/40 transition-all duration-300 group">
                <CardHeader className="p-0 relative">
                  <Image
                    src={event.image}
                    alt={event.title}
                    className="w-full h-64 object-cover"
                    width={500}
                    height={256}
                  />
                  <div className="absolute top-4 left-4">
                    <Chip 
                      className="bg-gradient-to-r from-african-gold to-african-orange text-black font-semibold"
                      size="sm"
                    >
                      {event.category}
                    </Chip>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Chip 
                      className="bg-green-500 text-white font-semibold"
                      size="sm"
                    >
                      Upcoming
                    </Chip>
                  </div>
                </CardHeader>
                <CardBody className="p-6">
                  <h3 className="font-cinzel text-xl font-bold text-white mb-3">
                    {event.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {event.description}
                  </p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-gray-300">
                      <Calendar className="w-4 h-4 text-african-gold" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-300">
                      <Clock className="w-4 h-4 text-african-gold" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-300">
                      <MapPin className="w-4 h-4 text-african-gold" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-300">
                      <Users className="w-4 h-4 text-african-gold" />
                      <span>{event.capacity}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-300">
                      <Ticket className="w-4 h-4 text-african-gold" />
                      <span className="font-semibold text-african-gold">{event.price}</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-sm text-gray-400 mb-2">Event Highlights:</p>
                    <div className="flex flex-wrap gap-2">
                      {event.highlights.map((highlight, index) => (
                        <Chip 
                          key={index} 
                          variant="bordered" 
                          size="sm"
                          className="border-african-gold/30 text-gray-300"
                        >
                          {highlight}
                        </Chip>
                      ))}
                    </div>
                  </div>

                  <Button
                    onClick={() => handleRSVP(event)}
                    className="w-full bg-gradient-to-r from-african-gold to-african-orange text-black font-semibold hover:scale-105 transition-transform"
                    endContent={<MessageCircle className="w-4 h-4" />}
                  >
                    RSVP via WhatsApp
                  </Button>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-white mb-6">
              Past <span className="text-gradient">Events</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Celebrating our successful events and the impact we&apos;ve made together
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pastEvents.map((event) => (
              <Card key={event.id} className="bg-black/50 border border-african-gold/20 hover:border-african-gold/40 transition-all duration-300 group">
                <CardHeader className="p-0 relative">
                  <Image
                    src={event.image}
                    alt={event.title}
                    className="w-full h-48 object-cover"
                    width={300}
                    height={192}
                  />
                  <div className="absolute top-4 left-4">
                    <Chip 
                      className="bg-gradient-to-r from-african-gold to-african-orange text-black font-semibold"
                      size="sm"
                    >
                      {event.category}
                    </Chip>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Chip 
                      className="bg-gray-500 text-white font-semibold"
                      size="sm"
                    >
                      Completed
                    </Chip>
                  </div>
                </CardHeader>
                <CardBody className="p-4">
                  <h3 className="font-cinzel text-lg font-bold text-white mb-2">
                    {event.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-3 leading-relaxed">
                    {event.description}
                  </p>
                  
                  <div className="space-y-2 mb-3">
                    <div className="flex items-center gap-2 text-sm text-gray-300">
                      <Calendar className="w-4 h-4 text-african-gold" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-300">
                      <MapPin className="w-4 h-4 text-african-gold" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-african-gold">
                      <Star className="w-4 h-4" />
                      <span className="font-semibold">{event.impact}</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {event.highlights.slice(0, 2).map((highlight, index) => (
                        <Chip 
                          key={index} 
                          variant="bordered" 
                          size="sm"
                          className="border-african-gold/30 text-gray-300 text-xs"
                        >
                          {highlight}
                        </Chip>
                      ))}
                    </div>
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Event Categories */}
      <section className="py-20 bg-gradient-to-r from-african-gold/10 to-african-orange/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-white mb-6">
              Event <span className="text-gradient">Categories</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We host diverse events that celebrate our three pillars of excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-black/50 border border-african-gold/20 hover:border-african-gold/40 transition-all duration-300">
              <CardBody className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-african-gold to-african-orange rounded-full flex items-center justify-center mx-auto mb-6">
                  <Star className="w-8 h-8 text-black" />
                </div>
                <h3 className="font-cinzel text-xl font-bold text-white mb-4">
                  Fashion Events
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Collection launches, fashion shows, and pop-up stores showcasing 
                  African Sushi Wear&apos;s premium streetwear.
                </p>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>• Collection Launches</li>
                  <li>• Fashion Shows</li>
                  <li>• Pop-up Stores</li>
                  <li>• Style Workshops</li>
                </ul>
              </CardBody>
            </Card>

            <Card className="bg-black/50 border border-african-gold/20 hover:border-african-gold/40 transition-all duration-300">
              <CardBody className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-african-gold to-african-orange rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-8 h-8 text-black" />
                </div>
                <h3 className="font-cinzel text-xl font-bold text-white mb-4">
                  Cultural Events
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Heritage exhibitions, cultural workshops, and educational programs 
                  celebrating Zimbabwean traditions through Rujeko fabrics.
                </p>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>• Heritage Exhibitions</li>
                  <li>• Cultural Workshops</li>
                  <li>• Educational Programs</li>
                  <li>• Traditional Crafts</li>
                </ul>
              </CardBody>
            </Card>

            <Card className="bg-black/50 border border-african-gold/20 hover:border-african-gold/40 transition-all duration-300">
              <CardBody className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-african-gold to-african-orange rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-black" />
                </div>
                <h3 className="font-cinzel text-xl font-bold text-white mb-4">
                  Charity Events
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Fundraising galas, community outreach programs, and volunteer 
                  initiatives through the Munyaradzwe Foundation.
                </p>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>• Charity Galas</li>
                  <li>• Community Outreach</li>
                  <li>• Volunteer Programs</li>
                  <li>• Youth Empowerment</li>
                </ul>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-white mb-6">
            Stay Connected with Our <span className="text-gradient">Events</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Never miss an opportunity to be part of our community. Get updates on upcoming 
            events, exclusive invitations, and behind-the-scenes content.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={handleEventInquiry}
              size="lg"
              className="bg-gradient-to-r from-african-gold to-african-orange text-black font-semibold px-8 py-3 hover:scale-105 transition-transform"
              endContent={<MessageCircle className="w-5 h-5" />}
            >
              Partner with Us
            </Button>
            <Button
              as={Link}
              href="/contact"
              variant="bordered"
              size="lg"
              className="border-african-gold text-african-gold hover:bg-african-gold hover:text-black px-8 py-3 transition-all"
            >
              Subscribe to Updates
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
} 
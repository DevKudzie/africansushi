"use client";

import { Button, Card, CardBody, Chip, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from "@heroui/react";
import Link from "next/link";
import NextImage from "next/image";
import Layout from "@/components/Layout";
import { toast } from "react-hot-toast";
import { useState } from "react";

const fabricCollections = [
  {
    id: 1,
    name: "Honeycomb Heritage",
    price: "$35/yard",
    image: "/images/rujeko-logo.png",
    description: "Sacred geometry meets African tradition. The honeycomb pattern represents unity in diversity.",
    longDescription: "This exquisite fabric collection draws inspiration from the ancient symbolism of the honeycomb, representing the perfect harmony of community and individual purpose. Each thread is carefully woven to tell the story of African unity, where diverse cultures come together to create something beautiful and enduring.",
    pattern: "Honeycomb with Clan Totems",
    colors: ["Gold & Black", "Red & White", "Blue & Gold"],
    occasions: ["Weddings", "Cultural Events", "Traditional Ceremonies"],
    badge: "Signature",
    materials: "100% Cotton with Wax Print",
    minOrder: "5 yards"
  },
  {
    id: 2,
    name: "Clan Totem Collection",
    price: "$40/yard",
    image: "/images/gal-1.jpg",
    description: "Celebrate your lineage with fabrics featuring traditional Zimbabwean clan totems.",
    longDescription: "Honor your ancestral connections with this premium collection featuring authentic Zimbabwean clan totems. Each design is researched and crafted with respect for traditional meanings, creating wearable heritage that connects past and present.",
    pattern: "Animal Totems on Geometric Base",
    colors: ["Earth Tones", "Royal Blue", "Sunset Orange"],
    occasions: ["Family Gatherings", "Heritage Days", "Cultural Pride"],
    badge: "Custom",
    materials: "Premium Cotton Blend",
    minOrder: "3 yards"
  },
  {
    id: 3,
    name: "Great Zimbabwe Zigzag",
    price: "$45/yard",
    image: "/images/gal-3.jpg",
    description: "Inspired by the ancient stone architecture of Great Zimbabwe. Strength and endurance woven into fabric.",
    longDescription: "Drawing from the magnificent stone structures of Great Zimbabwe, this collection embodies the architectural mastery and cultural sophistication of our ancestors. The zigzag patterns mirror the precise stonework that has stood for centuries.",
    pattern: "Chevron with Historical Motifs",
    colors: ["Stone Gray", "Sunset Gold", "Heritage Brown"],
    occasions: ["Independence Day", "National Events", "Cultural Exhibitions"],
    badge: "Heritage",
    materials: "Heavy Cotton Canvas",
    minOrder: "4 yards"
  },
  {
    id: 4,
    name: "Radiance Collection",
    price: "$38/yard",
    image: "/images/gal-4.jpg",
    description: "Named after Rujeko (radiance), these fabrics shine with the light of African pride.",
    longDescription: "The signature collection that embodies the radiance of African beauty and pride. Each design captures the luminous spirit of celebration, joy, and the brilliant light that shines from our cultural heritage.",
    pattern: "Sunburst with Cultural Symbols",
    colors: ["Bright Gold", "Crimson Red", "Royal Purple"],
    occasions: ["Celebrations", "Festivals", "Special Events"],
    badge: "Bestseller",
    materials: "Luxury Cotton Voile",
    minOrder: "2 yards"
  },
  {
    id: 5,
    name: "Unity Weave",
    price: "$42/yard",
    image: "/images/gal-5.jpg",
    description: "Interwoven patterns that tell the story of Zimbabwe&apos;s diverse communities coming together.",
    longDescription: "A masterful representation of Zimbabwe&apos;s cultural diversity, this collection features interlocking patterns that symbolize how different communities strengthen each other when woven together in harmony.",
    pattern: "Interlocking Patterns",
    colors: ["Multi-colored", "Earth Palette", "Vibrant Mix"],
    occasions: ["Unity Day", "Community Events", "Diplomatic Gifts"],
    badge: "Limited",
    materials: "Artisan Cotton Weave",
    minOrder: "6 yards"
  },
  {
    id: 6,
    name: "Modern Heritage",
    price: "$36/yard",
    image: "/images/gal-6.jpg",
    description: "Contemporary designs that honor the past while embracing the future.",
    longDescription: "Bridging traditional craftsmanship with contemporary aesthetics, this collection speaks to the modern African who values heritage while embracing innovation. Perfect for today&apos;s fashion-forward cultural expression.",
    pattern: "Modern Geometric with Traditional Elements",
    colors: ["Contemporary Blues", "Modern Grays", "Accent Gold"],
    occasions: ["Modern Fashion", "Business Wear", "Contemporary Style"],
    badge: "New",
    materials: "Contemporary Cotton Blend",
    minOrder: "3 yards"
  }
];

interface Fabric {
  id: number;
  name: string;
  price: string;
  image: string;
  description: string;
  longDescription: string;
  pattern: string;
  colors: string[];
  occasions: string[];
  badge: string;
  materials: string;
  minOrder: string;
}

export default function Rujeko() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const [selectedFabric, setSelectedFabric] = useState<Fabric | null>(null);

  const openFabricDetail = (fabric: Fabric) => {
    setSelectedFabric(fabric);
    onOpen();
  };

  const handleWhatsAppOrder = (fabric: Fabric) => {
    const message = `Hi! I&apos;m interested in ordering the ${fabric.name} fabric at ${fabric.price}. Please provide more details about availability, minimum order quantities, and shipping.`;
    const whatsappUrl = `https://wa.me/447376712695?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    toast.success('Redirecting to WhatsApp...');
  };

  return (
    <Layout>
      {/* Banner Section */}
      <section className="pt-32 pb-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Title and Content */}
            <div>
              <h1 className="font-heading text-5xl lg:text-6xl font-bold text-orange-900 mb-2 leading-tight">Rujeko</h1>
              <p className="text-base text-neutral-700 mb-2">By Kiki Mapanzure</p>
              <p className="text-2xl text-neutral-800 mb-6 font-light">Radiance Woven in Heritage</p>
              <p className="text-lg text-neutral-700 mb-8 leading-relaxed">
                Authentic African fabrics that celebrate clan totems, cultural identity, 
                and the beauty of Zimbabwean traditions. Each thread tells a story of belonging.
              </p>
              <Button
                className="bg-orange-900 text-white font-syne px-8 py-4 text-lg tracking-wide hover:bg-orange-800 transition-all duration-200 sharp-edges"
                onClick={() => {
                  const message = "Hi! I&apos;m interested in learning more about Rujeko fabric collections. Please share your catalog and pricing.";
                  window.open(`https://wa.me/447376712695?text=${encodeURIComponent(message)}`, '_blank');
                }}
              >
                Explore Collections
              </Button>
            </div>
            
            {/* Right side - Image */}
            <div className="relative">
              <div className="relative w-full h-96 lg:h-[500px] overflow-hidden sharp-edges border border-orange-200">
                <NextImage
                  src="/images/kalpa-mahagamage--eXbTwI0VU0-unsplash.jpg"
                  alt="Rujeko Heritage Fabric"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Floating logo */}
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-white border border-orange-200 sharp-edges flex items-center justify-center p-2">
                <NextImage
                  src="/images/rujeko-logo.png"
                  alt="Rujeko Logo"
                  width={48}
                  height={48}
                  className="object-contain w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="text-center mb-16">
            <h2 className="font-syne text-4xl font-bold text-orange-900 mb-6">Our Story</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="font-syne text-3xl font-bold text-orange-900 mb-6">A Fabric with Meaning in Every Thread</h3>
              <p className="text-neutral-800 leading-relaxed mb-4">
                RUJEKO is more than a fabric line — it’s a personal and cultural journey. Founded by Zimbabwean designer Kiki Mapanzure, the brand began as a way to preserve stories, heritage, and identity through textiles. For Kiki, fabric speaks where words fall short — becoming a way to honor ancestry and imagine a future filled with pride.
              </p>
              <p className="text-neutral-800 leading-relaxed mb-4">
                At the heart of this story are Zimbabwe’s rich clan totems — powerful animal symbols like Shumba (lion), Nzou (elephant), Mhofu (eland), Hungwe (fish eagle), Soko (monkey), and Shiri (bird) — each representing lineage, character, and belonging. RUJEKO transforms these totems into living art, woven into every design. While these core totems anchor the collection, the brand will also accommodate other totem prints on request, ensuring every wearer sees their own story represented.
              </p>
              <p className="text-neutral-800 leading-relaxed">
                RUJEKO means “radiance” — and it’s also the name of Kiki’s late father, a man of honor, leadership, and cultural pride. His legacy is stitched into every design, guiding the brand’s purpose.
              </p>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="relative w-full h-96 overflow-hidden sharp-edges border border-orange-200">
                  <NextImage
                    src="/images/gal-4.jpg"
                    alt="Rujeko Boutique Display"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative w-full h-96 overflow-hidden sharp-edges border border-orange-200">
                  <NextImage
                    src="/images/gal-25.jpg"
                    alt="Rujeko Our Story Portrait"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fabric Collections */}
      <section className="py-20 bg-orange-50">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="text-center mb-16">
            <h2 className="font-syne text-4xl font-bold text-orange-900 mb-6">
              Heritage Collections
            </h2>
            <p className="text-xl text-orange-800 max-w-3xl mx-auto">
              Each collection tells a unique story of African heritage and identity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {fabricCollections.map((fabric) => (
              <Card key={fabric.id} className="bg-white border border-orange-200 hover:border-orange-400 transition-all duration-300 group sharp-edges">
                <div className="relative aspect-square overflow-hidden">
                  <NextImage
                    src={fabric.image}
                    alt={fabric.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <Chip
                      size="sm"
                      className="bg-orange-900 text-white font-syne text-xs tracking-wide sharp-edges"
                    >
                      {fabric.badge}
                    </Chip>
                  </div>
                </div>
                <CardBody className="p-6">
                  <h3 className="font-syne text-xl font-bold text-orange-900 mb-2 leading-tight">
                    {fabric.name}
                  </h3>
                  
                  <p className="text-orange-700 text-sm mb-4 leading-relaxed">
                    {fabric.description}
                  </p>
                  
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-syne font-bold text-2xl text-orange-900">
                      {fabric.price}
                    </span>
                  </div>

                  <div className="space-y-3">
                      <Button
                      className="w-full bg-orange-900 text-white font-syne px-4 py-2 text-sm tracking-wide hover:bg-orange-800 transition-all duration-200 sharp-edges"
                      onClick={() => openFabricDetail(fabric)}
                    >
                      View Details
                    </Button>
                      <Button
                      variant="bordered"
                      className="w-full border-orange-300 text-orange-800 hover:bg-orange-100 font-syne px-4 py-2 text-sm tracking-wide transition-all duration-200 sharp-edges"
                        onClick={() => handleWhatsAppOrder(fabric)}
                    >
                      Quick Order
                    </Button>
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <h2 className="font-syne text-4xl font-bold text-orange-900 mb-12 text-center">
            Our Craft
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white border border-orange-200 hover:border-orange-400 transition-all duration-300 group sharp-edges">
              <CardBody className="text-center p-8">
                <h3 className="font-syne text-xl font-bold text-orange-900 mb-4">
                  Authentic Patterns
                </h3>
                <p className="text-neutral-700 leading-relaxed">
                  Every design is rooted in genuine African traditions, carefully researched 
                  and crafted with respect for cultural significance.
                </p>
              </CardBody>
            </Card>
            
            <Card className="bg-white border border-orange-200 hover:border-orange-400 transition-all duration-300 group sharp-edges">
              <CardBody className="text-center p-8">
                <h3 className="font-syne text-xl font-bold text-orange-900 mb-4">
                  Premium Materials
                </h3>
                <p className="text-neutral-700 leading-relaxed">
                  We use only the finest cotton and traditional techniques to ensure 
                  our fabrics are both beautiful and durable.
                </p>
              </CardBody>
            </Card>
            
            <Card className="bg-white border border-orange-200 hover:border-orange-400 transition-all duration-300 group sharp-edges">
              <CardBody className="text-center p-8">
                <h3 className="font-syne text-xl font-bold text-orange-900 mb-4">
                  Cultural Connection
                </h3>
                <p className="text-neutral-700 leading-relaxed">
                  Each piece connects you to your heritage, creating meaningful bonds 
                  between past traditions and contemporary expression.
                </p>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-orange-900">
        <div className="max-w-7xl mx-auto px-8 lg:px-16 text-center">
          <h2 className="font-syne text-4xl font-bold text-white mb-6">
            Weave Your Story with Rujeko
          </h2>
          <p className="text-xl text-orange-200 mb-8 leading-relaxed">
            Connect with your heritage through authentic African fabrics that speak your identity.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              className="bg-white text-orange-900 font-syne px-8 py-3 tracking-wide hover:bg-orange-50 transition-all duration-200 sharp-edges"
              onClick={() => {
                const message = "Hi! I&apos;m interested in learning more about Rujeko fabric collections. Please share your catalog and pricing.";
                window.open(`https://wa.me/263123456789?text=${encodeURIComponent(message)}`, '_blank');
              }}
            >
              Explore Fabrics
            </Button>
            <Button
              variant="bordered"
              className="border-white text-white hover:bg-white hover:text-orange-900 font-syne px-8 py-3 tracking-wide transition-all duration-200 sharp-edges"
              as={Link}
              href="/contact"
            >
              Custom Orders
            </Button>
          </div>
        </div>
      </section>

      {/* Fabric Detail Modal */}
      <Modal 
        isOpen={isOpen} 
        onOpenChange={onOpenChange}
        size="4xl"
        classNames={{
          base: "sharp-edges",
          backdrop: "bg-orange-900/50",
          wrapper: "items-center justify-center"
        }}
      >
        <ModalContent className="sharp-edges bg-white">
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 border-b border-orange-200 pb-4">
                <h2 className="font-syne text-2xl font-bold text-orange-900">
                  {selectedFabric?.name}
                </h2>
                <p className="text-orange-700 font-normal">
                  {selectedFabric?.badge} Collection
                </p>
              </ModalHeader>
              <ModalBody className="py-6">
                {selectedFabric && (
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="relative aspect-square">
                      <NextImage
                        src={selectedFabric.image}
                        alt={selectedFabric.name}
                        fill
                        className="object-cover sharp-edges"
                      />
                    </div>
                    <div className="space-y-6">
                      <div>
                        <div className="flex items-center gap-3 mb-4">
                          <span className="font-syne font-bold text-3xl text-orange-900">
                            {selectedFabric.price}
                          </span>
                          <span className="text-orange-600 text-sm">
                            (Min: {selectedFabric.minOrder})
                          </span>
                        </div>
                        <p className="text-orange-800 leading-relaxed">
                          {selectedFabric.longDescription}
                        </p>
                      </div>

                      <div>
                        <h4 className="font-syne font-bold text-orange-900 mb-2">Pattern</h4>
                        <p className="text-orange-700">{selectedFabric.pattern}</p>
                      </div>

                      <div>
                        <h4 className="font-syne font-bold text-orange-900 mb-2">Available Colors</h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedFabric.colors.map((color: string) => (
                            <Chip 
                              key={color} 
                              size="sm" 
                              className="bg-orange-100 text-orange-800 border border-orange-300 sharp-edges"
                            >
                              {color}
                            </Chip>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-syne font-bold text-orange-900 mb-2">Perfect For</h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedFabric.occasions.map((occasion: string) => (
                            <Chip 
                              key={occasion} 
                              size="sm" 
                              className="bg-orange-100 text-orange-800 border border-orange-300 sharp-edges"
                            >
                              {occasion}
                            </Chip>
                          ))}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                        <div>
                          <h4 className="font-syne font-bold text-orange-900 mb-1">Materials</h4>
                          <p className="text-orange-700">{selectedFabric.materials}</p>
                        </div>
                        <div>
                          <h4 className="font-syne font-bold text-orange-900 mb-1">Minimum Order</h4>
                          <p className="text-orange-700">{selectedFabric.minOrder}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </ModalBody>
              <ModalFooter className="border-t border-orange-200 pt-4">
                <Button 
                  variant="bordered" 
                  onPress={onClose}
                  className="border-orange-300 text-orange-800 hover:bg-orange-100 font-syne tracking-wide sharp-edges"
                >
                  Close
                </Button>
                <Button 
                  className="bg-orange-900 text-white font-syne tracking-wide hover:bg-orange-800 transition-all duration-200 sharp-edges"
                  onPress={() => {
                    if (selectedFabric) {
                      handleWhatsAppOrder(selectedFabric);
                    }
                    onClose();
                  }}
                >
                  Order on WhatsApp
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </Layout>
  );
} 
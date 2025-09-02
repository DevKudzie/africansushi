"use client";

import { Button, Card, CardBody, Chip } from "@heroui/react";
import Link from "next/link";
import NextImage from "next/image";
import Layout from "@/components/Layout";
import { toast } from "react-hot-toast";


const totemCollections = [
  {
    id: 1,
    name: "Mhukahuru (Nzou / Elephant)",
    image: "/images/totems/elephant mockup 1.jpg",
    totem: "Nzou (Elephant)",
    praise: "Samanyanga - the one with tusks",
    description: "The Nzou clan, also known as Samanyanga, is deeply respected across Zimbabwe, particularly among Karanga and Zezuru communities. The elephant signifies wisdom, protection of kin, and the ability to lead with gentle but unshakable authority.",
    symbolism: "The design features a regal elephant head motif framed by intricate geometric patterns inspired by Great Zimbabwe's iconic architecture. The zigzag and diamond motifs symbolize resilience, sacred order, and cultural continuity—echoing the enduring legacy of Nzou ancestors.",
    communities: ["Karanga", "Zezuru"],
    qualities: ["Wisdom", "Protection", "Leadership", "Authority"]
  },
  {
    id: 2,
    name: "Vahera (Mhofu/Shava/Eland)",
    image: "/images/totems/eland mockup 1.jpg",
    totem: "Shava (Eland)",
    praise: "Museyamwa - the one who remains behind",
    description: "This fabric is a visual tribute to the Shava totem, one of the most respected and widespread totems in Zimbabwe. The Shava (eland) totem is associated with royalty, leadership, diplomacy, and wisdom, traditionally linked to descendants of the Rozvi and Munhumutapa civilizations.",
    symbolism: "The fabric features a noble eland head motif, capturing the animal's calm strength and quiet authority. It is surrounded by bold geometric patterns drawn from Great Zimbabwe's stonework, especially zigzags symbolizing resilience and diamond shapes representing continuity and lineage.",
    communities: ["Rozvi", "Munhumutapa descendants"],
    qualities: ["Royalty", "Leadership", "Diplomacy", "Wisdom"]
  },
  {
    id: 3,
    name: "Murambwi (Shumba/Lion)",
    image: "/images/totems/lion mockup 1.jpg",
    totem: "Shumba (Lion)",
    praise: "Mutapwa wemagamba - he who walks among warriors",
    description: "The Shumba (lion) totem, one of the most iconic and noble symbols in Zimbabwean totemic tradition. The Shumba clan is revered across various ethnic groups—particularly the Karanga, Zezuru, and Manyika—and is associated with bravery, kingship, guardianship, and fierce loyalty.",
    symbolism: "The central motif—a bold, watchful lion's head—represents the king of the wild, a sacred animal known in Shumba culture as the protector of family and land. In oral traditions and clan praise poetry, the Shumba is praised as the symbol of fearlessness and divine authority.",
    communities: ["Karanga", "Zezuru", "Manyika"],
    qualities: ["Bravery", "Kingship", "Guardianship", "Loyalty"]
  },
  {
    id: 4,
    name: "Ngenya (Ngwenya/Crocodile)",
    image: "/images/totems/croc mockup 1.jpg",
    totem: "Ngwenya (Crocodile)",
    praise: "Shoko - the one who moves through water",
    description: "This fabric is a tribute to the Ngwenya (Crocodile) totem, one of the most revered totems in Zimbabwean culture towards the Karanga people. The crocodile symbolizes strength, leadership, fearlessness, and deep ancestral wisdom.",
    symbolism: "The totem preserves identity, lineage, and respect for nature. The Ngwenya totem particularly invokes imagery of stealth, power, and silent authority in water—majestic, ancient, and untamed.",
    communities: ["Karanga"],
    qualities: ["Strength", "Leadership", "Fearlessness", "Ancestral Wisdom"]
  },
  {
    id: 5,
    name: "Bambomukunda",
    image: "/images/totems/Bambomukanda mocup all 4 colours.jpg",
    totem: "Complementary Design",
    praise: "Tete - the wise advisor",
    description: "BAMBOMUKUNDA is a complimentary fabric designed to gracefully support and elevate RUJEKO's totemic collections. Inspired by the respected Zimbabwean Tete (aunt)—a family advisor, mediator, and role model.",
    symbolism: "This fabric features subtle, flowing patterns and warm, versatile tones that embody quiet strength, wisdom, and nurturing guidance. While free of totem symbols, BAMBOMUKUNDA provides the perfect elegant backdrop for creative styling, honoring the vital role of the Tete in holding families and traditions together.",
    communities: ["Universal"],
    qualities: ["Wisdom", "Guidance", "Nurturing", "Support"]
  }
];

interface TotemFabric {
  id: number;
  name: string;
  image: string;
  totem: string;
  praise: string;
  description: string;
  symbolism: string;
  communities: string[];
  qualities: string[];
}

export default function Rujeko() {



  const handleWhatsAppInquiry = (fabric: TotemFabric) => {
    const message = `Hi! I&apos;m interested in learning more about the ${fabric.name} fabric from the RUJEKO collection. Could you please share more details about this totem design, available options, and how to place an order?`;
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
                  src="/images/kik-silver-dress-2.jpg"
                  alt="Kiki Mapanzure - Designer"
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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="font-syne text-3xl font-bold text-orange-900 mb-6">Fabric with a Story in Every Thread</h3>
              <p className="text-neutral-800 leading-relaxed mb-4">
                RUJEKO is more than a fabric line — it&apos;s a personal and cultural journey. Founded by Zimbabwean designer Kiki Mapanzure, the brand began as a way to preserve stories, heritage, and identity through textiles. For Kiki, fabric speaks where words fall short — becoming a way to honor ancestry and imagine a future filled with pride.
              </p>
              <p className="text-neutral-800 leading-relaxed mb-4">
                At the heart of this story are Zimbabwe&apos;s rich clan totems — powerful animal symbols like Shumba (lion), Nzou (elephant), Mhofu (eland), Hungwe (fish eagle), Soko (monkey), and Shiri (bird) — each representing lineage, character, and belonging. RUJEKO transforms these totems into living art, woven into every design. While these core totems anchor the collection, the brand will also accommodate other totem prints on request, ensuring every wearer sees their own story represented.
              </p>
              <p className="text-neutral-800 leading-relaxed mb-4">
                Each RUJEKO textile is rich in symbolism, grounded in Zimbabwe&apos;s cultural traditions: Honeycomb patterns inspired by African geometry symbolize unity in diversity. Clan totems are woven into designs as ancestral emblems representing family identity and belonging. Zigzag motifs echo the chevron walls of Great Zimbabwe, symbolizing resilience and sacred foundations.
              </p>
              <p className="text-neutral-800 leading-relaxed">
                RUJEKO means &ldquo;radiance&rdquo; — and it&apos;s also the name of Kiki&apos;s late father, a man of honor, leadership, and cultural pride. His legacy is stitched into every design, guiding the brand&apos;s purpose.
              </p>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="relative w-full h-96 overflow-hidden sharp-edges border border-orange-200">
                  <NextImage
                    src="/images/kiki-story-1.jpg"
                    alt="Rujeko Boutique Display"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative w-full h-96 overflow-hidden sharp-edges border border-orange-200">
                  <NextImage
                    src="/images/kik-story-2.jpg"
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

      {/* Totem Collections */}
      <section className="py-20 bg-orange-50">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="text-center mb-16">
            <h2 className="font-syne text-4xl font-bold text-orange-900 mb-6">
              Totem Heritage Collections
            </h2>
            <p className="text-xl text-orange-800 max-w-3xl mx-auto">
              Each design honors the sacred animal totems that define Zimbabwean identity, lineage, and cultural pride.
            </p>
          </div>

          <div className="space-y-16">
            {totemCollections.map((fabric, index) => (
              <div key={fabric.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-cols-2' : ''}`}>
                {/* Image Section */}
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="relative aspect-square overflow-hidden sharp-edges border-2 border-orange-200 bg-white p-4">
                    <NextImage
                      src={fabric.image}
                      alt={fabric.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>

                {/* Content Section */}
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="bg-white border-l-4 border-orange-900 p-8 sharp-edges">
                    <div className="mb-6">
                      <h3 className="font-syne text-3xl font-bold text-orange-900 mb-2">
                        {fabric.name}
                      </h3>
                      <p className="text-orange-600 font-medium text-lg italic mb-1">
                        &ldquo;{fabric.praise}&rdquo;
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {fabric.communities.map((community) => (
                          <Chip 
                            key={community} 
                            size="sm" 
                            className="bg-orange-100 text-orange-800 border border-orange-300 sharp-edges"
                          >
                            {community}
                          </Chip>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-4 mb-6">
                      <p className="text-neutral-800 leading-relaxed">
                        {fabric.description}
                      </p>
                      <p className="text-neutral-700 leading-relaxed text-sm">
                        <strong>Symbolism:</strong> {fabric.symbolism}
                      </p>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-syne font-bold text-orange-900 mb-3">Sacred Qualities</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {fabric.qualities.map((quality) => (
                          <div key={quality} className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-orange-900 sharp-edges"></div>
                            <span className="text-neutral-700 text-sm">{quality}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Button
                      className="w-full bg-orange-900 text-white font-syne px-6 py-3 text-lg tracking-wide hover:bg-orange-800 transition-all duration-200 sharp-edges"
                      onClick={() => handleWhatsAppInquiry(fabric)}
                    >
                      Learn More & Inquire
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Fabric Options Section */}
          <div className="mt-20 bg-white border border-orange-200 p-8 sharp-edges">
            <h3 className="font-syne text-2xl font-bold text-orange-900 mb-6 text-center">
              Fabric Options Available
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="p-4 bg-orange-50 border border-orange-100 sharp-edges">
                <h4 className="font-syne font-bold text-orange-900 mb-2">Poly Cotton</h4>
                <p className="text-orange-700 text-sm">Durable and versatile</p>
                <p className="font-bold text-orange-900 mt-2">$10/meter</p>
              </div>
              <div className="p-4 bg-orange-50 border border-orange-100 sharp-edges">
                <h4 className="font-syne font-bold text-orange-900 mb-2">100% Cotton</h4>
                <p className="text-orange-700 text-sm">Premium natural fabric</p>
                <p className="font-bold text-orange-900 mt-2">$15/meter</p>
              </div>
              <div className="p-4 bg-orange-50 border border-orange-100 sharp-edges">
                <h4 className="font-syne font-bold text-orange-900 mb-2">Silk</h4>
                <p className="text-orange-700 text-sm">Luxury and elegance</p>
                <p className="font-bold text-orange-900 mt-2">$8/meter</p>
              </div>
            </div>
            <p className="text-center text-orange-700 text-sm mt-4">
              *Custom fabric requests and special fabrics like Kente available at additional charge
            </p>
          </div>
        </div>
      </section>

      {/* RUJEKO RWAKO Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="text-center mb-12">
            <h2 className="font-syne text-4xl font-bold text-orange-900 mb-6">
              RUJEKO RWAKO
            </h2>
            <p className="text-xl text-orange-800 max-w-3xl mx-auto">
              A Glamorous Fashion Brand Rooted in Zimbabwean Tradition and Elegance
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-neutral-800 leading-relaxed mb-6">
                RUJEKO RWAKO is a luxury fashion house celebrating the richness of Zimbabwean culture through timeless, elegant garments. Specializing in bespoke creations for weddings, cultural celebrations, and heritage-inspired fashion, RUJEKO RWAKO merges modern glamour with the beauty of tradition.
              </p>
              <p className="text-neutral-800 leading-relaxed mb-6">
                Founded by Kiki Mapanzure and creatively styled by Darlington Chimwere – The Eye Stylist, the brand brings a refined vision to life with precision, cultural storytelling, and exceptional craftsmanship.
              </p>
              <p className="text-neutral-800 leading-relaxed">
                RUJEKO RWAKO is the couture extension of RUJEKO Fabrics – every piece is made using these deeply symbolic textiles, designed to honor ancestry and tradition while dressing the modern African.
              </p>
            </div>
            <div className="bg-orange-50 border border-orange-200 p-8 sharp-edges">
              <h3 className="font-syne text-2xl font-bold text-orange-900 mb-6">Our Specialties</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-orange-900 sharp-edges mt-2"></div>
                  <div>
                    <h4 className="font-syne font-bold text-orange-800">Bespoke Wedding Attire</h4>
                    <p className="text-neutral-700 text-sm">Custom-made garments for your special day</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-orange-900 sharp-edges mt-2"></div>
                  <div>
                    <h4 className="font-syne font-bold text-orange-800">Cultural Celebrations</h4>
                    <p className="text-neutral-700 text-sm">Heritage wear for traditional ceremonies</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-orange-900 sharp-edges mt-2"></div>
                  <div>
                    <h4 className="font-syne font-bold text-orange-800">African Formalwear</h4>
                    <p className="text-neutral-700 text-sm">Elegant attire showcasing symbolic fabrics</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-orange-900 sharp-edges mt-2"></div>
                  <div>
                    <h4 className="font-syne font-bold text-orange-800">Groom Wear</h4>
                    <p className="text-neutral-700 text-sm">Sophisticated designs for the modern African groom</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <h2 className="font-syne text-4xl font-bold text-orange-900 mb-12 text-center">
            More Than Fabric — A Movement
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white border border-orange-200 hover:border-orange-400 transition-all duration-300 group sharp-edges">
              <CardBody className="text-center p-8">
                <h3 className="font-syne text-xl font-bold text-orange-900 mb-4">
                  Reviving Traditions
                </h3>
                <p className="text-neutral-700 leading-relaxed">
                  Every design is rooted in genuine African traditions, carefully researched 
                  and crafted with respect for cultural significance and ancestral wisdom.
                </p>
              </CardBody>
            </Card>
            
            <Card className="bg-white border border-orange-200 hover:border-orange-400 transition-all duration-300 group sharp-edges">
              <CardBody className="text-center p-8">
                <h3 className="font-syne text-xl font-bold text-orange-900 mb-4">
                  Restoring Pride
                </h3>
                <p className="text-neutral-700 leading-relaxed">
                  We create meaningful connections to heritage, helping people feel seen, 
                  belong, and celebrate their cultural identity with confidence.
                </p>
              </CardBody>
            </Card>
            
            <Card className="bg-white border border-orange-200 hover:border-orange-400 transition-all duration-300 group sharp-edges">
              <CardBody className="text-center p-8">
                <h3 className="font-syne text-xl font-bold text-orange-900 mb-4">
                  Reconnecting Roots
                </h3>
                <p className="text-neutral-700 leading-relaxed">
                  Each piece connects you to your lineage, creating bridges between 
                  generations and passing on meaningful stories through textile art.
                </p>
              </CardBody>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-2xl text-orange-900 font-light italic">
              &ldquo;With RUJEKO, you wear more than fabric — you wear your story.&rdquo;
            </p>
            <p className="text-orange-700 mt-4">
              Rooted in identity. Radiant by design. You are your story.
            </p>
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


    </Layout>
  );
} 
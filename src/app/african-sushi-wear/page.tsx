"use client";

import { Button, Card, CardBody, Chip, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure, Input, Select, SelectItem } from "@heroui/react";
import { Eye, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import NextImage from "next/image";
import Layout from "@/components/Layout";
import { toast } from "react-hot-toast";
import { useState, useEffect } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

interface ProductImage {
  src: string;
  alt: string;
}

interface Product {
  id: number;
  name: string;
  price: string;
  originalPrice: string;
  image: string;
  images: ProductImage[];
  description: string;
  longDescription: string;
  sizes: string[];
  colors: string[];
  category: string;
  materials: string;
  care: string;
}

interface TshirtItem {
  src: string;
  title: string;
}

interface TshirtCategory {
  name: string;
  items: TshirtItem[];
}





const tshirtCategories: TshirtCategory[] = [
  {
    name: "LOVE",
    items: [
      { src: "/images/A S T-Shirts/extracted/JPEGS/1. LOVE Wapunza black.jpg", title: "LOVE Wapunza (Black)" },
      { src: "/images/A S T-Shirts/extracted/JPEGS/1. LOVE Wapunza red.jpg", title: "LOVE Wapunza (Red)" },
      { src: "/images/A S T-Shirts/extracted/JPEGS/1. LOVE Wapunza ruoko white.jpg", title: "LOVE Wapunza Ruoko (White)" },
      { src: "/images/A S T-Shirts/extracted/JPEGS/2. LOVE Ndibate ruoko black.jpg", title: "LOVE Ndibate Ruoko (Black)" },
      { src: "/images/A S T-Shirts/extracted/JPEGS/2. LOVE Ndibate ruoko red.jpg", title: "LOVE Ndibate Ruoko (Red)" },
      { src: "/images/A S T-Shirts/extracted/JPEGS/2. LOVE Ndibate ruoko white.jpg", title: "LOVE Ndibate Ruoko (White)" },
      { src: "/images/A S T-Shirts/extracted/JPEGS/3. LOVE Proposal black.jpg", title: "LOVE Proposal (Black)" },
      { src: "/images/A S T-Shirts/extracted/JPEGS/3. LOVE Proposal red.jpg", title: "LOVE Proposal (Red)" },
      { src: "/images/A S T-Shirts/extracted/JPEGS/3. LOVE Proposal white.jpg", title: "LOVE Proposal (White)" },
    ],
  },
  {
    name: "CONSOLIDATION",
    items: [
      { src: "/images/A S T-Shirts/extracted/JPEGS/4. Consolation Hamba Kahle black.jpg", title: "Hamba Kahle (Black)" },
      { src: "/images/A S T-Shirts/extracted/JPEGS/4. Consolation Hamba Kahle darker blue.jpg", title: "Hamba Kahle (Dark Blue)" },
      { src: "/images/A S T-Shirts/extracted/JPEGS/4. Consolation Hamba Kahle light blue.jpg", title: "Hamba Kahle (Light Blue)" },
      { src: "/images/A S T-Shirts/extracted/JPEGS/4. Consolation Hamba Kahle white.jpg", title: "Hamba Kahle (White)" },
    ],
  },
  {
    name: "HOPE",
    items: [
      { src: "/images/A S T-Shirts/extracted/JPEGS/5. HOPE Winner black.jpg", title: "Winner (Black)" },
      { src: "/images/A S T-Shirts/extracted/JPEGS/5. HOPE Winner merron.jpg", title: "Winner (Maroon)" },
      { src: "/images/A S T-Shirts/extracted/JPEGS/5. HOPE Winner mustard.jpg", title: "Winner (Mustard)" },
      { src: "/images/A S T-Shirts/extracted/JPEGS/5. HOPE Winner white.jpg", title: "Winner (White)" },
      { src: "/images/A S T-Shirts/extracted/JPEGS/6. HOPE Kuhadhira cream.jpg", title: "Kuhadhira (Cream)" },
      { src: "/images/A S T-Shirts/extracted/JPEGS/6. HOPE Kuhadhira dark green.jpg", title: "Kuhadhira (Dark Green)" },
      { src: "/images/A S T-Shirts/extracted/JPEGS/6. HOPE Kuhadhira mustard.jpg", title: "Kuhadhira (Mustard)" },
      { src: "/images/A S T-Shirts/extracted/JPEGS/6. HOPE Kuhadhira white.jpg", title: "Kuhadhira (White)" },
    ],
  },
  {
    name: "FAITH",
    items: [
      { src: "/images/A S T-Shirts/extracted/JPEGS/7. FAITH Rigiyoni Takawanda black.jpg", title: "Rigiyoni Takawanda (Black)" },
      { src: "/images/A S T-Shirts/extracted/JPEGS/7. FAITH Rigiyoni Takawanda pink.jpg", title: "Rigiyoni Takawanda (Pink)" },
      { src: "/images/A S T-Shirts/extracted/JPEGS/7. FAITH Rigiyoni Takawanda white.jpg", title: "Rigiyoni Takawanda (White)" },
      { src: "/images/A S T-Shirts/extracted/JPEGS/8. FAITH Pindirai Mwari army green.jpg", title: "Pindirai Mwari (Army Green)" },
      { src: "/images/A S T-Shirts/extracted/JPEGS/8. FAITH Pindirai Mwari dark green.jpg", title: "Pindirai Mwari (Dark Green)" },
      { src: "/images/A S T-Shirts/extracted/JPEGS/8. FAITH Pindirai Mwari white.jpg", title: "Pindirai Mwari (White)" },
    ],
  },
  {
    name: "VIBES ON VIBES",
    items: [
      { src: "/images/A S T-Shirts/extracted/JPEGS/9. VIBES ON VIBES black blue.jpg", title: "Vibes on Vibes (Black Blue)" },
      { src: "/images/A S T-Shirts/extracted/JPEGS/9. VIBES ON VIBES black.jpg", title: "Vibes on Vibes (Black)" },
      { src: "/images/A S T-Shirts/extracted/JPEGS/9. VIBES ON VIBES white.jpg", title: "Vibes on Vibes (White)" },
    ],
  },
  {
    name: "NOVUS AFRICA MAP",
    items: [
      { src: "/images/A S T-Shirts/extracted/JPEGS/10. Novus Afrian map black.jpg", title: "Novus Africa Map (Black)" },
      { src: "/images/A S T-Shirts/extracted/JPEGS/10. Novus Afrian map lime.jpg", title: "Novus Africa Map (Lime)" },
      { src: "/images/A S T-Shirts/extracted/JPEGS/10. Novus Afrian map white.jpg", title: "Novus Africa Map (White)" },
    ],
  },
];

const getTshirtPrice = (title: string): string => {
  const lower = title.toLowerCase();
  if (lower.includes("kuhadhira") || lower.includes("zvichanaka chete")) {
    return "$40";
  }
  return "$35";
};

const heroSlides = [
  {
    title: "AFRICAN",
    subtitle: "SUSHI WEAR",
    description: "Premium streetwear. Taste the Vision. Live the Legacy.",
    image: "/images/Model Pics/AS Wear 1.JPG",
    cta: "Shop Collection"
  },
  {
    title: "PREMIUM",
    subtitle: "STREETWEAR",
    description: "Crafted for comfort, culture, and expression.",
    image: "/images/Model Pics/AS Wear 2.JPG",
    cta: "Shop Collection"
  },
  {
    title: "LEGACY",
    subtitle: "CONTINUES",
    description: "Heritage and style, designed for today.",
    image: "/images/Model Pics/AS Wear 3.JPG",
    cta: "Shop Collection"
  }
];

const values = [
  {
    title: "Premium Quality",
    description: "Every garment is crafted with meticulous attention to detail, using only the finest materials that honor both comfort and durability.",
    bgColor: "bg-slate-50",
    hoverColor: "hover:bg-slate-100",
    borderColor: "hover:border-slate-300"
  },
  {
    title: "Cultural Authenticity", 
    description: "Our designs celebrate genuine African heritage, incorporating traditional elements with modern aesthetics that resonate with contemporary culture.",
    bgColor: "bg-zinc-50",
    hoverColor: "hover:bg-zinc-100",
    borderColor: "hover:border-zinc-300"
  },
  {
    title: "Meaningful Impact",
    description: "Every purchase contributes to the Munyaradzwe Foundation, extending Garry's legacy of community support and empowerment.",
    bgColor: "bg-stone-50",
    hoverColor: "hover:bg-stone-100",
    borderColor: "hover:border-stone-300"
  }
];

const designers = [
  {
    name: "Mrs. Zivayi Mapanzure",
    role: "Managing Director",
    company: "Creative Team",
    description: "With love and determination, Garry’s mother chose to carry the torch forward by structuring the art of the designs and visions behind it.",
    specialty: "Leadership & Vision"
  },
  {
    name: "Christabel Kiki Mapanzure",
    role: "Fashion Designer",
    company: "Creative Team",
    description: "Garry’s sister continues the creative legacy, shaping the fashion direction and design language of African Sushi Wear.",
    specialty: "Fashion Design"
  },
  {
    name: "Vimbai Vikki Machimbirike Jiri",
    role: "Manufacturing Partner",
    company: "Sherloin Clothing Factory",
    description: "Our trusted manufacturing partner has played a pivotal role in giving life to every design. From assisting with selecting the fabrics to executing every stitch, their craftsmanship has been nothing short of excellent.",
    specialty: "Premium Manufacturing & Quality Control"
  },
  {
    name: "Munashe Hilton Matyatya",
    role: "Visual Alchemist",
    company: "Graphic Design",
    description: "Behind every design, color scheme, and pattern lies the talent of Munashe, a gifted graphic designer who worked closely with the family to bring Garry's concepts to life.",
    specialty: "Visual Design & Brand Identity"
  },
  {
    name: "Darlington Chimwere",
    role: "The Stylist's Eye",
    company: "Fashion Styling",
    description: "To ensure the presentation of each piece matched its soul, we partnered with renowned Zimbabwean stylist Darlington. Known for his ability to blend street style with elegance.",
    specialty: "Fashion Styling & Creative Direction"
  }
];

export default function AfricanSushiWear() {
  const {isOpen, onOpenChange} = useDisclosure();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [currentProductImages, setCurrentProductImages] = useState<ProductImage[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [garmentType, setGarmentType] = useState<string>("All");
  const [priceFilter, setPriceFilter] = useState<string>("All");
  const [modelIndex, setModelIndex] = useState(0);



  const openLightbox = (product: Product, index: number = 0) => {
    setCurrentProductImages(product.images);
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const openTshirtLightbox = (item: TshirtItem) => {
    setCurrentProductImages([{ src: item.src, alt: item.title }]);
    setLightboxIndex(0);
    setLightboxOpen(true);
  };

  // Auto-advance hero slider
  useEffect(() => {
    const timer = setInterval(() => {
      setModelIndex((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);





  // Remove getHoodiePrice function as prices are now hardcoded in products

  const hoodieProducts = [
    {
      id: 1,
      name: "Heritage Hoodie - Black on White",
      price: "$85", // Cap/front graphic price as per notes
      images: [
        "/images/A S Hoodies/B on W front .jpg",
        "/images/A S Hoodies/B on W back .jpg",
        "/images/A S Hoodies/B on W side .jpg"
      ],
      description: "Premium cotton blend hoodie featuring black African patterns on white fabric.",
      sizes: ["S", "M", "L", "XL", "XXL"],
      category: "BW"
    },
    {
      id: 2,
      name: "Heritage Hoodie - White on Black",
      price: "$90", // Large back graphic price as per notes
      images: [
        "/images/A S Hoodies/W on B front .jpg",
        "/images/A S Hoodies/W on B Back .jpg",
        "/images/A S Hoodies/W on B side .jpg"
      ],
      description: "Premium cotton blend hoodie featuring white African patterns on black fabric.",
      sizes: ["S", "M", "L", "XL", "XXL"],
      category: "WB"
    },
    {
      id: 3,
      name: "Heritage Hoodie - Green on Black",
      price: "$85", // Cap/front graphic price as per notes
      images: [
        "/images/A S Hoodies/G on B front .jpg",
        "/images/A S Hoodies/G on B back .jpg",
        "/images/A S Hoodies/G on B side .jpg"
      ],
      description: "Premium cotton blend hoodie featuring green African patterns on black fabric.",
      sizes: ["S", "M", "L", "XL", "XXL"],
      category: "BG"
    },
    {
      id: 4,
      name: "Heritage Hoodie - Green on White",
      price: "$85", // Cap/front graphic price as per notes
      images: [
        "/images/A S Hoodies/G on W front .jpg",
        "/images/A S Hoodies/G on W back .jpg",
        "/images/A S Hoodies/G on W side .jpg"
      ],
      description: "Premium cotton blend hoodie featuring green African patterns on white fabric.",
      sizes: ["S", "M", "L", "XL", "XXL"],
      category: "WG"
    }
  ];


  const handleWhatsAppOrder = (product: Product) => {
    const message = `Hi! I'm interested in the ${product.name} (${product.price}). Could you please provide more details about sizing, colors, and shipping options?`;
    window.open(`https://wa.me/447376712695?text=${encodeURIComponent(message)}`, '_blank');
    toast.success('Redirecting to WhatsApp...');
  };

  return (
    <Layout>
      {/* Full-Screen Hero Slider (matching home) */}
      <section className="relative h-screen overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-transform duration-1000 ease-in-out ${
              index === modelIndex ? 'translate-x-0' : 
              index < modelIndex ? '-translate-x-full' : 'translate-x-full'
            }`}
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <NextImage
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover object-top"
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-charcoal/60 via-charcoal/40 to-charcoal/20" />
              <div className="absolute inset-0 bg-charcoal/20" />
            </div>

            {/* Content */}
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
                    href="#shop"
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

        {/* Navigation Controls */}
        <div className="absolute bottom-8 right-8 z-20 flex space-x-3">
          <button
            onClick={() => setModelIndex((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)}
            className="w-14 h-14 bg-pearl/20 hover:bg-pearl/40 backdrop-blur-sm transition-all sharp-edges flex items-center justify-center group"
          >
            <ChevronLeft className="w-7 h-7 text-pearl transition-transform group-hover:scale-110" />
          </button>
          <button
            onClick={() => setModelIndex((prev) => (prev + 1) % heroSlides.length)}
            className="w-14 h-14 bg-pearl/20 hover:bg-pearl/40 backdrop-blur-sm transition-all sharp-edges flex items-center justify-center group"
          >
            <ChevronRight className="w-7 h-7 text-pearl transition-transform group-hover:scale-110" />
          </button>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-8 z-20 flex space-x-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setModelIndex(index)}
              className={`w-12 h-1 transition-all sharp-edges ${
                index === modelIndex ? 'bg-pearl' : 'bg-pearl/40'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Model Slider + Products + Filters */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-zinc-50">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          {/* Removed duplicate model slider per request */}

          {/* Filters */}
          <div className="mb-10 grid grid-cols-1 lg:grid-cols-4 gap-4">
            <Input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search products…"
              className="sharp-edges"
            />
            <Select selectedKeys={[garmentType]} onChange={(e) => setGarmentType(e.target.value)} className="sharp-edges">
              <SelectItem key="All" value="All">All Garments</SelectItem>
              <SelectItem key="Hoodies" value="Hoodies">Hoodies</SelectItem>
              <SelectItem key="T-Shirts" value="T-Shirts">T‑Shirts</SelectItem>
              <SelectItem key="Sweatshirts" value="Sweatshirts">Sweatshirts</SelectItem>
              <SelectItem key="Outerwear" value="Outerwear">Outerwear</SelectItem>
            </Select>
            <Select selectedKeys={[priceFilter]} onChange={(e) => setPriceFilter(e.target.value)} className="sharp-edges">
              <SelectItem key="All" value="All">All Prices</SelectItem>
              <SelectItem key="35" value="35">$35</SelectItem>
              <SelectItem key="40" value="40">$40</SelectItem>
              <SelectItem key="75" value="75">$75</SelectItem>
              <SelectItem key="85" value="85">$85</SelectItem>
              <SelectItem key="90" value="90">$90</SelectItem>
              <SelectItem key="150" value="150">$150</SelectItem>
            </Select>
            <Select selectedKeys={[selectedCategory]} onChange={(e) => setSelectedCategory(e.target.value)} className="sharp-edges">
              <SelectItem key="All" value="All">All T‑Shirt Categories</SelectItem>
              {tshirtCategories.map((c) => (
                <SelectItem key={c.name} value={c.name}>{c.name}</SelectItem>
              ))}
            </Select>
          </div>
          <div className="text-center mb-16">
            <h2 className="font-syne text-4xl font-bold text-zinc-900 mb-6">
              Current Collection
            </h2>
            <p className="text-xl text-zinc-700 max-w-3xl mx-auto">
              Carefully curated pieces that celebrate African heritage through modern streetwear aesthetics.
            </p>
          </div>

          {/* Hoodies Display - 4 Products Only */}
          <div id="shop" className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {hoodieProducts.map((product) => (
                <Card key={product.id} className="bg-white border border-zinc-200 hover:border-zinc-400 transition-all duration-300 group sharp-edges">
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <NextImage src={product.images[0]} alt={product.name} fill className="object-contain bg-white" />
                  </div>
                  <CardBody className="p-6">
                    <h4 className="font-syne text-xl font-bold text-zinc-900 mb-2 leading-tight">{product.name}</h4>
                    <p className="text-zinc-600 mb-3 text-sm">{product.description}</p>
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-syne font-bold text-2xl text-zinc-900">{product.price}</span>
                      <span className="text-sm text-zinc-500">Sizes: {product.sizes.join(", ")}</span>
                    </div>
                    <Button
                      variant="bordered"
                      className="border-zinc-300 text-zinc-700 sharp-edges w-full"
                      onClick={() => {
                        const message = `Hi! I'm interested in the ${product.name} (${product.price}). Sizes: S M L XL XXL. Delivery: Harare CBD $3; other locations based on distance.`;
                        window.open(`https://wa.me/447376712695?text=${encodeURIComponent(message)}`, '_blank');
                        toast.success('Redirecting to WhatsApp...');
                      }}
                    >
                      Order Now
                    </Button>
                  </CardBody>
                </Card>
              ))}
            </div>
          </div>

          {/* Pricing & Delivery Notes removed per request */}

          {/* Coming Soon Section */}
          <div className="bg-white border border-zinc-200 p-12 text-center sharp-edges">
            <h3 className="font-syne text-3xl font-bold text-zinc-900 mb-4">
              More Launching Soon
            </h3>
            <p className="text-lg text-zinc-600 mb-6 max-w-2xl mx-auto">
              We&apos;re constantly creating new pieces that celebrate African heritage. 
              Stay tuned for exciting additions to our collection.
            </p>
            <Button
              className="bg-zinc-900 text-white font-syne px-6 py-3 tracking-wide hover:bg-zinc-700 transition-all duration-200 sharp-edges"
              onClick={() => {
                const message = "Hi! I'd like to be notified about new African Sushi Wear releases. Please keep me updated!";
                window.open(`https://wa.me/447376712695?text=${encodeURIComponent(message)}`, '_blank');
              }}
            >
              Notify Me
            </Button>
          </div>
        </div>
      </section>

      {/* T-Shirt Filters + Collections */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          {/* Filters moved here */}
          <div className="mb-10 grid grid-cols-1 lg:grid-cols-4 gap-4">
            <Input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search T‑Shirts…"
              className="sharp-edges"
            />
            <Select selectedKeys={[garmentType]} onChange={(e) => setGarmentType(e.target.value)} className="sharp-edges">
              <SelectItem key="All" value="All">All Garments</SelectItem>
              <SelectItem key="T-Shirts" value="T-Shirts">T‑Shirts</SelectItem>
            </Select>
            <Select selectedKeys={[priceFilter]} onChange={(e) => setPriceFilter(e.target.value)} className="sharp-edges">
              <SelectItem key="All" value="All">All Prices</SelectItem>
              <SelectItem key="35" value="35">$35</SelectItem>
              <SelectItem key="40" value="40">$40</SelectItem>
            </Select>
            <Select selectedKeys={[selectedCategory]} onChange={(e) => setSelectedCategory(e.target.value)} className="sharp-edges">
              <SelectItem key="All" value="All">All T‑Shirt Categories</SelectItem>
              {tshirtCategories.map((c) => (
                <SelectItem key={c.name} value={c.name}>{c.name}</SelectItem>
              ))}
            </Select>
          </div>

          <h2 className="font-syne text-4xl font-bold text-zinc-900 mb-10 text-center">T‑Shirt Collections</h2>
          <p className="text-center text-zinc-600 mb-12">Prices in USD. “Kuhadhira” and “zvichanaka chete” are $40; all other tees are $35.</p>

          <div className="space-y-16">
            {tshirtCategories.map((cat, cIdx) => (
              <div key={cIdx}>
                <h3 className="font-syne text-2xl font-bold text-zinc-900 mb-6">{cat.name}</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {cat.items.map((item, iIdx) => {
                    const price = getTshirtPrice(item.title);
                    return (
                      <Card key={`${cIdx}-${iIdx}`} className="bg-white border border-zinc-200 hover:border-zinc-400 transition-all duration-300 sharp-edges">
                        <div className="relative aspect-square overflow-hidden">
                          <NextImage src={item.src} alt={item.title} fill className="object-cover" />
                          <div className="absolute inset-0 bg-black/0 hover:bg-black/25 transition-colors duration-300" />
                        </div>
                        <CardBody className="p-4">
                          <h4 className="font-syne text-sm font-bold text-zinc-900 mb-1 line-clamp-2">{item.title}</h4>
                          <div className="flex items-center justify-between">
                            <span className="font-syne text-zinc-900 font-bold">{price}</span>
                            <div className="flex gap-2">
                              <Button
                                isIconOnly
                                className="bg-zinc-900 text-white sharp-edges"
                                onClick={() => openTshirtLightbox(item)}
                              >
                                <Eye className="w-4 h-4" />
                              </Button>
                              <Button
                                variant="bordered"
                                className="border-zinc-300 text-zinc-700 sharp-edges"
                                onClick={() => {
                                  const message = `Hi! I'm interested in the T‑Shirt: ${item.title} (${price}). Please provide sizes, availability and delivery options.`;
                                  window.open(`https://wa.me/447376712695?text=${encodeURIComponent(message)}`, '_blank');
                                  toast.success('Redirecting to WhatsApp...');
                                }}
                              >
                                Order
                              </Button>
                            </div>
                          </div>
                        </CardBody>
                      </Card>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section - Moved lower with Gary's image */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-[500px]">
            {/* Story Card */}
            <Card className="bg-white border border-amber-200 sharp-edges h-full">
              <CardBody className="p-8 lg:p-12 h-full flex flex-col justify-center">
                <h2 className="font-syne text-3xl font-bold text-amber-900 mb-6">
                  The Story Behind the Brand
                </h2>
                <div className="space-y-4 text-amber-800 leading-relaxed">
                  <p>
                    When university resources ran thin, Garry Mapanzure survived on affordable sushi meals, 
                    fueling both his body and his creative vision. This humble sustenance became the unlikely 
                    foundation for a brand that would honor African heritage through contemporary fashion.
                  </p>
                  <p>
                    &ldquo;African Sushi Wear&rdquo; represents the beautiful contradiction of necessity and luxury, 
                    tradition and innovation. Each garment is crafted to tell stories of resilience, 
                    cultural pride, and the journey from struggle to success.
                  </p>
                  <p>
                    Today, every purchase supports the Munyaradzwe Foundation, ensuring that 
                    Garry&apos;s legacy of giving back continues to touch lives across communities.
                  </p>
                </div>
              </CardBody>
            </Card>

            {/* Gary's Image Card */}
            <Card className="bg-white border border-amber-200 sharp-edges h-full">
              <div className="relative h-full overflow-hidden">
                <NextImage
                  src="/images/an-image-of-the-musician-looking-at-the-camera-wearing-a-hat.webp"
                  alt="Garry Mapanzure - Founder"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="font-syne text-2xl font-bold mb-2">Garry Mapanzure</h3>
                  <p className="text-white/90 font-light">Founder & Visionary</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Creative Team Section */}
      <section className="py-20 bg-gradient-to-br from-stone-50 to-slate-50">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="text-center mb-16">
            <h2 className="font-syne text-4xl font-bold text-zinc-900 mb-6">
              The Creative Team
            </h2>
            <p className="text-xl text-zinc-700 max-w-3xl mx-auto">
              No vision comes to life in isolation. Meet the talented individuals who helped bring 
              Garry&apos;s dream to reality through their expertise and dedication.
            </p>
          </div>
          
          <div className="space-y-12">
            {designers.map((designer, index) => (
              <div 
                key={index} 
                className={`flex flex-col lg:flex-row gap-8 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Profile Section */}
                <div className="lg:w-1/3">
                  <div className="bg-white border-2 border-zinc-900 sharp-edges p-8 text-center">
                    <div className="w-24 h-24 bg-zinc-900 sharp-edges flex items-center justify-center mx-auto mb-6">
                      <span className="text-white font-syne font-bold text-2xl">
                        {designer.name.split(' ').map(n => n[0]).slice(0, 2).join('')}
                      </span>
                    </div>
                    
                    <h3 className="font-syne text-2xl font-bold text-zinc-900 mb-2">
                      {designer.name}
                    </h3>
                    <div className="border-t-2 border-zinc-200 pt-4 mt-4">
                      <p className="font-syne text-lg text-zinc-600 mb-2">{designer.role}</p>
                      <p className="text-zinc-500 text-sm mb-4">{designer.company}</p>
                      <div className="bg-zinc-100 border border-zinc-300 sharp-edges px-3 py-2 inline-block">
                        <span className="text-zinc-700 text-sm font-medium">{designer.specialty}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Description Section */}
                <div className="lg:w-2/3">
                  <div className="bg-white border-l-4 border-zinc-900 p-8">
                    <blockquote className="text-lg text-zinc-700 leading-relaxed font-light italic">
                      &ldquo;{designer.description}&rdquo;
                    </blockquote>
                    
                    {/* Decorative element */}
                    <div className="mt-6 flex items-center gap-2">
                      <div className="w-12 h-0.5 bg-zinc-900"></div>
                      <div className="w-2 h-2 bg-zinc-900 sharp-edges"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section - Modern design with neutral colors */}
      <section className="py-20 bg-gradient-to-br from-slate-100 to-zinc-100">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <h2 className="font-syne text-4xl font-bold text-zinc-900 mb-12 text-center">
            What We Stand For
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card 
                key={index} 
                className={`${value.bgColor} border border-stone-200 ${value.borderColor} ${value.hoverColor} transition-all duration-300 sharp-edges group cursor-pointer transform hover:-translate-y-2`}
              >
                <CardBody className="p-8 text-center relative overflow-hidden">
                  {/* Subtle gradient accent */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-zinc-400 to-stone-400 group-hover:from-zinc-600 group-hover:to-stone-600 transition-all duration-300"></div>
                  
                  {/* Icon placeholder */}
                  <div className="w-12 h-12 bg-zinc-900 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-syne font-bold text-lg">{index + 1}</span>
                  </div>
                  
                  <h3 className="font-syne text-xl font-bold text-zinc-900 mb-4 group-hover:scale-105 transition-transform duration-300">
                    {value.title}
                  </h3>
                  <p className="text-zinc-700 leading-relaxed group-hover:text-zinc-800 transition-colors duration-300">
                    {value.description}
                  </p>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-zinc-900 to-black">
        <div className="max-w-7xl mx-auto px-8 lg:px-16 text-center">
          <h2 className="font-syne text-4xl font-bold text-white mb-6">
            Join the African Pride Movement
          </h2>
          <p className="text-xl text-zinc-300 mb-8 leading-relaxed">
            Wear your heritage with pride. Every piece tells a story. Every purchase makes a difference.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              className="bg-white text-zinc-900 font-syne px-8 py-3 tracking-wide hover:bg-zinc-100 transition-all duration-200 sharp-edges"
              onClick={() => {
                const message = "Hi! I'm interested in exploring the African Sushi Wear collection. Could you please share the latest designs and availability?";
                window.open(`https://wa.me/447376712695?text=${encodeURIComponent(message)}`, '_blank');
              }}
            >
              Shop Collection
            </Button>
            <Button
              variant="bordered"
              className="border-white text-white hover:bg-white hover:text-zinc-900 font-syne px-8 py-3 tracking-wide transition-all duration-200 sharp-edges"
              as={Link}
              href="/foundation"
            >
              Learn About Our Impact
            </Button>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <div style={{ cursor: 'auto' }}>
        <Lightbox
          open={lightboxOpen}
          close={() => setLightboxOpen(false)}
          slides={currentProductImages}
          index={lightboxIndex}
          styles={{
            container: { 
              backgroundColor: "rgba(0, 0, 0, 0.9)",
              cursor: "auto"
            },
            slide: {
              cursor: "grab"
            },
            button: {
              cursor: "pointer",
              color: "#ffffff"
            },
            icon: {
              cursor: "pointer"
            }
          }}
          className="lightbox-override"
        />
      </div>
      
      <style jsx global>{`
        .lightbox-override,
        .lightbox-override * {
          cursor: auto !important;
        }
        .lightbox-override .yarl__button,
        .lightbox-override button {
          cursor: pointer !important;
        }
        .lightbox-override .yarl__slide,
        .lightbox-override .yarl__slide img {
          cursor: grab !important;
        }
        .lightbox-override .yarl__slide:active,
        .lightbox-override .yarl__slide img:active {
          cursor: grabbing !important;
        }
        .lightbox-override .yarl__icon {
          cursor: pointer !important;
        }
      `}</style>

      {/* Product Detail Modal */}
      <Modal 
        isOpen={isOpen} 
        onOpenChange={onOpenChange}
        size="4xl"
        classNames={{
          base: "sharp-edges",
          backdrop: "bg-zinc-900/50",
          wrapper: "items-center justify-center"
        }}
      >
        <ModalContent className="sharp-edges bg-white">
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 border-b border-zinc-200 pb-4">
                <h2 className="font-syne text-2xl font-bold text-zinc-900">
                  {selectedProduct?.name}
                </h2>
                <p className="text-zinc-600 font-normal">
                  {selectedProduct?.category}
                </p>
              </ModalHeader>
              <ModalBody className="py-6">
                {selectedProduct && (
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="relative aspect-[3/4] group cursor-pointer" onClick={() => openLightbox(selectedProduct, 0)}>
                      <NextImage
                        src={selectedProduct.image}
                        alt={selectedProduct.name}
                        fill
                        className="object-cover sharp-edges"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                        <div className="bg-white/90 p-2 rounded-full">
                          <Eye className="w-5 h-5 text-zinc-900" />
                        </div>
                      </div>
                      <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                        {selectedProduct.images.length} photos
                      </div>
                    </div>
                    <div className="space-y-6">
                      <div>
                        <div className="flex items-center gap-3 mb-4">
                          <span className="font-syne font-bold text-3xl text-zinc-900">
                            {selectedProduct.price}
                          </span>
                          <span className="text-zinc-500 line-through text-lg">
                            {selectedProduct.originalPrice}
                          </span>
                        </div>
                        <p className="text-zinc-700 leading-relaxed">
                          {selectedProduct.longDescription}
                        </p>
                      </div>

                      <div>
                        <h4 className="font-syne font-bold text-zinc-900 mb-2">Available Sizes</h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedProduct.sizes.map((size: string) => (
                            <Chip 
                              key={size} 
                              size="sm" 
                              className="bg-zinc-100 text-zinc-700 border border-zinc-300 sharp-edges"
                            >
                              {size}
                            </Chip>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-syne font-bold text-zinc-900 mb-2">Available Colors</h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedProduct.colors.map((color: string) => (
                            <Chip 
                              key={color} 
                              size="sm" 
                              className="bg-zinc-100 text-zinc-700 border border-zinc-300 sharp-edges"
                            >
                              {color}
                            </Chip>
                          ))}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                        <div>
                          <h4 className="font-syne font-bold text-zinc-900 mb-1">Materials</h4>
                          <p className="text-zinc-600">{selectedProduct.materials}</p>
                        </div>
                        <div>
                          <h4 className="font-syne font-bold text-zinc-900 mb-1">Care Instructions</h4>
                          <p className="text-zinc-600">{selectedProduct.care}</p>
                        </div>
                      </div>

                      {/* Additional Images Preview */}
                      <div>
                        <h4 className="font-syne font-bold text-zinc-900 mb-2">View More Photos</h4>
                        <div className="flex gap-2">
                          {selectedProduct.images.slice(0, 3).map((image: ProductImage, idx: number) => (
                            <div 
                              key={idx}
                              className="relative w-16 h-16 cursor-pointer border border-zinc-200 hover:border-zinc-400 transition-colors"
                              onClick={() => openLightbox(selectedProduct, idx)}
                            >
                              <NextImage
                                src={image.src}
                                alt={image.alt}
                                fill
                                className="object-cover"
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </ModalBody>
              <ModalFooter className="border-t border-zinc-200 pt-4">
                <Button 
                  variant="bordered" 
                  onPress={onClose}
                  className="border-zinc-300 text-zinc-700 hover:bg-zinc-100 font-syne tracking-wide sharp-edges"
                >
                  Close
                </Button>
                <Button 
                  className="bg-zinc-900 text-white font-syne tracking-wide hover:bg-zinc-700 transition-all duration-200 sharp-edges"
                  onPress={() => {
                    if (selectedProduct) {
                      handleWhatsAppOrder(selectedProduct);
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
"use client";

import { Button, Card, CardBody, Chip, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from "@heroui/react";
import { Eye } from "lucide-react";
import Link from "next/link";
import NextImage from "next/image";
import Layout from "@/components/Layout";
import { toast } from "react-hot-toast";
import { useState } from "react";
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

const products: Product[] = [
  {
    id: 1,
    name: "Heritage Hoodie - Gold",
    price: "$85",
    originalPrice: "$120",
    image: "/images/thumbnail_G on W front .jpg",
    images: [
      { src: "/images/thumbnail_G on W front .jpg", alt: "Heritage Hoodie - Front View" },
      { src: "/images/thumbnail_G on W back .jpg", alt: "Heritage Hoodie - Back View" },
      { src: "/images/thumbnail_G on B front .jpg", alt: "Heritage Hoodie - Alternative Color" }
    ],
    description: "Premium cotton blend hoodie featuring traditional African patterns in gold embroidery. Crafted for comfort and cultural expression.",
    longDescription: "This premium hoodie represents the perfect fusion of comfort and cultural pride. Made from high-quality cotton blend fabric, it features intricate gold embroidery that tells the story of African heritage. The relaxed fit ensures all-day comfort while the striking design makes a bold statement about identity and belonging.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Gold on White", "Gold on Black", "White on Black"],
    category: "Hoodies",
    materials: "80% Cotton, 20% Polyester",
    care: "Machine wash cold, tumble dry low"
  },
  {
    id: 2,
    name: "Legacy T-Shirt - Black",
    price: "$45",
    originalPrice: "$65",
    image: "/images/thumbnail_B on W side .jpg",
    images: [
      { src: "/images/thumbnail_B on W side .jpg", alt: "Legacy T-Shirt - Side View" },
      { src: "/images/thumbnail_G on W front .jpg", alt: "Legacy T-Shirt - Front View" },
      { src: "/images/thumbnail_W on B side .jpg", alt: "Legacy T-Shirt - Alternative Design" }
    ],
    description: "Soft organic cotton tee with minimalist African Pride branding and subtle cultural motifs.",
    longDescription: "A testament to understated elegance, this organic cotton t-shirt embodies the African Pride philosophy through minimalist design. The soft fabric feels luxurious against the skin while the subtle cultural motifs speak volumes about heritage and identity.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black on White", "White on Black", "Gold on Charcoal"],
    category: "T-Shirts",
    materials: "100% Organic Cotton",
    care: "Machine wash cold, hang dry recommended"
  },
  {
    id: 3,
    name: "Pride Jacket - Premium",
    price: "$150",
    originalPrice: "$200",
    image: "/images/thumbnail_W on B side .jpg",
    images: [
      { src: "/images/thumbnail_W on B side .jpg", alt: "Pride Jacket - Side View" },
      { src: "/images/thumbnail_G on B front .jpg", alt: "Pride Jacket - Front Detail" },
      { src: "/images/thumbnail_B on W side .jpg", alt: "Pride Jacket - Back View" }
    ],
    description: "Limited edition bomber jacket with hand-stitched details and cultural storytelling elements.",
    longDescription: "This exclusive bomber jacket is a masterpiece of craftsmanship and cultural storytelling. Each piece features hand-stitched details that honor African traditions while embracing contemporary street style. Limited production ensures exclusivity and attention to detail.",
    sizes: ["M", "L", "XL"],
    colors: ["White on Black", "Gold on Navy", "Black on Gold"],
    category: "Outerwear",
    materials: "Premium Cotton Blend with Polyester Lining",
    care: "Dry clean recommended"
  },
  {
    id: 4,
    name: "Unity Sweatshirt",
    price: "$75",
    originalPrice: "$100",
    image: "/images/thumbnail_G on B front .jpg",
    images: [
      { src: "/images/thumbnail_G on B front .jpg", alt: "Unity Sweatshirt - Front View" },
      { src: "/images/thumbnail_G on W back .jpg", alt: "Unity Sweatshirt - Back Design" },
      { src: "/images/thumbnail_W on B side .jpg", alt: "Unity Sweatshirt - Side Detail" }
    ],
    description: "Cozy fleece sweatshirt celebrating African unity with contemporary street style aesthetics.",
    longDescription: "Embrace the spirit of African unity with this premium fleece sweatshirt. The design celebrates the diverse cultures that make Africa beautiful while maintaining a contemporary aesthetic that fits seamlessly into modern wardrobes.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Gold on Black", "White on Charcoal", "Black on Gold"],
    category: "Sweatshirts",
    materials: "60% Cotton, 40% Polyester Fleece",
    care: "Machine wash cold, tumble dry low"
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
    description: "Every purchase contributes to the Garikai Munyaradzwe Foundation, extending Garry's legacy of community support and empowerment.",
    bgColor: "bg-stone-50",
    hoverColor: "hover:bg-stone-100",
    borderColor: "hover:border-stone-300"
  }
];

const designers = [
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
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [currentProductImages, setCurrentProductImages] = useState<ProductImage[]>([]);

  const openProductDetail = (product: Product) => {
    setSelectedProduct(product);
    onOpen();
  };

  const openLightbox = (product: Product, index: number = 0) => {
    setCurrentProductImages(product.images);
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const handleWhatsAppOrder = (product: Product) => {
    const message = `Hi! I'm interested in the ${product.name} (${product.price}). Could you please provide more details about sizing, colors, and shipping options?`;
    window.open(`https://wa.me/263123456789?text=${encodeURIComponent(message)}`, '_blank');
    toast.success('Redirecting to WhatsApp...');
  };

  return (
    <Layout>
      {/* Hero Section - Enhanced with earthy nude-inspired background */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        {/* Earthy nude-inspired blurred background */}
        <div className="absolute inset-0 bg-gradient-to-br from-stone-100 via-neutral-100 to-slate-100">
          <div className="absolute inset-0 bg-gradient-to-r from-stone-200/40 via-neutral-200/40 to-slate-200/40 backdrop-blur-3xl"></div>
          <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-stone-300/25 to-neutral-300/25 rounded-full filter blur-3xl opacity-50 -translate-x-16 -translate-y-16"></div>
          <div className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-br from-slate-300/25 to-stone-300/25 rounded-full filter blur-3xl opacity-50 translate-x-16"></div>
          <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-gradient-to-br from-neutral-300/25 to-stone-400/25 rounded-full filter blur-3xl opacity-50 translate-y-16"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-8 lg:px-16">
          <div className="text-center mb-16">
            {/* African Sushi Logo */}
            <div className="flex justify-center mb-8">
              <div className="relative w-32 h-32 lg:w-40 lg:h-40">
                <NextImage
                  src="/images/african-sushi-logo.png"
                  alt="African Sushi"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <h1 className="font-syne text-5xl lg:text-7xl font-bold text-zinc-900 mb-6 tracking-tight">
              African Sushi Wear
            </h1>
            <p className="text-2xl text-zinc-700 mb-4 max-w-3xl mx-auto font-light">
              Taste the Vision. Live the Legacy.
            </p>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto leading-relaxed">
              Premium streetwear born from sacrifice, creativity, and the African spirit. 
              Each piece tells the story of resilience, cultural pride, and the journey from struggle to success.
            </p>
          </div>
        </div>
      </section>

      {/* Products Section - 4 Column Layout */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-zinc-50">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="text-center mb-16">
            <h2 className="font-syne text-4xl font-bold text-zinc-900 mb-6">
              Current Collection
            </h2>
            <p className="text-xl text-zinc-700 max-w-3xl mx-auto">
              Carefully curated pieces that celebrate African heritage through modern streetwear aesthetics.
            </p>
          </div>

          {/* 4 Column Grid for Products */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {products.map((product) => (
              <Card key={product.id} className="bg-white border border-zinc-200 hover:border-zinc-400 transition-all duration-300 group sharp-edges">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <NextImage
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Lightbox trigger overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <Button
                      isIconOnly
                      className="bg-white/90 text-zinc-900 hover:bg-white sharp-edges"
                      onClick={() => openLightbox(product, 0)}
                    >
                      <Eye className="w-5 h-5" />
                    </Button>
                  </div>
                </div>
                <CardBody className="p-4">
                  <div className="flex justify-between items-start mb-3">
                    <Chip
                      size="sm"
                      className="bg-zinc-900 text-white font-syne text-xs tracking-wide sharp-edges"
                    >
                      {product.category}
                    </Chip>
                    <span className="text-xs text-zinc-500">{product.images.length} photos</span>
                  </div>
                  
                  <h3 className="font-syne text-lg font-bold text-zinc-900 mb-2 leading-tight">
                    {product.name}
                  </h3>
                  
                  <p className="text-zinc-600 text-sm mb-4 leading-relaxed line-clamp-2">
                    {product.description}
                  </p>
                  
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-syne font-bold text-xl text-zinc-900">
                      {product.price}
                    </span>
                    <span className="text-zinc-500 line-through text-sm">
                      {product.originalPrice}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <Button
                      className="w-full bg-zinc-900 text-white font-syne px-4 py-2 text-sm tracking-wide hover:bg-zinc-700 transition-all duration-200 sharp-edges"
                      onClick={() => openProductDetail(product)}
                    >
                      View Details
                    </Button>
                    <Button
                      variant="bordered"
                      className="w-full border-zinc-300 text-zinc-700 hover:bg-zinc-100 font-syne px-4 py-2 text-sm tracking-wide transition-all duration-200 sharp-edges"
                      onClick={() => handleWhatsAppOrder(product)}
                    >
                      Quick Order
                    </Button>
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>

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
                window.open(`https://wa.me/263123456789?text=${encodeURIComponent(message)}`, '_blank');
              }}
            >
              Notify Me
            </Button>
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
                    Today, every purchase supports the Garikai Munyaradzwe Foundation, ensuring that 
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
                window.open(`https://wa.me/263123456789?text=${encodeURIComponent(message)}`, '_blank');
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
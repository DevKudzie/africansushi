"use client";

import { Button, Card, CardBody, Input, Textarea } from "@heroui/react";
import { Mail, Phone, MapPin, MessageCircle, Clock } from "lucide-react";
import Link from "next/link";
import Layout from "@/components/Layout";
import { toast } from "react-hot-toast";
import { useState } from "react";

const businessHours = [
  { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM" },
  { day: "Saturday", hours: "10:00 AM - 4:00 PM" },
  { day: "Sunday", hours: "Closed" },
  { day: "Public Holidays", hours: "Closed" }
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const whatsappMessage = `
Hi! I'm contacting you through your website.

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Subject: ${formData.subject}

Message: ${formData.message}
    `.trim();

    const whatsappUrl = `https://wa.me/263123456789?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
    toast.success('Redirecting to WhatsApp with your message...');
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    });
  };

  return (
    <Layout>
      {/* Hero Section - Neutral with warm accent */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-stone-50 to-zinc-50">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="text-center mb-16">
            <h1 className="font-syne text-5xl lg:text-7xl font-bold text-zinc-900 mb-6 tracking-tight">
              Contact Us
            </h1>
            <p className="text-2xl text-zinc-700 mb-4 max-w-3xl mx-auto font-light">
              Get in Touch with African Pride
            </p>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto leading-relaxed">
              We're here to help with any questions about our collections, services, or foundation work. 
              Reach out to us and let's start a conversation.
            </p>
          </div>

          {/* Single Contact Card */}
          <div className="max-w-md mx-auto">
            <Card className="bg-white border border-stone-200 hover:border-amber-300 transition-all duration-300 sharp-edges">
              <CardBody className="p-8 text-center">
                <div className="w-16 h-16 bg-zinc-900 rounded-full flex items-center justify-center mx-auto mb-6">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-syne text-xl font-bold text-zinc-900 mb-4">
                  Let's Connect
                </h3>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-center gap-2 text-stone-700">
                    <Phone className="w-4 h-4" />
                    <span>+263 123 456 789</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-stone-700">
                    <Mail className="w-4 h-4" />
                    <span>info@africanpride.com</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-stone-700">
                    <MapPin className="w-4 h-4" />
                    <span>Zimbabwe</span>
                  </div>
                </div>
                <p className="text-stone-600 text-sm leading-relaxed mb-6">
                  Available for fashion orders, fabric inquiries, foundation work, and general questions
                </p>
                <Button
                  className="bg-zinc-900 text-white font-syne px-6 py-3 tracking-wide hover:bg-amber-600 transition-all duration-200 sharp-edges"
                  onClick={() => {
                    const message = "Hi! I'm interested in learning more about African Pride. Please provide more information about your services.";
                    window.open(`https://wa.me/263123456789?text=${encodeURIComponent(message)}`, '_blank');
                  }}
                >
                  Chat on WhatsApp
                </Button>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form & Business Hours */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-stone-100">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="font-syne text-3xl font-bold text-zinc-900 mb-6">
                Send us a Message
              </h2>
              <Card className="bg-white border border-stone-200 sharp-edges">
                <CardBody className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Input
                        label="Full Name"
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        className="font-syne"
                        classNames={{
                          inputWrapper: "sharp-edges border-stone-200 hover:border-amber-400"
                        }}
                        required
                      />
                      <Input
                        label="Email"
                        type="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="font-syne"
                        classNames={{
                          inputWrapper: "sharp-edges border-stone-200 hover:border-amber-400"
                        }}
                        required
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Input
                        label="Phone (Optional)"
                        placeholder="Enter your phone"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className="font-syne"
                        classNames={{
                          inputWrapper: "sharp-edges border-stone-200 hover:border-amber-400"
                        }}
                      />
                      <Input
                        label="Subject"
                        placeholder="Message subject"
                        value={formData.subject}
                        onChange={(e) => handleInputChange('subject', e.target.value)}
                        className="font-syne"
                        classNames={{
                          inputWrapper: "sharp-edges border-stone-200 hover:border-amber-400"
                        }}
                        required
                      />
                    </div>

                    <Textarea
                      label="Message"
                      placeholder="Tell us how we can help you..."
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      minRows={4}
                      className="font-syne"
                      classNames={{
                        inputWrapper: "sharp-edges border-stone-200 hover:border-amber-400"
                      }}
                      required
                    />

                    <Button
                      type="submit"
                      className="w-full bg-zinc-900 text-white font-syne px-6 py-3 tracking-wide hover:bg-amber-600 transition-all duration-200 sharp-edges"
                    >
                      Send Message via WhatsApp
                    </Button>
                  </form>
                </CardBody>
              </Card>
            </div>

            {/* Business Hours & Info */}
            <div className="space-y-8">
              {/* Business Hours */}
              <div>
                <h2 className="font-syne text-3xl font-bold text-zinc-900 mb-6">
                  Business Hours
                </h2>
                <Card className="bg-white border border-stone-200 sharp-edges">
                  <CardBody className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Clock className="w-5 h-5 text-zinc-700" />
                      <span className="font-syne font-medium text-zinc-900">Operating Hours</span>
                    </div>
                    <div className="space-y-3">
                      {businessHours.map((schedule, index) => (
                        <div key={index} className="flex justify-between items-center">
                          <span className="font-syne font-medium text-zinc-800">
                            {schedule.day}
                          </span>
                          <span className="text-stone-600">
                            {schedule.hours}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardBody>
                </Card>
              </div>

              {/* Additional Info */}
              <div>
                <h3 className="font-syne text-2xl font-bold text-zinc-900 mb-4">
                  Quick Info
                </h3>
                <Card className="bg-white border border-stone-200 sharp-edges">
                  <CardBody className="p-6">
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-syne font-bold text-zinc-900 mb-2">Response Time</h4>
                        <p className="text-stone-600 text-sm">We typically respond within 24 hours during business days</p>
                      </div>
                      <div>
                        <h4 className="font-syne font-bold text-zinc-900 mb-2">Services</h4>
                        <p className="text-stone-600 text-sm">Fashion orders, African fabrics, foundation work, and custom requests</p>
                      </div>
                      <div>
                        <h4 className="font-syne font-bold text-zinc-900 mb-2">Location</h4>
                        <p className="text-stone-600 text-sm">Proudly serving from Zimbabwe to the world</p>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-8 lg:px-16 text-center">
          <h2 className="font-syne text-4xl font-bold text-white mb-6">
            Ready to Connect?
          </h2>
          <p className="text-xl text-zinc-300 mb-8 leading-relaxed">
            Let's bring your vision to life. Start the conversation today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              className="bg-white text-zinc-900 font-syne px-8 py-3 tracking-wide hover:bg-amber-100 transition-all duration-200 sharp-edges"
              onClick={() => {
                const message = "Hi! I'm interested in learning more about African Pride. Please provide more information about your services.";
                window.open(`https://wa.me/263123456789?text=${encodeURIComponent(message)}`, '_blank');
              }}
            >
              Chat on WhatsApp
            </Button>
            <Button
              variant="bordered"
              className="border-white text-white hover:bg-white hover:text-zinc-900 font-syne px-8 py-3 tracking-wide transition-all duration-200 sharp-edges"
              as="a"
              href="mailto:info@africanpride.com"
            >
              Send Email
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
} 
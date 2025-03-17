"use client";

import {
  Code2,
  Compass,
  FileText,
  Laptop,
  Palette,
  Settings,
} from "lucide-react";
import ServiceCard from "../card/service-card";

const services = [
  {
    title: "Web Development",
    description:
      "Custom websites and web applications built with modern technologies",
    icon: Code2,
  },
  {
    title: "UI/UX Design",
    description:
      "Beautiful and intuitive user interfaces that enhance user experience",
    icon: Palette,
  },
  {
    title: "Technical Support",
    description: "24/7 support and maintenance for your digital products",
    icon: Settings,
  },
  {
    title: "Content Creation",
    description:
      "Engaging content that tells your story and connects with your audience",
    icon: FileText,
  },
  {
    title: "Digital Strategy",
    description: "Strategic planning and consulting for your digital presence",
    icon: Compass,
  },
  {
    title: "IT Consulting",
    description: "Expert advice on technology solutions and implementation",
    icon: Laptop,
  },
];

export default function ServicesSection() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive solutions tailored to your needs
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

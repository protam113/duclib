import {
  ArrowRight,
  Code,
  Palette,
  LineChart,
  Database,
  Globe,
  Lock,
} from "lucide-react";

const categories = [
  "All Services",
  "Development",
  "Design",
  "Marketing",
  "Security",
  "Analytics",
];

const services = [
  {
    id: 1,
    title: "Web Development",
    description:
      "Custom web applications built with modern technologies and best practices.",
    price: "$2,999",
    category: "Development",
    icon: Code,
    timeframe: "4-8 weeks",
  },
  {
    id: 2,
    title: "UI/UX Design",
    description:
      "User-centered design solutions that enhance product usability and appeal.",
    price: "$1,499",
    category: "Design",
    icon: Palette,
    timeframe: "2-4 weeks",
  },
  {
    id: 3,
    title: "Digital Marketing",
    description:
      "Strategic marketing campaigns to boost your online presence and reach.",
    price: "$999/mo",
    category: "Marketing",
    icon: LineChart,
    timeframe: "Ongoing",
  },
  {
    id: 4,
    title: "Database Solutions",
    description: "Scalable database architecture and optimization services.",
    price: "$1,799",
    category: "Development",
    icon: Database,
    timeframe: "2-6 weeks",
  },
  {
    id: 5,
    title: "SEO Optimization",
    description: "Improve your search rankings and drive organic traffic.",
    price: "$799/mo",
    category: "Marketing",
    icon: Globe,
    timeframe: "Ongoing",
  },
  {
    id: 6,
    title: "Security Audit",
    description: "Comprehensive security assessment and vulnerability testing.",
    price: "$2,499",
    category: "Security",
    icon: Lock,
    timeframe: "2-3 weeks",
  },
];

export default function ServicesListing() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative min-h-screen w-full bg-[url('/image/d6f885132d0fb7928b402e5dee2b78c3.jpg')] bg-cover bg-no-repeat">
        <div className="absolute inset-0 h-full w-full bg-gray-900/60" />
        <div className="grid min-h-screen px-8">
          <div className="container relative z-10 mx-auto my-auto grid place-items-center text-center">
            <h1 className="text-4xl font-bold text-white md:text-5xl lg:max-w-3xl">
              Master the Power of React Beginner Course
            </h1>
            <p className="mt-6 mb-10 text-lg text-white md:max-w-full lg:max-w-3xl">
              Our React Course is your gateway to becoming a proficient React
              developer. Learn to build dynamic and interactive web applications
              using one of the most popular JavaScript libraries in the
              industry.
            </p>
            <div>
              <button className="px-6 py-3 text-lg font-semibold text-gray-900 bg-white rounded-lg shadow-md hover:bg-gray-200 transition">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="border-y border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center space-x-4 overflow-x-auto py-4 scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category}
                className="rounded-full bg-gray-50 px-6 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 hover:text-gray-900"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.id}
              className="group relative rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-200 hover:shadow-lg"
            >
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gray-50 text-gray-600 group-hover:bg-gray-100">
                <service.icon className="h-6 w-6" />
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
                <div className="pt-4">
                  <div className="flex items-baseline space-x-2">
                    <span className="text-2xl font-bold text-gray-900">
                      {service.price}
                    </span>
                    <span className="text-sm text-gray-500">
                      • {service.timeframe}
                    </span>
                  </div>
                </div>
                <button className="mt-6 inline-flex items-center text-sm font-medium text-gray-600 transition-colors hover:text-gray-900">
                  Learn more
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

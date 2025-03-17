import Image from "next/image";
import { ShoppingCart } from "lucide-react";

const categories = [
  "All Products",
  "Electronics",
  "Furniture",
  "Fashion",
  "Books",
  "Sports",
];

const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    description:
      "Premium noise-canceling wireless headphones with 30-hour battery life.",
    price: 299.99,
    category: "Electronics",
    imageUrl: "/placeholder.svg?height=400&width=400",
    rating: 4.5,
  },
  {
    id: 2,
    name: "Ergonomic Office Chair",
    description: "Comfortable ergonomic chair with adjustable lumbar support.",
    price: 399.99,
    category: "Furniture",
    imageUrl: "/placeholder.svg?height=400&width=400",
    rating: 4.8,
  },
  {
    id: 3,
    name: "Smart Watch Series X",
    description: "Advanced smartwatch with health monitoring and GPS.",
    price: 249.99,
    category: "Electronics",
    imageUrl: "/placeholder.svg?height=400&width=400",
    rating: 4.6,
  },
  {
    id: 4,
    name: "Leather Backpack",
    description:
      "Handcrafted genuine leather backpack with laptop compartment.",
    price: 159.99,
    category: "Fashion",
    imageUrl: "/placeholder.svg?height=400&width=400",
    rating: 4.7,
  },
  {
    id: 5,
    name: "Mechanical Keyboard",
    description: "RGB mechanical keyboard with custom switches.",
    price: 129.99,
    category: "Electronics",
    imageUrl: "/placeholder.svg?height=400&width=400",
    rating: 4.4,
  },
  {
    id: 6,
    name: "Coffee Table",
    description: "Modern coffee table with storage compartment.",
    price: 199.99,
    category: "Furniture",
    imageUrl: "/placeholder.svg?height=400&width=400",
    rating: 4.3,
  },
];

export default function ProductsListing() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative min-h-screen w-full bg-[url('/image/9e968c06ad41829e4acccd6b4f96aada.jpg')] bg-cover bg-no-repeat">
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
                className="rounded-full bg-gray-50 px-6 py-2 text-sm font-medium text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white transition-all duration-300 hover:shadow-lg"
            >
              <div className="aspect-h-1 aspect-w-1 relative w-full overflow-hidden bg-gray-50">
                <Image
                  src={product.imageUrl || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <div className="mb-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {product.name}
                    </h3>
                    <div className="flex items-center space-x-1">
                      <span className="text-sm text-yellow-500">★</span>
                      <span className="text-sm text-gray-600">
                        {product.rating}
                      </span>
                    </div>
                  </div>
                  <p className="mt-2 text-sm text-gray-600">
                    {product.description}
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-gray-900">
                    ${product.price}
                  </span>
                  <button className="inline-flex items-center rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-800">
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

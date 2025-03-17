"use client";

import ProductCard from "../card/product-card";

const products = [
  {
    id: "1",
    name: "Premium Laptop",
    description: "High-performance laptop for professionals",
    price: 1299.99,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "2",
    name: "Wireless Headphones",
    description: "Premium sound quality with noise cancellation",
    price: 249.99,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "3",
    name: "Smart Watch",
    description: "Track your fitness and stay connected",
    price: 199.99,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "4",
    name: "4K Monitor",
    description: "Ultra-sharp display for content creators",
    price: 499.99,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "5",
    name: "Wireless Mouse",
    description: "Ergonomic design for all-day comfort",
    price: 79.99,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "6",
    name: "Mechanical Keyboard",
    description: "Premium typing experience for enthusiasts",
    price: 149.99,
    image: "/placeholder.svg?height=200&width=300",
  },
];

export default function ProductsSection() {
  const handleAddToCart = (productId: string) => {
    console.log(`Added product ${productId} to cart`);
    // Implement your cart logic here
  };

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Featured Products
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our selection of premium tech products
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              description={product.description}
              price={product.price}
              image={product.image}
              onAddToCart={() => handleAddToCart(product.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

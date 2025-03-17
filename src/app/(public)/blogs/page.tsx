import Image from "next/image";
import Link from "next/link";

const categories = [
  "All",
  "Technology",
  "Design",
  "Development",
  "Business",
  "Lifestyle",
];

const posts = [
  {
    id: 1,
    title: "Getting Started with Web Development in 2024",
    excerpt:
      "Learn the essential tools and technologies for modern web development.",
    category: "Development",
    date: "Feb 22, 2024",
    imageUrl: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 2,
    title: "The Future of AI in Design",
    excerpt:
      "Exploring how artificial intelligence is transforming the design industry.",
    category: "Design",
    date: "Feb 21, 2024",
    imageUrl: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 3,
    title: "Building Scalable Applications",
    excerpt:
      "Best practices for creating applications that can grow with your business.",
    category: "Technology",
    date: "Feb 20, 2024",
    imageUrl: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 4,
    title: "Understanding Cloud Architecture",
    excerpt:
      "A comprehensive guide to modern cloud infrastructure and services.",
    category: "Technology",
    date: "Feb 19, 2024",
    imageUrl: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 5,
    title: "Mastering CSS Grid Layout",
    excerpt: "Deep dive into creating complex layouts with CSS Grid.",
    category: "Development",
    date: "Feb 18, 2024",
    imageUrl: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 6,
    title: "Digital Marketing Strategies",
    excerpt: "Effective marketing techniques for the digital age.",
    category: "Business",
    date: "Feb 17, 2024",
    imageUrl: "/placeholder.svg?height=400&width=600",
  },
];

export default function BlogListing() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative min-h-screen w-full bg-[url('/image/5bbc11d7852485126c992135005efd9d.jpg')] bg-cover bg-no-repeat">
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
      <div className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-4 overflow-x-auto py-4 scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category}
                className="flex-none rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.id}
              className="group relative flex flex-col overflow-hidden rounded-lg bg-white shadow-lg transition-shadow hover:shadow-xl"
            >
              <div className="aspect-h-2 aspect-w-3 relative">
                <Image
                  src={post.imageUrl || "/placeholder.svg"}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="flex flex-1 flex-col justify-between p-6">
                <div className="flex-1">
                  <p className="text-sm font-medium text-indigo-600">
                    {post.category}
                  </p>
                  <div className="mt-2">
                    <h3 className="text-xl font-semibold text-gray-900">
                      <Link href={`/blog/${post.id}`}>
                        <span className="absolute inset-0" />
                        {post.title}
                      </Link>
                    </h3>
                    <p className="mt-3 text-base text-gray-500">
                      {post.excerpt}
                    </p>
                  </div>
                </div>
                <div className="mt-6">
                  <time className="text-sm text-gray-500">{post.date}</time>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

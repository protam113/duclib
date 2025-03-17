"use client";

function Hero() {
  return (
    <div className="relative min-h-screen w-full bg-[url('/image/course.png')] bg-cover bg-no-repeat">
      <div className="absolute inset-0 h-full w-full bg-gray-900/60" />
      <div className="grid min-h-screen px-8">
        <div className="container relative z-10 mx-auto my-auto grid place-items-center text-center">
          <h1 className="text-4xl font-bold text-white md:text-5xl lg:max-w-3xl">
            Master the Power of React Beginner Course
          </h1>
          <p className="mt-6 mb-10 text-lg text-white md:max-w-full lg:max-w-3xl">
            Our React Course is your gateway to becoming a proficient React
            developer. Learn to build dynamic and interactive web applications
            using one of the most popular JavaScript libraries in the industry.
          </p>
          <div>
            <a
              href="/contact-us"
              className="px-6 py-3 text-lg font-semibold text-gray-900 bg-white rounded-lg shadow-md hover:bg-gray-200 transition"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;

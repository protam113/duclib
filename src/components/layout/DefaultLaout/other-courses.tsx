"use client";

import React from "react";
import Image from "next/image";

const OTHER_COURSES = [
  {
    img: "/image/blogs/blog-1.svg",
    title: "Future of Web Development: Trends and Innovations",
    desc: "Discover the latest trends and innovations shaping the future of web development.",
    buttonLabel: "Read more",
  },
  {
    img: "/image/blogs/blog2.svg",
    title: "WebDev Pro Code-a-Thon: Build a Responsive Website",
    desc: "Participants will have 48 hours to create a responsive website from scratch using HTML, CSS, and JavaScript.",
    buttonLabel: "Read more",
  },
  {
    img: "/image/blogs/blog3.svg",
    title: "Ask the Experts: Frontend Web Development",
    desc: "Join our live Q&A session with our experienced instructors. Get answers to your queries, insights into best practices.",
    buttonLabel: "Read more",
  },
  {
    img: "/image/blogs/blog4.svg",
    title: "Web Accessibility: Building Inclusive Websites",
    desc: "Industry experts will discuss the importance of inclusive design and share strategies for creating websites.",
    buttonLabel: "Read more",
  },
];

type CourseCardProps = {
  img: string;
  title: string;
  desc: string;
  buttonLabel: string;
};

function CourseCard({ img, title, desc, buttonLabel }: CourseCardProps) {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden p-6 flex flex-col items-center text-center">
      <Image
        src={img}
        alt={title}
        width={300}
        height={160}
        className="rounded-md"
      />
      <h3 className="text-lg font-semibold text-gray-800 mt-4">{title}</h3>
      <p className="text-gray-500 mt-2 text-sm">{desc}</p>
      <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition">
        {buttonLabel}
      </button>
    </div>
  );
}

export function OtherCourses() {
  return (
    <section className="pb-20 px-8">
      <div className="container mx-auto mb-20 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Blog</h2>
        <p className="mx-auto w-full px-4 text-gray-500 lg:w-6/12">
          Looking to elevate your web development skills? Browse through 1,000+
          web development courses and find the one that fits your needs.
        </p>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-x-10 gap-y-20 md:grid-cols-2 xl:grid-cols-4">
        {OTHER_COURSES.map((course, idx) => (
          <CourseCard key={idx} {...course} />
        ))}
      </div>
    </section>
  );
}

export default OtherCourses;

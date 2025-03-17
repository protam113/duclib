"use client";

import React from "react";
import Image from "next/image";
import { FaGraduationCap, FaCheckCircle, FaInbox } from "react-icons/fa";

const FEATURES = [
  {
    icon: <FaInbox className="text-blue-500 text-3xl" />, // Thêm màu và kích thước cho icon
    title: "Hands-On Projects",
    description:
      "Apply your knowledge to real-world projects, building a robust portfolio.",
  },
  {
    icon: <FaGraduationCap className="text-blue-500 text-3xl" />,
    title: "Career Opportunities",
    description:
      "React developers are in high demand and this course is designed for you!",
  },
  {
    icon: <FaCheckCircle className="text-blue-500 text-3xl" />,
    title: "Flexible Learning",
    description: "Access course materials whenever it suits your schedule.",
  },
];

export function OnlineCourse() {
  return (
    <section className="py-28 px-8">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 place-items-center">
        {/* Hình ảnh khóa học */}
        <div className="col-span-1 rounded-xl mb-12 lg:mb-0">
          <Image
            width={768}
            height={500}
            src="/image/online-course.png"
            className="h-full max-h-[500px] w-full object-cover scale-110"
            alt="online course"
          />
        </div>

        {/* Nội dung giới thiệu khóa học */}
        <div className="col-span-2 lg:pl-24 text-left">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-500 mb-5 max-w-lg px-4 lg:px-0">
            We provide the best services to customers. Customer satisfaction is
            our priority
          </p>

          {/* Danh sách tính năng */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
            {FEATURES.map(({ icon, title, description }) => (
              <div key={title} className="flex flex-col items-start">
                {icon}
                <h3 className="text-xl font-semibold text-gray-700 mt-2">
                  {title}
                </h3>
                <p className="text-gray-500 mt-1">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default OnlineCourse;

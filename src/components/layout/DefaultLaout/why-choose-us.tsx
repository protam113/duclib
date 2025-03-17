"use client";

import React from "react";
import {
  FaChartPie,
  FaCloudDownloadAlt,
  FaCloud,
  FaCogs,
  FaKey,
  FaUsers,
} from "react-icons/fa";

interface OptionProps {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}

function Option({ icon, title, children }: OptionProps) {
  return (
    <div className="flex gap-4">
      <div className="mb-4 text-gray-900 text-2xl">{icon}</div>
      <div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-500 md:w-10/12 font-normal">{children}</p>
      </div>
    </div>
  );
}

export function WhyChooseUs() {
  return (
    <section className="w-full max-w-4xl mx-auto flex flex-col items-center px-4 py-10">
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-2">
        Why choose our course?
      </h2>
      <p className="mb-16 w-full text-center text-gray-500 lg:w-10/12">
        Discover the unique advantages, benefits, and standout features that set
        our course apart from the rest.
      </p>
      <div className="mt-8">
        <div className="grid grid-cols-1 items-center md:grid-cols-2 gap-12 mb-24">
          <div className="p-6 rounded-xl shadow-md bg-gray-100">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Expert Instructors
            </h3>
            <p className="text-gray-500">
              Learn from industry professionals with years of hands-on
              experience in React development.
            </p>
          </div>
          <div className="space-y-8">
            <Option icon={<FaCloud />} title="React Fundamentals">
              Start with the basics. Understand React&apos;s core concepts,
              component structure, and the virtual DOM.
            </Option>
            <Option icon={<FaChartPie />} title="State and Props">
              Learn how to manage component state and utilize props to pass data
              between components.
            </Option>
            <Option icon={<FaCogs />} title="Component Lifecycle">
              Dive into the lifecycle of React components and harness its power
              to control your application&apos;s behavior.
            </Option>
          </div>
        </div>
        <div className="grid grid-cols-1 items-center md:grid-cols-2 gap-12 mb-24">
          <div className="space-y-8">
            <Option icon={<FaKey />} title="Routing with React Router">
              Create single-page applications (SPAs) with seamless navigation
              using React Router.
            </Option>
            <Option icon={<FaUsers />} title="Handling Forms">
              Master form handling in React and manage user input effectively.
            </Option>
            <Option icon={<FaCloudDownloadAlt />} title="State Management">
              Explore state management options, including local component state
              and global state using Redux or Context API.
            </Option>
          </div>
          <div className="p-6 rounded-xl shadow-md bg-gray-100">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Supportive Community
            </h3>
            <p className="text-gray-500">
              Connect with fellow learners, share experiences, and get support
              from instructors and peers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;

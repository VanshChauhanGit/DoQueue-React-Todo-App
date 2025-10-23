import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <main className="mx-auto max-w-7xl">
      <section className="min-h-screen px-4 py-16 text-center md:py-24 sm:px-6 lg:px-8">
        <h1 className="flex flex-col mb-4 text-4xl font-extrabold tracking-tight sm:text-6xl theme-transition dark:text-white">
          <span>Queue Less,</span>
          <span>
            Do More with <span className="text-purple-700 0">DoQueue</span>
          </span>
        </h1>
        <p className="max-w-3xl mx-auto mb-10 text-xl text-gray-600 dark:text-gray-400 theme-transition">
          The smart task manager that uses AI to prioritize your day, ensuring
          you focus on what truly matters, not just what's next.
        </p>
        <div className="space-x-4">
          <Link
            to="/login"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-xl shadow-lg text-white bg-purple-700 hover:bg-purple-600  transition duration-300 transform hover:scale-[1.02]"
          >
            Get Started
          </Link>
          <a
            href="#features"
            className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-gray-700 transition duration-300 bg-transparent border border-gray-300 dark:border-secondary-dark rounded-xl dark:text-gray-300 hover:bg-gray-50 hover:text-purple-700 dark:hover:text-purple-700"
          >
            See Features
          </a>
        </div>
      </section>

      <section
        id="features"
        className="py-16 md:py-20 bg-white bg-opacity-50 backdrop-blur-lg dark:bg-black dark:backdrop-blur-lg dark:bg-opacity-30 px-4 sm:px-6 lg:px-8 theme-transition rounded-t-[3rem]"
      >
        <h2 className="mb-12 text-3xl font-extrabold text-center sm:text-4xl dark:text-gray-50">
          Built for Modern Productivity
        </h2>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div className="p-6 transition duration-300 bg-white border border-gray-100 shadow-lg dark:bg-gray-900 rounded-xl hover:shadow-2xl theme-transition dark:border-gray-700/50">
            <h3 className="mb-3 text-xl font-bold dark:text-white">
              Smart Prioritization
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Our algorithm automatically re-orders your queue based on due
              date, effort, and importance, so you always know your next step.
            </p>
          </div>

          <div className="p-6 transition duration-300 bg-white border border-gray-100 shadow-lg dark:bg-gray-900 rounded-xl hover:shadow-2xl theme-transition dark:border-gray-700/50">
            <h3 className="mb-3 text-xl font-bold dark:text-white">
              Integrated Time Blocking
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Drag tasks directly onto your integrated calendar to dedicate
              specific blocks of time and eliminate procrastination.
            </p>
          </div>

          <div className="p-6 transition duration-300 bg-white border border-gray-100 shadow-lg dark:bg-gray-900 rounded-xl hover:shadow-2xl theme-transition dark:border-gray-700/50">
            <h3 className="mb-3 text-xl font-bold dark:text-white">
              Distraction-Free Focus
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Mute notifications and lock down your device for set periods,
              helping you achieve deep, uninterrupted work on your priority
              tasks.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;

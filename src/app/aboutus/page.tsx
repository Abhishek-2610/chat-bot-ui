"use client";
import React from "react";
import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BackgroundGradient } from "@/components/ui/background-gradient";

const page = () => {
  return (
    <div className="min-h-screen pt-[40px]">
      {/* Mobile Carousel (visible on mobile only) */}
      <div className="md:hidden">
        <div className="flex gap-6 p-4 overflow-x-auto snap-x snap-mandatory">
          {/* Card 1 */}
          <div className="flex-shrink-0 w-full snap-center">
            <BackgroundGradient className="rounded-[22px] w-full p-4 sm:p-8 bg-gray-400 dark:bg-zinc-900">
              <Image
                src="/jordans.webp"
                alt="Profile Picture"
                height={400}
                width={400}
                className="object-contain"
              />
              <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200 font-bold">
                John Doe
              </p>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
                I'm a software developer specialized in building web applications using React, Next.js, and Tailwind CSS.
              </p>
              <div className="flex items-center gap-4">
                <a
                  href="https://github.com/your-github-username"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 dark:text-gray-300 hover:text-gray-900"
                >
                  <FaGithub size={24} />
                </a>
                <a
                  href="https://linkedin.com/in/your-linkedin-username"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 dark:text-gray-300 hover:text-gray-900"
                >
                  <FaLinkedin size={24} />
                </a>
              </div>
            </BackgroundGradient>
          </div>

          {/* Card 2 */}
          <div className="flex-shrink-0 w-full snap-center">
            <BackgroundGradient className="rounded-[22px] w-full p-4 sm:p-8 bg-gray-400 dark:bg-zinc-900">
              <Image
                src="/jordans.webp"
                alt="Profile Picture"
                height={400}
                width={400}
                className="object-contain"
              />
              <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200 font-bold">
                Jane Smith
              </p>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
                Front-end developer passionate about creating seamless user experiences with React and Next.js.
              </p>
              <div className="flex items-center gap-4">
                <a
                  href="https://github.com/your-github-username"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 dark:text-gray-300 hover:text-gray-900"
                >
                  <FaGithub size={24} />
                </a>
                <a
                  href="https://linkedin.com/in/your-linkedin-username"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 dark:text-gray-300 hover:text-gray-900"
                >
                  <FaLinkedin size={24} />
                </a>
              </div>
            </BackgroundGradient>
          </div>

          {/* Card 3 */}
          <div className="flex-shrink-0 w-full snap-center">
            <BackgroundGradient className="rounded-[22px] w-full p-4 sm:p-8 bg-gray-400 dark:bg-zinc-900">
              <Image
                src="/jordans.webp"
                alt="Profile Picture"
                height={400}
                width={400}
                className="object-contain"
              />
              <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200 font-bold">
                Alex Johnson
              </p>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
                Full-stack developer who loves coding, solving problems, and building amazing apps. hello friends chai pilo
              </p>
              <div className="flex items-center gap-4">
                <a
                  href="https://github.com/your-github-username"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 dark:text-gray-300 hover:text-gray-900"
                >
                  <FaGithub size={24} />
                </a>
                <a
                  href="https://linkedin.com/in/your-linkedin-username"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 dark:text-gray-300 hover:text-gray-900"
                >
                  <FaLinkedin size={24} />
                </a>
              </div>
            </BackgroundGradient>
          </div>

          {/* Card 4 */}
          <div className="flex-shrink-0 w-full snap-center">
            <BackgroundGradient className="rounded-[22px] w-full p-4 sm:p-8 bg-gray-400 dark:bg-zinc-900">
              <Image
                src="/jordans.webp"
                alt="Profile Picture"
                height={400}
                width={400}
                className="object-contain"
              />
              <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200 font-bold">
                Emily Clark
              </p>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
                UI/UX designer with a passion for creating intuitive and beautiful digital experiences. hello friends.
              </p>
              <div className="flex items-center gap-4">
                <a
                  href="https://github.com/your-github-username"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 dark:text-gray-300 hover:text-gray-900"
                >
                  <FaGithub size={24} />
                </a>
                <a
                  href="https://linkedin.com/in/your-linkedin-username"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 dark:text-gray-300 hover:text-gray-900"
                >
                  <FaLinkedin size={24} />
                </a>
              </div>
            </BackgroundGradient>
          </div>
        </div>
      </div>

      {/* Desktop Grid (visible on md and larger screens) */}
      <div className="hidden md:grid grid-cols-2 xl:grid-cols-4 gap-6 p-4">
        {/* Card 1 */}
        <BackgroundGradient className="rounded-[22px] max-w-sm mx-auto p-4 sm:p-8 bg-gray-400 dark:bg-zinc-900">
          <Image
            src="/jordans.webp"
            alt="Profile Picture"
            height={400}
            width={400}
            className="object-contain"
          />
          <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200 font-bold">
            John Doe
          </p>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
            I'm a software developer specialized in building web applications using React, Next.js, and Tailwind CSS.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/your-github-username"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-gray-900"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://linkedin.com/in/your-linkedin-username"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-gray-900"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        </BackgroundGradient>

        {/* Card 2 */}
        <BackgroundGradient className="rounded-[22px] max-w-sm mx-auto p-4 sm:p-8 bg-gray-400 dark:bg-zinc-900">
          <Image
            src="/jordans.webp"
            alt="Profile Picture"
            height={400}
            width={400}
            className="object-contain"
          />
          <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200 font-bold">
            Jane Smith
          </p>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
            Front-end developer passionate about creating seamless user experiences with React and Next.js.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/your-github-username"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-gray-900"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://linkedin.com/in/your-linkedin-username"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-gray-900"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        </BackgroundGradient>

        {/* Card 3 */}
        <BackgroundGradient className="rounded-[22px] max-w-sm mx-auto p-4 sm:p-8 bg-gray-400 dark:bg-zinc-900">
          <Image
            src="/jordans.webp"
            alt="Profile Picture"
            height={400}
            width={400}
            className="object-contain"
          />
          <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200 font-bold">
            Alex Johnson
          </p>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
            Full-stack developer who loves coding, solving problems, and building amazing apps. hello friends chai pilo
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/your-github-username"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-gray-900"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://linkedin.com/in/your-linkedin-username"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-gray-900"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        </BackgroundGradient>

        {/* Card 4 */}
        <BackgroundGradient className="rounded-[22px] max-w-sm mx-auto p-4 sm:p-8 bg-gray-400 dark:bg-zinc-900">
          <Image
            src="/jordans.webp"
            alt="Profile Picture"
            height={400}
            width={400}
            className="object-contain"
          />
          <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200 font-bold">
            Emily Clark
          </p>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
            UI/UX designer with a passion for creating intuitive and beautiful digital experiences. hello friends.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/your-github-username"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-gray-900"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://linkedin.com/in/your-linkedin-username"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-gray-900"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        </BackgroundGradient>
      </div>
    </div>
  );
};

export default page;

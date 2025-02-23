"use client";

import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";
import { ExperienceSection, ProjectSection } from "./sections";
import { StickySectionHeader } from "./components";
import { useEffect, useState } from "react";
import { CheckIcon } from "@heroicons/react/16/solid";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function Home() {
  const [activeSection, setActiveSection] = useState<string>("about-me");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      sections.forEach((section) => {
        const { top, height } = section.getBoundingClientRect();
        const sectionTop = top + window.scrollY;
        const sectionBottom = sectionTop + height;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-w-screen min-h-screen grid lg:grid-cols-[1fr_2fr] scroll-smooth">
      {/* Left Column */}
      <aside className="lg:p-20 p-10 lg:h-screen lg:sticky lg:top-0 flex-col justify-start content-center">
        <p className="text-sm mb-1">
          <span className="text-white">
            {"<"}
            <span className="text-red-500">{"h1"}</span>
            {">"}
          </span>{" "}
          {"Hello World! I'm,"}{" "}
          <span className="text-white">
            {"<"}
            <span className="text-red-500">{"h1"}</span>
            {"/>"}
          </span>
        </p>
        <p
          className={`text-4xl text-white ${inter.className} font-semibold mb-3`}
        >
          Muhammad T Rafly
        </p>
        <p className="text-sm mb-5">Front End Developer, UI/UX Designer</p>

        <nav className="hidden lg:flex w-full backdrop-blur-md mb-5">
          <ul className="flex flex-col gap-4 p-4">
            <li>
              <a
                href="#about-me"
                className={`text-sm font-bold flex gap-x-1 transition-all duration-300 ${
                  activeSection === "about-me"
                    ? "text-[--foreground] scale-110"
                    : "text-white"
                }`}
              >
                01. About Me{" "}
                {activeSection === "about-me" ? (
                  <CheckIcon className="size-4 transition-transform" />
                ) : (
                  <></>
                )}
              </a>
            </li>
            <li>
              <a
                href="#experience"
                className={`flex text-sm font-bold gap-x-1 transition-all duration-300 ${
                  activeSection === "experience"
                    ? "text-[--foreground] scale-110"
                    : "text-white"
                }`}
              >
                02. Experience
                {activeSection === "experience" ? (
                  <CheckIcon className="size-4 transition-transform" />
                ) : (
                  <></>
                )}
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className={`flex text-sm font-bold gap-x-1 transition-all duration-300 ${
                  activeSection === "projects"
                    ? "text-[--foreground] scale-110"
                    : "text-white"
                }`}
              >
                03. Featured Projects
                {activeSection === "projects" ? (
                  <CheckIcon className="size-4 transition-transform duration-300" />
                ) : (
                  <></>
                )}
              </a>
            </li>
          </ul>
        </nav>

        <div className="flex gap-3">
          <Link href="https://github.com/raflyarv" target="_blank">
            <Image
              src="/socials/github.svg"
              alt="github-social"
              width={40}
              height={40}
              className="opacity-70"
            />
          </Link>

          <Link href="https://www.linkedin.com/in/raflytohir/" target="_blank">
            <Image
              src="/socials/linkedin.svg"
              alt="linkedin-social"
              width={40}
              height={40}
              className="opacity-70"
            />
          </Link>

          <Link href="https://instagram.com/raflyarv" target="_blank">
            <Image
              src="/socials/instagram.svg"
              alt="instagram-social"
              width={40}
              height={40}
              className="opacity-70"
            />
          </Link>

          <Link
            href="mailto:tohirraflyy28@gmail.com"
            target="_blank"
            className="hover:text-[--foreground]"
          >
            <Image
              src="/socials/mail.svg"
              alt="mail-social"
              width={40}
              height={40}
              className="opacity-70"
            />
          </Link>
        </div>
      </aside>

      {/* Right Column */}
      <main className="relative w-full min-h-screen lg:p-14 overflow-visible">
        <section id="about-me" className="mb-10">
          <StickySectionHeader title="About Me" index={1} />

          <div className="w-full flex flex-col items-start lg:flex-row gap-x-5 px-8">
            <div
              className={`relative rounded-md lg:w-[65%] backdrop-blur-md py-2 px-1 text-justify lg:text-left lg:px-4 lg:mb-0 mb-10 text-wrap text-base font-semibold leading-7 text-[--text-secondary] ${inter.className}`}
            >
              <span className="text-white absolute -translate-y-2 -translate-x-6 opacity-50">
                {"<"}
                <span className="text-red-500">{"p"}</span>
                {">"}
              </span>{" "}
              <p className="mb-3">
                I am a fresh graduate with a degree in Information Systems,
                passionate about application development and problem-solving
                through technology.
                <span className="px-1 text-[--foreground]">
                  I have developed strong skills in TypeScript and JavaScript
                </span>
                , with a particular focus on front-end development for nearly{" "}
                <span className="px-1 text-[--foreground]">
                  2 years of project experience
                </span>{" "}
                through classwork, research projects, and bootcamp.
              </p>
              <p>
                My experience includes building user-friendly applications,
                ensuring responsive and engaging user interfaces, and working
                with modern frameworks and technologies. Always open to new
                challenges, I aim to contribute my knowledge and enthusiasm to
                innovative development teams.
              </p>
              <span className="text-white absolute -translate-y-5 -translate-x-6 opacity-50">
                {"<"}
                <span className="text-red-500">{"p"}</span>
                {"/>"}
              </span>{" "}
            </div>

            <div className="group relative inline-block">
              <div className="absolute pointer-events-none inset-0 w-[300px] h-[300px] border-2 border-[--foreground] rounded-md translate-x-2 translate-y-2 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform"></div>
              {/* Image */}
              <div className="relative z-5">
                <Image
                  src={"/profile-pic/original.svg"}
                  alt="Profile"
                  width={300}
                  height={300}
                  className="rounded-md transition-all group-hover:grayscale-0 group-hover:mix-blend-normal group-hover:-translate-y-1 group-hover:-translate-x-1"
                />
                <div className="rounded-md absolute inset-0 bg-[#f8e559] mix-blend-multiply group-hover:opacity-0 transition-opacity"></div>
              </div>
            </div>
          </div>
        </section>

        <section id="experience">
          <ExperienceSection />
        </section>

        <section id="projects">
          <ProjectSection />
        </section>

        <footer className="flex flex-col px-8 mt-10">
          <div className="w-full mb-3 flex items-center justify-between">
            <div className="h-0.5 w-[40%] lg:w-[80%] bg-white"></div>
            <p className="text-sm"> 2025 | RaflyARV </p>
          </div>
          <p className="text-xs text-[--text-secondary]">
            Designed with inspiration from the masters, built with{" "}
            <span className="text-[--foreground]"> Next.js </span> styled with{" "}
            <span className="text-[--foreground]"> Tailwind CSS </span> and
            powered by <span className="text-[--foreground]"> TypeScript</span>
            —crafted by
            <span className="text-[--foreground]"> Muhammad T Rafly </span> with
            a dash of creativity and a nod to the experts!
          </p>
        </footer>
      </main>
    </div>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";
import { ExperienceSection, ProjectSection } from "./sections";
import { ARVModalDialog, MainFooter, StickySectionHeader } from "./components";
import { useEffect, useState } from "react";
import { CheckIcon } from "@heroicons/react/16/solid";
import profilePic from "@/public/profile-pic/original.png";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function Home() {
  const [activeSection, setActiveSection] = useState<string>("about-me");
  const [isOpen, setIsOpen] = useState(false);

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
    <div className="min-w-screen max-w-[100rem] mx-auto min-h-screen grid lg:grid-cols-[1fr_2fr] scroll-smooth">
      {/* Left Column */}
      <aside className="lg:p-20 p-10 lg:h-screen lg:sticky lg:top-0 flex-col justify-start content-center">
        <p className="text-sm mb-1">
          <span className="text-white opacity-50">
            {"<"}
            <span className="text-red-500">{"h1"}</span>
            {">"}
          </span>{" "}
          {"Hello World! I'm,"}{" "}
          <span className="text-white opacity-50">
            {"</"}
            <span className="text-red-500">{"h1"}</span>
            {">"}
          </span>
        </p>
        <div className="relative flex mb-4">
          <p
            className={`relative lg:flex text-4xl text-white ${inter.className} font-semibold`}
          >
            Muhammad T{" "}
            <span className="lg:flex relative lg:ml-2">
              {" "}
              Rafly
              <Image
                src={"/arv-trademark.svg"}
                alt="RaflyARV"
                width={250}
                height={250}
                onDoubleClick={() => setIsOpen(true)}
                className="absolute cursor-pointer inset-0 translate-x-16 -translate-y-6 scale-150 lg:translate-x-16 lg:-translate-y-6"
              />
            </span>
          </p>
        </div>

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
              className="opacity-50 hover:opacity-90 transition-all transform ease-in-out duration-150"
            />
          </Link>

          <Link href="https://www.linkedin.com/in/raflytohir/" target="_blank">
            <Image
              src="/socials/linkedin.svg"
              alt="linkedin-social"
              width={40}
              height={40}
              className="opacity-50 hover:opacity-90 transition-all transform ease-in-out duration-150"
            />
          </Link>

          <Link href="https://instagram.com/raflyarv" target="_blank">
            <Image
              src="/socials/instagram.svg"
              alt="instagram-social"
              width={40}
              height={40}
              className="opacity-50 hover:opacity-90 transition-all transform ease-in-out duration-150"
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
              className="opacity-50 hover:opacity-90 transition-all transform ease-in-out duration-150"
            />
          </Link>
        </div>
      </aside>

      {/* Right Column */}
      <main className="relative w-full min-h-screen py-8 lg:p-14 overflow-visible">
        <section id="about-me" className="mb-10">
          <StickySectionHeader title="About Me" index={1} />

          <div className="w-full flex flex-col items-center lg:items-start lg:flex-row gap-x-5 px-8">
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
                {"</"}
                <span className="text-red-500">{"p"}</span>
                {">"}
              </span>{" "}
            </div>

            <div className="group relative inline-block">
              <div className="absolute pointer-events-none inset-0 w-[300px] h-[300px] border-2 border-[--foreground] rounded-md translate-x-3 translate-y-3 lg:translate-x-1 lg:translate-y-1 lg:group-hover:translate-x-3 lg:group-hover:translate-y-3 transition-transform"></div>
              {/* Image */}
              <div className="relative z-5">
                <Image
                  placeholder="blur"
                  blurDataURL="iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP88TSyHgAHygK3vy14DgAAAABJRU5ErkJggg=="
                  priority
                  src={profilePic}
                  alt="Profile"
                  width={300}
                  height={300}
                  className="rounded-md inset-0 transition-all group-hover:grayscale-0 group-hover:mix-blend-normal lg:group-hover:-translate-y-1 lg:group-hover:-translate-x-1"
                />
                <div className="hidden rounded-md lg:block absolute inset-0 bg-[#f8e559] mix-blend-multiply group-hover:opacity-0 transition-opacity"></div>
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

        <MainFooter />

        <ARVModalDialog isOpen={isOpen} setIsOpen={setIsOpen} />
      </main>
    </div>
  );
}

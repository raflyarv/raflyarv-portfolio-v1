"use client";

import Image from "next/image";
import Link from "next/link";
import { Inter, Martian_Mono } from "next/font/google";
import { ExperienceSection, ProjectSection } from "./sections";
import { MainFooter, StickySectionHeader } from "./components";
import { useEffect, useState } from "react";
import { CheckIcon } from "@heroicons/react/16/solid";
import {
  Description,
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const mono = Martian_Mono({
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
                  src={"/profile-pic/original.svg"}
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

        <Dialog
          open={isOpen}
          onClose={() => setIsOpen(false)}
          transition
          className="relative z-50"
        >
          <DialogBackdrop
            transition
            className="fixed inset-0 bg-[#332941]/75 backdrop-blur-sm transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[enter]:ease-out data-[leave]:duration-200 data-[leave]:ease-in"
          />
          <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
            <DialogPanel
              transition
              className={
                "max-w-lg relative flex flex-col justify-center items-center transform overflow-hidden space-y-4 border border-[--foreground] bg-[--background]/70 backdrop-blur-lg rounded-md lg:p-12 p-8 transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[enter]:ease-out data-[leave]:duration-200 data-[leave]:ease-in"
              }
            >
              <DialogTitle
                className={`w-fit justify-center ml-8 flex items-center -my-12 ${inter.className}`}
              >
                <p className="text-lg font-semibold"> WHAT IS </p>
                <Image
                  src={"/arv-trademark.svg"}
                  alt="RaflyARV"
                  width={150}
                  height={150}
                  className="-ml-10"
                />
              </DialogTitle>
              <Description
                className={`${inter.className} text-center text-[--text-secondary] font-semibold text-sm lg:text-base`}
              >
                {" "}
                ARV in{" "}
                <span
                  className={`${mono.className} text-xs lg:text-sm font-normal`}
                >
                  {" "}
                  raflyarv.com
                </span>{" "}
                is a creative twist on my pen name, an acronym for ARVIN,
                seamlessly blending with my name, Rafly. By adding ARV, I’ve
                crafted a unique branding signature that stands out—a personal
                touch reflecting my contribution to a notable project.{" "}
              </Description>
              <div className="flex">
                <button
                  className={`${inter.className} inline-flex items-center gap-2 rounded-md bg-[--darkerBackground] py-1.5 px-3 text-base font-semibold text-white backdrop-blur-md focus:outline-none hover:bg-[--foreground] hover:text-[--background] transition-all duration-200`}
                  onClick={() => setIsOpen(false)}
                >
                  {" "}
                  Alrighty!{" "}
                </button>
              </div>
            </DialogPanel>
          </div>
        </Dialog>
      </main>
    </div>
  );
}

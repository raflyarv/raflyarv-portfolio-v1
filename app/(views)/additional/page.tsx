"use client";

import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronUpIcon,
} from "@heroicons/react/16/solid";
import { Inter } from "next/font/google";
import Image from "next/image";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

import { useEffect, useRef, useState, FC, useCallback } from "react";

const images = [
  "https://drive.google.com/uc?export=view&id=1jhDHi-UtutK8mQU3z6kPcHiXPz72oMDT",
  "https://drive.google.com/uc?export=view&id=1WerjpGVVJ5nK4Iiw13r0lnJhfB9tpufS",
  "https://drive.google.com/uc?export=view&id=1so3Bj_QKBcRPstgcVGCv68TFPCjJnGwR",
];

// Define the type for a single carousel item
interface CarouselItem {
  src: string;
  alt: string;
}

// Define props for the main carousel component
interface VerticalSnapCarouselProps {
  items: CarouselItem[];
}

const VerticalSnapCarousel: FC<VerticalSnapCarouselProps> = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const itemHeight = 300; // The height of a single slide
  const transitionDuration = 400; // ms for scroll and jump logic

  // Refs to manage the infinite loop transition without causing re-renders
  const isTransitioningRef = useRef(false);
  const transitionTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Create a new array with clones for seamless looping
  const displayItems = [items[items.length - 1], ...items, items[0]];

  // Function to handle the "jump" when looping
  const handleLoopJump = useCallback(
    (newIndex: number) => {
      isTransitioningRef.current = true;
      const container = scrollContainerRef.current;
      if (container) {
        // Temporarily disable smooth scrolling for an instant jump
        container.style.scrollBehavior = "auto";
        // Jump to the corresponding "real" slide
        const newScrollTop = (newIndex + 1) * itemHeight;
        container.scrollTop = newScrollTop;
        // Re-enable smooth scrolling after the jump
        setTimeout(() => {
          container.style.scrollBehavior = "smooth";
          isTransitioningRef.current = false;
        }, 50);
      }
    },
    [itemHeight]
  );

  // Set the initial scroll position to the first "real" item
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.scrollTop = itemHeight;
    }
  }, [itemHeight]);

  // Button handlers for next and previous slides
  const changeSlide = (direction: "next" | "prev") => {
    if (isTransitioningRef.current) return;
    isTransitioningRef.current = true;

    const newIndex =
      direction === "next"
        ? (currentIndex + 1) % items.length
        : (currentIndex - 1 + items.length) % items.length;

    setCurrentIndex(newIndex);

    const container = scrollContainerRef.current;
    if (container) {
      // Scroll to the next visual item (which could be a clone)
      const targetScrollTop =
        (currentIndex + 1 + (direction === "next" ? 1 : -1)) * itemHeight;
      container.scrollTo({ top: targetScrollTop, behavior: "smooth" });
    }

    // After the transition, check if we landed on a clone and need to jump
    if (transitionTimeoutRef.current)
      clearTimeout(transitionTimeoutRef.current);
    transitionTimeoutRef.current = setTimeout(() => {
      if (direction === "next" && newIndex === 0) {
        handleLoopJump(0); // Jump from last clone to first real item
      } else if (direction === "prev" && newIndex === items.length - 1) {
        handleLoopJump(items.length - 1); // Jump from first clone to last real item
      } else {
        isTransitioningRef.current = false;
      }
    }, transitionDuration);
  };

  // Update current index on manual user scroll
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let debounceTimeout: NodeJS.Timeout;

    const handleScroll = () => {
      if (isTransitioningRef.current) return;
      const { scrollTop } = container;

      // Check if scrolled to the top clone
      if (scrollTop < itemHeight / 2) {
        handleLoopJump(items.length - 1);
        setCurrentIndex(items.length - 1);
        return;
      }
      // Check if scrolled to the bottom clone
      if (scrollTop > (items.length + 0.5) * itemHeight) {
        handleLoopJump(0);
        setCurrentIndex(0);
        return;
      }

      // Calculate index for real items
      const newIndex = Math.round(scrollTop / itemHeight) - 1;
      if (newIndex >= 0 && newIndex < items.length) {
        setCurrentIndex(newIndex);
      }
    };

    const debouncedScrollHandler = () => {
      clearTimeout(debounceTimeout);
      debounceTimeout = setTimeout(handleScroll, 200);
    };

    container.addEventListener("scroll", debouncedScrollHandler);
    return () =>
      container.removeEventListener("scroll", debouncedScrollHandler);
  }, [items.length, itemHeight, handleLoopJump]);

  return (
    <div className="relative w-[300px] h-[450px] max-w-md mx-auto">
      <div
        ref={scrollContainerRef}
        className="h-full w-full overflow-y-scroll no-scrollbar snap-y snap-mandatory rounded-2xl scrollbar-hide pb-[150px]"
        style={{ scrollBehavior: "smooth" }}
      >
        {displayItems.map((item, i) => (
          <div
            key={`${item.src}-${i}`}
            className="w-full flex-shrink-0 snap-center relative"
            style={{ height: `${itemHeight}px` }}
          >
            <div
              className={`relative w-full h-full transition-opacity duration-300 ${
                // Highlight the slide corresponding to the current logical index
                i === currentIndex + 1
                  ? "opacity-100 scale-100"
                  : "opacity-40 scale-90"
              }`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover rounded-2xl shadow-lg"
                priority={i <= 2}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="absolute top-0 left-1/2 -translate-x-1/2 flex flex-col items-center w-full h-full justify-between py-2 pointer-events-none">
        <button
          onClick={() => changeSlide("prev")}
          aria-label="Previous slide"
          className="bg-black/50 text-white p-2 rounded-full pointer-events-auto hover:bg-black/70 transition-colors"
        >
          <ChevronUpIcon className="size-4" />
        </button>
        <button
          onClick={() => changeSlide("next")}
          aria-label="Next slide"
          className="bg-black/50 text-white p-2 rounded-full pointer-events-auto hover:bg-black/70 transition-colors"
        >
          <ChevronDownIcon className="size-4" />
        </button>
      </div>
    </div>
  );
};

// Transform the array to match the required prop type for the component
const carouselItems = images.map((url, index) => ({
  src: url,
  alt: `Vertical carousel image ${index + 1}`,
}));

export default function NewPage() {
  const [accordionIndex, setAccordionIndex] = useState<number | null>(null);

  const openCloseAccordion = (index: number) => {
    if (index === accordionIndex) {
      console.log("nutup cuy");
      setAccordionIndex(null);
    } else {
      setAccordionIndex(index);
    }
  };

  return (
    <>
      <div className="relative flex flex-col justify-center items-center my-auto h-screen">
        {/* Floating Tab */}
        <div className=" flex items-center gap-4 z-10 -mb-5">
          <div
            className="px-6 py-2 rounded-full 
      bg-white/20 backdrop-blur-md border border-white/30 shadow-lg"
          >
            <span className="text-lg font-semibold text-white">
              🔧 Experience
            </span>
          </div>

          {/* Icons */}
          <div className="flex gap-3">
            <div
              className="w-12 h-12 flex items-center justify-center rounded-full 
        bg-white/20 backdrop-blur-md border border-white/30 shadow-md"
            >
              🗂️
            </div>
            <div
              className="w-12 h-12 flex items-center justify-center rounded-full 
        bg-white/20 backdrop-blur-md border border-white/30 shadow-md"
            >
              📄
            </div>
            <div
              className="w-12 h-12 flex items-center justify-center rounded-full 
        bg-white/20 backdrop-blur-md border border-white/30 shadow-md"
            >
              🏆
            </div>
            <div
              className="w-12 h-12 flex items-center justify-center rounded-full 
        bg-white/20 backdrop-blur-md border border-white/30 shadow-md"
            >
              💬
            </div>
          </div>
        </div>

        <div className="w-[70%] h-[80%] flex items-center bg-white/60 backdrop-blur-md border border-white/30 shadow-lg z-0 rounded-3xl gap-x-5 px-5">
          <h1 className="text-lg text-[--background] text-center bg-[--foreground] [writing-mode:vertical-rl] rotate-180 h-full px-2">
            Professional
          </h1>

          <div>
            <ChevronLeftIcon className="size-10 text-[--background]" />
          </div>

          <div className="w-full flex items-start justify-center gap-x-10">
            <div className="flex flex-col gap-y-5 max-w-[450px]">
              <div className={`flex justify-between`}>
                <div className={`text-[--background] ${inter.className}`}>
                  <h3 className="font-bold text-xl"> Front End Developer </h3>
                  <h5 className="text-md"> PT Bank Central Asia, Tbk </h5>
                </div>

                <div className="flex flex-col justify-start items-end text-sm">
                  <p className="bg-[--background] text-[--foreground] px-2 py-1">
                    {" "}
                    Jan - Jul 2024
                  </p>
                  <p className="bg-[--foreground] text-[--background] px-2 py-1 font-semibold">
                    {" "}
                    Internship{" "}
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-y-3">
                <div>
                  <button
                    className="w-fit flex items-center gap-x-2 bg-[--foreground] text-[--background] px-5 py-1 mb-3 transform transition-transform duration-500 ease-in-out"
                    onClick={() => openCloseAccordion(0)}
                  >
                    <p className="font-semibold text-sm">What I Do ?</p>
                    <ChevronDownIcon
                      className={`size-5 transform transition-transform duration-500 ease-in-out ${
                        accordionIndex === 0 ? "rotate-180" : "rotate-0"
                      }`}
                    />
                  </button>

                  <ol
                    className={`flex flex-col ${
                      inter.className
                    } text-[--background] font-semibold gap-y-2 ${
                      accordionIndex === 0 && accordionIndex !== null
                        ? "max-h-auto opacity-100"
                        : "max-h-0 opacity-0"
                    } overflow-hidden transition-all duration-500 ease-in-out`}
                  >
                    <li className="flex items-center gap-x-3">
                      <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[--foreground] font-bold">
                        1
                      </span>
                      Facilitated lab sessions and guided students in coding and
                      debugging.
                    </li>
                    <li className="flex items-center gap-x-3">
                      <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[--foreground] font-bold">
                        2
                      </span>
                      Designed practical exercises with React, Node.js, and
                      Android Studio.
                    </li>
                    <li className="flex items-center gap-x-3">
                      <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[--foreground] font-bold">
                        3
                      </span>
                      Helped 50+ students complete functional apps for capstone
                      projects.
                    </li>
                  </ol>
                </div>

                <div>
                  <div className="w-fit flex items-center gap-x-2 bg-[--foreground] text-[--background] px-5 py-1 mb-3">
                    <p className="font-semibold text-sm"> What I Achieve ? </p>
                    <ChevronDownIcon className="size-5" />
                  </div>
                </div>

                <div>
                  <div className="w-fit flex items-center gap-x-2 bg-[--foreground] text-[--background] px-5 py-1 mb-3">
                    <p className="font-semibold text-sm">
                      {" "}
                      What is the Outcome ?{" "}
                    </p>
                    <ChevronDownIcon className="size-5" />
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-y-1">
                <p className="text-[--background] font-semibold text-sm">
                  {" "}
                  Tech Stack{" "}
                </p>
                <div className="flex flex-wrap gap-x-3 gap-y-2">
                  <div className="w-fit bg-white bg-opacity-70 text-white px-4 py-1 rounded-xl">
                    <p className="text-xs text-[--background]"> HTML </p>
                  </div>

                  <div className="w-fit bg-white bg-opacity-70 text-white px-4 py-1 rounded-xl">
                    <p className="text-xs text-[--background]"> TypeScript </p>
                  </div>

                  <div className="w-fit bg-white bg-opacity-70 text-white px-4 py-1 rounded-xl">
                    <p className="text-xs text-[--background]">
                      {" "}
                      Containerization{" "}
                    </p>
                  </div>

                  <div className="w-fit bg-white bg-opacity-70 text-white px-4 py-1 rounded-xl">
                    <p className="text-xs text-[--background]"> CSS </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <VerticalSnapCarousel items={carouselItems} />
            </div>
          </div>

          <div>
            <ChevronRightIcon className="size-10 text-[--background]" />
          </div>
        </div>
      </div>
    </>
  );
}

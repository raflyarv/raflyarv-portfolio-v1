import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/16/solid";
import { FC, useState, useRef, useCallback, useEffect } from "react";
import Image from "next/image";

interface CarouselItem {
  src: string;
  name: string;
}

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
                alt={item.name}
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

export default VerticalSnapCarousel;

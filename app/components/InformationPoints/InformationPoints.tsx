import { ChevronDownIcon } from "@heroicons/react/16/solid";
import { useState } from "react";

import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

interface SectionData {
  id: 0 | 1 | 2;
  contents: string[];
}

interface SectionDataProps {
  section: SectionData[];
}

const InformationPoints = ({ section }: SectionDataProps) => {
  const [accordionIndex, setAccordionIndex] = useState<number | null>(null);

  const openCloseAccordion = (index: number) => {
    if (index === accordionIndex) {
      setAccordionIndex(null);
    } else {
      setAccordionIndex(index);
    }
  };

  return (
    <div className="flex flex-col gap-y-3">
      {section.map((sect, i) => {
        return (
          <div key={i}>
            <button
              className="w-fit flex items-center gap-x-2 bg-[--foreground] text-[--background] px-5 py-1 mb-3 transform transition-transform duration-500 ease-in-out"
              onClick={() => openCloseAccordion(sect.id)}
            >
              <p className="font-semibold text-sm">
                {sect.id === 0
                  ? "What I Do ?"
                  : sect.id === 1
                  ? "What I Achieve ?"
                  : sect.id === 2
                  ? "What is the Outcome ?"
                  : ""}
              </p>
              <ChevronDownIcon
                className={`size-5 transform transition-transform duration-500 ease-in-out ${
                  accordionIndex === sect.id ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>

            <ol
              className={`flex flex-col ${
                inter.className
              } text-[--background] font-semibold gap-y-2 ${
                accordionIndex === sect.id && accordionIndex !== null
                  ? "max-h-auto opacity-100"
                  : "max-h-0 opacity-0"
              } overflow-hidden transition-all duration-500 ease-in-out`}
            >
              {sect.contents.map((desc, i) => {
                return (
                  <li key={i} className="flex items-center gap-x-3">
                    <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[--foreground] font-bold">
                      {i + 1}
                    </span>
                    {desc}
                  </li>
                );
              })}
            </ol>
          </div>
        );
      })}
    </div>
  );
};

export default InformationPoints;

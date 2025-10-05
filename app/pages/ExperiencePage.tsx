import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/16/solid";
import { InformationPoints, VerticalSnapCarousel } from "../components";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import { useState } from "react";

const interLocal = localFont({
  src: "../static/fonts/Inter-VariableFont_opsz,wght.ttf",
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  fallback: ["interLocal"],
});

interface SectionData {
  id: 0 | 1 | 2;
  contents: string[];
}

interface SectionDataProps {
  section: SectionData[];
}

interface PeriodProps {
  start: string;
  end: string;
}

interface ImageProps {
  name: string;
  src: string;
}

interface ExperienceDataProps {
  id: number;
  company: string;
  companyWebsite?: string;
  employmentType: string;
  experienceCtg: "Professional" | "Teaching & Research";
  role: string;
  period: PeriodProps;
  section: SectionData[];
  techStack: string[];
  images: ImageProps[];
}

const InformationItems: SectionData[] = [
  {
    id: 0,
    contents: [
      "Facilitated lab sessions and guided students in coding and debugging.",
      "Facilitated lab sessions and guided students in coding and debugging.",
      "Facilitated lab sessions and guided students in coding and debugging.",
    ],
  },
  {
    id: 1,
    contents: [
      "Facilitated lab sessions and guided students in coding and debugging.",
      "Facilitated lab sessions and guided students in coding and debugging.",
      "Facilitated lab sessions and guided students in coding and debugging.",
    ],
  },
  {
    id: 2,
    contents: [
      "Facilitated lab sessions and guided students in coding and debugging.",
      "Facilitated lab sessions and guided students in coding and debugging.",
      "Facilitated lab sessions and guided students in coding and debugging.",
    ],
  },
];

const ExperienceItems: ExperienceDataProps[] = [
  {
    id: 1,
    company: "PT Bank Central Asia, Tbk",
    companyWebsite: "",
    employmentType: "Internship",
    role: "Front End Developer",
    period: {
      start: "2024-01",
      end: "2024-07",
    },
    section: [
      {
        id: 0,
        contents: [
          "Successfully helmed redesign and redeveloping a web shell app that acts as the internal use for co partner to integrate their finance service.",
        ],
      },
      {
        id: 1,
        contents: [
          "100% finished of the web application, score a 96 out of 100 for the internship score, and got a best recommendation and feedback from mentor and buddy",
        ],
      },
      {
        id: 2,
        contents: [
          "Feasible web app that will be used for the co partner to try and integrate their service or product to the companys financial services.",
        ],
      },
    ],
    techStack: [
      "HTML",
      "TypeScript",
      "Containerization",
      "CSS",
      "Red Hat OpenShift Container Platform",
      "Podman Desktop",
    ],
    images: [
      {
        name: "Image1",
        src: "https://drive.google.com/uc?export=view&id=1jhDHi-UtutK8mQU3z6kPcHiXPz72oMDT",
      },
      {
        name: "Image2",
        src: "https://drive.google.com/uc?export=view&id=1WerjpGVVJ5nK4Iiw13r0lnJhfB9tpufS",
      },
      {
        name: "Image3",
        src: "https://drive.google.com/uc?export=view&id=1so3Bj_QKBcRPstgcVGCv68TFPCjJnGwR",
      },
    ],
    experienceCtg: "Professional",
  },
  {
    id: 2,
    company: "PT Cinta Abadi Achilles",
    companyWebsite: "",
    employmentType: "Internship",
    role: "Front End Developer",
    period: {
      start: "2024-01",
      end: "2024-07",
    },
    section: [
      {
        id: 0,
        contents: [
          "Successfully helmed redesign and redeveloping a web shell app that acts as the internal use for co partner to integrate their finance service.",
        ],
      },
      {
        id: 1,
        contents: [
          "100% finished of the web application, score a 96 out of 100 for the internship score, and got a best recommendation and feedback from mentor and buddy",
        ],
      },
      {
        id: 2,
        contents: [
          "Feasible web app that will be used for the co partner to try and integrate their service or product to the companys financial services.",
        ],
      },
    ],
    techStack: [
      "HTML",
      "TypeScript",
      "Containerization",
      "CSS",
      "Red Hat OpenShift Container Platform",
      "Podman Desktop",
    ],
    images: [
      {
        name: "Image1",
        src: "https://drive.google.com/uc?export=view&id=1jhDHi-UtutK8mQU3z6kPcHiXPz72oMDT",
      },
      {
        name: "Image2",
        src: "https://drive.google.com/uc?export=view&id=1WerjpGVVJ5nK4Iiw13r0lnJhfB9tpufS",
      },
      {
        name: "Image3",
        src: "https://drive.google.com/uc?export=view&id=1so3Bj_QKBcRPstgcVGCv68TFPCjJnGwR",
      },
    ],
    experienceCtg: "Teaching & Research",
  },
];

const formatPeriod = (start: string, end: string): string => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const startYear = start.split("-")[0];
  const startMonth = months[parseInt(start.split("-")[1]) - 1];

  const endYear = end.split("-")[0];
  const endMonth = months[parseInt(end.split("-")[1]) - 1];

  // If start and end years are the same, omit the year for the start date
  if (startYear === endYear) {
    return `${startMonth} - ${endMonth} ${endYear}`;
  }

  // Otherwise, show the full period
  return `${startMonth} ${startYear} - ${endMonth} ${endYear}`;
};

const images = [
  "https://drive.google.com/uc?export=view&id=1jhDHi-UtutK8mQU3z6kPcHiXPz72oMDT",
  "https://drive.google.com/uc?export=view&id=1WerjpGVVJ5nK4Iiw13r0lnJhfB9tpufS",
  "https://drive.google.com/uc?export=view&id=1so3Bj_QKBcRPstgcVGCv68TFPCjJnGwR",
];

const ExperiencePage = () => {
  const [currentExperience, setCurrentExperience] = useState(0);
  const selectedExperience = ExperienceItems[currentExperience];

  console.log(currentExperience);

  const formattedPeriod = formatPeriod(
    selectedExperience.period.start,
    selectedExperience.period.end
  );

  return (
    <div className="flex w-[100%] h-[100%] px-5 items-center justify-center">
      <div className="flex h-full">
        <h1 className="text-lg text-[--foreground] text-center bg-[--background] [writing-mode:vertical-rl] rotate-180 h-full px-2">
          Professional
        </h1>
        {selectedExperience.experienceCtg === "Teaching & Research" && (
          <div className="flex h-full -ml-5">
            <h1 className="text-lg text-[--background] text-center bg-[--foreground] [writing-mode:vertical-rl] rotate-180 h-full px-2">
              Teaching & Research
            </h1>
            <h1 className="text-xs text-[--foreground] text-center bg-[--background] [writing-mode:vertical-rl] rotate-180 skew-x-3 h-fit px-2 py-3 -ml-3 mt-20">
              My University Year ;-)
            </h1>
          </div>
        )}
      </div>

      <div>
        <ChevronLeftIcon
          className="size-10 text-[--background] cursor-pointer"
          onClick={() => {
            setCurrentExperience((prev) =>
              prev > ExperienceItems.length - 1
                ? prev - 1
                : ExperienceItems.length - 1
            );
          }}
        />
      </div>

      <div className="w-full flex items-start justify-center gap-x-10">
        <div className="flex flex-col gap-y-5 max-w-[450px]">
          <div className={`flex justify-between`}>
            <div className={`text-[--background] ${inter.className}`}>
              <h3 className="font-bold text-xl"> {selectedExperience.role} </h3>
              <h5 className="text-md"> {selectedExperience.company} </h5>
            </div>

            <div className="flex flex-col justify-start items-end text-sm">
              <p className="bg-[--background] text-[--foreground] px-2 py-1">
                {formattedPeriod}
              </p>
              <p className="bg-[--foreground] text-[--background] px-2 py-1 font-semibold">
                {selectedExperience.employmentType}
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-y-3">
            <InformationPoints section={selectedExperience.section} />
          </div>

          <div className="flex flex-col gap-y-1">
            <p className="text-[--background] font-semibold text-sm">
              {" "}
              Tech Stack{" "}
            </p>
            <div className="flex flex-wrap gap-x-3 gap-y-2">
              {selectedExperience.techStack.map((tech, i) => (
                <div
                  key={`tech-${i}`}
                  className="w-fit bg-white bg-opacity-70 text-white px-4 py-1 rounded-xl"
                >
                  <p className="text-xs text-[--background]"> {tech} </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <VerticalSnapCarousel items={selectedExperience.images} />
        </div>
      </div>

      <div>
        <ChevronRightIcon
          className="size-10 text-[--background] cursor-pointer"
          onClick={() => {
            setCurrentExperience((prev) =>
              prev < ExperienceItems.length - 1 ? prev + 1 : 0
            );
          }}
        />
      </div>
    </div>
  );
};

export default ExperiencePage;

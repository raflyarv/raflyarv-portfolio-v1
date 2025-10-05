import {
  ChevronRightIcon,
  ChevronLeftIcon,
  ArrowTurnDownRightIcon,
} from "@heroicons/react/16/solid";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import Image from "next/image";
import { useState } from "react";

const interLocal = localFont({
  src: "../static/fonts/Inter-VariableFont_opsz,wght.ttf",
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  fallback: ["interLocal"],
});

const projectData = [
  {
    id: 1,
    title: "VICARA 3.0",
    subtitle: "Mobile App - SlateARV Theme",
    role: "UI/UX Designer",
    affiliation: "Tarumanagara University",
    colors: {
      main: "#CBEB7B",
      secondary: "#BBAAD1",
      labelBg: "#385A75",
      labelText: "#CBEB7B",
      gradient:
        "circle,rgba(203, 235, 123, 1) 20%, rgba(187, 170, 209, 1) 100%",
    },
  },

  {
    id: 2,
    title: "Eksplor Laweyan",
    subtitle: "Mobile App",
    role: "UI/UX Designer & Developer",
    affiliation: "Tarumanagara University",
    colors: {
      main: "#C43C2C",
      secondary: "#E0D4BD",
      labelBg: "#2D1B19",
      labelText: "#E0D4BD",
      gradient: "circle, rgba(196, 60, 44, 1) 0%, rgba(224, 212, 189, 1) 100%",
    },
  },

  {
    id: 3,
    title: "Evanindo Wisata",
    subtitle: "Travel & Dashboard Web",
    role: "Front End Developer",
    affiliation: "Tarumanagara University",
    colors: {
      main: "#FBB44A",
      secondary: "#ACC4C4",
      labelBg: "#343454",
      labelText: "#FFFFF",
      gradient:
        "circle, rgba(252, 204, 108, 1) 11%, rgba(172, 196, 196, 1) 73%",
    },
  },
];

const ProjectPage = () => {
  const [currentProject, setCurrentProject] = useState(0);
  const selectedProject = projectData[currentProject];

  console.log(selectedProject.colors.labelBg);

  return (
    <>
      <ChevronLeftIcon
        style={{
          color: selectedProject.colors.labelBg,
        }}
        className={`size-32 cursor-pointer`}
        onClick={() => {
          setCurrentProject((prev) => (prev > 0 ? prev - 1 : 2));
        }}
      />

      <div
        style={{
          backgroundImage: `radial-gradient(${selectedProject.colors.gradient})`,
        }}
        className={`absolute w-[100%] h-[100%] rounded-3xl -z-20 blur-sm transition-all duration-500`}
      ></div>
      <div className="flex flex-col gap-x-5 px-5 justify-start items-center">
        <div className="flex flex-col mb-5">
          <div className="flex justify-center items-end">
            <h2
              style={{
                backgroundColor: selectedProject.colors.labelBg,
                color: selectedProject.colors.labelText,
              }}
              className={`h-fit text-xl font-semibold px-2 py-1 mb-5 tracking-widest`}
            >
              {" "}
              {selectedProject.title}{" "}
            </h2>
            <h2
              style={{
                backgroundColor: selectedProject.colors.main,
                color: selectedProject.colors.labelBg,
              }}
              className={`h-fit text-sm font-semibold px-2 py-1 -ml-10 tracking-wider`}
            >
              {" "}
              {selectedProject.subtitle}{" "}
            </h2>
          </div>

          <div className="flex justify-center items-center gap-x-2 text-background">
            <ArrowTurnDownRightIcon className="size-4" />
            <p className="text-sm">
              {" "}
              {selectedProject.role} @ {selectedProject.affiliation}{" "}
            </p>
          </div>
        </div>

        <div className="flex gap-x-5 text-background">
          {/* What is it */}
          <div className="flex flex-col justify-center items-end">
            <h3
              style={{
                backgroundColor: selectedProject.colors.main,
                color: selectedProject.colors.labelBg,
              }}
              className="w-fit h-fit text-sm font-semibold px-2 py-1 tracking-wider mb-3"
            >
              {" "}
              What is it ?{" "}
            </h3>
            <p className={`w-auto text-end ${inter.className}`}>
              Lorem ipsum dolor sit amet consectetur. Egestas eros lectus mauris
              dignissim. Tellus nunc consequat at aliquam ac commodo sit.
            </p>
          </div>

          <div className="relative w-[100%] h-[50vh]">
            <Image
              fill
              src="/thumbnails/projects/VicaraHighlight.png"
              alt="Vicara Project"
              objectFit="cover"
            />
          </div>

          <div className="flex flex-col items-center">
            <div className="flex flex-col h-[50%]">
              <h3
                style={{
                  backgroundColor: selectedProject.colors.main,
                  color: selectedProject.colors.labelBg,
                }}
                className="w-fit h-fit text-sm font-semibold px-2 py-1 tracking-wider mb-3"
              >
                {" "}
                How do I design this{" "}
              </h3>
              <p className={`w-auto ${inter.className}`}>
                {" "}
                Lorem ipsum dolor sit amet consectetur. Egestas eros lectus
                mauris dignissim. Tellus nunc consequat at aliquam ac commodo
                sit.{" "}
              </p>
            </div>

            <div className="flex flex-col h-[50%]">
              <h3
                style={{
                  backgroundColor: selectedProject.colors.main,
                  color: selectedProject.colors.labelBg,
                }}
                className="w-fit h-fit text-sm font-semibold px-2 py-1 tracking-wider mb-3"
              >
                {" "}
                Availability:{" "}
              </h3>
              <p className={`w-auto ${inter.className}`}>
                {" "}
                Lorem ipsum dolor sit amet consectetur. Egestas eros lectus
                mauris dignissim. Tellus nunc consequat at aliquam ac commodo
                sit.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <ChevronRightIcon
        style={{
          color: selectedProject.colors.labelBg,
        }}
        className={`size-32 cursor-pointer`}
        onClick={() => {
          setCurrentProject((prev) => (prev < 2 ? prev + 1 : 0));
        }}
      />
    </>
  );
};

export default ProjectPage;

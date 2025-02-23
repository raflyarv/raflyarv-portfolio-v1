import Image from "next/image";
import { ArrowTurnDownRightIcon } from "@heroicons/react/16/solid";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

interface ProjectData {
  year: string;
  previewImg: string;
  name: string;
  role: string;
  organization: string;
  description: string;
  device: string;
}

interface ProjectProps {
  project: ProjectData;
}

export default function ProjectsCard({ project }: ProjectProps) {
  return (
    <>
      <div
        className={`group w-full items-center flex flex-col lg:flex-row lg:justify-between mb-10 rounded-md transition-all ease-in-out 
   backdrop-blur-md hover:lg:bg-white/10 hover:lg:shadow-lg ${
     project.device !== "Mobile" ? "lg:flex-row-reverse" : ""
   }`}
      >
        <Image
          src={project.previewImg}
          alt={project.name}
          className={`transition lg:w-[30%] w-[75%] group-hover:lg:scale-125 ease-in-out mb-7 lg:mb-0 ${
            project.device !== "Mobile" ? "lg:w-[480px] w-[80%]" : ""
          }`}
          width={project.device !== "Mobile" ? 300 : 200}
          height={project.device !== "Mobile" ? 300 : 200}
        />

        <div className="lg:w-[65%] lg:px-5">
          <p className="w-full lg:w-fit bg-[--foreground] text-center lg:text-start text-[--background] px-2 font-semibold mb-1 lg:mb-0">
            {project.name}
          </p>

          <div className="flex mb-2">
            <ArrowTurnDownRightIcon className="size-5 mr-2" />
            <p className="mt-1 text-sm">
              {" "}
              {project.role}, {project.organization}
            </p>
          </div>

          <p className={`${inter.className} text-[--text-secondary] lg:pr-4`}>
            {project.description}
          </p>
        </div>
      </div>
    </>
  );
}

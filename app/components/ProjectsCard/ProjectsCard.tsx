import Image from "next/image";
import { ArrowTurnDownRightIcon } from "@heroicons/react/16/solid";
import { Inter } from "next/font/google";
import Link from "next/link";

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
  builtWith: string[];
  link: string;
  githubLink: string;
  gitlabLink: string;
  figmaLink: string;
}

interface ProjectProps {
  project: ProjectData;
}

export default function ProjectsCard({ project }: ProjectProps) {
  return (
    <>
      <div
        className={`group w-full py-2 items-center flex flex-col lg:flex-row lg:justify-between mb-10 rounded-md transition-all ease-in-out 
   backdrop-blur-md hover:lg:bg-white/10 hover:lg:shadow-lg ${
     project.device !== "Mobile" ? "lg:flex-row-reverse" : ""
   }`}
      >
        <Image
          priority
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

          <p
            className={`${inter.className} text-[--text-secondary] lg:pr-4 mb-3`}
          >
            {project.description}
          </p>

          <div className="flex flex-col">
            <div className="flex flex-col mb-3">
              <p className="text-sm mb-2"> Built with: </p>

              <div className="flex flex-wrap gap-2">
                {project.builtWith.map((tech, index) => (
                  <p
                    key={index}
                    className="inline-flex items-center rounded-sm bg-[--darkerBackground] py-1.5 px-3 text-xs text-[--text-secondary] shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-gray-700"
                  >
                    {tech}
                  </p>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-x-3">
              {project.githubLink !== "" ? (
                <Link href={project.githubLink || ""} target="blank">
                  <Image
                    src={"/socials/github.svg"}
                    alt="Github Logo"
                    width={40}
                    height={40}
                  />
                </Link>
              ) : (
                <></>
              )}

              {project.gitlabLink !== "" ? (
                <Link href={project.gitlabLink || ""} target="blank">
                  <Image
                    src={"/socials/gitlab.svg"}
                    alt="Gitlab Logo"
                    width={45}
                    height={45}
                  />
                </Link>
              ) : (
                <></>
              )}

              {project.figmaLink !== "" ? (
                <Link href={project.figmaLink || ""} target="blank">
                  <Image
                    src={"/socials/figma.svg"}
                    alt="Figma Logo"
                    width={35}
                    height={35}
                  />
                </Link>
              ) : (
                <></>
              )}

              {project.link !== "" ? (
                <Link href={project.link || ""} target="blank">
                  <Image
                    src={"/socials/link.svg"}
                    alt="Link Logo"
                    width={35}
                    height={35}
                  />
                </Link>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

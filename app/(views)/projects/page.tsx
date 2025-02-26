import Link from "next/link";
import { ChevronLeftIcon } from "@heroicons/react/16/solid";
import archiveProjects from "@/public/dummy/past-projects.json";
import { ArchiveProjectsCard, MainFooter } from "@/app/components";

export default function ProjectArchive() {
  return (
    <main className="max-w-[70rem] relative mx-auto py-8">
      <div className="w-full flex lg:justify-between justify-evenly sticky top-0 right-0 bg-[--background]/20 backdrop-blur-md bg-opacity-80 py-5 z-10">
        <Link href={"/"} className="group">
          <ChevronLeftIcon className="size-8 group-hover:text-white transition-colors duration-300" />
        </Link>
        <h1 className="text-center text-2xl">
          {" "}
          _
          <span className="text-[--background] bg-[--foreground] px-2">
            Other Projects
          </span>
          |
        </h1>
      </div>

      <div className="w-fit px-8 lg:px-0 mb-5">
        <p className="text-xs lg:text-sm text-white">
          {" "}
          Past projects that i&#39;ve worked on—
          <span className="text-[--foreground]">
            research collaboration, bootcamp, internship, and classworks.{" "}
          </span>
        </p>
      </div>

      <div className="w-fit mx-auto grid lg:grid-cols-3 grid-flow-row gap-x-5 gap-y-5">
        {archiveProjects.projectArchive.map((proj, index) => (
          <ArchiveProjectsCard key={index} projectArchive={proj} />
        ))}
      </div>

      <MainFooter />
    </main>
  );
}

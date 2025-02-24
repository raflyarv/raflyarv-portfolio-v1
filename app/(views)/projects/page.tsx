import Link from "next/link";
import { ChevronLeftIcon } from "@heroicons/react/16/solid";
import archiveProjects from "@/public/dummy/past-projects.json";
import { ArchiveProjectsCard } from "@/app/components";

export default function ProjectArchive() {
  return (
    <main className="w-fit mx-auto py-8">
      <div className="flex lg:justify-between justify-evenly">
        <Link href={"/"} className="group">
          <ChevronLeftIcon className="size-8 group-hover:text-white transition-colors duration-300" />
        </Link>
        <h1 className="text-center text-2xl mb-5">
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

      <div className="w-fit mx-auto grid lg:grid-cols-3 gap-x-5 gap-y-5">
        {archiveProjects.projectArchive.map((proj, index) => (
          <ArchiveProjectsCard key={index} projectArchive={proj} />
        ))}
      </div>
    </main>
  );
}

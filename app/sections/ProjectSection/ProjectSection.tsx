import { ProjectsCard, StickySectionHeader } from "@/app/components";
import { ArrowUpRightIcon } from "@heroicons/react/16/solid";
import Link from "next/link";
// import { Inter } from "next/font/google";
import projectData from "@/public/dummy/projects.json";

// const inter = Inter({
//   subsets: ["latin"],
//   display: "swap",
// });

export default function ProjectSection() {
  return (
    <>
      {/* Project Section */}
      <div className="w-full mb-7 relative">
        <StickySectionHeader title="Featured Projects" index={3} />

        <div className="px-8">
          {projectData.projects.map((project, index) => (
            <ProjectsCard key={index} project={project} />
          ))}

          <div className="flex items-center justify-between group">
            <Link
              href="/projects"
              className="w-fit flex gap-x-1 transition-transform group-hover:scale-[1.02] group-hover:-translate-y-1 group-hover:translate-x-5 ease-in-out duration-300"
            >
              <p className="text-sm group-hover:text-white transition-colors duration-300 relative">
                View All Projects
                <span className="absolute bottom-0 left-0 h-0.5 bg-white w-0 transition-all duration-300 group-hover:w-full"></span>
              </p>
              <ArrowUpRightIcon className="size-4 group-hover:text-white transition-colors duration-300" />
            </Link>
            {/* Line */}
            <span className="h-0.5 w-[25%] lg:w-[50%] bg-yellow-500 transition-all duration-300 group-hover:bg-white group-hover:lg:w-[70%] group-hover:w-[35%]"></span>
          </div>
        </div>
      </div>

      {/* Project Section */}
    </>
  );
}

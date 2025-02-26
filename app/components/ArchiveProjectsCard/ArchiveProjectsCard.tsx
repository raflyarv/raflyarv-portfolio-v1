import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/16/solid";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

interface ProjectArchive {
  title: string;
  subtitle: string;
  description: string;
  builtWith: string[];
  githubLink: string;
  link: string;
}

interface ProjectArchiveProps {
  projectArchive: ProjectArchive;
}

export default function ArchiveProjectsCard({
  projectArchive,
}: ProjectArchiveProps) {
  return (
    <div className="w-[19rem] box-content h-auto bg-[--darkerBackground] justify-start rounded-md flex flex-col py-8 px-6 group lg:hover:-translate-y-4 hover:shadow-lg transition-all duration-300">
      <div className="flex items-start justify-between mb-5">
        <Image
          alt="Folder"
          src={"/folder-outlined.svg"}
          width={60}
          height={60}
        />

        <div className="flex items-start gap-x-2">
          <Link href={projectArchive.githubLink}>
            <Image
              alt="Folder"
              src={"/socials/github.svg"}
              width={25}
              height={25}
              className="text-[--text-secondary]"
            />
          </Link>

          <Link href={projectArchive.link}>
            <ArrowTopRightOnSquareIcon className="size-6 text-[--text-secondary]" />
          </Link>
        </div>
      </div>

      <div className="flex flex-col mb-4">
        <p className="bg-[--foreground] text-[--background] lg:group-hover:bg-[--background] lg:group-hover:text-[--foreground] transition-all duration-300  px-2 w-fit mb-1 font-semibold">
          {" "}
          {projectArchive.title}
        </p>
        <p className="text-xs text-[--text-secondary]">
          {" "}
          {projectArchive.subtitle}{" "}
        </p>
      </div>

      <div className="flex flex-col justify-between h-full">
        <p
          className={`${inter.className} text-base font-medium text-[--text-secondary] mb-5`}
        >
          {" "}
          {projectArchive.description}
        </p>

        <div className="text-xs text-[--text-secondary] flex flex-wrap gap-x-5 gap-y-1 opacity-70">
          {projectArchive.builtWith.map((tech, index) => (
            <p key={index}> {tech} </p>
          ))}
        </div>
      </div>
    </div>
  );
}

import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

interface Period {
  start: string;
  end: string;
}

interface ExperienceData {
  period: Period;
  position: string;
  company: string;
  description: string;
  builtWith: string[];
}

interface ExperienceProps {
  experience: ExperienceData;
  isDimmed: boolean;
  onHover: () => void;
  onLeave: () => void;
}

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

export default function ExperienceCard({
  experience,
  isDimmed,
  onHover,
  onLeave,
}: ExperienceProps) {
  const formattedPeriod = formatPeriod(
    experience.period.start,
    experience.period.end
  );

  return (
    <>
      <div
        className={`w-full mb-3 flex flex-col lg:flex-row justify-between justify-items-start align-middle lg:p-4 py-4 rounded-md transition-all ease-in-out 
      backdrop-blur-md hover:lg:bg-white/10 hover:lg:shadow-lg ${
        isDimmed ? "opacity-50" : "opacity-100"
      }`}
        onMouseEnter={onHover}
        onMouseLeave={onLeave}
      >
        {/* Period of Occupancy */}
        <div className="w-fit mb-2 lg:mb-0">
          <p className="text-sm break-words px-1 bg-[--foreground] text-[--background] font-bold">
            {formattedPeriod}
          </p>
        </div>

        {/* Job Details */}
        <div className="lg:w-[70%]">
          <p className={`mb-1 text-lg font-bold text-white ${inter.className}`}>
            {experience.position}{" "}
            <span className="text-[--foreground]">@ {experience.company}</span>
          </p>
          <p className={`mb-3 text-[--text-secondary] ${inter.className}`}>
            {experience.description}
          </p>
          <div className="flex flex-wrap gap-x-3 gap-y-2">
            {experience.builtWith.map((tech, index) => (
              <div
                key={index}
                className="w-fit bg-[--plainBackground] bg-opacity-50 text-white px-4 py-1 rounded-xl"
              >
                <p className="text-xs font-semibold">{tech}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

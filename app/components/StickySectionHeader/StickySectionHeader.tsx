import React from "react";

interface StickySectionHeaderProps {
  title: string;
  index: number;
}

export default function StickySectionHeader({
  title,
  index,
}: StickySectionHeaderProps) {
  return (
    <div
      className={`w-full sticky top-0 z-10 bg-[--background]/50 backdrop-blur-md bg-opacity-60 py-5
      md:static text-center md:text-left`}
    >
      <h1 className="text-xl font-bold text-white">
        <span className="text-[--foreground]">{`0${index}. `}</span> {title}
      </h1>
    </div>
  );
}

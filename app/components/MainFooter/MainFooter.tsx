export default function MainFooter() {
  return (
    <footer className="flex flex-col px-8 mt-10">
      <div className="w-full mb-3 flex items-center justify-between">
        <div className="h-0.5 w-[40%] lg:w-[80%] bg-white"></div>
        <p className="text-sm"> 2025 | RaflyARV </p>
      </div>
      <p className="text-xs text-[--text-secondary]">
        Designed with inspiration from the masters, built with{" "}
        <span className="text-[--foreground]"> Next.js </span> styled with{" "}
        <span className="text-[--foreground]"> Tailwind CSS </span> and powered
        by <span className="text-[--foreground]"> TypeScript</span>
        —crafted by
        <span className="text-[--foreground]"> Muhammad T Rafly </span> with a
        dash of creativity and a nod to the experts!
      </p>
    </footer>
  );
}

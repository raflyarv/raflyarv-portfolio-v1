import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
  Description,
} from "@headlessui/react";
import { Inter, Martian_Mono } from "next/font/google";
import { Dispatch, SetStateAction } from "react";
import Image from "next/image";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const mono = Martian_Mono({
  subsets: ["latin"],
  display: "swap",
});

interface ARVModalDialogProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export default function ARVModalDialog({
  isOpen,
  setIsOpen,
}: ARVModalDialogProps) {
  return (
    <Dialog
      open={isOpen}
      onClose={setIsOpen}
      transition
      className="relative z-50"
    >
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-[#332941]/75 backdrop-blur-sm transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[enter]:ease-out data-[leave]:duration-200 data-[leave]:ease-in"
      />
      <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
        <DialogPanel
          transition
          className={
            "max-w-lg relative flex flex-col justify-center items-center transform overflow-hidden space-y-4 border border-[--foreground] bg-[--background]/70 backdrop-blur-lg rounded-md lg:p-12 p-8 transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[enter]:ease-out data-[leave]:duration-200 data-[leave]:ease-in"
          }
        >
          <DialogTitle
            className={`w-fit justify-center ml-8 flex items-center -my-12 ${inter.className}`}
          >
            <p className="text-lg font-semibold"> WHAT IS </p>
            <Image
              src={"/arv-trademark.svg"}
              alt="RaflyARV"
              width={150}
              height={150}
              className="-ml-10"
            />
          </DialogTitle>
          <Description
            className={`${inter.className} text-center text-[--text-secondary] font-semibold text-sm lg:text-base`}
          >
            {" "}
            ARV in{" "}
            <span
              className={`${mono.className} text-xs lg:text-sm font-normal`}
            >
              {" "}
              raflyarv.com
            </span>{" "}
            is a creative twist on my pen name, an acronym for ARVIN, seamlessly
            blending with my name, Rafly. By adding ARV, I’ve crafted a unique
            branding signature that stands out—a personal touch reflecting my
            contribution to a notable project.{" "}
          </Description>
          <div className="flex">
            <button
              className={`${inter.className} inline-flex items-center gap-2 rounded-md bg-[--darkerBackground] py-1.5 px-3 text-base font-semibold text-white backdrop-blur-md focus:outline-none hover:bg-[--foreground] hover:text-[--background] transition-all duration-200`}
              onClick={() => setIsOpen(false)}
            >
              {" "}
              Alrighty!{" "}
            </button>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
}

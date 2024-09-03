import React from "react";
import { BackgroundBeams } from "./ui/background-beams";
import { ContactInput } from "./client/contact-input";

export function ContactForm() {
  return (
    <div className="h-[40rem] w-full rounded-md bg-transparent relative flex flex-col items-center justify-center antialiased z-10">
      <div className="w-full max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          Contact us!
        </h1>
       
        <ContactInput />
      </div>
      <BackgroundBeams />
    </div>
  );
}

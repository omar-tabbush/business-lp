import React from "react";
import Hero from "@/components/client/hero";
import StackMarquee from "@/components/stack-marquee"
import { ContactForm } from "@/components/contact-form";

export default function CoverDemo() {
  return (
    <>
      <section>
        <Hero />
      </section>
      <section className="w-full flex flex-col justify-center align-middle items-center">
        <div className="w-1/2 max-sm:w-5/6 flex flex-col justify-center align-middle items-center">
          <h1 className="text-neutral-500  mx-auto my-2 max-sm:my-0.5 text-4xl text-center relative z-10">Our stacks</h1>
          <StackMarquee />
        </div>
      </section>
      <section>
        <ContactForm />
      </section>
    </>
  );
}

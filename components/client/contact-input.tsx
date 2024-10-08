
import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";
import { Resend } from 'resend';
import { TextArea } from "../ui/textarea";


const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full z-10", className)}>
      {children}
    </div>
  );
};


export function ContactInput() {

  const action = async (formData: FormData) => {
    "use server"
    const fullName = formData.get('fullname')?.toString()
    const email = formData.get('email')?.toString()
    const message = formData.get('message')?.toString()

    const resend = new Resend(process.env.resend)
    const resendResponse = await resend.emails.send({
      from: `Acme: <onboarding@resend.dev>`,
      subject: `${fullName} wants to turn their idea into reality!`,
      to: "omartabbush02@gmail.com",
      html: `${message}`,
      text: `${message}`,
      cc: email
    })
    console.log({ resendResponse });
  }
  return (
    <form className="my-8 z-10 w-full space-y-2" action={action}>

      <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 space-x-0 mb-4 w-full">
        <LabelInputContainer>
          <Label htmlFor="fullname">Full name</Label>
          <Input required id="fullname" name="fullname" placeholder="Tyler Durder" type="text" />
        </LabelInputContainer>
        <LabelInputContainer>
          <Label htmlFor="email">Email Address</Label>
          <Input required id="email" name="email" placeholder="projectmayhem@fc.com" type="email" />
        </LabelInputContainer>
      </div>
      <LabelInputContainer className="mb-4 ">
        <Label htmlFor="message">Your message</Label>
        <TextArea required id="message" name="message" placeholder="I want to turn my idea into reality.." />
      </LabelInputContainer>

      <button
        className="z-20 bg-gradient-to-br relative group/btn cursor-pointer from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
        type="submit"
      >
        Sign up &rarr;
      </button>

      <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />

    </form>
  );
}


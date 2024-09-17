import { SignUp } from "@clerk/nextjs";
import Image from "next/image";
import SignUpBg from "~/../public/loginbg.jpeg";

export default function Page() {
  return (
    <div className="flex w-full h-screen bg-green-50 justify-between items-center">
      <div className="absolute md:relative z-30 flex w-full h-full justify-center items-center">
        <SignUp />
      </div>
      <Image
        src={SignUpBg}
        alt={""}
        unoptimized
        className="h-full object-cover w-full md:w-1/2 absolute md:relative "
      />
      <div className="w-full h-full bg-green-950/50 absolute md:hidden" />
    </div>
  );
}

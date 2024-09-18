"use client";

import { CustomButton } from "~/components/custom/CustomButton";
import Link from "next/link";
import { FaUser, FaWrench, FaReceipt, FaSignOutAlt } from "react-icons/fa";
import { MdPayments } from "react-icons/md";
import { DisplayText } from "~/app/_components/text/DisplayText";
import { useClerk } from "@clerk/nextjs";
import { UserProfile } from "@clerk/nextjs";
import { useState } from "react";

type RowItem = {
  logo: React.ReactNode;
  name: string;
  href: string;
  className: string;
  onClick?: () => void;
};

const RowItem = ({ logo, name, href, className, onClick }: RowItem) => {
  return (
    <Link href={href} className={className}>
      <CustomButton
        onClick={onClick}
        size={"lg"}
        className="w-full p-4 flex gap-x-12 justify-between text-lg bg-white text-neutral-900 hover:text-white"
      >
        {logo}
        {name}
      </CustomButton>
    </Link>
  );
};

type Props = {
  children: React.ReactNode;
};

export default function Template({ children }: Props) {
  const [clerkOpen, setClerkOpen] = useState<boolean>(false);
  const { signOut } = useClerk();
  const DemoRowItems = [
    {
      logo: <FaUser />,
      name: "Edit Profile",
      className: "",
      href: "",
    },
    {
      logo: <FaWrench />,
      name: "Account Settings",
      className: "",
      href: "",
      onClick: () => setClerkOpen(!clerkOpen),
    },
    {
      logo: <FaReceipt />,
      name: "Order History",
      className: "",
      href: "",
    },
    {
      logo: <MdPayments />,
      name: "Payment Methods",
      className: "",
      href: "",
    },
    {
      logo: <FaSignOutAlt />,
      name: "Sign Out",
      className: "mt-auto",
      href: "",
      onClick: async () => {
        await signOut();
      },
    },
  ];

  return (
    <>
      <div className="pt-32 md:px-24 flex gap-x-8 divide-x-2 h-[90vh]">
        <div className="flex flex-col w-max gap-y-2 h-full">
          <DisplayText className="text-3xl text-green-950 pb-8">
            Settings
          </DisplayText>
          {DemoRowItems.map((item, index) => (
            <RowItem key={index} {...item} />
          ))}
        </div>
        <div className="px-4">{children}</div>
      </div>
      {clerkOpen && (
        <div className="absolute w-screen h-screen z-50 top-0 bottom-0 bg-neutral-950/60 flex justify-center items-center">
          <UserProfile />
        </div>
      )}
    </>
  );
}

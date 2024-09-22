import {
  FaUserCircle,
  FaWrench,
  FaUserCog,
  FaHeart,
  FaReceipt,
  FaSignOutAlt,
  FaSignInAlt,
} from "react-icons/fa";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "~/components/ui/dropdown-menu";
import Link from "next/link";
import { DisplayText } from "../text/DisplayText";
import {
  useUser,
  SignInButton,
  SignedOut,
  SignedIn,
  SignOutButton,
} from "@clerk/nextjs";
// import { api } from "~/trpc/server";

// edit profile, account settings, favorites, billing history, log out

const dropDownItems = [
  {
    logo: <FaUserCog />,
    label: "Edit Profile",
    href: "",
  },
  {
    logo: <FaWrench />,
    label: "Account Settings",
    href: "",
  },
  {
    logo: <FaHeart />,
    label: "Favorites",
    href: "",
  },
  {
    logo: <FaReceipt />,
    label: "Order History",
    href: "",
  },
];

const CustomSignOutButton = () => {
  return (
    <SignedIn>
      <SignOutButton>
        <DropdownMenuItem className="flex justify-between w-full items-center text-neutral-900 text-md gap-x-10 focus:bg-green-800 focus:text-white transition-colors duration-100 p-2 active:bg-green-900 cursor-pointer">
          <FaSignOutAlt />
          <span>Sign Out</span>
        </DropdownMenuItem>
      </SignOutButton>
    </SignedIn>
  );
};

export function ProfileMenu() {
  const { isSignedIn } = useUser();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <FaUserCircle className="text-2xl cursor-pointer hover:text-green-200 transition-all duration-200" />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="flex flex-col bg-white p-2 ">
        <DropdownMenuLabel className="text-lg font-bold">
          <DisplayText>My Account</DisplayText>
        </DropdownMenuLabel>
        <DropdownMenuSeparator className="bg-green-950/50" />
        <div className="flex flex-col gap-y-1 w-max">
          {isSignedIn ? (
            <>
              {dropDownItems.map((item, index) => {
                return (
                  <Link href={item.href} key={index}>
                    <DropdownMenuItem className="flex justify-between w-full items-center text-neutral-900 text-md gap-x-10 focus:bg-green-800 focus:text-white transition-colors duration-100 p-2 active:bg-green-900 cursor-pointer">
                      {item.logo}
                      <span>{item.label}</span>
                    </DropdownMenuItem>
                  </Link>
                );
              })}
              <CustomSignOutButton />
            </>
          ) : (
            <DropdownMenuItem className="flex justify-between w-full items-center text-neutral-900 text-md gap-x-10 focus:bg-green-800 focus:text-white transition-colors duration-100 p-2 active:bg-green-900 cursor-pointer">
              <SignedOut>
                <SignInButton>
                  <>
                    <FaSignInAlt />
                    <span>Sign In</span>
                  </>
                </SignInButton>
              </SignedOut>
            </DropdownMenuItem>
          )}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

import { DisplayText } from "../text/DisplayText";
import Link from "next/link";
import { footerItems } from "./footerItems";

type FooterColumnProps = {
  title: string;
  item: {
    label: string;
    href: string;
  }[];
};

const FooterColumn = ({ title, item }: FooterColumnProps) => {
  return (
    <>
      <DisplayText className="text-2xl">{title}</DisplayText>
      <div className="flex flex-col gap-y-1 pt-2">
        {item.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className="hover:underline transition active:text-green-200"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </>
  );
};

export function Footer() {
  return (
    <div className="flex w-full bg-neutral-800 justify-between p-12 px-16 items-center">
      <div className="flex gap-x-12">
        {footerItems.map((item, index) => (
          <div key={index} className=" text-white p-4">
            <FooterColumn {...item} />
          </div>
        ))}
      </div>
      <div className="text-white flex items-end flex-col gap-y-2 text-left">
        <DisplayText className="text-4xl">NuSkin</DisplayText>
        <div className="text-sm">© 2021 NuSkin</div>
        <span className="hover:underline transition active:text-green-200">
          Terms of Service
        </span>
        <span className="hover:underline transition active:text-green-200">
          Privacy Policy
        </span>
      </div>
    </div>
  );
}

import { DropdownMenuSeparator } from "~/components/ui/dropdown-menu";
import { DisplayText } from "../text/DisplayText";
import Link from "next/link";
import { api } from "~/trpc/server";

const testColumn = {
  title: "Featured",
  item: [
    {
      label: "New Arrivals",
      href: "/new-arrivals",
    },
    {
      label: "Best Sellers",
      href: "/best-sellers",
    },
    {
      label: "Sale",
      href: "/sale",
    },
  ],
};

type ColumnProps = {
  title: string;
  item: {
    label: string;
    href: string;
  }[];
};

export async function Column({ title, item }: ColumnProps) {
  return (
    <div className="flex flex-col gap-y-1 w-1/6 pl-4">
      <DisplayText className="font-bold text-2xl">{title}</DisplayText>
      <DropdownMenuSeparator className="bg-green-950/40" />
      {item.map((item, index) => {
        return (
          <Link
            key={index}
            href={item.href}
            className=" text-neutral-900 text-md hover:bg-green-800 hover:text-white transition-colors duration-100 active:bg-green-900 cursor-pointer rounded-sm px-2 p-0.5"
          >
            {item.label}
          </Link>
        );
      })}
    </div>
  );
}

export async function Categories() {
  const data = await api.categories.categoriesList();
  const categories = {
    title: "Categories",
    item: data.map((item) => {
      return {
        label: item.name,
        href: "",
      };
    }),
  };

  return (
    <div className="flex gap-x-4 pb-4">
      <Column {...testColumn} />
      <Column {...categories} />
    </div>
  );
}

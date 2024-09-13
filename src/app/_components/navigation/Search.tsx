import { FaSearch } from "react-icons/fa";
import { CustomButton } from "~/components/custom/CustomButton";

export function Search() {
  return (
    <div className="flex justify-between text-green-950 items-center w-full gap-x-4">
      <input
        className="text p-2 w-full rounded-lg h-full border-green-700 border-2"
        placeholder="Search.."
        name="search"
      />
      <CustomButton size={"lg"} className="flex gap-x-4">
        <FaSearch />
        Find
      </CustomButton>
    </div>
  );
}

import { DisplayText } from "~/app/_components/text/DisplayText";

export default function page() {
  return (
    <>
      <div className="flex flex-col gap-y-2">
        <DisplayText className="text-4xl text-green-950">Profile</DisplayText>
        <div className="flex gap-x-2 w-full">
          <div className="rounded-full w-12 h-12 bg-green-950" />
        </div>
      </div>
    </>
  );
}

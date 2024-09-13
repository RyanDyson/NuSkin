import { HydrateClient } from "~/trpc/server";
import { Home } from "./_components/home/Home";

export default async function Page() {
  return (
    <HydrateClient>
      <main className="bg-green-50">
        <Home />
      </main>
    </HydrateClient>
  );
}

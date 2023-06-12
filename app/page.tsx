// :::
//
import DropCard from "@/components/Cards/DropCard";
import { getDrops } from "@/lib/Cosmic";

// :::
//
export default async function Home() {
  const drops = await getDrops();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-wrap justify-center gap-6">
        {drops.map((drop) => (
          <DropCard
            key={drop.slug}
            title={drop.title}
            metadata={drop.metadata}
          />
        ))}
      </div>
    </main>
  );
}

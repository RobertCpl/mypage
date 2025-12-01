import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Services } from "@/components/services";

export default function Home() {
  return (
    <main className="font-sans">
      {/* Sekcja Hero */}
      <Hero />
      {/* Sekcja About */}
      <About />
      {/* Sekcja Services */}
      <Services />
    </main>
  );
}

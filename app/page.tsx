import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Services } from "@/components/services";
import { Blog } from "@/components/blog";

export default function Home() {
  return (
    <main className="font-sans" id="home">
      {/* Sekcja Hero */}
      <Hero />
      {/* Sekcja About */}
      <About />
      {/* Sekcja Services */}
      <Services />
      {/* Sekcja Blog */}
      <Blog />
    </main>
  );
}

import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Services } from "@/components/services";
// import { Projects } from "@/components/project";
import { Blog } from "@/components/blog";
import { ContactSection } from "@/components/contact";

export default async function Home() {
  return (
    <main className="font-sans" id="home">
      <Hero />
      <About />
      <Services />
      {/* <Projects /> */}
      <Blog />
      <ContactSection />
    </main>
  );
}

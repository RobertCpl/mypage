import Image from "next/image";
import Link from "next/link";

export type BlogPost = {
  id: string;
  title: string;
  category: string;
  imageSrc: string;
  slug: string;
  excerpt: string;
  publishedAt: string;
};

const posts: BlogPost[] = [
  {
    id: "blog-1",
    title: "Jim Morisson Says when the musics over turn off the light",
    category: "Web Development",
    imageSrc: "/hero/background.jpg",
    slug: "jim-morisson-says-when-the-musics-over",
    excerpt:
      "Kilka praktycznych lekcji o tym, jak budować nowoczesne aplikacje webowe, które naprawdę wspierają Twój biznes.",
    publishedAt: "2024-09-01",
  },
  {
    id: "blog-2",
    title: "Jak zaprojektować architekturę aplikacji, która rośnie razem z firmą",
    category: "Web Development",
    imageSrc: "/hero/ja.jpeg",
    slug: "jak-zaprojektowac-architekture-aplikacji",
    excerpt:
      "Od pierwszej linijki kodu do produkcji – o decyzjach technicznych, które ułatwiają rozwój projektu zamiast go blokować.",
    publishedAt: "2024-09-15",
  },
  {
    id: "blog-3",
    title: "Monitoring i utrzymanie – co naprawdę dzieje się po wdrożeniu",
    category: "DevOps & Maintenance",
    imageSrc: "/window.svg",
    slug: "monitoring-i-utrzymanie-po-wdrozeniu",
    excerpt:
      "Dlaczego wdrożenie to dopiero początek i jak zadbać o stabilność systemu w codziennej pracy.",
    publishedAt: "2024-10-01",
  },
];

export function Blog() {
  return (
    <section
      id="blog"
      className="flex w-full justify-center bg-background"
      aria-labelledby="blog-heading"
    >
      <div className="mx-auto w-full max-w-[1200px] px-4 py-16 lg:py-20">
        <div className="mb-12 space-y-3 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#ff5f45]">
            Latest News
          </p>
          <h2
            id="blog-heading"
            className="text-2xl font-semibold tracking-tight md:text-3xl"
          >
            Checkout My Recent Blogs
          </h2>
          <p className="mx-auto max-w-[640px] text-sm leading-relaxed text-muted-foreground md:text-base">
            Dzielę się praktycznymi doświadczeniami z projektów – od
            architektury aplikacji, przez wdrożenia, aż po długoterminowe
            utrzymanie systemów.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.id}
              className="flex h-full flex-col overflow-hidden rounded-3xl border border-border/40 bg-muted/40 shadow-lg transition-transform duration-200 hover:-translate-y-1 hover:shadow-xl"
            >
              <Link href={`/blog/${post.slug}`} className="group block">
                <div className="relative aspect-[15/9] w-full overflow-hidden">
                  <Image
                    src={post.imageSrc}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"
                    priority={false}
                  />
                </div>
              </Link>

              <div className="flex flex-1 flex-col space-y-2 px-5 py-5 sm:px-6 sm:py-6">
                <p className="text-xs font-semibold uppercase tracking-wide text-[#ff5f45]">
                  {post.category}
                </p>
                <h3 className="text-lg font-semibold leading-snug md:text-xl">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="transition-colors hover:text-foreground/80"
                  >
                    {post.title}
                  </Link>
                </h3>
                <p className="line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                  {post.excerpt}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}



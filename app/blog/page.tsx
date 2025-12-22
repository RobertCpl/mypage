import Image from "next/image";
import Link from "next/link";

import { getAllPosts } from "@/lib/blog";

export const metadata = {
  title: "Blog",
  description: "Wpisy o budowaniu aplikacji, wdrożeniach i utrzymaniu.",
};

export default async function BlogIndexPage() {
  const posts = await getAllPosts();

  return (
    <main className="mx-auto w-full max-w-[1200px] px-4 py-12 md:py-16">
      <header className="mb-10 space-y-3 text-center">
        <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
          Blog
        </h1>
        <p className="mx-auto max-w-[680px] text-sm leading-relaxed text-muted-foreground md:text-base">
          Praktyczne doświadczenia z projektów – architektura, wdrożenia, DevOps i
          długoterminowe utrzymanie.
        </p>
      </header>

      {posts.length === 0 ? (
        <p className="text-center text-sm text-muted-foreground">
          Brak wpisów.
        </p>
      ) : (
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="flex h-full flex-col overflow-hidden rounded-3xl border border-border/40 bg-muted/40 shadow-lg transition-transform duration-200 hover:-translate-y-1 hover:shadow-xl"
            >
              <Link href={`/blog/${post.slug}`} className="group block">
                <div className="relative aspect-15/9 w-full overflow-hidden">
                  <Image
                    src={post.cover}
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
                <h2 className="text-lg font-semibold leading-snug md:text-xl">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="transition-colors hover:text-foreground/80"
                  >
                    {post.title}
                  </Link>
                </h2>
                <p className="line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                  {post.excerpt}
                </p>
              </div>
            </article>
          ))}
        </div>
      )}
    </main>
  );
}



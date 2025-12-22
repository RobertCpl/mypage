import Image from "next/image";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { getPostBySlug, getPostSlugs } from "@/lib/blog";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const slugs = await getPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  try {
    const post = await getPostBySlug(slug);
    return {
      title: post.title,
      description: post.excerpt,
      openGraph: {
        title: post.title,
        description: post.excerpt,
        images: [{ url: post.cover }],
      },
    };
  } catch {
    return { title: "Wpis nie znaleziony" };
  }
}

function formatDate(dateStr: string) {
  // Keep it simple & locale-friendly.
  try {
    const d = new Date(dateStr);
    if (Number.isNaN(d.getTime())) return dateStr;
    return new Intl.DateTimeFormat("pl-PL", {
      year: "numeric",
      month: "long",
      day: "2-digit",
    }).format(d);
  } catch {
    return dateStr;
  }
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;

  let post;
  try {
    post = await getPostBySlug(slug);
  } catch {
    notFound();
  }

  return (
    <main className="mx-auto w-full max-w-[860px] px-4 py-12 md:py-16">
      <article className="space-y-8">
        <header className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-wide text-[#ff5f45]">
            {post.category}
          </p>
          <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
            {post.title}
          </h1>
          <p className="text-sm text-muted-foreground">
            {formatDate(post.publishedAt)}
          </p>
        </header>

        <div className="relative aspect-15/9 w-full overflow-hidden rounded-3xl border border-border/40 bg-muted/40">
          <Image
            src={post.cover}
            alt={post.title}
            fill
            className="object-cover"
            sizes="(min-width: 860px) 860px, 100vw"
            priority
          />
        </div>

        <div className="space-y-4">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              h2: (props) => (
                <h2
                  className="mt-10 scroll-m-24 text-2xl font-semibold tracking-tight"
                  {...props}
                />
              ),
              h3: (props) => (
                <h3
                  className="mt-8 scroll-m-24 text-xl font-semibold tracking-tight"
                  {...props}
                />
              ),
              p: (props) => (
                <p className="leading-relaxed text-foreground/90" {...props} />
              ),
              a: (props) => (
                <a className="underline underline-offset-4" {...props} />
              ),
              ul: (props) => <ul className="list-disc pl-6" {...props} />,
              ol: (props) => <ol className="list-decimal pl-6" {...props} />,
              blockquote: (props) => (
                <blockquote
                  className="border-l-2 border-border pl-4 text-muted-foreground"
                  {...props}
                />
              ),
              code: ({ className, ...props }) => {
                const isBlock = Boolean(className);
                return isBlock ? (
                  <code
                    className="block overflow-x-auto rounded-xl bg-muted px-4 py-3 text-sm"
                    {...props}
                  />
                ) : (
                  <code
                    className="rounded bg-muted px-1.5 py-0.5 text-sm"
                    {...props}
                  />
                );
              },
              img: ({ alt, src }) => {
                if (!src || typeof src !== "string") return null;
                return (
                  <span className="block overflow-hidden rounded-2xl border border-border/40 bg-muted/40">
                    <Image
                      src={src}
                      alt={alt ?? ""}
                      width={1200}
                      height={630}
                      className="h-auto w-full"
                    />
                  </span>
                );
              },
            }}
          >
            {post.content}
          </ReactMarkdown>
        </div>
      </article>
    </main>
  );
}



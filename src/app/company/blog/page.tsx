import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";

export const dynamic = "force-static";

type BlogPost = {
  slug: string;
  title: string;
  date: string;
  author: string;
  summary: string;
  cover?: string;
};

export default function BlogPage() {
  const postsDirectory = path.join(process.cwd(), "src/content/blog");
  const filenames = fs.readdirSync(postsDirectory);
  const posts: BlogPost[] = filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContents);
    return {
      slug: filename.replace(/\.md$/, ""),
      title: data.title || "",
      date: data.date || "",
      author: data.author || "",
      summary: data.summary || "",
      cover: data.cover || undefined,
    };
  });

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="space-y-12 pb-24 pt-28">
        <PageHero
          eyebrow="Blog"
          title="Ürün stratejisi, tasarım ve mühendislik üzerine içgörüler"
          description="Codifya ekibinin deneyimlerinden, saha çalışmalarından ve güncel trendlerden derlediğimiz makaleleri keşfedin."
          align="center"
        />

        <Container className="grid gap-6 lg:grid-cols-3">
          {posts.map((post) => (
            <Link key={post.slug} href={`/company/blog/${post.slug}`}>
              <Card>
                <article className="space-y-5">
                  {post.cover ? (
                    <div className="overflow-hidden rounded-2xl">
                      <Image
                        src={post.cover}
                        alt={post.title}
                        width={640}
                        height={360}
                        className="h-40 w-full object-cover"
                      />
                    </div>
                  ) : null}
                  <div className="space-y-2">
                    <p className="text-xs uppercase tracking-widest text-secondary/70">{post.date}</p>
                    <h2 className="text-xl font-semibold text-foreground">{post.title}</h2>
                    <p className="text-sm text-secondary">{post.summary}</p>
                  </div>
                  <div className="flex items-center justify-between text-xs font-semibold text-secondary/70">
                    <span>{post.author}</span>
                    <span className="inline-flex items-center gap-1 text-primary">
                      Devamını oku
                      <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14" />
                        <path d="M12 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </article>
              </Card>
            </Link>
          ))}
        </Container>
      </main>
      <Footer />
    </div>
  );
}

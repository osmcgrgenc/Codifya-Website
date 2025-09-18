import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import { remark } from "remark";
import html from "remark-html";
import { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";

interface BlogPostFrontmatter {
  title: string;
  date: string;
  author: string;
  summary: string;
  cover?: string;
}

export const revalidate = 3600;

export async function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), "src/content/blog");
  const filenames = fs.readdirSync(postsDirectory);

  return filenames.map((filename) => ({
    slug: filename.replace(/\.md$/, ""),
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const postPath = path.join(process.cwd(), "src/content/blog", `${slug}.md`);

  if (!fs.existsSync(postPath)) {
    return {
      title: "Blog Post Not Found",
    };
  }

  const fileContents = fs.readFileSync(postPath, "utf8");
  const { data } = matter(fileContents);
  const frontmatter = data as BlogPostFrontmatter;

  return {
    title: frontmatter.title,
    description: frontmatter.summary,
    openGraph: {
      title: frontmatter.title,
      description: frontmatter.summary,
      type: "article",
      publishedTime: frontmatter.date,
      authors: [frontmatter.author],
      images: frontmatter.cover ? [frontmatter.cover] : [],
    },
  };
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const postPath = path.join(process.cwd(), "src/content/blog", `${slug}.md`);

  if (!fs.existsSync(postPath)) {
    notFound();
  }

  const fileContents = fs.readFileSync(postPath, "utf8");
  const { data, content } = matter(fileContents);
  const frontmatter = data as BlogPostFrontmatter;
  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="space-y-12 pb-24 pt-28">
        <PageHero
          eyebrow={`${frontmatter.date} • ${frontmatter.author}`}
          title={frontmatter.title}
          description={frontmatter.summary}
          align="center"
        />

        <Container className="space-y-10">
          {frontmatter.cover ? (
            <div className="overflow-hidden rounded-3xl">
              <Image
                src={frontmatter.cover}
                alt={frontmatter.title}
                width={1280}
                height={640}
                className="h-auto w-full"
                priority
              />
            </div>
          ) : null}
          <Card>
            <div
              className="prose prose-lg max-w-none text-foreground prose-headings:text-foreground prose-p:text-secondary prose-strong:text-foreground prose-a:text-primary"
              dangerouslySetInnerHTML={{ __html: contentHtml }}
            />
          </Card>
        </Container>
      </main>
      <Footer />
    </div>
  );
}

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

interface BlogPostFrontmatter {
  title: string;
  date: string;
  author: string;
  summary: string;
  cover?: string;
}

// ISR için revalidate süresini 1 saat olarak ayarlıyoruz
export const revalidate = 3600;

// Statik parametreleri oluştur
export async function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), "src/content/blog");
  const filenames = fs.readdirSync(postsDirectory);
  
  return filenames.map((filename) => ({
    slug: filename.replace(/\.md$/, ""),
  }));
}

// Metadata oluştur
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

// Blog detay sayfası
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
    <>
      <Header />
      <main className="max-w-3xl mx-auto py-16 px-4">
        <article>
          <header className="mb-8">
            {frontmatter.cover && (
              <Image
                src={frontmatter.cover}
                alt={frontmatter.title}
                width={640}
                height={320}
                className="rounded-lg object-cover mb-4"
                priority
              />
            )}
            <h1 className="text-4xl font-bold text-primary mb-2">
              {frontmatter.title}
            </h1>
            <div className="text-sm text-secondary mb-2">
              <time dateTime={frontmatter.date}>{frontmatter.date}</time>
              {" • "}
              <span>{frontmatter.author}</span>
            </div>
            <p className="text-base text-gray-400 mb-6">{frontmatter.summary}</p>
          </header>
          <div
            className="prose prose-lg prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: contentHtml }}
          />
        </article>
      </main>
      <Footer />
    </>
  );
} 
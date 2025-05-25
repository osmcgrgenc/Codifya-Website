import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

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

  // Header yüksekliği: 64px (h-16), Footer yüksekliği: 48px (örnek)
  // min-h-[calc(100vh-112px)]
  return (
    <>
      <Header />
      <div className="max-w-3xl mx-auto py-16 px-4 min-h-[calc(100vh-445px)]">
        <h1 className="text-4xl font-bold mb-8 text-primary">Blog</h1>
        <div className="space-y-8">
          {posts.map((post) => (
            <Link key={post.slug} href={`/company/blog/${post.slug}`} className="block group">
              <div className="flex items-center space-x-4">
                {post.cover && (
                  <Image
                    src={post.cover}
                    alt={post.title}
                    width={80}
                    height={80}
                    className="rounded-lg object-cover"
                  />
                )}
                <div>
                  <h2 className="text-2xl font-semibold text-primary group-hover:text-text transition-colors">{post.title}</h2>
                  <p className="text-sm text-secondary mb-1">{post.date} &bull; {post.author}</p>
                  <p className="text-base text-gray-400">{post.summary}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
} 
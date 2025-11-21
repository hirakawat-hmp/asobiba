import { notFound } from "next/navigation";
import { getPostBySlug, getAllPosts, extractTableOfContents } from "@/lib/markdown";
import { MarkdownRenderer } from "@/components/MarkdownRenderer";
import { TableOfContents } from "@/components/TableOfContents";
import { Chip, Link, Button } from "@heroui/react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "記事が見つかりません",
    };
  }

  return {
    title: post.frontmatter.title,
    description: post.frontmatter.description,
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const toc = extractTableOfContents(post.content);

  return (
    <div className="min-h-screen py-12 px-4">
      <article className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="flex-1 min-w-0">
            <Link href="/blog" className="mb-6 inline-block">
              <Button variant="ghost" size="sm">
                ← 記事一覧に戻る
              </Button>
            </Link>

            <header className="mb-8">
              <h1 className="text-4xl font-bold mb-4">
                {post.frontmatter.title}
              </h1>
              <div className="flex flex-wrap gap-4 items-center text-sm text-gray-600 dark:text-gray-400">
                <time dateTime={post.frontmatter.date}>
                  {new Date(post.frontmatter.date).toLocaleDateString("ja-JP", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
                <Chip size="sm" variant="soft" color="accent">
                  {post.frontmatter.category}
                </Chip>
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                {post.frontmatter.tags.map((tag) => (
                  <Link key={tag} href={`/blog/tag/${tag}`}>
                    <Chip size="sm">
                      #{tag}
                    </Chip>
                  </Link>
                ))}
              </div>
              {post.frontmatter.description && (
                <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                  {post.frontmatter.description}
                </p>
              )}
            </header>

            <MarkdownRenderer content={post.content} />
          </div>

          {/* Table of Contents - Hidden on mobile */}
          {toc.length > 0 && (
            <aside className="hidden lg:block lg:w-64 flex-shrink-0">
              <TableOfContents items={toc} />
            </aside>
          )}
        </div>
      </article>
    </div>
  );
}

import { getAllPosts, getAllCategories, getAllTags } from "@/lib/markdown";
import { Card, Chip } from "@heroui/react";
import Link from "next/link";

export const metadata = {
  title: "Blog",
  description: "技術ブログ記事一覧",
};

export default function BlogPage() {
  const posts = getAllPosts();
  const categories = getAllCategories();
  const tags = getAllTags();

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <header className="mb-12 text-center">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Blog
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            技術に関する記事を投稿しています
          </p>
        </header>

        {/* Categories & Tags */}
        <div className="mb-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">カテゴリ</h2>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Link key={category} href={`/blog/category/${category}`}>
                  <Chip size="md" variant="soft" color="accent">
                    {category}
                  </Chip>
                </Link>
              ))}
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">タグ</h2>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <Link key={tag} href={`/blog/tag/${tag}`}>
                  <Chip size="sm">
                    #{tag}
                  </Chip>
                </Link>
              ))}
            </div>
          </Card>
        </div>

        {/* Posts List */}
        <div className="space-y-6">
          {posts.length === 0 ? (
            <Card className="p-12 text-center">
              <p className="text-gray-600 dark:text-gray-400">
                まだ記事がありません
              </p>
            </Card>
          ) : (
            posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex flex-col gap-4">
                    <div>
                      <h2 className="text-2xl font-semibold mb-2">
                        {post.frontmatter.title}
                      </h2>
                      <p className="text-gray-600 dark:text-gray-400 line-clamp-2">
                        {post.frontmatter.description}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 items-center">
                      <time className="text-sm text-gray-500">
                        {new Date(post.frontmatter.date).toLocaleDateString(
                          "ja-JP",
                          {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          }
                        )}
                      </time>
                      <Chip size="sm" variant="soft" color="accent">
                        {post.frontmatter.category}
                      </Chip>
                      {post.frontmatter.tags.slice(0, 3).map((tag) => (
                        <Chip key={tag} size="sm">
                          #{tag}
                        </Chip>
                      ))}
                    </div>
                  </div>
                </Card>
              </Link>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

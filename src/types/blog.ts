export interface PostFrontmatter {
  title: string;
  date: string;
  category: string;
  tags: string[];
  description: string;
  slug?: string;
}

export interface Post {
  slug: string;
  frontmatter: PostFrontmatter;
  content: string;
}

export interface TableOfContentsItem {
  id: string;
  text: string;
  level: number;
}

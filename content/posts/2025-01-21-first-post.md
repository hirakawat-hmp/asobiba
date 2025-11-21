---
title: "はじめての投稿"
date: "2025-01-21"
category: "tech"
tags: ["nextjs", "react", "heroui"]
description: "HeroUI + Three.js + Next.jsで作るportfolio + blogサイトの最初の記事です"
---

# はじめての投稿

このサイトは、**Next.js 16** + **HeroUI (旧NextUI)** + **Three.js**を使って構築されています。

## 主な機能

このサイトには以下の機能があります：

### 1. Markdownブログ

- Markdown形式で記事を書ける
- シンタックスハイライト対応
- 目次の自動生成
- タグ・カテゴリによる分類

### 2. モダンなUI

HeroUIを使用したコンポーネント：

- Button
- Card
- Link
- その他多数

### 3. Three.jsパーティクル背景

かっこいい背景アニメーション（実装予定）

## コードの例

TypeScriptのコード例：

\`\`\`typescript
interface Post {
  slug: string;
  frontmatter: PostFrontmatter;
  content: string;
}

function getAllPosts(): Post[] {
  return posts.sort((a, b) => {
    return new Date(b.frontmatter.date).getTime() -
           new Date(a.frontmatter.date).getTime();
  });
}
\`\`\`

JavaScriptの例：

\`\`\`javascript
const greeting = "Hello, World!";
console.log(greeting);
\`\`\`

## リストの例

順序なしリスト：

- 項目1
- 項目2
- 項目3

順序ありリスト：

1. 最初のステップ
2. 次のステップ
3. 最後のステップ

## 引用

> これは引用文です。
> 複数行にわたって書くこともできます。

## テーブルの例

| 機能 | 説明 | ステータス |
|------|------|-----------|
| Markdownサポート | .mdファイルから記事を生成 | ✅ 完了 |
| シンタックスハイライト | コードを綺麗に表示 | ✅ 完了 |
| Three.js背景 | パーティクルアニメーション | 🚧 作業中 |

## まとめ

これからこのブログで色々な記事を投稿していきます！

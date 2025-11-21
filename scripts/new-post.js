#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function question(query) {
  return new Promise((resolve) => rl.question(query, resolve));
}

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/--+/g, "-")
    .trim();
}

async function main() {
  console.log("\n📝 新しいブログ記事を作成します\n");

  const title = await question("記事のタイトル: ");
  if (!title) {
    console.log("❌ タイトルは必須です");
    rl.close();
    return;
  }

  const category = await question("カテゴリ (例: tech, lifestyle): ");
  const tagsInput = await question("タグ (カンマ区切り, 例: nextjs, react): ");
  const description = await question("概要: ");

  const tags = tagsInput
    .split(",")
    .map((tag) => tag.trim())
    .filter(Boolean);

  const date = new Date().toISOString().split("T")[0];
  const slug = slugify(title);
  const fileName = `${date}-${slug}.md`;
  const filePath = path.join(process.cwd(), "content", "posts", fileName);

  const frontmatter = `---
title: "${title}"
date: "${date}"
category: "${category}"
tags: [${tags.map((tag) => `"${tag}"`).join(", ")}]
description: "${description}"
---

# ${title}

ここに本文を書いてください。

## セクション1

内容...

## セクション2

内容...
`;

  try {
    const dir = path.dirname(filePath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    fs.writeFileSync(filePath, frontmatter, "utf8");
    console.log(`\n✅ 記事を作成しました: ${fileName}`);
    console.log(`   パス: ${filePath}\n`);
  } catch (error) {
    console.error(`\n❌ エラーが発生しました: ${error.message}\n`);
  }

  rl.close();
}

main();

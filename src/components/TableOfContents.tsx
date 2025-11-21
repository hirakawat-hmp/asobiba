"use client";

import type { TableOfContentsItem } from "@/types/blog";
import { Card } from "@heroui/react";

interface TableOfContentsProps {
  items: TableOfContentsItem[];
}

export function TableOfContents({ items }: TableOfContentsProps) {
  if (items.length === 0) {
    return null;
  }

  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Card className="p-6 sticky top-4">
      <h2 className="text-xl font-semibold mb-4">目次</h2>
      <nav>
        <ul className="space-y-2">
          {items.map((item, index) => (
            <li
              key={`${item.id}-${index}`}
              style={{ paddingLeft: `${(item.level - 1) * 1}rem` }}
            >
              <button
                onClick={() => handleClick(item.id)}
                className="text-left hover:text-blue-600 transition-colors text-sm"
              >
                {item.text}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </Card>
  );
}

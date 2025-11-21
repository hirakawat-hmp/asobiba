import { Button } from "@heroui/react";
import { Card } from "@heroui/react";
import { ParticleBackground } from "@/components/ParticleBackground";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center p-8 relative">
      <ParticleBackground />
      <div className="flex flex-col items-center gap-8 max-w-2xl relative z-10">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Portfolio + Blog
        </h1>
        <p className="text-lg text-center text-white/90">
          HeroUI + Three.js + Next.js で作る、かっこいいポートフォリオサイト
        </p>
        <div className="flex gap-4">
          <Button variant="primary" size="lg">
            Get Started
          </Button>
          <Button variant="ghost" size="lg">
            Learn More
          </Button>
        </div>
        <Card className="p-6 mt-8 bg-white/10 backdrop-blur-md border border-white/20">
          <h2 className="text-2xl font-semibold mb-4 text-white">Features</h2>
          <ul className="space-y-2 text-white/90">
            <li>✨ Three.js パーティクル背景</li>
            <li>📝 Markdown ブログ機能</li>
            <li>🎨 HeroUI コンポーネント</li>
            <li>🚀 静的サイト生成 (GitHub Pages)</li>
          </ul>
        </Card>
      </div>
    </div>
  );
}

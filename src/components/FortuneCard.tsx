import { motion } from "framer-motion";
import { Fortune } from "@/data/fortunes";
import { RefreshCw, Share2 } from "lucide-react";

interface Props {
  fortune: Fortune;
  onRedraw: () => void;
  cooldown: number;
  onReset: () => void;
}

const stars = (n: number) => "★".repeat(n) + "☆".repeat(5 - n);

/** SVG decorative corner — rotated via CSS transform */
const Corner = ({ className }: { className?: string }) => (
  <svg
    className={className}
    width="36"
    height="36"
    viewBox="0 0 36 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M2 2 L2 14 Q2 2 14 2 Z" fill="hsl(45 90% 55% / 0.25)" />
    <path d="M2 2 L2 18" stroke="hsl(45 90% 55% / 0.7)" strokeWidth="1.5" />
    <path d="M2 2 L18 2" stroke="hsl(45 90% 55% / 0.7)" strokeWidth="1.5" />
    <path d="M2 2 L10 10" stroke="hsl(45 90% 55% / 0.3)" strokeWidth="0.8" />
    <circle cx="2" cy="2" r="2" fill="hsl(45 90% 55% / 0.8)" />
    <circle cx="2" cy="14" r="1.2" fill="hsl(45 90% 55% / 0.5)" />
    <circle cx="14" cy="2" r="1.2" fill="hsl(45 90% 55% / 0.5)" />
    {/* Decorative spiral curl */}
    <path
      d="M5 2 Q8 2 8 5 Q8 8 5 8 Q3 8 3 6"
      stroke="hsl(45 90% 55% / 0.35)"
      strokeWidth="0.8"
      fill="none"
    />
  </svg>
);

/** Decorative horizontal divider with diamond center */
const OrnamentDivider = () => (
  <div className="flex items-center justify-center gap-2 my-5">
    <div className="h-px w-8 bg-gradient-to-r from-transparent to-gold/50" />
    <div className="flex items-center gap-1">
      <div className="w-1 h-1 rotate-45 bg-gold/40" />
      <div className="w-1.5 h-1.5 rotate-45 bg-gold/60" />
      <svg width="14" height="14" viewBox="0 0 14 14" className="text-gold">
        <path
          d="M7 1 L9.5 5 L13 7 L9.5 9 L7 13 L4.5 9 L1 7 L4.5 5 Z"
          fill="currentColor"
          opacity="0.5"
        />
        <path
          d="M7 3 L8.5 5.5 L11 7 L8.5 8.5 L7 11 L5.5 8.5 L3 7 L5.5 5.5 Z"
          fill="currentColor"
          opacity="0.3"
        />
      </svg>
      <div className="w-1.5 h-1.5 rotate-45 bg-gold/60" />
      <div className="w-1 h-1 rotate-45 bg-gold/40" />
    </div>
    <div className="h-px w-8 bg-gradient-to-l from-transparent to-gold/50" />
  </div>
);

const FortuneCard = ({ fortune, onRedraw, cooldown, onReset }: Props) => {
  const handleShare = async () => {
    const text = `🔮 今日運勢籤詩\n\n第 ${fortune.id} 籤 — ${fortune.level}（${fortune.levelLabel}）\n\n${fortune.poem.join("\n")}\n\n📋 解曰：${fortune.interpretation}\n\n💰 財運：${stars(fortune.finance)}\n💕 感情：${stars(fortune.love)}\n💼 事業：${stars(fortune.career)}\n🏥 健康：${stars(fortune.health)}\n\n💡 ${fortune.advice}\n🔢 幸運數字：${fortune.luckyNumbers.join(", ")}\n🎨 幸運色：${fortune.luckyColor}\n🧭 吉方位：${fortune.luckyDirection}\n\n✨ 我今天抽到${fortune.level}籤！💫 你也來試試 👉`;

    if (navigator.share) {
      try {
        await navigator.share({ text });
      } catch {}
    } else {
      await navigator.clipboard.writeText(text);
      alert("已複製到剪貼簿！");
    }
  };

  return (
    <motion.div
      className="w-full max-w-sm mx-auto px-4"
      initial={{ rotateY: 90, opacity: 0 }}
      animate={{ rotateY: 0, opacity: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
    >
      {/* Outer ornate border frame */}
      <div className="relative p-1 rounded-2xl fortune-card-outer">
        {/* Corner decorations */}
        <Corner className="absolute -top-1 -left-1 z-10" />
        <Corner className="absolute -top-1 -right-1 z-10 -scale-x-100" />
        <Corner className="absolute -bottom-1 -left-1 z-10 -scale-y-100" />
        <Corner className="absolute -bottom-1 -right-1 z-10 -scale-x-100 -scale-y-100" />

        {/* Edge ornamental lines */}
        <div className="absolute top-[3px] left-10 right-10 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
        <div className="absolute bottom-[3px] left-10 right-10 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
        <div className="absolute left-[3px] top-10 bottom-10 w-px bg-gradient-to-b from-transparent via-gold/40 to-transparent" />
        <div className="absolute right-[3px] top-10 bottom-10 w-px bg-gradient-to-b from-transparent via-gold/40 to-transparent" />

        {/* Inner card */}
        <div className="fortune-card-bg rounded-xl p-6 golden-glow relative overflow-hidden">
          {/* Background texture pattern — traditional cloud/wave motif via CSS */}
          <div className="absolute inset-0 fortune-texture opacity-100 pointer-events-none" />

          {/* Subtle radial glow behind content */}
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-48 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse, hsl(45 90% 55% / 0.08) 0%, transparent 70%)",
            }}
          />

          {/* Inner ornate border */}
          <div className="absolute inset-3 border border-gold/15 rounded-lg pointer-events-none" />
          <div className="absolute inset-4 border border-gold/8 rounded-md pointer-events-none" />

          {/* Header */}
          <div className="relative text-center mb-4">
            {/* Small decorative motif above title */}
            <div className="flex items-center justify-center gap-1.5 mb-2 opacity-60">
              <div className="w-6 h-px bg-gradient-to-r from-transparent to-gold/60" />
              <svg width="10" height="10" viewBox="0 0 10 10">
                <path d="M5 0 L6.5 3.5 L10 5 L6.5 6.5 L5 10 L3.5 6.5 L0 5 L3.5 3.5 Z" fill="hsl(45 90% 55% / 0.6)" />
              </svg>
              <div className="w-6 h-px bg-gradient-to-l from-transparent to-gold/60" />
            </div>

            <h2 className="font-display text-2xl golden-text">
              第 {fortune.id} 籤
            </h2>
            <span className="inline-block mt-1.5 px-4 py-1 rounded-full fortune-level-badge text-sm font-display">
              {fortune.level} · {fortune.levelLabel}
            </span>
          </div>

          <OrnamentDivider />

          {/* Poem */}
          <div className="relative text-center mb-2 space-y-1.5 py-2">
            {/* Faint vertical lines behind poem for scroll effect */}
            <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-[280px] pointer-events-none">
              <div className="absolute inset-y-0 left-0 w-px bg-gold/5" />
              <div className="absolute inset-y-0 right-0 w-px bg-gold/5" />
            </div>

            {fortune.poem.map((line, i) => (
              <motion.p
                key={i}
                className="font-display text-foreground text-lg tracking-[0.2em] leading-relaxed"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.15 }}
              >
                {line}
              </motion.p>
            ))}
          </div>

          <OrnamentDivider />

          {/* Interpretation */}
          <div className="relative mb-4 px-2">
            <p className="text-sm text-primary/70 mb-1.5 font-display tracking-wider">📋 解曰</p>
            <p className="text-foreground text-sm font-body leading-relaxed pl-1 border-l-2 border-gold/20">
              {fortune.interpretation}
            </p>
          </div>

          {/* Ratings */}
          <div className="grid grid-cols-2 gap-x-4 gap-y-2 mb-4 text-sm font-body px-2">
            <div className="flex items-center gap-1">
              <span>💰 財運</span>
              <span className="text-primary text-xs tracking-wider">{stars(fortune.finance)}</span>
            </div>
            <div className="flex items-center gap-1">
              <span>💕 感情</span>
              <span className="text-primary text-xs tracking-wider">{stars(fortune.love)}</span>
            </div>
            <div className="flex items-center gap-1">
              <span>💼 事業</span>
              <span className="text-primary text-xs tracking-wider">{stars(fortune.career)}</span>
            </div>
            <div className="flex items-center gap-1">
              <span>🏥 健康</span>
              <span className="text-primary text-xs tracking-wider">{stars(fortune.health)}</span>
            </div>
          </div>

          {/* Lucky info */}
          <div className="fortune-info-box rounded-lg p-3 space-y-1.5 text-sm font-body mb-4">
            <p className="text-foreground/90">💡 {fortune.advice}</p>
            <div className="flex flex-wrap gap-x-4 gap-y-1 text-muted-foreground text-xs">
              <span>🔢 {fortune.luckyNumbers.join(", ")}</span>
              <span>🎨 {fortune.luckyColor}</span>
              <span>🧭 {fortune.luckyDirection}</span>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3 mt-4 relative">
            <button
              onClick={handleShare}
              className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg bg-secondary text-secondary-foreground text-sm font-body hover:bg-secondary/80 transition-colors"
            >
              <Share2 className="w-4 h-4" />
              分享結果
            </button>
            <button
              onClick={cooldown > 0 ? undefined : onRedraw}
              disabled={cooldown > 0}
              className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg bg-gold-dark/60 text-primary text-sm font-body hover:bg-gold-dark/80 transition-colors disabled:opacity-50"
            >
              <RefreshCw className="w-4 h-4" />
              {cooldown > 0 ? `等待 ${cooldown}s` : "換一支"}
            </button>
          </div>
        </div>
      </div>

      <button
        onClick={onReset}
        className="block mx-auto mt-4 text-xs text-muted-foreground hover:text-foreground transition-colors font-body"
      >
        重新搖籤
      </button>
    </motion.div>
  );
};

export default FortuneCard;

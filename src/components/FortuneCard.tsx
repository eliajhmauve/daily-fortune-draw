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
      <div className="fortune-card-bg rounded-xl p-6 golden-glow shimmer relative overflow-hidden">
        {/* Decorative corner borders */}
        <div className="absolute top-2 left-2 w-6 h-6 border-t-2 border-l-2 border-gold rounded-tl-sm" />
        <div className="absolute top-2 right-2 w-6 h-6 border-t-2 border-r-2 border-gold rounded-tr-sm" />
        <div className="absolute bottom-2 left-2 w-6 h-6 border-b-2 border-l-2 border-gold rounded-bl-sm" />
        <div className="absolute bottom-2 right-2 w-6 h-6 border-b-2 border-r-2 border-gold rounded-br-sm" />

        {/* Header */}
        <div className="text-center mb-4">
          <h2 className="font-display text-2xl golden-text">
            第 {fortune.id} 籤
          </h2>
          <span className="inline-block mt-1 px-3 py-0.5 rounded-full bg-secondary/80 text-secondary-foreground text-sm font-display">
            {fortune.level} · {fortune.levelLabel}
          </span>
        </div>

        {/* Poem */}
        <div className="text-center mb-4 space-y-1">
          {fortune.poem.map((line, i) => (
            <motion.p
              key={i}
              className="font-display text-foreground text-lg tracking-widest"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.15 }}
            >
              {line}
            </motion.p>
          ))}
        </div>

        {/* Divider */}
        <div className="w-16 h-px bg-gold/40 mx-auto my-4" />

        {/* Interpretation */}
        <div className="mb-4">
          <p className="text-sm text-muted-foreground mb-1 font-body">📋 解曰：</p>
          <p className="text-foreground text-sm font-body leading-relaxed">
            {fortune.interpretation}
          </p>
        </div>

        {/* Ratings */}
        <div className="grid grid-cols-2 gap-2 mb-4 text-sm font-body">
          <div>💰 財運：<span className="text-primary">{stars(fortune.finance)}</span></div>
          <div>💕 感情：<span className="text-primary">{stars(fortune.love)}</span></div>
          <div>💼 事業：<span className="text-primary">{stars(fortune.career)}</span></div>
          <div>🏥 健康：<span className="text-primary">{stars(fortune.health)}</span></div>
        </div>

        {/* Lucky info */}
        <div className="space-y-1 text-sm text-muted-foreground font-body mb-4">
          <p>💡 {fortune.advice}</p>
          <p>🔢 幸運數字：{fortune.luckyNumbers.join(", ")}</p>
          <p>🎨 幸運色：{fortune.luckyColor}</p>
          <p>🧭 吉方位：{fortune.luckyDirection}</p>
        </div>

        {/* Actions */}
        <div className="flex gap-3 mt-4">
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

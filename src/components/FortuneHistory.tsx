import { motion, AnimatePresence } from "framer-motion";
import { getHistory, HistoryRecord } from "@/lib/fortune-history";
import { X, ScrollText, ChevronRight } from "lucide-react";
import { useState } from "react";

interface Props {
  open: boolean;
  onClose: () => void;
}

const stars = (n: number) => "★".repeat(n) + "☆".repeat(5 - n);

const levelColor = (level: string) => {
  if (level.includes("上上")) return "text-primary";
  if (level.includes("上")) return "text-gold-light";
  if (level.includes("中")) return "text-muted-foreground";
  return "text-temple-red-light";
};

const FortuneHistory = ({ open, onClose }: Props) => {
  const records = getHistory();
  const [expanded, setExpanded] = useState<string | null>(null);

  const formatDate = (dateStr: string) => {
    const [y, m, d] = dateStr.split("-");
    return `${m}/${d}`;
  };

  const weekday = (dateStr: string) => {
    const days = ["日", "一", "二", "三", "四", "五", "六"];
    const d = new Date(dateStr);
    return `週${days[d.getDay()]}`;
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Panel */}
          <motion.div
            className="fixed inset-y-0 right-0 w-full max-w-sm z-50 flex flex-col fortune-card-bg border-l border-gold/20"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gold/10">
              <div className="flex items-center gap-2">
                <ScrollText className="w-5 h-5 text-primary" />
                <h2 className="font-display text-lg golden-text">歷史紀錄</h2>
              </div>
              <button
                onClick={onClose}
                className="p-1.5 rounded-lg hover:bg-muted/50 transition-colors text-muted-foreground hover:text-foreground"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* List */}
            <div className="flex-1 overflow-y-auto p-4 space-y-2">
              {records.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-muted-foreground font-body text-sm">
                  <ScrollText className="w-10 h-10 mb-3 opacity-30" />
                  <p>尚無抽籤紀錄</p>
                  <p className="text-xs mt-1">抽籤後會自動記錄在這裡</p>
                </div>
              ) : (
                records.map((record) => (
                  <HistoryItem
                    key={record.date}
                    record={record}
                    expanded={expanded === record.date}
                    onToggle={() =>
                      setExpanded(expanded === record.date ? null : record.date)
                    }
                    formatDate={formatDate}
                    weekday={weekday}
                  />
                ))
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

function HistoryItem({
  record,
  expanded,
  onToggle,
  formatDate,
  weekday,
}: {
  record: HistoryRecord;
  expanded: boolean;
  onToggle: () => void;
  formatDate: (d: string) => string;
  weekday: (d: string) => string;
}) {
  return (
    <motion.div
      className="rounded-lg border border-gold/10 overflow-hidden fortune-info-box"
      layout
    >
      {/* Summary row */}
      <button
        onClick={onToggle}
        className="w-full flex items-center gap-3 p-3 text-left hover:bg-gold/5 transition-colors"
      >
        <div className="flex flex-col items-center min-w-[44px]">
          <span className="text-xs text-muted-foreground font-body">
            {formatDate(record.date)}
          </span>
          <span className="text-[10px] text-muted-foreground/60 font-body">
            {weekday(record.date)}
          </span>
        </div>

        <div className="h-8 w-px bg-gold/15" />

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <span className="font-display text-sm text-foreground">
              第 {record.fortuneId} 籤
            </span>
            <span
              className={`text-xs font-display ${levelColor(record.level)}`}
            >
              {record.level} · {record.levelLabel}
            </span>
          </div>
          <p className="text-xs text-muted-foreground font-body truncate mt-0.5">
            {record.poem[0]}
          </p>
        </div>

        <motion.div
          animate={{ rotate: expanded ? 90 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronRight className="w-4 h-4 text-muted-foreground" />
        </motion.div>
      </button>

      {/* Expanded detail */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <div className="px-3 pb-3 pt-1 border-t border-gold/10 space-y-2">
              {/* Poem */}
              <div className="text-center space-y-0.5">
                {record.poem.map((line, i) => (
                  <p
                    key={i}
                    className="font-display text-sm text-foreground tracking-widest"
                  >
                    {line}
                  </p>
                ))}
              </div>

              <p className="text-xs text-foreground/80 font-body leading-relaxed border-l-2 border-gold/20 pl-2">
                {record.interpretation}
              </p>

              {/* Ratings */}
              <div className="grid grid-cols-2 gap-1 text-xs font-body">
                <span>💰 {stars(record.finance)}</span>
                <span>💕 {stars(record.love)}</span>
                <span>💼 {stars(record.career)}</span>
                <span>🏥 {stars(record.health)}</span>
              </div>

              <div className="flex flex-wrap gap-x-3 gap-y-0.5 text-[11px] text-muted-foreground font-body">
                <span>💡 {record.advice}</span>
              </div>
              <div className="flex flex-wrap gap-x-3 text-[11px] text-muted-foreground font-body">
                <span>🔢 {record.luckyNumbers.join(", ")}</span>
                <span>🎨 {record.luckyColor}</span>
                <span>🧭 {record.luckyDirection}</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default FortuneHistory;

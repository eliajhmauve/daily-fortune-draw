import { motion } from "framer-motion";
import { Fortune } from "@/data/fortunes";

interface Props {
  fortune: Fortune;
}

const FortuneStick = ({ fortune }: Props) => {
  return (
    <motion.div
      className="flex flex-col items-center"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
    >
      {/* The stick */}
      <motion.div
        className="relative w-8 rounded-t-full stick-shadow"
        style={{ height: 200 }}
        initial={{ y: 100, rotate: -15, opacity: 0 }}
        animate={{
          y: [100, -20, 0],
          rotate: [-15, 5, 0],
          opacity: [0, 1, 1],
        }}
        transition={{ duration: 1.2, times: [0, 0.5, 1] }}
      >
        <div className="absolute inset-0 rounded-t-full bg-gradient-to-b from-primary via-gold to-gold-dark" />
        {/* Text on stick */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 writing-vertical">
          <span className="font-display text-xs text-primary-foreground tracking-widest"
            style={{ writingMode: "vertical-rl" }}>
            第{fortune.id}籤
          </span>
        </div>
      </motion.div>

      {/* Golden glow burst */}
      <motion.div
        className="absolute w-64 h-64 rounded-full"
        style={{
          background: "radial-gradient(circle, hsl(45 90% 55% / 0.3) 0%, transparent 70%)",
        }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: [0, 2, 1.5], opacity: [0, 0.8, 0] }}
        transition={{ duration: 1.5, delay: 0.3 }}
      />

      <motion.p
        className="mt-4 text-lg font-display text-primary"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        第 {fortune.id} 籤 — {fortune.level}
      </motion.p>
    </motion.div>
  );
};

export default FortuneStick;

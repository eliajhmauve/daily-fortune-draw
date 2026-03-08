import { useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getFortuneForToday, getDeviceId, Fortune } from "@/data/fortunes";
import FortuneStick from "./FortuneStick";
import FortuneCard from "./FortuneCard";

type Phase = "idle" | "shaking" | "reveal-stick" | "show-card";

const FortuneContainer = () => {
  const [phase, setPhase] = useState<Phase>("idle");
  const [fortune, setFortune] = useState<Fortune | null>(null);
  const [cooldown, setCooldown] = useState(0);
  const cooldownRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const shakeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const holdStartRef = useRef<number>(0);

  const hasDrawnToday = useCallback(() => {
    const today = new Date().toDateString();
    return localStorage.getItem("fortune-last-draw") === today;
  }, []);

  const markDrawn = () => {
    localStorage.setItem("fortune-last-draw", new Date().toDateString());
  };

  const triggerHaptic = () => {
    if (navigator.vibrate) navigator.vibrate(50);
  };

  const startShake = () => {
    if (phase !== "idle" || cooldown > 0) return;
    holdStartRef.current = Date.now();
    setPhase("shaking");
    triggerHaptic();
  };

  const endShake = () => {
    if (phase !== "shaking") return;
    const holdDuration = Date.now() - holdStartRef.current;
    if (holdDuration < 500) {
      setPhase("idle");
      return;
    }

    const deviceId = getDeviceId();
    const f = getFortuneForToday(deviceId);
    setFortune(f);
    setPhase("reveal-stick");
    triggerHaptic();

    if (shakeTimerRef.current) clearTimeout(shakeTimerRef.current);
    shakeTimerRef.current = setTimeout(() => {
      setPhase("show-card");
      markDrawn();
    }, 1800);
  };

  const handleRedraw = () => {
    if (cooldown > 0) return;
    setCooldown(30);
    cooldownRef.current = setInterval(() => {
      setCooldown((prev) => {
        if (prev <= 1) {
          if (cooldownRef.current) clearInterval(cooldownRef.current);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    // Change device seed slightly for different result
    const deviceId = getDeviceId() + "-redraw-" + Date.now();
    const f = getFortuneForToday(deviceId);
    setFortune(f);
    setPhase("shaking");
    triggerHaptic();

    setTimeout(() => {
      setPhase("reveal-stick");
      setTimeout(() => setPhase("show-card"), 1800);
    }, 1000);
  };

  const handleReset = () => {
    setPhase("idle");
    setFortune(null);
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden temple-pattern">
      {/* Smoke effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute left-1/4 bottom-0 w-1 h-32 bg-gradient-to-t from-muted-foreground/20 to-transparent rounded-full"
          style={{ animation: "float-smoke 4s ease-in-out infinite" }}
        />
        <div
          className="absolute right-1/4 bottom-0 w-1 h-40 bg-gradient-to-t from-muted-foreground/15 to-transparent rounded-full"
          style={{ animation: "float-smoke 5s ease-in-out infinite 1s" }}
        />
      </div>

      {/* Title */}
      <motion.h1
        className="font-display text-3xl sm:text-4xl md:text-5xl golden-text mb-2 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        今日運勢籤詩
      </motion.h1>
      <motion.p
        className="text-muted-foreground text-sm mb-8 font-body"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        虔心搖籤，求取今日指引
      </motion.p>

      <AnimatePresence mode="wait">
        {(phase === "idle" || phase === "shaking") && (
          <motion.div
            key="container"
            className="flex flex-col items-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9, y: -50 }}
            transition={{ duration: 0.5 }}
          >
            {/* Fortune stick container (竹筒) */}
            <motion.div
              className="relative w-28 h-44 sm:w-32 sm:h-52 cursor-pointer select-none"
              animate={
                phase === "shaking"
                  ? {
                      rotate: [0, -8, 8, -6, 6, -4, 4, -2, 2, 0],
                      transition: { duration: 0.5, repeat: Infinity },
                    }
                  : {}
              }
              onPointerDown={startShake}
              onPointerUp={endShake}
              onPointerLeave={() => phase === "shaking" && endShake()}
            >
              {/* Bamboo tube */}
              <div className="absolute inset-0 rounded-b-2xl rounded-t-lg bg-gradient-to-b from-gold-dark via-gold/30 to-gold-dark border border-gold-dark overflow-hidden">
                <div className="absolute inset-x-2 top-2 bottom-2 rounded-b-xl rounded-t bg-gradient-to-b from-background via-muted to-background" />
                {/* Sticks poking out */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 flex gap-1">
                  {[...Array(7)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="w-1.5 rounded-t-full bg-gradient-to-b from-primary via-gold-dark to-primary"
                      style={{
                        height: `${20 + (i % 3) * 8}px`,
                        marginTop: `${-10 - (i % 3) * 5}px`,
                      }}
                      animate={
                        phase === "shaking"
                          ? {
                              y: [0, -3, 2, -4, 1, -2, 3, 0],
                              transition: {
                                duration: 0.3,
                                repeat: Infinity,
                                delay: i * 0.05,
                              },
                            }
                          : {}
                      }
                    />
                  ))}
                </div>
              </div>

              {/* Glow when shaking */}
              {phase === "shaking" && (
                <motion.div
                  className="absolute -inset-4 rounded-2xl"
                  style={{ animation: "pulse-glow 1s ease-in-out infinite" }}
                />
              )}
            </motion.div>

            <motion.p
              className="mt-6 text-sm text-muted-foreground font-body"
              animate={
                phase === "shaking"
                  ? { opacity: [0.5, 1, 0.5] }
                  : { opacity: 1 }
              }
              transition={
                phase === "shaking" ? { duration: 1, repeat: Infinity } : {}
              }
            >
              {phase === "shaking" ? "搖動中...放開以抽籤" : "按住籤筒搖動"}
            </motion.p>
          </motion.div>
        )}

        {phase === "reveal-stick" && fortune && (
          <FortuneStick fortune={fortune} />
        )}

        {phase === "show-card" && fortune && (
          <FortuneCard
            fortune={fortune}
            onRedraw={handleRedraw}
            cooldown={cooldown}
            onReset={handleReset}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default FortuneContainer;

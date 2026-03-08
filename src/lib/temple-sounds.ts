// Synthesized temple sounds using Web Audio API — no external dependencies needed

let audioCtx: AudioContext | null = null;

function getCtx(): AudioContext {
  if (!audioCtx) audioCtx = new AudioContext();
  return audioCtx;
}

/** Wooden stick rattling sound — tuned for hollow bamboo tube resonance */
export function playShakeSound() {
  const ctx = getCtx();
  const now = ctx.currentTime;

  // Fewer, rounder bursts with a woody low-mid resonance
  for (let i = 0; i < 5; i++) {
    const t = now + i * 0.07 + Math.random() * 0.03;
    const dur = 0.06;

    // Low woody knock
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    const filter = ctx.createBiquadFilter();

    osc.type = "triangle"; // softer than square
    osc.frequency.setValueAtTime(350 + Math.random() * 250, t);
    osc.frequency.exponentialRampToValueAtTime(120 + Math.random() * 80, t + dur);

    filter.type = "bandpass";
    filter.frequency.setValueAtTime(800 + Math.random() * 600, t);
    filter.Q.setValueAtTime(4, t); // narrower resonance = more hollow

    gain.gain.setValueAtTime(0.12, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + dur);

    osc.connect(filter).connect(gain).connect(ctx.destination);
    osc.start(t);
    osc.stop(t + dur);

    // Subtle high-frequency rattle layer (bamboo sticks clicking)
    const osc2 = ctx.createOscillator();
    const gain2 = ctx.createGain();
    const filter2 = ctx.createBiquadFilter();
    osc2.type = "square";
    osc2.frequency.setValueAtTime(1800 + Math.random() * 800, t);
    osc2.frequency.exponentialRampToValueAtTime(600, t + 0.025);
    filter2.type = "highpass";
    filter2.frequency.setValueAtTime(1200, t);
    gain2.gain.setValueAtTime(0.03, t);
    gain2.gain.exponentialRampToValueAtTime(0.001, t + 0.025);
    osc2.connect(filter2).connect(gain2).connect(ctx.destination);
    osc2.start(t);
    osc2.stop(t + 0.03);
  }
}

/** Single stick popping out sound */
export function playStickPopSound() {
  const ctx = getCtx();
  const now = ctx.currentTime;

  // Woody "tok" sound
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = "triangle";
  osc.frequency.setValueAtTime(600, now);
  osc.frequency.exponentialRampToValueAtTime(150, now + 0.15);
  gain.gain.setValueAtTime(0.15, now);
  gain.gain.exponentialRampToValueAtTime(0.001, now + 0.15);
  osc.connect(gain).connect(ctx.destination);
  osc.start(now);
  osc.stop(now + 0.15);

  // Higher click layer
  const osc2 = ctx.createOscillator();
  const gain2 = ctx.createGain();
  osc2.type = "square";
  osc2.frequency.setValueAtTime(1800, now);
  osc2.frequency.exponentialRampToValueAtTime(400, now + 0.06);
  gain2.gain.setValueAtTime(0.06, now);
  gain2.gain.exponentialRampToValueAtTime(0.001, now + 0.06);
  osc2.connect(gain2).connect(ctx.destination);
  osc2.start(now);
  osc2.stop(now + 0.06);
}

/** Temple bell / chime for card reveal */
export function playBellSound() {
  const ctx = getCtx();
  const now = ctx.currentTime;

  const fundamentals = [523, 659, 784]; // C5, E5, G5 — a bright chord

  fundamentals.forEach((freq, i) => {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = "sine";
    osc.frequency.setValueAtTime(freq, now);

    // Gentle attack, long decay like a bell
    gain.gain.setValueAtTime(0, now);
    gain.gain.linearRampToValueAtTime(0.08, now + 0.02 + i * 0.05);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 2.5);

    osc.connect(gain).connect(ctx.destination);
    osc.start(now + i * 0.05);
    osc.stop(now + 2.5);

    // Add a subtle harmonic overtone
    const osc2 = ctx.createOscillator();
    const gain2 = ctx.createGain();
    osc2.type = "sine";
    osc2.frequency.setValueAtTime(freq * 2.01, now); // slight detuning
    gain2.gain.setValueAtTime(0, now);
    gain2.gain.linearRampToValueAtTime(0.025, now + 0.02 + i * 0.05);
    gain2.gain.exponentialRampToValueAtTime(0.001, now + 1.8);
    osc2.connect(gain2).connect(ctx.destination);
    osc2.start(now + i * 0.05);
    osc2.stop(now + 1.8);
  });
}

/** Continuous shaking loop — returns a stop function */
export function startShakeLoop(): () => void {
  let running = true;
  let timeout: ReturnType<typeof setTimeout>;

  const loop = () => {
    if (!running) return;
    playShakeSound();
    timeout = setTimeout(loop, 350 + Math.random() * 150);
  };
  loop();

  return () => {
    running = false;
    clearTimeout(timeout);
  };
}

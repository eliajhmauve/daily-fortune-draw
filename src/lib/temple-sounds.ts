// Synthesized temple sounds using Web Audio API — no external dependencies needed

let audioCtx: AudioContext | null = null;
let masterGain: GainNode | null = null;
let _muted = false;

function getCtx(): AudioContext {
  if (!audioCtx) {
    audioCtx = new AudioContext();
    masterGain = audioCtx.createGain();
    masterGain.connect(audioCtx.destination);
  }
  return audioCtx;
}

function getDest(): AudioNode {
  getCtx();
  return masterGain!;
}

export function setMuted(muted: boolean) {
  _muted = muted;
  if (masterGain) masterGain.gain.value = muted ? 0 : 1;
}

export function isMuted(): boolean {
  return _muted;
}

// ─── Shake Sound ───

export function playShakeSound() {
  const ctx = getCtx();
  const dest = getDest();
  const now = ctx.currentTime;

  for (let i = 0; i < 5; i++) {
    const t = now + i * 0.07 + Math.random() * 0.03;
    const dur = 0.06;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    const filter = ctx.createBiquadFilter();
    osc.type = "triangle";
    osc.frequency.setValueAtTime(350 + Math.random() * 250, t);
    osc.frequency.exponentialRampToValueAtTime(120 + Math.random() * 80, t + dur);
    filter.type = "bandpass";
    filter.frequency.setValueAtTime(800 + Math.random() * 600, t);
    filter.Q.setValueAtTime(4, t);
    gain.gain.setValueAtTime(0.18, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + dur);
    osc.connect(filter).connect(gain).connect(dest);
    osc.start(t);
    osc.stop(t + dur);

    const osc2 = ctx.createOscillator();
    const gain2 = ctx.createGain();
    const filter2 = ctx.createBiquadFilter();
    osc2.type = "square";
    osc2.frequency.setValueAtTime(1800 + Math.random() * 800, t);
    osc2.frequency.exponentialRampToValueAtTime(600, t + 0.025);
    filter2.type = "highpass";
    filter2.frequency.setValueAtTime(1200, t);
    gain2.gain.setValueAtTime(0.05, t);
    gain2.gain.exponentialRampToValueAtTime(0.001, t + 0.025);
    osc2.connect(filter2).connect(gain2).connect(dest);
    osc2.start(t);
    osc2.stop(t + 0.03);
  }
}

// ─── Stick Pop Sound ───

export function playStickPopSound() {
  const ctx = getCtx();
  const dest = getDest();
  const now = ctx.currentTime;

  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = "triangle";
  osc.frequency.setValueAtTime(420, now);
  osc.frequency.exponentialRampToValueAtTime(100, now + 0.18);
  gain.gain.setValueAtTime(0.28, now);
  gain.gain.exponentialRampToValueAtTime(0.001, now + 0.18);
  osc.connect(gain).connect(dest);
  osc.start(now);
  osc.stop(now + 0.18);

  const osc2 = ctx.createOscillator();
  const gain2 = ctx.createGain();
  const filter = ctx.createBiquadFilter();
  osc2.type = "sine";
  osc2.frequency.setValueAtTime(280, now);
  osc2.frequency.exponentialRampToValueAtTime(90, now + 0.25);
  filter.type = "bandpass";
  filter.frequency.setValueAtTime(300, now);
  filter.Q.setValueAtTime(6, now);
  gain2.gain.setValueAtTime(0.15, now);
  gain2.gain.exponentialRampToValueAtTime(0.001, now + 0.25);
  osc2.connect(filter).connect(gain2).connect(dest);
  osc2.start(now);
  osc2.stop(now + 0.25);

  const osc3 = ctx.createOscillator();
  const gain3 = ctx.createGain();
  osc3.type = "square";
  osc3.frequency.setValueAtTime(1400, now);
  osc3.frequency.exponentialRampToValueAtTime(300, now + 0.04);
  gain3.gain.setValueAtTime(0.06, now);
  gain3.gain.exponentialRampToValueAtTime(0.001, now + 0.04);
  osc3.connect(gain3).connect(dest);
  osc3.start(now);
  osc3.stop(now + 0.04);
}

// ─── Bell Sound ───

export function playBellSound() {
  const ctx = getCtx();
  const dest = getDest();
  const now = ctx.currentTime;

  const fundamentals = [523, 698, 784];
  const decay = 3.5;

  fundamentals.forEach((freq, i) => {
    const onset = now + i * 0.12;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = "sine";
    osc.frequency.setValueAtTime(freq, onset);
    gain.gain.setValueAtTime(0, onset);
    gain.gain.linearRampToValueAtTime(0.14, onset + 0.01);
    gain.gain.exponentialRampToValueAtTime(0.001, onset + decay);
    osc.connect(gain).connect(dest);
    osc.start(onset);
    osc.stop(onset + decay);

    const osc2 = ctx.createOscillator();
    const gain2 = ctx.createGain();
    osc2.type = "sine";
    osc2.frequency.setValueAtTime(freq * 2.003, onset);
    gain2.gain.setValueAtTime(0, onset);
    gain2.gain.linearRampToValueAtTime(0.05, onset + 0.01);
    gain2.gain.exponentialRampToValueAtTime(0.001, onset + decay * 0.7);
    osc2.connect(gain2).connect(dest);
    osc2.start(onset);
    osc2.stop(onset + decay * 0.7);

    const osc3 = ctx.createOscillator();
    const gain3 = ctx.createGain();
    osc3.type = "sine";
    osc3.frequency.setValueAtTime(freq * 3.01, onset);
    gain3.gain.setValueAtTime(0, onset);
    gain3.gain.linearRampToValueAtTime(0.015, onset + 0.01);
    gain3.gain.exponentialRampToValueAtTime(0.001, onset + decay * 0.5);
    osc3.connect(gain3).connect(dest);
    osc3.start(onset);
    osc3.stop(onset + decay * 0.5);
  });

  const sub = ctx.createOscillator();
  const subGain = ctx.createGain();
  sub.type = "sine";
  sub.frequency.setValueAtTime(130, now);
  subGain.gain.setValueAtTime(0, now);
  subGain.gain.linearRampToValueAtTime(0.08, now + 0.05);
  subGain.gain.exponentialRampToValueAtTime(0.001, now + 4);
  sub.connect(subGain).connect(dest);
  sub.start(now);
  sub.stop(now + 4);
}

// ─── Shake Loop ───

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

// ─── Ambient Background Sounds ───

let ambientNodes: { stop: () => void }[] = [];
let ambientRunning = false;

/** Start ambient temple atmosphere — chanting drone + wind chimes. Returns stop fn. */
export function startAmbient(): () => void {
  if (ambientRunning) return () => {};
  ambientRunning = true;
  const ctx = getCtx();
  const dest = getDest();

  // --- Low chanting drone (layered sine waves simulating "Om") ---
  const droneFreqs = [130, 196, 260]; // C3, G3, C4 — open fifth drone
  const droneOscs = droneFreqs.map((freq) => {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    const filter = ctx.createBiquadFilter();

    osc.type = "sine";
    osc.frequency.setValueAtTime(freq, ctx.currentTime);

    // Slow wobble for organic feel
    const lfo = ctx.createOscillator();
    const lfoGain = ctx.createGain();
    lfo.type = "sine";
    lfo.frequency.setValueAtTime(0.15 + Math.random() * 0.1, ctx.currentTime);
    lfoGain.gain.setValueAtTime(2, ctx.currentTime);
    lfo.connect(lfoGain).connect(osc.frequency);
    lfo.start();

    filter.type = "lowpass";
    filter.frequency.setValueAtTime(400, ctx.currentTime);
    filter.Q.setValueAtTime(1, ctx.currentTime);

    gain.gain.setValueAtTime(0, ctx.currentTime);
    gain.gain.linearRampToValueAtTime(0.018, ctx.currentTime + 3);

    osc.connect(filter).connect(gain).connect(dest);
    osc.start();

    return { osc, gain, lfo };
  });

  // --- Wind chimes: periodic random high bell tones ---
  let chimeRunning = true;
  let chimeTimeout: ReturnType<typeof setTimeout>;

  const playChime = () => {
    if (!chimeRunning) return;
    const now = ctx.currentTime;
    // Pentatonic scale for Eastern feel: C, D, E, G, A in octave 6-7
    const notes = [1047, 1175, 1319, 1568, 1760, 2093, 2349];
    const freq = notes[Math.floor(Math.random() * notes.length)];

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = "sine";
    osc.frequency.setValueAtTime(freq, now);
    gain.gain.setValueAtTime(0, now);
    gain.gain.linearRampToValueAtTime(0.025 + Math.random() * 0.015, now + 0.01);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 2.5);
    osc.connect(gain).connect(dest);
    osc.start(now);
    osc.stop(now + 2.5);

    // Occasionally play a second chime for richness
    if (Math.random() > 0.5) {
      const freq2 = notes[Math.floor(Math.random() * notes.length)];
      const osc2 = ctx.createOscillator();
      const gain2 = ctx.createGain();
      osc2.type = "sine";
      osc2.frequency.setValueAtTime(freq2, now + 0.15);
      gain2.gain.setValueAtTime(0, now + 0.15);
      gain2.gain.linearRampToValueAtTime(0.02, now + 0.16);
      gain2.gain.exponentialRampToValueAtTime(0.001, now + 2);
      osc2.connect(gain2).connect(dest);
      osc2.start(now + 0.15);
      osc2.stop(now + 2.2);
    }

    chimeTimeout = setTimeout(playChime, 3000 + Math.random() * 5000);
  };

  // Start first chime after a short delay
  chimeTimeout = setTimeout(playChime, 1500);

  const stopFn = () => {
    ambientRunning = false;
    chimeRunning = false;
    clearTimeout(chimeTimeout);

    const now = ctx.currentTime;
    droneOscs.forEach(({ osc, gain, lfo }) => {
      gain.gain.cancelScheduledValues(now);
      gain.gain.setValueAtTime(gain.gain.value, now);
      gain.gain.linearRampToValueAtTime(0, now + 1.5);
      osc.stop(now + 2);
      lfo.stop(now + 2);
    });
  };

  ambientNodes.push({ stop: stopFn });
  return stopFn;
}

export function isAmbientRunning(): boolean {
  return ambientRunning;
}

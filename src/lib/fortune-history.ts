import { Fortune } from "@/data/fortunes";

export interface HistoryRecord {
  date: string;        // YYYY-MM-DD
  fortuneId: number;
  level: string;
  levelLabel: string;
  poem: string[];
  interpretation: string;
  finance: number;
  love: number;
  career: number;
  health: number;
  advice: string;
  luckyNumbers: number[];
  luckyColor: string;
  luckyDirection: string;
}

const HISTORY_KEY = "fortune-history";
const MAX_RECORDS = 30;

function getToday(): string {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

export function getHistory(): HistoryRecord[] {
  try {
    const raw = localStorage.getItem(HISTORY_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function saveToHistory(fortune: Fortune): void {
  const today = getToday();
  const history = getHistory();

  // Don't duplicate today's entry
  if (history.length > 0 && history[0].date === today) {
    history[0] = { ...fortune, date: today, fortuneId: fortune.id };
  } else {
    history.unshift({ ...fortune, date: today, fortuneId: fortune.id });
  }

  // Keep only last N records
  localStorage.setItem(HISTORY_KEY, JSON.stringify(history.slice(0, MAX_RECORDS)));
}

export function hasDrawnToday(): boolean {
  const history = getHistory();
  return history.length > 0 && history[0].date === getToday();
}

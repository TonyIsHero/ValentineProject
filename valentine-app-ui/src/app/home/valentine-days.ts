export type DayKey =
  | 'rose'
  | 'propose'
  | 'choco'
  | 'teddy'
  | 'prom'
  | 'hug'
  | 'kiss'
  | 'val';

export interface ValentineDay {
  key: DayKey;
  label: string;
  month: number; // 0-based
  day: number;
}

export const VALENTINE_DAYS: ValentineDay[] = [
  { key: 'rose', label: 'Rose Day', month: 1, day: 7 },
  { key: 'propose', label: 'Propose Day', month: 1, day: 8 },
  { key: 'choco', label: 'Chocolate Day', month: 1, day: 9 },
  { key: 'teddy', label: 'Teddy Day', month: 1, day: 10 },
  { key: 'prom', label: 'Promise Day', month: 1, day: 11 },
  { key: 'hug', label: 'Hug Day', month: 1, day: 12 },
  { key: 'kiss', label: 'Kiss Day', month: 1, day: 13 },
  { key: 'val', label: "Valentine's Day", month: 1, day: 14 },
];

export function getIndexByKey(key: DayKey): number {
  return VALENTINE_DAYS.findIndex((d) => d.key === key);
}

export function getUnlockedIndex(date: Date): number {
  const month = date.getMonth();
  const day = date.getDate();

  if (month === 1 && day >= 7 && day <= 14) {
    return day - 7;
  }

  if (month < 1 || (month === 1 && day < 7)) {
    return -1;
  }

  return VALENTINE_DAYS.length - 1;
}

export function getCurrentKey(date: Date): DayKey {
  const unlocked = getUnlockedIndex(date);
  if (unlocked >= 0) return VALENTINE_DAYS[unlocked].key;
  return 'rose';
}

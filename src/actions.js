export const INCREASE_HOUR = "INCREASE_HOUR";
export const INCREASE_MINUTE = "INCREASE_MINUTE";

export function increaseHour() {
  return { type: INCREASE_HOUR };
}

export function increaseMinute() {
  return { type: INCREASE_MINUTE };
}

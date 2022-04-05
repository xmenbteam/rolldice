export const delay = (time: number) =>
  new Promise((resolve) => setTimeout(resolve, time));

export const diceRef: { [key: string]: number } = {
  d4: 4,
  d6: 6,
  d8: 8,
  d10: 10,
  d12: 12,
  d20: 20,
  d100: 100,
};

export const advRef: { [key: string]: boolean } = {
  Advantage: true,
  Disadvantage: false,
};

import { DiceNums } from "../Types";

export class utils {
  diceRef: { [key: string]: DiceNums } = {
    d4: 4,
    d6: 6,
    d8: 8,
    d10: 10,
    d12: 12,
    d20: 20,
    d100: 100,
  };

  advRef: { [key: string]: boolean } = {
    Advantage: true,
    Disadvantage: false,
  };

  static delay(time: number) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }
  static getRefs() {
    return { diceRef: new utils().diceRef, advRef: new utils().advRef };
  }
}

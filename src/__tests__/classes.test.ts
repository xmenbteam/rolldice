import { RollDice, SingleDice } from "../Classes/Dice";

describe("Dice constructor", () => {
  test("rolls a d4", async () => {
    const actual = SingleDice.roll(4);

    expect(actual).toBeGreaterThanOrEqual(1);
    expect(actual).toBeLessThan(5);
  });
  test("rolls a d12", async () => {
    const actual = SingleDice.roll(12);

    expect(actual).toBeGreaterThanOrEqual(1);
    expect(actual).toBeLessThan(13);
  });
});

describe("RollADice", () => {
  test("Rolls a dice", async () => {
    const actual = await new RollDice().diceMessage(6);
    expect(typeof actual).toBe("number");
  });
});

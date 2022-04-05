import { rollDice, rollLoadsOfDice } from "../rollDice";

jest.setTimeout(10000);

describe("rollDice", () => {
  test("rolls a d4", async () => {
    const actual = await rollDice(4, 200);

    expect(actual).toBeGreaterThanOrEqual(1);
    expect(actual).toBeLessThan(5);
  });
  test("rolls a d12", async () => {
    const actual = await rollDice(12, 200);

    expect(actual).toBeGreaterThanOrEqual(1);
    expect(actual).toBeLessThan(13);
  });
});

describe("rollLoadsOfDice", () => {
  test("returns a number", async () => {
    const rollFunc = jest.fn(rollDice);
    const arrayOfDice = [{ diceType: 0, numberOfDice: 0 }];
    const delayTime = 200;
    const actual = await rollLoadsOfDice(rollFunc, arrayOfDice, delayTime);
    expect(typeof actual).toBe("number");
  });
  test("1d4", async () => {
    const rollFunc = jest.fn(rollDice);
    const arrayOfDice = [{ diceType: 4, numberOfDice: 1 }];
    const delayTime = 200;
    const actual = await rollLoadsOfDice(rollFunc, arrayOfDice, delayTime);
    expect(typeof actual).toBe("number");
    expect(actual).toBeGreaterThanOrEqual(1);
    expect(actual).toBeLessThan(5);
  });
  test("2d4", async () => {
    const rollFunc = jest.fn(rollDice);
    const arrayOfDice = [{ diceType: 4, numberOfDice: 2 }];
    const delayTime = 200;
    const actual = await rollLoadsOfDice(rollFunc, arrayOfDice, delayTime);
    expect(typeof actual).toBe("number");
    expect(actual).toBeGreaterThanOrEqual(2);
    expect(actual).toBeLessThan(9);
  });
  test("2d4, 2d6", async () => {
    const rollFunc = jest.fn(rollDice);
    const arrayOfDice = [
      { diceType: 4, numberOfDice: 2 },
      { diceType: 6, numberOfDice: 2 },
    ];
    const delayTime = 200;
    const actual = await rollLoadsOfDice(rollFunc, arrayOfDice, delayTime);
    expect(typeof actual).toBe("number");
    expect(actual).toBeGreaterThanOrEqual(4);
    expect(actual).toBeLessThan(21);
  });
  test("100d20, 100d4", async () => {
    const rollFunc = jest.fn(rollDice);
    const arrayOfDice = [
      { diceType: 20, numberOfDice: 100 },
      { diceType: 4, numberOfDice: 100 },
    ];
    const delayTime = 0;
    const actual = await rollLoadsOfDice(rollFunc, arrayOfDice, delayTime);
    expect(typeof actual).toBe("number");
    expect(actual).toBeGreaterThanOrEqual(200);
    expect(actual).toBeLessThan(2600);
  });
});

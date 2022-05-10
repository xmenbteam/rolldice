import { DiceArray, DiceNums } from "../Types";
import { utils } from "../utils/utils";
import { Messages } from "./Messages";

export class SingleDice {
  static roll(type: DiceNums) {
    return 1 + Math.floor(Math.random() * type);
  }
}

export class RollDice {
  #isCrit: boolean;
  #isNatOne: boolean;
  #modifier: number = 0;

  constructor(modifier: number = 0, isCrit: boolean = false) {
    this.#isCrit = isCrit;
    this.#isNatOne = false;
    this.#modifier = modifier;
  }

  async diceMessage(diceType: DiceNums, delayTime: number = 200) {
    const diceNum = SingleDice.roll(diceType);
    console.log(`Rolling a d${diceType}! \n`);

    await utils.delay(delayTime);

    this.#isCrit = diceType === 20 && diceNum === 20;
    this.#isNatOne = diceType === 20 && diceNum === 1;

    return diceType === 20
      ? Messages.d20RollMessage(
          diceNum,
          this.#isCrit,
          this.#isNatOne,
          this.#modifier,
          delayTime
        )
      : Messages.otherRollMessage(diceNum, diceType, this.#isCrit);
  }

  async AbilityCheckAttackRoll() {
    return new RollDice(this.#modifier).diceMessage(20);
  }

  async DamageRoll(diceType: DiceNums, isCrit: boolean) {
    return new RollDice(this.#modifier, isCrit).diceMessage(diceType);
  }

  async AdvDis(advantage: boolean) {
    const first = await new RollDice(this.#modifier).diceMessage(20);
    const second = await new RollDice(this.#modifier).diceMessage(20);

    const advDice = Math.max(first, second);
    const disadvDice = Math.min(first, second);

    return Messages.advDisMessage(
      first,
      second,
      advantage,
      advDice,
      disadvDice
    );
  }

  async RollLoadsOfDice(arrayOfDice: DiceArray, isCrit: boolean) {
    let result: number = this.#modifier;

    for (const { numberOfDice, diceType } of arrayOfDice) {
      let count = 0;
      for (let i = 0; i < numberOfDice; i++) {
        const rolledDice: number = await this.DamageRoll(diceType, isCrit);
        count += rolledDice;
      }
      result += count;
    }

    let fullDice = 0;

    arrayOfDice.forEach((dice) => {
      fullDice += dice.diceType;
    });

    if (this.#isCrit) result += fullDice;

    return Messages.rollLoadsOfDiceMessage(result, this.#isCrit);
  }
}

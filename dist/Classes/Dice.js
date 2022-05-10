"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _RollDice_isCrit, _RollDice_isNatOne, _RollDice_modifier;
Object.defineProperty(exports, "__esModule", { value: true });
exports.RollDice = exports.SingleDice = void 0;
const utils_1 = require("../utils/utils");
const Messages_1 = require("./Messages");
class SingleDice {
    static roll(type) {
        return 1 + Math.floor(Math.random() * type);
    }
}
exports.SingleDice = SingleDice;
class RollDice {
    constructor(modifier = 0, isCrit = false) {
        _RollDice_isCrit.set(this, void 0);
        _RollDice_isNatOne.set(this, void 0);
        _RollDice_modifier.set(this, 0);
        __classPrivateFieldSet(this, _RollDice_isCrit, isCrit, "f");
        __classPrivateFieldSet(this, _RollDice_isNatOne, false, "f");
        __classPrivateFieldSet(this, _RollDice_modifier, modifier, "f");
    }
    async diceMessage(diceType, delayTime = 200) {
        const diceNum = SingleDice.roll(diceType);
        console.log(`Rolling a d${diceType}! \n`);
        await utils_1.utils.delay(delayTime);
        __classPrivateFieldSet(this, _RollDice_isCrit, diceType === 20 && diceNum === 20, "f");
        __classPrivateFieldSet(this, _RollDice_isNatOne, diceType === 20 && diceNum === 1, "f");
        return diceType === 20
            ? Messages_1.Messages.d20RollMessage(diceNum, __classPrivateFieldGet(this, _RollDice_isCrit, "f"), __classPrivateFieldGet(this, _RollDice_isNatOne, "f"), __classPrivateFieldGet(this, _RollDice_modifier, "f"), delayTime)
            : Messages_1.Messages.otherRollMessage(diceNum, diceType, __classPrivateFieldGet(this, _RollDice_isCrit, "f"));
    }
    async AbilityCheckAttackRoll() {
        return new RollDice(__classPrivateFieldGet(this, _RollDice_modifier, "f")).diceMessage(20);
    }
    async DamageRoll(diceType, isCrit) {
        return new RollDice(__classPrivateFieldGet(this, _RollDice_modifier, "f"), isCrit).diceMessage(diceType);
    }
    async AdvDis(advantage) {
        const first = await new RollDice(__classPrivateFieldGet(this, _RollDice_modifier, "f")).diceMessage(20);
        const second = await new RollDice(__classPrivateFieldGet(this, _RollDice_modifier, "f")).diceMessage(20);
        const advDice = Math.max(first, second);
        const disadvDice = Math.min(first, second);
        return Messages_1.Messages.advDisMessage(first, second, advantage, advDice, disadvDice);
    }
    async RollLoadsOfDice(arrayOfDice, isCrit) {
        let result = __classPrivateFieldGet(this, _RollDice_modifier, "f");
        for (const { numberOfDice, diceType } of arrayOfDice) {
            let count = 0;
            for (let i = 0; i < numberOfDice; i++) {
                const rolledDice = await this.DamageRoll(diceType, isCrit);
                count += rolledDice;
            }
            result += count;
        }
        let fullDice = 0;
        arrayOfDice.forEach((dice) => {
            fullDice += dice.diceType;
        });
        if (__classPrivateFieldGet(this, _RollDice_isCrit, "f"))
            result += fullDice;
        return Messages_1.Messages.rollLoadsOfDiceMessage(result, __classPrivateFieldGet(this, _RollDice_isCrit, "f"));
    }
}
exports.RollDice = RollDice;
_RollDice_isCrit = new WeakMap(), _RollDice_isNatOne = new WeakMap(), _RollDice_modifier = new WeakMap();

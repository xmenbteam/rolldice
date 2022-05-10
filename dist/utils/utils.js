"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.utils = void 0;
class utils {
    constructor() {
        this.diceRef = {
            d4: 4,
            d6: 6,
            d8: 8,
            d10: 10,
            d12: 12,
            d20: 20,
            d100: 100,
        };
        this.advRef = {
            Advantage: true,
            Disadvantage: false,
        };
    }
    static delay(time) {
        return new Promise((resolve) => setTimeout(resolve, time));
    }
    static getRefs() {
        return { diceRef: new utils().diceRef, advRef: new utils().advRef };
    }
}
exports.utils = utils;

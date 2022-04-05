"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.diceRef = exports.delay = void 0;
const delay = (time) => new Promise((resolve) => setTimeout(resolve, time));
exports.delay = delay;
exports.diceRef = {
    d4: 4,
    d6: 6,
    d8: 8,
    d10: 10,
    d12: 12,
    d20: 20,
    d100: 100,
};

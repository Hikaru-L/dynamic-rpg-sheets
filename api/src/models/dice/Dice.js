"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiceType = exports.DicePool = exports.Dice = void 0;
var Dice = /** @class */ (function () {
    function Dice(type, amount) {
        this.diceType = type;
        this.amount = amount || 1;
    }
    Dice.prototype.roll = function () {
        //roll dice
    };
    Dice.prototype.toString = function () {
        return "" + this.amount + this.diceType;
    };
    return Dice;
}());
exports.Dice = Dice;
var DicePool = /** @class */ (function () {
    function DicePool(types, amount) {
        this.diceTypes = types;
        this.amount = amount;
    }
    DicePool.prototype.roll = function () {
        //roll dice
    };
    return DicePool;
}());
exports.DicePool = DicePool;
var DiceType;
(function (DiceType) {
    DiceType["d3"] = "d3";
    DiceType["d4"] = "d4";
    DiceType["d6"] = "d6";
    DiceType["d8"] = "d8";
    DiceType["d10"] = "d10";
    DiceType["d12"] = "d12";
    DiceType["d20"] = "d20";
    DiceType["d100"] = "d100";
})(DiceType = exports.DiceType || (exports.DiceType = {}));

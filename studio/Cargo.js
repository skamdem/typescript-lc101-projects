"use strict";
exports.__esModule = true;
var Cargo = /** @class */ (function () {
    function Cargo(massKg, material) {
        this.material = material;
        this.massKg = massKg;
    }
    return Cargo;
}());
exports.Cargo = Cargo;
/*
Implements the Payload interface
Properties
    massKg should be a number.
    material should be a string.
Constructor
    Parameter massKg should be a number.
    Parameter material should be a string.
    Sets value of this.massKg and this.material
*/

"use strict";
exports.__esModule = true;
var Rocket = /** @class */ (function () {
    function Rocket(name, totalCapacityKg) {
        this.cargoItems = [];
        this.astronauts = [];
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }
    Rocket.prototype.sumMass = function (items) {
        var sumOfAllItems = 0;
        var i = 0;
        for (i = 0; i < items.length; i++) {
            sumOfAllItems += items[i].massKg;
        }
        return sumOfAllItems;
    };
    Rocket.prototype.currentMassKg = function () {
        //Uses this.sumMass to 
        return this.sumMass(this.astronauts) + this.sumMass(this.cargoItems);
    };
    Rocket.prototype.canAdd = function (item) {
        var checkWhetherCanAdd = false;
        if (this.currentMassKg() + item.massKg <= this.totalCapacityKg) {
            checkWhetherCanAdd = true;
        }
        return checkWhetherCanAdd;
    };
    Rocket.prototype.addCargo = function (cargo) {
        var checkWhetherCanAddToCargo = false;
        if (this.canAdd(cargo)) {
            checkWhetherCanAddToCargo = true;
            this.cargoItems.push(cargo);
        }
        return checkWhetherCanAddToCargo;
    };
    Rocket.prototype.addAstronaut = function (astronaut) {
        var checkWhetherCanAddastronaut = false;
        if (this.canAdd(astronaut)) {
            checkWhetherCanAddastronaut = true;
            this.astronauts.push(astronaut);
        }
        return checkWhetherCanAddastronaut;
    };
    return Rocket;
}());
exports.Rocket = Rocket;
/*
Properties:
    name should be a string.
    totalCapacityKg should be a number.
    cargoItems should be an array of Cargo objects.
        Should be initialized to an empty array []
    astronauts should be an array of Astronaut objects.
        Should be initialized to an empty array []
Constructor:
    Parameter name should be a string.
    Parameter totalCapacityKg should be a number.
    Sets value of this.name and this.totalCapacityKg
Methods:
    sumMass( items: Payload[] ): number
        Returns the sum of all items using each item's massKg property
    currentMassKg(): number
        Uses this.sumMass to return the combined mass of this.astronauts and this.cargoItems
    canAdd(item: Payload): boolean
        Returns true if this.currentMassKg() + item.massKg <= this.totalCapacityKg
    addCargo(cargo: Cargo).
        Uses this.canAdd() to see if another item can be added.
        If true, adds cargo to this.cargoItems and returns true.
        If false, returns false.
    addAstronaut(astronaut: Astronaut).
        Uses this.canAdd() to see if another astronaut can be added.
        If true, adds astronaut to this.astronauts and returns true.
        If false, returns false.
*/

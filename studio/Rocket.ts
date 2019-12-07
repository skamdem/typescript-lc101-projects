import { Cargo } from './Cargo';
import { Astronaut } from './Astronaut';
import { Payload } from './Payload';

export class Rocket {
    // properties and methods
    name : string;
    totalCapacityKg : number;
    cargoItems : Cargo[] = [];
    astronauts : Astronaut[] = [];
    constructor(name: string, totalCapacityKg: number) {
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }

    sumMass( items: Payload[] ): number {
        let sumOfAllItems:number = 0;
        let i:number = 0;
        for (i=0; i < items.length; i++){
            sumOfAllItems += items[i].massKg;
        }
        return sumOfAllItems;
    }
    
    currentMassKg(): number {
        //Uses this.sumMass to 
        return this.sumMass(this.astronauts) + this.sumMass(this.cargoItems);
    }
        
    canAdd(item: Payload): boolean {
        let checkWhetherCanAdd: boolean = false;
        if (this.currentMassKg() + item.massKg <= this.totalCapacityKg) {
            checkWhetherCanAdd = true;
        }
        return checkWhetherCanAdd;
    }

    addCargo(cargo: Cargo) {
        let checkWhetherCanAddToCargo: boolean = false;
        if (this.canAdd(cargo)){
            checkWhetherCanAddToCargo = true;
            this.cargoItems.push(cargo);
        }
        return checkWhetherCanAddToCargo;
    }
        
    addAstronaut(astronaut: Astronaut) {
        let checkWhetherCanAddastronaut: boolean = false;
        if (this.canAdd(astronaut)){
            checkWhetherCanAddastronaut = true;
            this.astronauts.push(astronaut);
        }
        return checkWhetherCanAddastronaut;        
    }
}

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

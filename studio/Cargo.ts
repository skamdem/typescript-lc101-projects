import { Payload } from './Payload';
export class Cargo implements Payload {
    // properties and methods
    massKg : number;
    material : string;
    constructor(massKg: number, material: string) {
        this.material = material;
        this.massKg = massKg;
    }
}
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

import { Payload } from './Payload';
export class Astronaut implements Payload {
    // properties and methods
    massKg : number;
    name : string;
    constructor(massKg: number, name: string) {
        this.name = name;
        this.massKg = massKg;
    }
}
/*
Implements the Payload interface
Properties
    massKg should be a number.
    name should be a string.
Constructor
    Parameter massKg should be a number.
    Parameter name should be string.
    Sets value of this.massKg and this.name.
*/
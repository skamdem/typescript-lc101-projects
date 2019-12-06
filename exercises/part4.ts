let kilometersToMars: number = 225000000;
let kilometersToTheMoon: number = 384400;

// Define your Spacecraft class here:
class Spacecraft {
    //The variables that are commented out will be moved into the Spacecraft class
    name: string;// = "Space Shuttle";
    speedMph: number;// = 17500;
    milesPerKilometer: number;// = 0.621;
    constructor(name: string, speedMph: number) {
       this.name = name;
       this.speedMph = speedMph;
       this.milesPerKilometer = 0.621;
    }
    // This function will also be moved into the Spacecraft class
    getDaysToLocation(kilometersAway: number): number {
       let milesAway: number = kilometersAway * this.milesPerKilometer;
       let hours: number = milesAway / this.speedMph;
       return hours / 24;
    }  
 }

// Create an instance of the class here:
let spaceShuttle = new Spacecraft('Determination', 17500);

// Print two outputs - one for the trip to Mars and one for the trip to the moon.
console.log(`${spaceShuttle.name} will take ${spaceShuttle.getDaysToLocation(kilometersToMars)} days to Mars`);
console.log(`${spaceShuttle.name} will take ${spaceShuttle.getDaysToLocation(kilometersToTheMoon)} days to Moon`);

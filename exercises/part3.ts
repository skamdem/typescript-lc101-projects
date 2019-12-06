// URL for the instructions: 
// https://education.launchcode.org/intro-to-professional-web-dev/chapters/typescript/exercises.html 

let spacecraftName: string = "Space Shuttle";
let speedMph: number = 17500;
let kilometersToMars: number = 225000000;
let kilometersToTheMoon: number = 384400;
let milesPerKilometer: number = 0.621;

// Code the "getDaysToLocation" function here:
function getDaysToLocation(kilometersAway : number): number {
    let milesAway : number = kilometersAway*milesPerKilometer;
    return milesAway /(speedMph*24);
}

// Call the function and print the outputs for the Mars trip and the moon trip:
console.log(`${spacecraftName} will take ${getDaysToLocation(kilometersToMars)} days to get to Mars.`);

console.log(`${spacecraftName} will take ${getDaysToLocation(kilometersToTheMoon)} days to get to Mars.`);
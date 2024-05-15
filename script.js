document.write("JavaScript works!");
const name = prompt("Welcome to GC mini golf! What is your name?");
let numOfHoles = prompt(`Hi, ${name}, Would you like to play 3 or 6 holes?`);
let numOfPuts = 0;
let validInput = true;

if (numOfHoles == 3 || numOfHoles == 6) {
    for (let i = 0; i < numOfHoles; i++) {
        let response = prompt(`How many puts for hole ${i+1} (par: 3)`);
        if (isNaN(response) || response.trim() === "") {
            alert("That was not a valid response. Please refresh the page to try again.");
            validInput = false;
            break;
        }
        numOfPuts += Number(response);
    }

    if (validInput) {
        if (numOfPuts > numOfHoles * 3) {
            console.log(`Nice try, ${name}... Your total par was: +${Math.abs((numOfHoles * 3) - numOfPuts)}.`);
        } else if (numOfPuts < numOfHoles * 3) {
            console.log(`Great job, ${name}! Your total par was: -${Math.abs((numOfHoles * 3) - numOfPuts)}.`);
        } else {
            console.log(`Good Game, ${name}. Your total par was: 0.`);
        }
    }
} else {
    alert("That was not a valid response. Please refresh the page to try again.");
}

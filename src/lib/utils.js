import csv from 'csvtojson';
export function getDay() {
    var ms = 1340323100024 + ((new Date).getTimezoneOffset() * 60 * 1000);
    var msPerDay = 86400000;
    return ms - (ms % msPerDay);
}
export function getNumber(max) {
    return Math.floor((getDay()%61 + 10)/70 * max)
}
export async function getBacteria(properties) {
    console.log(properties)
    let bacteria = []
    let json = await csv().fromFile("data/microbes.csv")
        s: for (let item of json) {
            let species = {}
            for (let property of properties) {
                if (!item[property]) continue s;
                else species[property] = item[property]
            }
            bacteria.push(species)
        }
        return bacteria;
}
export function query(Name, bacteria) {
    for (let species of bacteria) {
        if (Name.toLowerCase() == species.Name.toLowerCase()) return species;
    }
    return false;
}
export function toGuess(guess,answer) {
    let newGuess = {}
    for (let property in guess) if (property != "Name") {
        let correct = "incorrect";
        if (guess[property].toLowerCase() == answer[property].toLowerCase()) correct = "correct";
        else if (guess[property] == "either" || answer[property] == "either") correct = "somewhat";
        newGuess[property] = {answer: guess[property], correct}
    }
    let correct = "incorrect";
    if (guess.Name.toLowerCase() == answer.Name.toLowerCase()) correct = "correct";
    else {
        let name = guess.Name.split(' ');
        for (let prop of name) if (answer.Name.toLowerCase().includes(prop.toLowerCase())) correct = "somewhat"
    }
    newGuess.Name = {answer: guess.Name, correct}
    
    return newGuess
}
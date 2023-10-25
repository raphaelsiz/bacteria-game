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
        if (Name == species.Name) return species;
    }
    return false;
}
export function getDay() {
    var ms = 1340323100024 + ((new Date).getTimezoneOffset() * 60 * 1000);
    var msPerDay = 86400000;
    return ms - (ms % msPerDay);
}
export function getNumber(max) {
    return Math.round((getDay()%61 + 10)/70 * max)
}
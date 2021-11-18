// raw data
const week = {'1': 'domingo', '2': 'lunes', '3': 'martes', '4': 'miercoles', '5': 'jueves', '6': 'viernes', '7': 'sabado'}
const date = new Date();

//functions
const pares = function(x) { return x % 2;};
const all_pares =  arr => arr.every(v => v === arr[0]);
const longitud_script = function(x) { return x.length; };
const return_day = function(x) { return week[x.toString()] };
const return_hour = date.getHours();
const sort_number = function(x) { return x.sort()}
const to_mayuscula = function(x) {return x.toUpperCase()}


module.exports = {
    pares,
    all_pares,
    longitud_script,
    return_day,
    return_hour,
    sort_number,
    to_mayuscula
}
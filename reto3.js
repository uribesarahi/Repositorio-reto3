const today = new Date();
let day = today.getDate();
let hour = today.getHours();

function businessDay(day) {
    let diaHabil = "";
    diaHabil = (day == 6 || day == 0) ? false : true;
    return "Día hábil: " + diaHabil;
}

function businessHour(hour) {
    let horaHabil = "";
    horaHabil = (hour >= 9 && hour <18) ? true : false;
    return "Hora hábil: " + horaHabil;
}

console.log(businessDay(day));
console.log(businessHour(hour));
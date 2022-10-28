const color = ["#5f0e3f", "#114c5c", "#800c11", "#fa8a24", "#260a03", "#36bf98", "#0e4028", "#7d6563"];
                // plum,   ocean,     scarlet,   pumpkin,   coffee,    turquoise, pine,      mocha
var courses = [];

var week = 1;
var weekNumber = document.querySelector(".week--number");

/* Sets the header to the current week number */
function setWeekNumber() {
    let currentDate = new Date();
    let startDate = new Date(currentDate.getFullYear(), 0, 1);
    let days = Math.floor((currentDate - startDate) /
        (24 * 60 * 60 * 1000));
         
    week = Math.ceil(days / 7);
    weekNumber.innerHTML = `Veke ${week}`;
}

var date = 1;
var dateNumber = document.querySelector(".timetable-day__name");

function setWeekdayAndDate() {
    let day = ["Søndag", "Måndag", "Tysdag", "Onsdag", "Torsdag", "Fredag", "Laurdag"];
    let currentDate = new Date();
    let weekday = day[currentDate.getDay()];

    date = String(currentDate.getDate()).padStart(2, '0') + "/" + String(currentDate.getMonth()+1).padStart(2, '0');
    dateNumber.innerHTML = `${weekday} ${date}`;
}

/* Info about each row in the timetable */
/* Time, grid row number, number of lectures */
var timetableRow = [];

function fillTimetableRow() {
    const hour = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
    const minute = [0, 15, 30, 45];
    let row = 5;

    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 4; j++) {
            let time = String(hour[i]).padStart(2, '0') + ":" + String(minute[j]).padEnd(2, '0');
            timetableRow.push([time, row, 0]);
            row++;
        }
    }

    /* Hardcoding special case, because why not */
    timetableRow.push(["18:00", row, 0]);
}

const timetable = document.querySelector(".timetable");
const testBtn = document.querySelector("#testBtn");

/* const fetchAPI = async() => {
    fetch("")
} */

/* TODO: Function - When insertLecture,
increment number of lectures with 1 */

/* TODO: Function - Return an int of max numbers
of lectures in a time period to use in insertLecture method */

function insertLecture(courseCode, title, building, room, lecturer, startTime, endTime) {
    startTime = function();
    endTime = function(); */
    
    timetable.innerHTML += `
    <div class="timetable-day__event" style="grid-row: 38 / 45;
    background: goldenrod">
        <b>${courseCode}: ${title}</b><br>
        <u>${building} ${room}</u><br>
        ${lecturer}<br>
        ${startTime} - ${endTime}
    </div>`;
}

testBtn.addEventListener('click', () => {
    insertLecture("ISTA1003", "Forelesning", "Ankeret", "C220", "Siebe Bruno Van Albada", "16:15", "18:00");  
})

window.onload = function() {
    /* Set up variable */
    fillTimetableRow();
    setWeekNumber();
    setWeekdayAndDate();
}
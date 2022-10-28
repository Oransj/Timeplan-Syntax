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

/* Get the integer value that's in the same nested array
 * as the time value from the timetableRow array. */
function getGridRowFromTime(time) {
    let array = timetableRow.find(array => array[0] == time);

    return array[1];
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
    let startRow = getGridRowFromTime(startTime);
    let endRow = getGridRowFromTime(endTime);

    if (!courses.includes(courseCode)) {
        courses.push(courseCode);
    }

    let courseIndex = courses.indexOf(courseCode);
    if (courseIndex > color.length-1) {
        courseIndex = courseIndex % color.length-1;
    }
    
    timetable.innerHTML += `
    <div class="timetable-day__event" style="grid-row: ${startRow} / ${endRow};
    background: ${color[courseIndex % color.length]};
    height: calc(${endRow-startRow} * var(--row-height))">
        <b>${courseCode}: ${title}</b><br>
        <u>${building}: ${room}</u><br>
        ${lecturer}<br>
        ${startTime} - ${endTime}
    </div>`;
}

window.onload = function() {
    /* Set up variable */
    fillTimetableRow();
    setWeekNumber();
    setWeekdayAndDate();

    /* Insert lectures */
    insertLecture("IDATA2302", "Forelesning / Øving", "Ankeret", "D410", "Franck Chauvel", "08:15", "10:00");
    insertLecture("IDATA2302", "Forelesning / Øving", "Ankeret", "C220", "Franck Chauvel", "10:15", "12:00");
    insertLecture("IDATA2303", "Forelesning / Øving", "Ankeret", "Borgundfjorden", "Di Wu", "12:15", "16:00");
    insertLecture("ISTA1003", "Forelesning", "Ankeret", "C220", "Siebe Bruno Van Albada", "16:15", "18:00");
}
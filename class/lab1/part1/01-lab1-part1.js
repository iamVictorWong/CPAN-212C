const _ = require("lodash");

const holidays = [
    { name: "New Year’s Day", date: new Date("2025-01-01")},
    { name: "Family Day", date: new Date("2025-02-19")},
    { name: "Good Friday", date: new Date("2025-03-29")},
    { name: "Victoria Day", date: new Date("2025-05-20")},
    { name: "Canada Day", date: new Date("2025-09-02")},
    { name: "Christmas Day", date: new Date("2025-12-25")},
]

const today = new Date();

holidays.forEach(holiday => {
    console.log(holiday)
    console.log((holiday.date - today)/(1000*60*60*24))
});


const randomHoliday = _.sample(holidays);
console.log("This is a random holiday: " + randomHoliday.name + " on " + randomHoliday.date.toDateString());

const indexXmas = _.findIndex(holidays, holiday => holiday.name === "Christmas Day" );
console.log("Index of Christmas Day: " + indexXmas);

const indexCday = _.findIndex(holidays, holiday => holiday.name === "Canada Day" );
console.log("Index of Canada Day: " + indexCday);



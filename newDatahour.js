let today = new Date()
let day = today.getDay()
let allDay = ["Sunday", "Monday", "Tuesday", "Wednesday ", "Thursday", "Friday", "Saturday"]
let hour = today.getHours()
let minute = today.getMinutes()
let second = today.getSeconds()
let prepand
if (hour >= 12) {
    prepand = "PM"
} else {
    prepand = "AM"
}
if (hour >= 12) {
    hour - 12
} else {
    hour
}
if (hour === 0 && prepand === ' PM ') {
    if (minute === 0 && second === 0) {
        hour = 12;
    }
    else {
        hour = 12;
        prepand = ' PM';
    }
}
if (hour === 0 && prepand === ' AM ') {
    if (minute === 0 && second === 0) {
        hour = 12;
    }
    else {
        hour = 12;
        prepand = ' AM';
    }
} 
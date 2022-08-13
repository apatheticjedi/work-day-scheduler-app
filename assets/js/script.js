var now = moment().format("dddd, MMM Do YYYY");
var hour = moment().hour();

// display current day
$('#currentDay').text(now);

function checkTime() {
    if (hour > 8) {
        $('#eightA').addClass('past');
    } else if (hour === 8) {
        $('#eightA').addClass('present')
    } else {
        $('#eightA').addClass('future')
    };
 
    if (hour > 9) {
        $('#nineA').addClass('past');
    } else if (hour === 9) {
        $('#nineA').addClass('present')
    } else {
        $('#nineA').addClass('future')
    };

    if (hour > 10) {
        $('#tenA').addClass('past');
    } else if (hour === 10) {
        $('#tenA').addClass('present')
    } else {
        $('#tenA').addClass('future')
    };

    if (hour > 11) {
        $('#elevenA').addClass('past');
    } else if (hour === 11) {
        $('#elevenA').addClass('present')
    } else {
        $('#elevenA').addClass('future')
    };

    if (hour > 12) {
        $('#noon').addClass('past');
    } else if (hour === 12) {
        $('#noon').addClass('present')
    } else {
        $('#noon').addClass('future')
    };

    if (hour > 13) {
        $('#oneP').addClass('past');
    } else if (hour === 13) {
        $('#oneP').addClass('present')
    } else {
        $('#oneP').addClass('future')
    };

    if (hour > 14) {
        $('#twoP').addClass('past');
    } else if (hour === 14) {
        $('#twoP').addClass('present')
    } else {
        $('#twoP').addClass('future')
    };

    if (hour > 15) {
        $('#threeP').addClass('past');
    } else if (hour === 15) {
        $('#threeP').addClass('present')
    } else {
        $('#threeP').addClass('future')
    };

    if (hour > 16) {
        $('#fourP').addClass('past');
    } else if (hour === 16) {
        $('#fourP').addClass('present')
    } else {
        $('#fourP').addClass('future')
    };

    if (hour > 17) {
        $('#fiveP').addClass('past');
    } else if (hour === 17) {
        $('#fiveP').addClass('present')
    } else {
        $('#fiveP').addClass('future')
    };
};

setInterval(checkTime(), 300000);

checkTime();
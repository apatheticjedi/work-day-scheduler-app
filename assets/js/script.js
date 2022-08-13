var now = moment().format("dddd, MMM Do YYYY");
var hour = moment().hour();

// display current day
$('#currentDay').text(now);

// set description background color
function checkTime() {
    $(".description").each(function () {
        var id = $(this).attr("id");

        if (id == hour) {
            $(this).addClass("present");
        } else if (id < hour) {
            $(this).addClass("past");
        } else {
            $(this).addClass("future");
        }
    })
};

// save to localStorage
$(".saveBtn").click(function (e) {
    e.preventDefault();
    var toDo = $(this).siblings('.description')
        .val();
    var time = $(this).siblings('.description')
        .attr('id');

    localStorage.setItem(time, toDo);
});

// load from localStorage
function loadTasks() {
    for (let i = 8; i < 18; i++) {
        var toDo = localStorage.getItem(i);
        $("#" + i).val(toDo);
    }
};

// check time every 5 minutes
setInterval(checkTime, 300000);

checkTime();
loadTasks();
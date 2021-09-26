var rightNow= moment();
console.log(rightNow);
var displayDate = $('#currentDay')[0];
displayDate.innerHTML = rightNow.format('MMMM Do YYYY');

var currentHour = moment().format("h:mm:ss a");

var nine = $("#9");
var ten = $("#10");
var eleven = $("#11");
var twelve = $("#12");
var one = $("#13");
var two = $("#14");
var three = $("#15");
var four = $("#16");
var five = $("#17");

var userInput;
var hour = moment().hours();

var createtask = function () {

    //create task item in time-block
    var task9 = JSON.parse(localStorage.getItem("9AM"))
    nine.val(task9);

    var task10 = JSON.parse(localStorage.getItem("10AM"))
    ten.val(task10);

    var task11 = JSON.parse(localStorage.getItem("11AM"))
    eleven.val(task11);

    var task12 = JSON.parse(localStorage.getItem("12PM"))
    twelve.val(task12);

    var task1 = JSON.parse(localStorage.getItem("1PM"))
    one.val(task1);

    var task2 = JSON.parse(localStorage.getItem("2PM"))
    two.val(task2);

    var task3 = JSON.parse(localStorage.getItem("3PM"))
    three.val(task3);

    var task4 = JSON.parse(localStorage.getItem("4PM"))
    four.val(task4);

    var task5 = JSON.parse(localStorage.getItem("5PM"))
    five.val(task5);
};

var color = function () {
    $(".task").each(function(){
        var timeTest = parseInt($(this).attr("id"));
        hour = parseInt(hour);
        console.log(timeTest);
        console.log(hour);
        console.log(this);

        if(hour > timeTest) {
            $(this).addClass("past");
        }
        else if (hour < timeTest) {
            $(this).addClass("future");
        }
        else {
            $(this).addClass("present");
        }
    });
}

$(document).ready(function(){
    createtask()
    color()

    $(".saveBtn").on("click",function(){
        userInput = $(this).siblings(".task").val() .trim();
       
        hourDiv = $(this).siblings(".hour").text() .trim();
        
        localStorage.setItem(hourDiv, JSON.stringify(userInput));
    })
});
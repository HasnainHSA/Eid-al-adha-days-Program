//? First we get id of are tags by DOM

let Days = document.getElementById('days');
let Hours = document.getElementById('hours');
let Minutes = document.getElementById('minutes');
let Seconds = document.getElementById('seconds');

//TODO we make a function and get Date of today & eidday || get time of today & eidday 

function eid_remaining_days1() {
var today = new Date();
var eidday = new Date("July 10, 2022");
var hsToday = today.getTime();
var hseidtime = eidday.getTime();

//! And subtract both times
var Difference = hseidtime - hsToday;

//Calculation for Days
var dayDiff = Difference / (1000 * 60 * 60 * 24);
dayDiff = Math.floor(dayDiff);
Days.innerHTML=dayDiff;

//Calculation for Hours
var hourDiff = Difference / (1000 * 60 * 60);
hourDiff = Math.floor(hourDiff);
Hours.innerHTML=hourDiff

//Calculation for Minutes
var minutesDiff = Difference / (1000 * 60 );
minutesDiff = Math.floor(minutesDiff);
Minutes.innerHTML=minutesDiff

//Calculation for Seconds
var secondsDiff = Difference / (1000);
secondsDiff = Math.floor(secondsDiff);
Seconds.innerHTML=secondsDiff
}

//* for showing the time
setInterval( () => {
    eid_remaining_days1();
     },1000)



/*=================================================================
WE COPY THE UPPER FUNCTION AND CHANGE THE VARIABLE NAME ....THAT IT
==================================================================*/


     let Days2 = document.getElementById('days2');
     let Hours2 = document.getElementById('hours2');
     let Minutes2 = document.getElementById('minutes2');
     let Seconds2 = document.getElementById('seconds2');
     
     function eid_remaining_days2() {
     var today2 = new Date();
     var eidday2 = new Date("July 11, 2022");
     var hsToday2 = today2.getTime();
     var hseidtime2 = eidday2.getTime();
     var Difference2 = hseidtime2 - hsToday2;
     
     var dayDiff2 = Difference2 / (1000 * 60 * 60 * 24);
     dayDiff2 = Math.floor(dayDiff2);
     Days2.innerHTML=dayDiff2;
     
     var hourDiff2 = Difference2 / (1000 * 60 * 60);
     hourDiff2 = Math.floor(hourDiff2);
     Hours2.innerHTML=hourDiff2
     
     var minutesDiff2 = Difference2 / (1000 * 60 );
     minutesDiff2 = Math.floor(minutesDiff2);
     Minutes2.innerHTML=minutesDiff2
     
     var secondsDiff2 = Difference2 / (1000);
     secondsDiff2 = Math.floor(secondsDiff2);
     Seconds2.innerHTML=secondsDiff2
     }
     setInterval( () => {
         eid_remaining_days2();
          },1000)



/*=================================================================
WE COPY THE UPPER FUNCTION AND CHANGE THE VARIABLE NAME ....THAT IT
==================================================================*/


     let Days3 = document.getElementById('days3');
     let Hours3 = document.getElementById('hours3');
     let Minutes3 = document.getElementById('minutes3');
     let Seconds3 = document.getElementById('seconds3');
     
     function eid_remaining_days3() {
     var today3 = new Date();
     var eidday3 = new Date("July 12, 2022");
     var hsToday3 = today3.getTime();
     var hseidtime3 = eidday3.getTime();
     var Difference3 = hseidtime3 - hsToday3;
     
     var dayDiff3 = Difference3 / (1000 * 60 * 60 * 24);
     dayDiff3 = Math.floor(dayDiff3);
     Days3.innerHTML=dayDiff3;
     
     var hourDiff3 = Difference3 / (1000 * 60 * 60);
     hourDiff3 = Math.floor(hourDiff3);
     Hours3.innerHTML=hourDiff3
     
     var minutesDiff3 = Difference3 / (1000 * 60 );
     minutesDiff3 = Math.floor(minutesDiff3);
     Minutes3.innerHTML=minutesDiff3
     
     var secondsDiff3 = Difference3 / (1000);
     secondsDiff3 = Math.floor(secondsDiff3);
     Seconds3.innerHTML=secondsDiff3
     }
     setInterval( () => {
         eid_remaining_days3();
          },1000)





function returnFirstTwoDrivers(){
    const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
return drivers.slice(0,2)
}
function returnLastTwoDrivers(){
    const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
return drivers.slice(-2)
}
let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
selectingDrivers;

function createFareMultiplier(num){
    return function(number){
        return num*number
    }
}
function fareDoubler(num){
    return num*2
}
function fareTripler(num){
    return num*3
}
 function selectDifferentDrivers(drivers, returnFirstTwoDrivers){
    return returnFirstTwoDrivers(drivers);
 }

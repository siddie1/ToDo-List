//jshint esversion:6

module.exports = getDate;
function getDate(){ 
    var today = new Date(); //the name of the day
    
    var options={
        weekday:"long",
        day:"numeric",
        month :"long"
    }
    
    let day=today.toLocaleDateString("en-US",options);
    
    return day;
}
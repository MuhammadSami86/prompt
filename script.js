
// var city = prompt("which one city of light")
// if(city === "karachi"){
//     alert("welcome to city of light")
//     console.log("welcome to city of" + "  "+city);
    
// }else{
//     alert("please correc city")
//     console.log("your answer incorrect"+"  "+city);
    
// }

// var gender = prompt("Entr your gender male & female")
// if(gender === "male"){
//     alert("welcome to sir")
// }
// else if(gender === "female"){
//  alert("welcome to madam")
// }else{
//     alert("please enter your correct gender")
// }


var math = parseInt(prompt("enter your math Number"))
var english = parseInt(prompt("enter your english Number"))
var urdu =parseInt(prompt("enter your urdu Number"))

var total = math + english +urdu
var percentage = total/300*100;
var round = Math.round(percentage)
document.getElementById("result").innerHTML = "your total marks"+total
document.getElementById("percentage").innerHTML = "your percentage"+round+"%"
console.log(total);
console.log( percentage);


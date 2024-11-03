
var city = prompt("which one city of light")
if(city === "karachi"){
    alert("welcome to city of light")
    console.log("welcome to city of" + "  "+city);
    
}else{
    alert("please correc city")
    console.log("your answer incorrect"+"  "+city);
    
}

var gender = prompt("Entr your gender male & female")
if(gender === "male"){
    alert("welcome to sir")
}
else if(gender === "female"){
 alert("welcome to madam")
}else{
    alert("please enter your correct gender")
}


var math = parseInt(prompt("enter your math Number"))
var english = parseInt(prompt("enter your english Number"))
var urdu =parseInt(prompt("enter your urdu Number"))

var total = math + english +urdu
var percentage = total/300*100;
var round = Math.round(percentage)
// document.getElementById("result").innerHTML = "your total marks"+total
// document.getElementById("percentage").innerHTML = "your percentage"+round+"%"
console.log(total);
console.log( percentage);

var signal = prompt("enter your color,red ,green,yellow")
if(signal == "red"){
    alert("Must Stop")
}else if(signal == "yellow"){
    alert("Ready to move")
}else if(signal == "green"){
    alert("move Now")
}else("please enter your correct color")


var leter = prompt("enter your leter")
if (leter <= 0.25){
alert('please car fuel')
}else{
    alert("petrol ful he")
}

var guessNumber = prompt("enter your guess number 1 to 10")
if(guessNumber === "5"){
    alert(' correct guess  Number')
}else{
    alert('incorect answer')
}

var num = prompt("enter your number your value divide by 3") 
 var devide = num /3
alert("devide value "+devide);
 
var oddEven = prompt('enter your number')
if(oddEven %  2 === 0){
alert("even")
}else{
    alert("odd")
}

var Num1 = prompt("enter your 1stnumber")
var Num2 = prompt("enter your 2nd number")
var optr = prompt("enter your operater")
var result;
if(optr === "+"){
   result =  Num1 + Num2
}else if(optr === "-"){
    result = Num1 - Num2
}else if(optr === "*"){
    result =  Num1 * Num2
}else if(optr === "/"){
    result = Num1 / Num2
}
else{
   alert(" please enter your correct operater")
}
console.log(result);

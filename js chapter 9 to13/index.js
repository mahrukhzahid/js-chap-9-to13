//-----chapter 9 ---------//
//-----Question 1 -------//

var cityName = prompt("Enter the name of city /n write Karachi")
if(cityName !== "Karachi"){
    alert("welcome to the city of lights!")
}

//-------Question 2------//
var gender = prompt("Enter your gender/n male or female")
if (gender=="male"){
    alert("Good Morning Sir")
}else if(gender=="female"){
    alert("Good Morning Ma'am'")
}else{
    alert("Wrote incorrect")
}

//------Question 3-------//
var signalcolor = prompt("Enter the signal color from the given below /n Red /nYellow /n Green")
if (signalcolor=="red"){
    alert("Must Stop!")
}else if (signalcolor=="yellow"){
    alert("Ready to go")
}else if(signalcolor=="green"){
    alert("Move now")
}else {
alert("Wrote incorrect")
}

//-------Question 4 ------//
var remainingfuel = prompt ("Enter the remaining fuel inyour car(in liters)")
if (remainingfuel <=0.25){
    alert("please refill the fuel in your car!")
}else{
    alert("Do not to refill the fuel now!")
}

//-------Question 5 ------//
var a = 4;
if (++a === 5) {
    alert("Given condition for variable is true");
}


//-----------Question 6-------//
var b = 85;
if (++b === 86) {  // Yeh condition true hogi
    alert("Given condition for variable is true");
}

//-----------Question 7-------//

var c = 12;
if (c++ === 13) {
    alert("condition 1 is true");
} else {
    alert("condition 1 is false");
}
//-----------Question 8-------//
var c = 12;
if (c === 13) {
    alert("condition is 2 true");
}
//-----------Question 9-------//

var c = 12;
if (++c > 14) {
    alert("condition 3 is true");
} else {
    alert("condition 3 is false");
}

//-----------Question 10-------//
var c = 14;
if (c === 14) {
    alert("condition 4 is true");
}
//-----------Question 11-------//

if (true) {
    alert("true");
}
//-----------Question 12-------//
var materialcost = 20000;
var laborcost = 2000;
var totalcost = materialcost + laborcost;

if (totalcost === laborcost + materialcost) {
    alert("The cost equals");
}
//-----------Question 13-------//

var car = "car";
var cat = "cat";

if (car < cat) {
    alert("car is smaller than cat");
//-----------Question 14-------//
//.....................................calculations
let totalMarks = (subjects["english"] + subjects["maths"] + subjects["science"]);
let percent = (totalMarks / 300 * 100);
// ..................................grade
var grade;
var remarks;
if (percent >= 80) {
    grade = "A+"
    remarks = "Excellent"
}
    else if (percent >= 70) {
        grade = "A"
        remarks = "Good"
    }

    else if (percent >= 60) {
    grade = "B"
    remarks = "You need to improve"
}
else{
grade = "Fail"
remarks = "Sorry"
}

// ...................result





}
 //------------------IF ELSE STATEMENT-----------------//


 //---------QUESTION 1--------------//
 var greeting;
 var hour = 13;
 
 if (hour < 18) {
     greeting = "Good day";
 } else {
     greeting = "Good evening";
 }
 
 















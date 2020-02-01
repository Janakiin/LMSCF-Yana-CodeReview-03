/*Pressing the "calculate" button, user should get the result of calculateInsurance function 
with 4 parameters. 
1)two of them we can easily get from an event listener;
2) other two we shall get depending of a chosen country using if statement,
where the calculateInsurance function should be called with respective parameters;
3) How to know which coutry is selected? 
<select> has the value of selected element, so I don`t need to iterate. I just need to grab
this value; All of this should be done inside mainFun function, so the code is running
after pressing the button only;
4) and think about proper for js order and styling the results in the page;
5) all number vakues should be converted from strings to numbers;
6) and there should be an if statement, which should regulate the output text according in case
of some fields aren`t filled;`
*/

//connect the button with mainFun-function
document.getElementById("calculate").addEventListener('click', mainFun, false);     

function mainFun(){
var insurance = 0;
var result = 0;
var horsePower = horsePower = Number(document.getElementById("horsepower").value);
var age = Number(document.getElementById("age").value);
var name = document.getElementById("userName").value;
var country = document.getElementById("country").value;

function calculateInsurancePerCountry(){

	if (country === "Austria"){
		 var insurance = horsePower * 100 / age + 50;
	} else if (country === "Hungary") {
		 var insurance = horsePower * 120 / age + 100;
	} else if (country === "Greece") {
		var ag = age + 3;
		var insurance = Math.floor(horsePower * 150 / (ag+3) + 50);
	}
	insurance = insurance;
	return insurance;
}


result = calculateInsurancePerCountry();
console.log(result)

if ( name !== "" && horsePower !=0 | age !=0) {	
document.getElementById("output").innerHTML = `<p style=\"color:green\">${name}, 
	your insurance costs ${result} &euro;</p>`;
} else if (name === "" && horsePower !=0 | age !=0) {
	document.getElementById("output").innerHTML = `<p style=\"color:green\"> 
	Your insurance costs ${result} &euro;</p>`;
} else {	
	document.getElementById("output").innerHTML = `<p style=\"color:green\">Please, fill all of the fields above</p>`;
}
}	



  

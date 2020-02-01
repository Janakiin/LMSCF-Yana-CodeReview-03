/*Pressing the "calculate" button, user should get the result of calculateInsurance function 
with 4 parameters. 
1)two of them we can easily get from an event listener;
2) other two we shall get depending of a chosen country using switch statement,
where the calculateInsurance function should be called with respective parameters;
3) How to know which coutry is selected? 
<select> has the value of selected element, so I don`t need to iterate. I just need to grab
this value; All of this should be done inside mainFun function, so the code is running
after pressing the button only;
4) and think about proper for js order and styling the results in the page;
5) as in Greece we should count age+3, we should avoid the concatination of "3" with age-string;
6) and there should be an if statement, which should not bother the calculateInsurance function
without user`s arguments;
*/

//connect the button with mainFun-function
document.getElementById("calculate").addEventListener('click', mainFun, false);     

//user presses the button and activate this function
function mainFun(){
	//getting parameters for calculateInsurance-function and so on:

	var horsePower = document.getElementById("horsepower").value;
	var a = document.getElementById("age").value;
	var age = Number(a);
	var name = document.getElementById("userName").value;

	//getting num and num2

	var country = document.getElementById("country").value;
	var ae = 0;

	switch(true) {
		case (country === "Austria"):
		calculateInsurance(horsePower, 100, age, 50);
		break;

		case (country === "Hungary"):
		calculateInsurance(horsePower, 120, age, 100);
		break;

		case(country === "Greece"):
		ae = age+3;
		calculateInsurance(horsePower, 150, ae, 50)
	}
}

//and this is the main mission of calculate-button

var insurance = 0;

function calculateInsurance(hp, num, ag, num2){
	//console.log(ag)
	insurance = Math.floor(hp * num / ag   + num2);
	var name = document.getElementById("userName").value;
	document.getElementById("output").innerHTML = `<p style=\"color:green\">${name}, 
	your insurance costs ${insurance} &euro;</p`;
	
	//if-statement for lazy users
	if (hp == 0 | ag == 0) {
		console.log("Don`t be lazy, dear User! :)");
		document.getElementById("output").innerHTML = "Please, fill the empty fields";
	}
} 


  

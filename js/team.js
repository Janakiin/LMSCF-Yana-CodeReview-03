//geting Jason`s data
var dataBasy = JSON.parse(team);

//inserting images
document.getElementById("photo").innerHTML += `<img src=\"${dataBasy[0].photo}\" width=300 alt=\"photo\">`;

//inserting texts

document.getElementById("nameSurname").innerHTML += dataBasy[0].firstName + " " + dataBasy[0].lastName;
document.getElementById("job").innerHTML += dataBasy[0].jobTitle; 
document.getElementById("learnMore").addEventListener('click', writer, false)

function writer(){
	document.getElementById("hidingInfo").innerHTML += `<b><p> E-mail: ${dataBasy[0].email}</p></b><br>`;
	document.getElementById("hidingInfo").innerHTML += `<center><b><p>About Mr. ${dataBasy[0].firstName}</p></b></center>`;
	document.getElementById("hidingInfo").innerHTML += `<p>${dataBasy[0].bio}</p><a href=\"#\" class=\"close\" id=\"closeA\">Close info</a>`;
	document.getElementById("closeA").addEventListener('click', closy, false)

}

function closy(){
	document.getElementById("hidingInfo").innerHTML ="";
}

//second one

document.getElementById("photo1").innerHTML += `<img src=\"${dataBasy[1].photo}\" width=300 alt=\"photo\">`;
document.getElementById("nameSurname1").innerHTML += dataBasy[1].firstName + " " + dataBasy[1].lastName;
document.getElementById("job1").innerHTML += dataBasy[1].jobTitle; 
document.getElementById("learnMore1").addEventListener('click', writer1, false)

function writer1(){
	document.getElementById("hidingInfo1").innerHTML += `<b><p> E-mail: ${dataBasy[1].email}</p></b><br>`;
	document.getElementById("hidingInfo1").innerHTML += `<center><b><p>About Mr. ${dataBasy[1].firstName}</p></b></center>`;
	document.getElementById("hidingInfo1").innerHTML += `<p>${dataBasy[1].bio}</p><a href=\"#\" class=\"close\" id=\"closeA\">Close info</a>`;
	document.getElementById("closeA").addEventListener('click', closy, false)
}
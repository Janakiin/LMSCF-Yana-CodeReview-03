//geting Jason`s data
var dataBasy = JSON.parse(team);
console.log(dataBasy)

//First one. Inserting images
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
	document.getElementById("closeA").addEventListener('click', closy1, false)
}

function closy1(){
	document.getElementById("hidingInfo1").innerHTML ="";
}

//third one

document.getElementById("photo2").innerHTML += `<img src=\"${dataBasy[2].photo}\" width=300 alt=\"photo\">`;
document.getElementById("nameSurname2").innerHTML += dataBasy[2].firstName + " " + dataBasy[2].lastName;
document.getElementById("job2").innerHTML += dataBasy[2].jobTitle; 
document.getElementById("learnMore2").addEventListener('click', writer2, false);

function writer2(){
	document.getElementById("hidingInfo2").innerHTML += `<b><p> E-mail: ${dataBasy[2].email}</p></b><br>`;
	document.getElementById("hidingInfo2").innerHTML += `<center><b><p>About Mr. ${dataBasy[2].firstName}</p></b></center>`;
	document.getElementById("hidingInfo2").innerHTML += `<p>${dataBasy[2].bio}</p><a href=\"#\" class=\"close\" id=\"closeA\">Close info</a>`;
	document.getElementById("closeA").addEventListener('click', closy2, false);
}
function closy2(){
	document.getElementById("hidingInfo2").innerHTML ="";
}


function closy3(){
	document.getElementById("hidingInfo3").innerHTML ="";
}

//forth one

document.getElementById("photo3").innerHTML += `<img src=\"${dataBasy[3].photo}\" width=300 height=200 alt=\"photo\">`;
document.getElementById("nameSurname3").innerHTML += dataBasy[3].firstName + " " + dataBasy[3].lastName;
document.getElementById("job3").innerHTML += dataBasy[3].jobTitle; 
document.getElementById("learnMore3").addEventListener('click', writer3, false);

function writer3(){
	document.getElementById("hidingInfo3").innerHTML += `<b><p> E-mail: ${dataBasy[3].email}</p></b><br>`;
	document.getElementById("hidingInfo3").innerHTML += `<center><b><p>About Mr. ${dataBasy[3].firstName}</p></b></center>`;
	document.getElementById("hidingInfo3").innerHTML += `<p>${dataBasy[3].bio}</p><a href=\"#\" class=\"close\" id=\"closeA\">Close info</a>`;
	document.getElementById("closeA").addEventListener('click', closy3, false);
}

function closy4(){
	document.getElementById("hidingInfo4").innerHTML ="";
}

//fifth one

document.getElementById("photo4").innerHTML += `<img src=\"${dataBasy[4].photo}\" width=300 alt=\"photo\">`;
document.getElementById("nameSurname4").innerHTML += dataBasy[4].firstName + " " + dataBasy[4].lastName;
document.getElementById("job4").innerHTML += dataBasy[4].jobTitle; 
document.getElementById("learnMore4").addEventListener('click', writer4, false);

function writer4(){
	document.getElementById("hidingInfo4").innerHTML += `<b><p> E-mail: ${dataBasy[4].email}</p></b><br>`;
	document.getElementById("hidingInfo4").innerHTML += `<center><b><p>About Mr. ${dataBasy[4].firstName}</p></b></center>`;
	document.getElementById("hidingInfo4").innerHTML += `<p>${dataBasy[4].bio}</p><a href=\"#\" class=\"close\" id=\"closeA\">Close info</a>`;
	document.getElementById("closeA").addEventListener('click', closy4, false);
}




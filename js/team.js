//geting Jason`s data
var dataBasy = JSON.parse(team);

//inserting images
document.getElementById("photo").innerHTML += `<img src=\"${dataBasy[0].photo}\" width=300 alt=\"photo\">`;

//document.getElementById("photo").innerHTML += `<img src=\"${dataBasy[1].photo}\" width=300 alt=\"photo\">`;

//inserting texts

document.getElementById("nameSurname").innerHTML += dataBasy[0].firstName + " " + dataBasy[0].lastName;
document.getElementById("job").innerHTML += dataBasy[0].jobTitle; 
document.getElementById("learnMore").addEventListener('click', writer, false)

function writer(){
	document.getElementById("hidingInfo").innerHTML += `<b><p> E-mail: ${dataBasy[0].email}</p></b><br>`;
	document.getElementById("hidingInfo").innerHTML += `<center><b><p>About Mr. ${dataBasy[0].firstName}</p></b></center>`;
	document.getElementById("hidingInfo").innerHTML += `<p>${dataBasy[0].bio}</p>`;
}